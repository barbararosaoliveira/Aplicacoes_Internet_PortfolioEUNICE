// Formulário "Share your experience" (Bárbara e Beatriz): o único componente React do site, na página
// share-your-experience.html.
// Usa o React 16 local (js/vendor), sem JSX: os elementos são criados com React.createElement.
// Os testemunhos ficam guardados no localStorage do navegador (não há servidor).
// Precisa do js/dados.js (atividades, competencias, universidades) e da variável raizDoSite.
//
// Etapas (ver o plano):
//   F1 (Bárbara)   a página, o componente com os 7 campos controlados, a gravação no localStorage, a lista
//                  dos testemunhos e a atividade vinda do sessionStorage   <- feito
//   F2 (Beatriz)   validação e acessibilidade (erros, aria-invalid, aria-describedby, foco, contador e
//                  mensagem de sucesso) e o CSS do formulário e da lista (só no estilos.css)
//   F3 (Beatriz e Bárbara)   testes e correções
//
// As competências são botões que se ligam e desligam (como os filtros) e o consentimento é uma lista
// "Yes"/"No".

var h = React.createElement;

var CHAVE_TESTEMUNHOS = "eunice-portfolio-testimonials";
var CHAVE_ATIVIDADE_ESCOLHIDA = "eunice-portfolio-activity";
var MAXIMO_TEXTO = 600;

function procurarAtividade(id) {
    for (var i = 0; i < atividades.length; i++) {
        if (atividades[i].id === id) {
            return atividades[i];
        }
    }
    return null;
}

// Data de hoje no formato AAAA-MM-DD.
function dataDeHoje() {
    var hoje = new Date();
    var mes = hoje.getMonth() + 1;
    var dia = hoje.getDate();
    return hoje.getFullYear() + "-" + (mes < 10 ? "0" + mes : mes) + "-" + (dia < 10 ? "0" + dia : dia);
}

// Um testemunho lido do localStorage só se usa se tiver todos os campos com o tipo certo.
function testemunhoValido(t) {
    if (t === null || typeof t !== "object") {
        return false;
    }
    if (typeof t.id !== "number" || typeof t.activityId !== "number" || typeof t.name !== "string" ||
        typeof t.university !== "string" || typeof t.rating !== "number" || typeof t.text !== "string" ||
        typeof t.date !== "string") {
        return false;
    }
    if (t.competences === null || typeof t.competences !== "object" || typeof t.competences.length !== "number") {
        return false;
    }
    for (var i = 0; i < t.competences.length; i++) {
        if (typeof t.competences[i] !== "string") {
            return false;
        }
    }
    return true;
}

// Lê os testemunhos guardados. Se o texto guardado estiver estragado, o JSON.parse dá erro dentro da
// Promise, e ela é rejeitada (catch) em vez de o erro parar a página.
function lerTestemunhos() {
    return new Promise(function (resolve) {
        var texto = localStorage.getItem(CHAVE_TESTEMUNHOS);
        var guardados = texto === null ? [] : JSON.parse(texto);
        var lista = [];
        if (guardados !== null && typeof guardados === "object" && typeof guardados.length === "number") {
            for (var i = 0; i < guardados.length; i++) {
                if (testemunhoValido(guardados[i])) {
                    lista.push(guardados[i]);
                }
            }
        }
        resolve(lista);
    });
}

function gravarTestemunhos(lista) {
    localStorage.setItem(CHAVE_TESTEMUNHOS, JSON.stringify(lista));
}

class ShareExperienceForm extends React.Component {
    constructor(props) {
        super(props);
        var estado = this.estadoVazio();
        estado.testemunhos = []; // os testemunhos guardados, do mais recente para o mais antigo
        estado.mensagem = "";    // F2: "Thank you! Your testimonial was saved."
        this.state = estado;
        this.alterar = this.alterar.bind(this);
        this.alternarCompetencia = this.alternarCompetencia.bind(this);
        this.enviar = this.enviar.bind(this);
        this.remover = this.remover.bind(this);
    }

    // Valores do formulário vazio (no início e depois de enviar).
    estadoVazio() {
        return {
            atividade: "",      // id da atividade, em texto ("" = nenhuma)
            nome: "",
            universidade: "",
            avaliacao: 3,       // de 1 a 5
            competencias: [],   // nomes das competências escolhidas
            texto: "",
            consentimento: "",  // "", "yes" ou "no"
            erros: {}           // F2: uma mensagem por campo com erro
        };
    }

    // Ao arrancar: a atividade que uma página de atividade deixou escolhida e os testemunhos guardados.
    componentDidMount() {
        var self = this;

        var escolhida = sessionStorage.getItem(CHAVE_ATIVIDADE_ESCOLHIDA);
        if (escolhida !== null) {
            sessionStorage.removeItem(CHAVE_ATIVIDADE_ESCOLHIDA);
            var atividade = procurarAtividade(parseInt(escolhida, 10));
            if (atividade !== null && atividade.jaAconteceu) {
                this.setState({ atividade: atividade.id.toString() });
            }
        }

        lerTestemunhos()
            .then(function (lista) {
                self.setState({ testemunhos: lista });
            })
            .catch(function () {
                // Dados estragados: começa sem testemunhos, e o próximo que for enviado grava por cima.
                self.setState({ testemunhos: [] });
            });
    }

    // Campos controlados: o valor vem do estado, e cada alteração volta ao estado.
    // O "name" de cada campo é o nome da sua chave no estado.
    alterar(evento) {
        var campo = evento.target.name;
        var alteracao = {};
        alteracao[campo] = campo === "avaliacao" ? parseInt(evento.target.value, 10) : evento.target.value;
        this.setState(alteracao);
    }

    // Liga ou desliga uma competência.
    alternarCompetencia(nome) {
        var lista = [];
        var estava = false;
        for (var i = 0; i < this.state.competencias.length; i++) {
            if (this.state.competencias[i] === nome) {
                estava = true;
            } else {
                lista.push(this.state.competencias[i]);
            }
        }
        if (!estava) {
            lista.push(nome);
        }
        this.setState({ competencias: lista });
    }

    // Grava o testemunho e limpa o formulário. Por agora grava sem validar: a validação entra na F2.
    enviar(evento) {
        evento.preventDefault();
        var estado = this.state;

        var novo = {
            id: Date.now(),
            activityId: estado.atividade === "" ? 0 : parseInt(estado.atividade, 10), // 0 = nenhuma
            name: estado.nome.trim(),
            university: estado.universidade,
            rating: estado.avaliacao,
            competences: estado.competencias,
            text: estado.texto.trim(),
            date: dataDeHoje()
        };

        // O mais recente fica em primeiro.
        var lista = [novo];
        for (var i = 0; i < estado.testemunhos.length; i++) {
            lista.push(estado.testemunhos[i]);
        }
        gravarTestemunhos(lista);

        var vazio = this.estadoVazio();
        vazio.testemunhos = lista;
        this.setState(vazio);
    }

    // Apaga só o testemunho com este id.
    remover(id) {
        var lista = [];
        for (var i = 0; i < this.state.testemunhos.length; i++) {
            if (this.state.testemunhos[i].id !== id) {
                lista.push(this.state.testemunhos[i]);
            }
        }
        gravarTestemunhos(lista);
        this.setState({ testemunhos: lista });
    }

    etiqueta(texto, idCampo) {
        return h("label", { className: "form-label", htmlFor: idCampo },
            texto + " ", h("span", { className: "form-required" }, "(required)"));
    }

    renderFormulario() {
        var self = this;
        var estado = this.state;

        // Só as atividades que já aconteceram.
        var opcoesAtividades = [h("option", { key: "nenhuma", value: "" }, "Choose an activity")];
        for (var i = 0; i < atividades.length; i++) {
            if (atividades[i].jaAconteceu) {
                opcoesAtividades.push(h("option", { key: atividades[i].id, value: atividades[i].id.toString() },
                    atividades[i].titulo));
            }
        }

        var opcoesUniversidades = [h("option", { key: "nenhuma", value: "" }, "Choose your university")];
        for (var u = 0; u < universidades.length; u++) {
            opcoesUniversidades.push(h("option", { key: universidades[u], value: universidades[u] }, universidades[u]));
        }
        opcoesUniversidades.push(h("option", { key: "other", value: "Other" }, "Other"));

        var botoesCompetencias = competencias.map(function (competencia, posicao) {
            var escolhida = false;
            for (var c = 0; c < estado.competencias.length; c++) {
                if (estado.competencias[c] === competencia.nome) {
                    escolhida = true;
                }
            }
            return h("button", {
                key: competencia.nome,
                type: "button",
                id: "competence-option-" + posicao,
                className: escolhida ? "chip active" : "chip",
                "aria-pressed": escolhida ? "true" : "false",
                onClick: function () {
                    self.alternarCompetencia(competencia.nome);
                }
            }, competencia.nome);
        });

        return h("form", { className: "share-form", onSubmit: this.enviar },
            h("h2", { className: "share-subtitle" }, "Send a testimonial"),

            // 1. Activity
            h("div", { className: "form-field" },
                this.etiqueta("Activity", "field-activity"),
                h("select", {
                    id: "field-activity", name: "atividade", className: "form-select",
                    value: estado.atividade, onChange: this.alterar
                }, opcoesAtividades)),

            // 2. Name
            h("div", { className: "form-field" },
                this.etiqueta("Name", "field-name"),
                h("input", {
                    type: "text", id: "field-name", name: "nome", className: "form-input",
                    maxLength: 60, autoComplete: "name",
                    value: estado.nome, onChange: this.alterar
                })),

            // 3. University
            h("div", { className: "form-field" },
                this.etiqueta("University", "field-university"),
                h("select", {
                    id: "field-university", name: "universidade", className: "form-select",
                    value: estado.universidade, onChange: this.alterar
                }, opcoesUniversidades)),

            // 4. Rating (sempre válido, começa em 3)
            h("div", { className: "form-field" },
                h("label", { className: "form-label", htmlFor: "field-rating" }, "How would you rate this activity?"),
                h("div", { className: "form-range-row" },
                    h("input", {
                        type: "range", id: "field-rating", name: "avaliacao", className: "form-range",
                        min: 1, max: 5, step: 1,
                        value: estado.avaliacao, onChange: this.alterar
                    }),
                    h("span", { className: "form-range-value" }, estado.avaliacao + " / 5"))),

            // 5. Competences developed
            h("fieldset", { className: "form-field" },
                h("legend", { className: "form-label" },
                    "Competences developed ", h("span", { className: "form-required" }, "(required)")),
                botoesCompetencias),

            // 6. Your experience
            h("div", { className: "form-field" },
                this.etiqueta("Your experience", "field-text"),
                h("textarea", {
                    id: "field-text", name: "texto", className: "form-textarea",
                    maxLength: MAXIMO_TEXTO,
                    value: estado.texto, onChange: this.alterar
                })),

            // 7. Consent
            h("div", { className: "form-field" },
                this.etiqueta("Can we show your testimonial on this site?", "field-consent"),
                h("select", {
                    id: "field-consent", name: "consentimento", className: "form-select",
                    value: estado.consentimento, onChange: this.alterar
                },
                    h("option", { value: "" }, "Choose an answer"),
                    h("option", { value: "yes" }, "Yes, I agree that my testimonial may be shown on this site."),
                    h("option", { value: "no" }, "No"))),

            h("button", { type: "submit", className: "form-submit" }, "Send testimonial"));
    }

    // Um testemunho da lista: atividade (ligação para a página dela), nota, nome, universidade, data, texto,
    // competências e o botão "Remove". O React escreve sempre o que as pessoas escreveram como texto.
    renderTestemunho(t) {
        var self = this;
        var atividade = procurarAtividade(t.activityId);
        var titulo = atividade !== null ? atividade.titulo : "EUNICE activity";

        var etiquetas = [];
        for (var i = 0; i < t.competences.length; i++) {
            etiquetas.push(h("li", { key: t.competences[i], className: "activity-type" }, t.competences[i]));
        }

        return h("li", { key: t.id, className: "testimonial" },
            h("h3", { className: "testimonial-title" },
                atividade !== null ? h("a", { href: raizDoSite + atividade.pagina }, titulo) : titulo),
            h("p", { className: "testimonial-meta" },
                "Rating: " + t.rating + " out of 5 · " + t.name + ", " + t.university + " · " + t.date),
            h("p", { className: "testimonial-text" }, t.text),
            etiquetas.length > 0
                ? h("ul", { className: "activity-types", "aria-label": "Competences developed" }, etiquetas)
                : null,
            h("button", {
                type: "button",
                className: "testimonial-remove",
                "aria-label": "Remove the testimonial by " + t.name + " about " + titulo,
                onClick: function () {
                    self.remover(t.id);
                }
            }, "Remove"));
    }

    // Duas colunas: o formulário e a lista dos testemunhos (o CSS entra na F2).
    render() {
        var self = this;
        var testemunhos = this.state.testemunhos;

        return h("div", { className: "share-layout" },
            h("div", { className: "share-form-column" }, this.renderFormulario()),
            h("div", { className: "share-list-column" },
                h("h2", { className: "share-subtitle" }, "Testimonials"),
                testemunhos.length === 0
                    ? h("p", { className: "testimonials-empty" }, "No testimonials yet. Be the first to share your experience.")
                    : h("ul", { className: "testimonials-list" }, testemunhos.map(function (t) {
                        return self.renderTestemunho(t);
                    }))));
    }
}

ReactDOM.render(h(ShareExperienceForm), document.getElementById("formulario-testemunhos"));
