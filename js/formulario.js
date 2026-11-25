// Formulário "Share your experience" (Bárbara e Beatriz): o único componente React do site, na página
// share-your-experience.html.
// Usa o React 16 local (js/vendor), sem JSX: os elementos são criados com React.createElement.
// Precisa do js/dados.js (atividades, competencias, universidades).
//
// Etapas (ver o plano):
//   F1 (Bárbara)  a página, a classe, o estado e os 7 campos controlados   <- feito
//   F2 (Beatriz)  validação e acessibilidade (erros, aria-invalid, aria-describedby, foco, contador)
//   F3 (Bárbara)  gravar no localStorage, a lista dos testemunhos e a atividade vinda do sessionStorage
//   F4 (Beatriz)  CSS do formulário e da lista (só no estilos.css)
//
// As caixas de seleção ainda estão por confirmar com o docente, por isso as competências são botões que se
// ligam e desligam (como os filtros) e o consentimento é uma lista "Yes"/"No" (ver o CLAUDE.md).

var h = React.createElement;

var MAXIMO_TEXTO = 600;

class ShareExperienceForm extends React.Component {
    constructor(props) {
        super(props);
        var estado = this.estadoVazio();
        estado.testemunhos = []; // F3: os testemunhos guardados no localStorage
        estado.mensagem = "";    // F3: "Thank you! Your testimonial was saved."
        this.state = estado;
        this.alterar = this.alterar.bind(this);
        this.alternarCompetencia = this.alternarCompetencia.bind(this);
        this.enviar = this.enviar.bind(this);
    }

    // Valores do formulário vazio (no início e, a partir da F3, depois de enviar).
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

    // Por agora só impede o navegador de recarregar a página.
    // F2: validar os campos. F3: gravar o testemunho.
    enviar(evento) {
        evento.preventDefault();
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

    render() {
        // F3: a segunda coluna, com a lista dos testemunhos.
        return h("div", { className: "share-layout" },
            h("div", { className: "share-form-column" }, this.renderFormulario()));
    }
}

ReactDOM.render(h(ShareExperienceForm), document.getElementById("formulario-testemunhos"));
