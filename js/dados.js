// Dados do EUNICE Portfolio, usados pela pesquisa, pelos filtros, pelo slideshow e pelo formulário.
// Os textos das atividades estão também escritos no HTML (para os web crawlers): este ficheiro só tem
// o que o JavaScript precisa. Os caminhos são relativos à raiz do site.

// Temas (filtro "Theme"), pela ordem do site original.
var categorias = [
  "Sports & Health",
  "Social Impact & Volunteering",
  "Culture & Arts",
  "European Values & Inclusion"
];

// Anos (filtro "Year").
var anos = [
  "2023",
  "2024",
  "2025",
  "2026"
];

// As 8 competências-chave, pela ordem do site original.
var competencias = [
  {
    "nome": "Cognitive flexibility",
    "descricao": "The broad range of abilities that enable individuals to adapt to, and act effectively in, new or unexpected situations, to bring problem-solving abilities to bear and to find creative solutions.",
    "pagina": "competencies.html#competence-0"
  },
  {
    "nome": "Communication",
    "descricao": "The ability to convey both verbal and written information clearly between individuals and groups and to adapt formats and contents to different audiences and purposes.",
    "pagina": "competencies.html#competence-1"
  },
  {
    "nome": "Digital competence",
    "descricao": "The ability to use digital technologies critically and responsibly for learning and work. This could range from data visualisation and basic programming skills to data engineering, understanding and writing algorithms, and analysing large data sets.",
    "pagina": "competencies.html#competence-2"
  },
  {
    "nome": "Global intercultural competence",
    "descricao": "This encompasses foreign language skills, the knowledge required to understand how global society functions, the ability to interact effectively and appropriately with people from different cultural backgrounds, and also to collaborate with them to find solutions to global problems.",
    "pagina": "competencies.html#competence-3"
  },
  {
    "nome": "Problem solving",
    "descricao": "The ability to identify and define problems, generate solutions, evaluate the options and to implement the chosen solution.",
    "pagina": "competencies.html#competence-4"
  },
  {
    "nome": "Self-management",
    "descricao": "The ability to organise and carry out activities without direct supervision, to be able to take responsibility, to set priorities independently and to act strategically and ethically.",
    "pagina": "competencies.html#competence-5"
  },
  {
    "nome": "Teamworking",
    "descricao": "The interrelated abilities that help individuals cooperate effectively in group settings, including emotional intelligence, communication and negotiation skills.",
    "pagina": "competencies.html#competence-6"
  },
  {
    "nome": "Technical competence",
    "descricao": "This could include specialised and sectoral expertise (i.e. knowledge and methodologies required in a specific profession), as well as the practical ability to use and handle technical equipment.",
    "pagina": "competencies.html#competence-7"
  }
];

// Universidades da aliança EUNICE que aparecem no site (lista do formulário).
var universidades = [
  "Brandenburg University of Technology Cottbus–Senftenberg (BTU)",
  "Karlstad University (KAU)",
  "Polytechnic University of Viseu (UPV)",
  "Poznan University of Technology (PUT)",
  "Université Polytechnique Hauts-de-France (UPHF)",
  "University of Cantabria (UC)",
  "University of Catania (UNICT)",
  "University of Mons (UMONS)",
  "University of the Peloponnese (UoP)"
];

// Páginas que a pesquisa global também encontra.
var paginas = [
  {
    "titulo": "Home",
    "detalhe": "EUNICE Portfolio",
    "pagina": "index.html",
    "palavras": "home eunice portfolio european university alliance partner universities student activities achievements competencies 2023 2026"
  },
  {
    "titulo": "Activities",
    "detalhe": "Archive of EUNICE student activities",
    "pagina": "index.html#activities",
    "palavras": "page activities experiences archive online hybrid in-person filters search categories dates locations results"
  },
  {
    "titulo": "Key Competencies",
    "detalhe": "Skills developed through EUNICE activities",
    "pagina": "competencies.html",
    "palavras": "page key competences competencies skills abilities cognitive flexibility communication digital competence global intercultural competence problem solving self-management teamworking technical competence"
  },
  {
    "titulo": "Share your experience",
    "detalhe": "Testimonials from EUNICE students",
    "pagina": "share-your-experience.html",
    "palavras": "share experience testimonial testimonials form opinion review rating"
  }
];

// As 26 atividades. "jaAconteceu" decide se aparece no formulário; "slideshow" são as imagens do cartão.
var atividades = [
  {
    "id": 1,
    "titulo": "EUNICE Week",
    "pagina": "activities/eunice-week.html",
    "data": "November 2023",
    "local": "All EUNICE partner universities",
    "formato": "Hybrid",
    "categorias": [
      "Culture & Arts",
      "European Values & Inclusion",
      "Social Impact & Volunteering"
    ],
    "competencias": [
      "Cognitive flexibility",
      "Problem solving",
      "Technical competence"
    ],
    "descricao": "A Europe-wide EUNICE festival bringing students and university communities together through cultural, academic and sporting activities, promoting European identity, multilingualism and mobility.",
    "jaAconteceu": true,
    "slideshow": [
      "img/activities/eunice-week-card.jpg",
      "img/gallery/culture-and-arts-1-card-portrait.jpg",
      "img/gallery/culture-and-arts-2-card-portrait.jpg",
      "img/gallery/culture-and-arts-3-card-portrait.jpg",
      "img/gallery/culture-and-arts-4-card-portrait.jpg"
    ]
  },
  {
    "id": 2,
    "titulo": "E-Chess Tournament – Alliance Games 2023",
    "pagina": "activities/e-chess-alliance-games-2023.html",
    "data": "November 2023",
    "local": "Online (organised by UMONS, Mons, Belgium)",
    "formato": "Online",
    "categorias": [
      "Sports & Health"
    ],
    "competencias": [
      "Communication",
      "Global intercultural competence",
      "Teamworking"
    ],
    "descricao": "An online Swiss-format chess tournament organised by the University of Mons during EUNICE Weeks 2023, bringing together students and staff from EUNICE partner universities.",
    "jaAconteceu": true,
    "slideshow": [
      "img/activities/e-chess-alliance-games-2023-card.jpg",
      "img/gallery/sports-and-health-1-card-landscape.jpg",
      "img/gallery/sports-and-health-2-card-landscape.jpg",
      "img/gallery/sports-and-health-3-card-landscape.jpg",
      "img/gallery/sports-and-health-4-card-landscape.jpg"
    ]
  },
  {
    "id": 3,
    "titulo": "Virtual Escape Room – Code Europa: The Disruptor Dilemma",
    "pagina": "activities/code-europa-disruptor-dilemma.html",
    "data": "May 2024",
    "local": "Online (hosted by UC, Santander, Spain)",
    "formato": "Online",
    "categorias": [
      "European Values & Inclusion",
      "Social Impact & Volunteering"
    ],
    "competencias": [
      "Self-management",
      "Teamworking",
      "Technical competence"
    ],
    "descricao": "Code Europa: The Disruptor Dilemma was EUNICE's virtual escape room for Europe Day 2024 and the European Elections, where players became agents protecting Europe while learning about EU institutions.",
    "jaAconteceu": true,
    "slideshow": [
      "img/activities/code-europa-disruptor-dilemma-card.jpg",
      "img/gallery/european-values-and-inclusion-1-card-portrait.jpg",
      "img/gallery/european-values-and-inclusion-2-card-portrait.jpg",
      "img/gallery/european-values-and-inclusion-3-card-portrait.jpg",
      "img/gallery/european-values-and-inclusion-4-card-portrait.jpg"
    ]
  },
  {
    "id": 4,
    "titulo": "Alliance Games 2024",
    "pagina": "activities/alliance-games-2024.html",
    "data": "October 2024",
    "local": "Valenciennes, France",
    "formato": "In-person",
    "categorias": [
      "Sports & Health",
      "Culture & Arts"
    ],
    "competencias": [
      "Cognitive flexibility",
      "Digital competence",
      "Global intercultural competence"
    ],
    "descricao": "EUNICE Alliance Games 2024 brought more than 80 students to Valenciennes, France, for mixed volleyball and basketball tournaments, cultural activities and international exchange.",
    "jaAconteceu": true,
    "slideshow": [
      "img/activities/alliance-games-2024-card.jpg",
      "img/gallery/sports-and-health-1-card-landscape.jpg",
      "img/gallery/sports-and-health-2-card-landscape.jpg",
      "img/gallery/sports-and-health-3-card-landscape.jpg",
      "img/gallery/sports-and-health-4-card-landscape.jpg"
    ]
  },
  {
    "id": 5,
    "titulo": "Wall of Femme 2025",
    "pagina": "activities/wall-of-femme-2025.html",
    "data": "March 2025",
    "local": "Online (all EUNICE universities)",
    "formato": "Online",
    "categorias": [
      "European Values & Inclusion"
    ],
    "competencias": [
      "Self-management"
    ],
    "descricao": "Wall of Femme 2025 celebrated International Women's Day by highlighting inspiring women from across the EUNICE alliance, showcasing their academic journeys, achievements and advice to encourage future generations.",
    "jaAconteceu": true,
    "slideshow": [
      "img/activities/wall-of-femme-2025-card.jpg",
      "img/gallery/european-values-and-inclusion-1-card-landscape.jpg",
      "img/gallery/european-values-and-inclusion-2-card-landscape.jpg",
      "img/gallery/european-values-and-inclusion-3-card-landscape.jpg",
      "img/gallery/european-values-and-inclusion-4-card-landscape.jpg"
    ]
  },
  {
    "id": 6,
    "titulo": "E-Chess Tournament 2025",
    "pagina": "activities/e-chess-2025.html",
    "data": "May 2025",
    "local": "Online (hosted by PUT, Poznań, Poland)",
    "formato": "Online",
    "categorias": [
      "Sports & Health"
    ],
    "competencias": [
      "Global intercultural competence",
      "Technical competence"
    ],
    "descricao": "E-Chess Tournament 2025 gathered over 70 students, PhD candidates and staff from EUNICE universities in an online competition. Celebrating the European Month, it promoted strategic thinking, sportsmanship, intercultural exchange and European cooperation.",
    "jaAconteceu": true,
    "slideshow": [
      "img/activities/e-chess-2025-card.jpg",
      "img/gallery/sports-and-health-1-card-portrait.jpg",
      "img/gallery/sports-and-health-2-card-portrait.jpg",
      "img/gallery/sports-and-health-3-card-portrait.jpg",
      "img/gallery/sports-and-health-4-card-portrait.jpg"
    ]
  },
  {
    "id": 7,
    "titulo": "EUNICE On Route – Virtual Escape Room 2025",
    "pagina": "activities/eunice-on-route-2025.html",
    "data": "May 2025",
    "local": "Online (hosted by UC, Santander, Spain)",
    "formato": "Online",
    "categorias": [
      "Culture & Arts",
      "European Values & Inclusion"
    ],
    "competencias": [
      "Communication",
      "Global intercultural competence",
      "Teamworking"
    ],
    "descricao": "EUNICE On Route was a virtual escape room celebrating Europe Day 2025. Participants travelled through EUNICE countries, solving puzzles and answering cultural questions to earn a personalised EUNICE passport.",
    "jaAconteceu": true,
    "slideshow": [
      "img/activities/eunice-on-route-2025-card.jpg",
      "img/gallery/culture-and-arts-1-card-landscape.jpg",
      "img/gallery/culture-and-arts-2-card-landscape.jpg",
      "img/gallery/culture-and-arts-3-card-landscape.jpg",
      "img/gallery/culture-and-arts-4-card-landscape.jpg"
    ]
  },
  {
    "id": 8,
    "titulo": "Palio 2025",
    "pagina": "activities/palio-2025.html",
    "data": "May 2025",
    "local": "Catania, Sicily, Italy",
    "formato": "In-person",
    "categorias": [
      "Sports & Health",
      "Culture & Arts"
    ],
    "competencias": [
      "Cognitive flexibility",
      "Digital competence",
      "Self-management",
      "Technical competence"
    ],
    "descricao": "Palio d'Ateneo 2025 brought EUNICE students to Catania, Sicily, for three days of sporting competitions alongside Italian students. The event promoted teamwork, intercultural exchange and engagement across universities.",
    "jaAconteceu": true,
    "slideshow": [
      "img/activities/palio-2025-card.jpg",
      "img/gallery/sports-and-health-1-card-landscape.jpg",
      "img/gallery/sports-and-health-2-card-landscape.jpg",
      "img/gallery/sports-and-health-3-card-landscape.jpg",
      "img/gallery/sports-and-health-4-card-landscape.jpg"
    ]
  },
  {
    "id": 9,
    "titulo": "EUNICE and Music Concert",
    "pagina": "activities/eunice-music-concert.html",
    "data": "May 2025",
    "local": "Poznań, Poland",
    "formato": "In-person",
    "categorias": [
      "Culture & Arts"
    ],
    "competencias": [
      "Problem solving",
      "Self-management",
      "Teamworking"
    ],
    "descricao": "A concert bringing together Portuguese and Polish traditions in music, dance and jazz, connecting EUNICE communities through the universal language of music.",
    "jaAconteceu": true,
    "slideshow": [
      "img/activities/eunice-music-concert-card.jpg",
      "img/gallery/culture-and-arts-1-card-landscape.jpg",
      "img/gallery/culture-and-arts-2-card-landscape.jpg",
      "img/gallery/culture-and-arts-3-card-landscape.jpg",
      "img/gallery/culture-and-arts-4-card-landscape.jpg"
    ]
  },
  {
    "id": 10,
    "titulo": "Volunteering Camp 2025",
    "pagina": "activities/volunteering-camp-2025.html",
    "data": "July 2025",
    "local": "Viseu, Portugal",
    "formato": "Hybrid",
    "categorias": [
      "Social Impact & Volunteering"
    ],
    "competencias": [
      "Communication",
      "Global intercultural competence",
      "Teamworking"
    ],
    "descricao": "EUNICE's First Volunteering Camp brought students to Viseu, Portugal, to work on biodiversity and environmental sustainability. Through fieldwork, workshops and intercultural exchange, participants explored risk management and conservation challenges.",
    "jaAconteceu": true,
    "slideshow": [
      "img/activities/volunteering-camp-2025-card.jpg",
      "img/gallery/social-impact-and-volunteering-1-card-landscape.jpg",
      "img/gallery/social-impact-and-volunteering-2-card-landscape.jpg",
      "img/gallery/social-impact-and-volunteering-3-card-landscape.jpg",
      "img/gallery/social-impact-and-volunteering-4-card-landscape.jpg"
    ]
  },
  {
    "id": 11,
    "titulo": "Day of Languages",
    "pagina": "activities/day-of-languages.html",
    "data": "October 2025",
    "local": "All EUNICE partner universities",
    "formato": "Online",
    "categorias": [
      "Culture & Arts",
      "European Values & Inclusion"
    ],
    "competencias": [
      "Self-management",
      "Teamworking"
    ],
    "descricao": "EUNICE Day of Languages 2025 celebrated Europe's linguistic diversity through interactive activities, language taster sessions and cultural events, encouraging participants to explore languages and strengthen intercultural understanding.",
    "jaAconteceu": true,
    "slideshow": [
      "img/activities/day-of-languages-card.jpg",
      "img/gallery/culture-and-arts-1-card-landscape.jpg",
      "img/gallery/culture-and-arts-2-card-landscape.jpg",
      "img/gallery/culture-and-arts-3-card-landscape.jpg",
      "img/gallery/culture-and-arts-4-card-landscape.jpg"
    ]
  },
  {
    "id": 12,
    "titulo": "Alliance Games 2025",
    "pagina": "activities/alliance-games-2025.html",
    "data": "November 2025",
    "local": "Viseu, Portugal",
    "formato": "In-person",
    "categorias": [
      "Sports & Health",
      "Culture & Arts"
    ],
    "competencias": [
      "Self-management",
      "Technical competence"
    ],
    "descricao": "EUNICE Alliance Games 2025 brought students to Viseu, Portugal, for five days of volleyball, basketball and cultural activities, fostering teamwork, friendship, intercultural exchange and European spirit.",
    "jaAconteceu": true,
    "slideshow": [
      "img/activities/alliance-games-2025-card.jpg",
      "img/gallery/sports-and-health-1-card-landscape.jpg",
      "img/gallery/sports-and-health-2-card-landscape.jpg",
      "img/gallery/sports-and-health-3-card-landscape.jpg",
      "img/gallery/sports-and-health-4-card-landscape.jpg"
    ]
  },
  {
    "id": 13,
    "titulo": "International Women's Day – Wall of Femme 2026",
    "pagina": "activities/wall-of-femme-2026.html",
    "data": "March 2026",
    "local": "Online (all EUNICE universities)",
    "formato": "Online",
    "categorias": [
      "European Values & Inclusion"
    ],
    "competencias": [
      "Cognitive flexibility",
      "Self-management",
      "Technical competence"
    ],
    "descricao": "International Women's Day 2026 celebrated ten inspiring EUNICE students, highlighting their achievements, resilience and ambitions while promoting gender equality and empowering future generations.",
    "jaAconteceu": true,
    "slideshow": [
      "img/activities/wall-of-femme-2026-card.jpg",
      "img/gallery/european-values-and-inclusion-1-card-portrait.jpg",
      "img/gallery/european-values-and-inclusion-2-card-portrait.jpg",
      "img/gallery/european-values-and-inclusion-3-card-portrait.jpg",
      "img/gallery/european-values-and-inclusion-4-card-portrait.jpg"
    ]
  },
  {
    "id": 14,
    "titulo": "Football Tournament",
    "pagina": "activities/football-tournament.html",
    "data": "March 2026",
    "local": "Mons, Belgium",
    "formato": "In-person",
    "categorias": [
      "Sports & Health"
    ],
    "competencias": [
      "Cognitive flexibility",
      "Problem solving",
      "Technical competence"
    ],
    "descricao": "Two EUNICE teams took part in the 2026 edition, with students from UPHF, the University of Cantabria, Poznan University of Technology and the Polytechnic University of Viseu.",
    "jaAconteceu": true,
    "slideshow": [
      "img/activities/football-tournament-card.jpg",
      "img/gallery/sports-and-health-1-card-landscape.jpg",
      "img/gallery/sports-and-health-2-card-landscape.jpg",
      "img/gallery/sports-and-health-3-card-landscape.jpg",
      "img/gallery/sports-and-health-4-card-landscape.jpg"
    ]
  },
  {
    "id": 15,
    "titulo": "Celebration of Earth Day",
    "pagina": "activities/celebration-earth-day.html",
    "data": "April 2026",
    "local": "Viseu, Portugal and Santander, Spain",
    "formato": "In-person",
    "categorias": [
      "Social Impact & Volunteering"
    ],
    "competencias": [
      "Communication",
      "Digital competence",
      "Global intercultural competence"
    ],
    "descricao": "Earth Day 2026 highlighted EUNICE's commitment to sustainability, encouraging students and staff to reflect on environmental challenges and promote responsible actions for a greener future.",
    "jaAconteceu": true,
    "slideshow": [
      "img/activities/celebration-earth-day-card.jpg",
      "img/gallery/social-impact-and-volunteering-1-card-landscape.jpg",
      "img/gallery/social-impact-and-volunteering-2-card-landscape.jpg",
      "img/gallery/social-impact-and-volunteering-3-card-landscape.jpg",
      "img/gallery/social-impact-and-volunteering-4-card-landscape.jpg"
    ]
  },
  {
    "id": 16,
    "titulo": "EUNICE Odyssey",
    "pagina": "activities/eunice-odyssey.html",
    "data": "May 2026",
    "local": "Online + on-campus at the University of Cantabria, Santander, Spain",
    "formato": "Hybrid",
    "categorias": [
      "Culture & Arts",
      "European Values & Inclusion"
    ],
    "competencias": [
      "Communication",
      "Global intercultural competence",
      "Teamworking"
    ],
    "descricao": "A virtual escape room taking players on a time-travel adventure across the ten EUNICE countries, with an on-campus activity at the University of Cantabria.",
    "jaAconteceu": true,
    "slideshow": [
      "img/activities/eunice-odyssey-card.jpg",
      "img/gallery/culture-and-arts-1-card-landscape.jpg",
      "img/gallery/culture-and-arts-2-card-landscape.jpg",
      "img/gallery/culture-and-arts-3-card-landscape.jpg",
      "img/gallery/culture-and-arts-4-card-landscape.jpg"
    ]
  },
  {
    "id": 17,
    "titulo": "Palio 2026",
    "pagina": "activities/palio-2026.html",
    "data": "May 2026",
    "local": "Catania, Sicily, Italy",
    "formato": "In-person",
    "categorias": [
      "Sports & Health",
      "Culture & Arts"
    ],
    "competencias": [
      "Communication",
      "Global intercultural competence",
      "Teamworking"
    ],
    "descricao": "On the occasion of Palio d'Ateneo 2026, EUNICE brought students from across the alliance to Catania for three days of sport, cultural exchange and community-building, strengthening European friendships through shared experiences.",
    "jaAconteceu": true,
    "slideshow": [
      "img/activities/palio-2026-card.jpg",
      "img/gallery/sports-and-health-1-card-landscape.jpg",
      "img/gallery/sports-and-health-2-card-landscape.jpg",
      "img/gallery/sports-and-health-3-card-landscape.jpg",
      "img/gallery/sports-and-health-4-card-landscape.jpg"
    ]
  },
  {
    "id": 18,
    "titulo": "EUNICE Running Day",
    "pagina": "activities/running-day-2026.html",
    "data": "June 2026",
    "local": "All EUNICE partner universities",
    "formato": "Hybrid",
    "categorias": [
      "Sports & Health"
    ],
    "competencias": [
      "Self-management",
      "Teamworking",
      "Technical competence"
    ],
    "descricao": "EUNICE Running Day 2026 encouraged students and staff across the alliance to take part in walking and running challenges, promoting wellbeing, healthy lifestyles and community spirit.",
    "jaAconteceu": true,
    "slideshow": [
      "img/activities/running-day-2026-card.jpg",
      "img/gallery/sports-and-health-1-card-portrait.jpg",
      "img/gallery/sports-and-health-2-card-portrait.jpg",
      "img/gallery/sports-and-health-3-card-portrait.jpg",
      "img/gallery/sports-and-health-4-card-portrait.jpg"
    ]
  },
  {
    "id": 19,
    "titulo": "EUNICE Playlist",
    "pagina": "activities/eunice-playlist.html",
    "data": "June 2026",
    "local": "Online (all EUNICE universities)",
    "formato": "Online",
    "categorias": [
      "Culture & Arts"
    ],
    "competencias": [
      "Communication",
      "Digital competence",
      "Global intercultural competence"
    ],
    "descricao": "For European Music Day, each partner university chose songs for a shared EUNICE playlist, showcasing Europe's cultural and linguistic diversity and inviting everyone to discover new artists.",
    "jaAconteceu": true,
    "slideshow": [
      "img/activities/eunice-playlist-card.jpg",
      "img/gallery/culture-and-arts-1-card-landscape.jpg",
      "img/gallery/culture-and-arts-2-card-landscape.jpg",
      "img/gallery/culture-and-arts-3-card-landscape.jpg",
      "img/gallery/culture-and-arts-4-card-landscape.jpg"
    ]
  },
  {
    "id": 20,
    "titulo": "Volunteering Camp 2026 – Green Makers Camp",
    "pagina": "activities/volunteering-camp-2026.html",
    "data": "July 2026",
    "local": "Mons, Belgium and Valenciennes, France",
    "formato": "In-person",
    "categorias": [
      "Culture & Arts",
      "Social Impact & Volunteering"
    ],
    "competencias": [
      "Problem solving",
      "Self-management",
      "Teamworking"
    ],
    "descricao": "The Green Makers Camp brought together 18 passionate students from across the EUNICE alliance for a hands-on journey through sustainability, heritage, and community.",
    "jaAconteceu": true,
    "slideshow": [
      "img/activities/volunteering-camp-2026-card.jpg",
      "img/gallery/culture-and-arts-1-card-landscape.jpg",
      "img/gallery/culture-and-arts-2-card-landscape.jpg",
      "img/gallery/culture-and-arts-3-card-landscape.jpg",
      "img/gallery/culture-and-arts-4-card-landscape.jpg"
    ]
  },
  {
    "id": 21,
    "titulo": "Volunteering Camp 2026 – Sustainable and Inclusive Societies for a Better Future",
    "pagina": "activities/volunteering-camp-kalamata-2026.html",
    "data": "July 2026",
    "local": "Kalamata, Greece",
    "formato": "Hybrid",
    "categorias": [
      "Social Impact & Volunteering",
      "European Values & Inclusion"
    ],
    "competencias": [
      "Cognitive flexibility",
      "Problem solving",
      "Teamworking"
    ],
    "descricao": "This camp brought together EUNICE students from different universities for volunteering focused on sustainability, inclusion and community engagement, helping local communities while building social responsibility and connections across the alliance.",
    "jaAconteceu": true,
    "slideshow": [
      "img/activities/volunteering-camp-kalamata-2026-card.jpg",
      "img/gallery/social-impact-and-volunteering-1-card-portrait.jpg",
      "img/gallery/social-impact-and-volunteering-2-card-portrait.jpg",
      "img/gallery/social-impact-and-volunteering-3-card-portrait.jpg",
      "img/gallery/social-impact-and-volunteering-4-card-portrait.jpg"
    ]
  },
  {
    "id": 22,
    "titulo": "Week of Languages",
    "pagina": "activities/week-of-languages-2026.html",
    "data": "October–November 2026",
    "local": "Cottbus, Germany and Mons, Belgium",
    "formato": "In-person",
    "categorias": [
      "Culture & Arts",
      "European Values & Inclusion"
    ],
    "competencias": [
      "Communication",
      "Global intercultural competence",
      "Teamworking"
    ],
    "descricao": "Temporary description: more information about the Week of Languages 2026, hosted by BTU and UMONS, will be added soon.",
    "jaAconteceu": true,
    "slideshow": [
      "img/activities/week-of-languages-2026-card.jpg",
      "img/gallery/culture-and-arts-1-card-landscape.jpg",
      "img/gallery/culture-and-arts-2-card-landscape.jpg",
      "img/gallery/culture-and-arts-3-card-landscape.jpg",
      "img/gallery/culture-and-arts-4-card-landscape.jpg"
    ]
  },
  {
    "id": 23,
    "titulo": "World Food Day",
    "pagina": "activities/world-food-day-2026.html",
    "data": "October 2026",
    "local": "Catania, Italy",
    "formato": "In-person",
    "categorias": [
      "Social Impact & Volunteering",
      "Culture & Arts"
    ],
    "competencias": [
      "Communication",
      "Global intercultural competence",
      "Teamworking"
    ],
    "descricao": "Temporary description: more information about World Food Day 2026, hosted by UNICT, will be added soon.",
    "jaAconteceu": true,
    "slideshow": [
      "img/activities/world-food-day-2026-card.jpg",
      "img/gallery/social-impact-and-volunteering-1-card-portrait.jpg",
      "img/gallery/social-impact-and-volunteering-2-card-portrait.jpg",
      "img/gallery/social-impact-and-volunteering-3-card-portrait.jpg",
      "img/gallery/social-impact-and-volunteering-4-card-portrait.jpg"
    ]
  },
  {
    "id": 24,
    "titulo": "E-Sports",
    "pagina": "activities/e-sports-2026.html",
    "data": "October–November 2026",
    "local": "Valenciennes, France",
    "formato": "In-person",
    "categorias": [
      "Sports & Health"
    ],
    "competencias": [
      "Digital competence",
      "Problem solving",
      "Teamworking"
    ],
    "descricao": "Temporary description: more information about the E-sports activity, hosted by UPHF, will be added soon.",
    "jaAconteceu": true,
    "slideshow": [
      "img/activities/e-sports-2026-card.jpg",
      "img/gallery/sports-and-health-1-card-landscape.jpg",
      "img/gallery/sports-and-health-2-card-landscape.jpg",
      "img/gallery/sports-and-health-3-card-landscape.jpg",
      "img/gallery/sports-and-health-4-card-landscape.jpg"
    ]
  },
  {
    "id": 25,
    "titulo": "Alliance Games 2026",
    "pagina": "activities/alliance-games-2026.html",
    "data": "October 2026",
    "local": "Santander, Spain",
    "formato": "In-person",
    "categorias": [
      "Sports & Health",
      "Culture & Arts"
    ],
    "competencias": [
      "Communication",
      "Self-management",
      "Teamworking"
    ],
    "descricao": "EUNICE Alliance Games 2026 brought more than 100 students to Santander for basketball, volleyball and cultural activities hosted by the University of Cantabria.",
    "jaAconteceu": true,
    "slideshow": [
      "img/activities/alliance-games-2026-card.jpg",
      "img/gallery/sports-and-health-1-card-landscape.jpg",
      "img/gallery/sports-and-health-2-card-landscape.jpg",
      "img/gallery/sports-and-health-3-card-landscape.jpg",
      "img/gallery/sports-and-health-4-card-landscape.jpg"
    ]
  },
  {
    "id": 26,
    "titulo": "International Day of People with Disabilities",
    "pagina": "activities/day-of-people-with-disabilities-2026.html",
    "data": "December 2026",
    "local": "To be confirmed",
    "formato": "In-person",
    "categorias": [
      "Sports & Health",
      "European Values & Inclusion"
    ],
    "competencias": [
      "Communication",
      "Global intercultural competence",
      "Teamworking"
    ],
    "descricao": "Temporary description: more information about this activity, including the host university, will be added soon.",
    "jaAconteceu": false,
    "slideshow": [
      "img/activities/day-of-people-with-disabilities-2026-card.jpg",
      "img/gallery/sports-and-health-1-card-portrait.jpg",
      "img/gallery/sports-and-health-2-card-portrait.jpg",
      "img/gallery/sports-and-health-3-card-portrait.jpg",
      "img/gallery/sports-and-health-4-card-portrait.jpg"
    ]
  }
];
