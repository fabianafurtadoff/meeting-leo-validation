
export const briefingData = {
  title: "Sistema de Atração para Co-Autoria Científica",
  date: "04 de fevereiro de 2026",
  preparedBy: "Fabiana Furtado",
  objective: "Estruturar solução de IA para posicionamento e atração de casos publicáveis",
  leonardoProfile: {
    role: "Neuroradiologista & Director of Research (FIU)",
    philosophy: "Clinical work is ephemeral. Publications are permanent.",
    keyGoal: "Atrair fluxo constante de casos publicáveis através do Instagram e LinkedIn.",
    constraints: "Máximo 1h por semana de dedicação.",
    metrics: "10-20 formulários/mês, +5-10 artigos/ano."
  },
  highlights: [
    "Foco em atração e posicionamento (gargalo primário).",
    "Não é venda de curso, é co-autoria científica.",
    "Público: Médicos brasileiros (revalidação), estudantes, residentes nos EUA.",
    "Buscamos validar hipóteses sobre visibilidade, educação e conversão."
  ]
};

export const validationQuestions = [
  {
    id: "bloco1",
    title: "BLOCO 1: ESTADO ATUAL (Baseline)",
    objective: "Entender de onde estamos partindo",
    questions: [
      {
        id: "p1",
        text: "Dos seus colaboradores atuais (Naga, Aaliyah, Aaron, etc.), como eles chegaram até você?",
        type: "radio",
        options: [
          "Indicação presencial (colegas, residentes no hospital)",
          "Instagram",
          "LinkedIn",
          "Evento/apresentação",
          "Outro"
        ],
        why: "Se todos vieram por indicação, problema é visibilidade online. Se vieram por rede social, precisamos replicar o que funcionou."
      },
      {
        id: "p2",
        text: "Quantos DMs ou e-mails você recebe por mês HOJE de pessoas querendo publicar casos com você?",
        type: "radio",
        options: ["0-2", "3-5", "6-10", "10+"],
        why: "Se já recebe 10+, problema não é atração. Se recebe 0-2, precisa aumentar visibilidade."
      },
      {
        id: "p3",
        text: "Desses que entram em contato, quantos % viram co-autoria de fato?",
        type: "radio",
        options: [
          "Quase nenhum (<10%)",
          "Alguns (10-30%)",
          "Metade (30-50%)",
          "Maioria (50%+)"
        ],
        why: "Se taxa de conversão é baixa, problema pode ser qualificação dos leads ou processo interno."
      },
      {
        id: "p4",
        text: "Você já postou sobre algum paper que foi publicado? Se sim, o que aconteceu depois?",
        type: "radio",
        options: [
          "Sim, e recebi vários DMs de pessoas interessadas",
          "Sim, mas não gerou nenhum contato",
          "Sim, mas não lembro do resultado",
          "Não, nunca postei sobre isso"
        ],
        why: "Se já postou e não gerou resultado, conteúdo sozinho não resolve. Se gerou resultado, precisamos escalar isso."
      },
      {
        id: "p5",
        text: "Quando você posta algo (caso clínico, reflexão, etc.), que tipo de conteúdo gera MAIS reação?",
        type: "radio",
        options: [
          "Casos clínicos interessantes",
          "Bastidores do seu trabalho",
          "Artigos publicados",
          "Conteúdo educacional (como identificar X)",
          "Não sei, não presto atenção nisso",
          "Outro"
        ],
        why: "Se já tem dados sobre o que funciona, podemos focar nisso."
      },
      {
        id: "p6",
        text: "Você interage com outros radiologistas/médicos no Instagram ou LinkedIn?",
        type: "radio",
        options: [
          "Sim, regularmente (várias vezes por semana)",
          "Às vezes (1-2x por semana)",
          "Raramente (1-2x por mês)",
          "Nunca"
        ],
        why: "Algoritmo favorece quem interage. Se Leonardo não interage, está invisível mesmo postando."
      }
    ]
  },
  {
    id: "bloco2",
    title: "BLOCO 2: PÚBLICO-ALVO",
    objective: "Quem você quer atrair",
    questions: [
      {
        id: "p7",
        text: "Se você pudesse escolher, quem você MAIS quer atrair? (Até 2)",
        type: "checkbox",
        options: [
          "Residentes de radiologia nos EUA",
          "Médicos brasileiros querendo revalidar",
          "Estudantes de medicina (BR ou EUA)",
          "Radiologistas já formados nos EUA",
          "Médicos de outras especialidades com casos de imaging",
          "Outro"
        ],
        why: "Define idioma, plataforma e tipo de conteúdo."
      },
      {
        id: "p8",
        text: "Seus colaboradores atuais são principalmente:",
        type: "radio",
        options: [
          "Todos americanos (ou já nos EUA)",
          "Maioria americanos, alguns brasileiros",
          "Maioria brasileiros, alguns americanos",
          "Todos brasileiros",
          "Mix equilibrado"
        ],
        why: "Valida se o público real é o público ideal."
      },
      {
        id: "p9",
        text: "Suas postagens devem ser (considerando Instagram e LinkedIn):",
        type: "radio",
        options: [
          "100% inglês em ambas plataformas (foco global/americano)",
          "100% português em ambas plataformas (foco Brasil)",
          "Bilíngue na mesma postagem",
          "Separado por plataforma",
          "Não sei, preciso testar"
        ],
        why: "Conteúdo bilíngue pode confundir algoritmo. Melhor definir estratégia clara."
      }
    ]
  },
  {
    id: "bloco3",
    title: "BLOCO 3: CAPACIDADE OPERACIONAL",
    objective: "Quanto você aguenta",
    questions: [
      {
        id: "p10",
        text: "Você confirmou 1h/semana. Desse tempo, o que você PREFERE fazer?",
        type: "radio",
        options: [
          "Gravar áudios rápidos (10-15min)",
          "Escrever textos do zero (30-60min)",
          "Revisar textos que a IA gerou (10-20min)",
          "Só enviar material e deixar IA fazer tudo (5min)"
        ],
        why: "Define nível de automação necessário."
      },
      {
        id: "p11",
        text: "Entre essas opções, qual você escolheria?",
        type: "radio",
        options: [
          "Postar 5x/semana conteúdo simples (menos elaborado, mais frequência)",
          "Postar 1-2x/semana conteúdo matador (muito elaborado, menor frequência)",
          "Postar só quando tiver algo relevante (sem frequência fixa)"
        ],
        why: "Define estratégia de produção."
      },
      {
        id: "p12",
        text: "Se 50 pessoas preenchessem formulário em 1 mês, você conseguiria avaliar todos os casos?",
        type: "radio",
        options: [
          "Sim, tranquilo (15-20min/semana resolve)",
          "Sim, mas com dificuldade",
          "Não, precisaria de ajuda (pré-triagem)"
        ],
        why: "Define se precisa de filtro automatizado."
      },
      {
        id: "p13",
        text: "Quantos papers você consegue tocar simultaneamente de forma realista?",
        type: "radio",
        options: ["1-2 por vez", "3-5 por vez", "6-10 por vez", "10+ por vez"],
        why: "Define limite de escala."
      },
      {
        id: "p14",
        text: "Em média, quanto tempo leva desde 'caso chega' até 'paper submetido'?",
        type: "radio",
        options: [
          "1-2 meses",
          "3-4 meses",
          "5-6 meses",
          "Mais de 6 meses",
          "Varia muito"
        ],
        why: "Se leva 6 meses, gargalo pode ser produção, não atração."
      }
    ]
  },
  {
    id: "bloco4",
    title: "BLOCO 4: CONVERSÃO E DIFERENCIAÇÃO",
    objective: "Por que te escolhem e objeções",
    questions: [
      {
        id: "p15",
        text: "Na sua opinião, por que alguém deveria publicar com VOCÊ e não com outro mentor?",
        type: "radio",
        options: [
          "Sou mais acessível/rápido",
          "Tenho mais publicações (track record)",
          "Sou mais rápido no processo",
          "Tenho conexões com journals",
          "Tenho credencial institucional",
          "Não sei",
          "Outro"
        ],
        why: "Isso vira sua mensagem central de posicionamento."
      },
      {
        id: "p16",
        text: "Dos seus colaboradores atuais, você sabe por que eles te escolheram?",
        type: "radio",
        options: [
          "Sim, eles me disseram (anotar)",
          "Não, nunca perguntei",
          "Não tive escolha, eu que ofereci ajuda"
        ],
        hasInput: true,
        why: "Se tem dado real, melhor que hipótese."
      },
      {
        id: "p17",
        text: "Qual a PRINCIPAL razão pela qual alguém que tem um caso bom NÃO entraria em contato?",
        type: "radio",
        options: [
          "Não sabem que eu faço isso",
          "Não entendem por que publicar é importante",
          "Acham que o caso deles não é bom o suficiente",
          "Têm medo de serem rejeitados",
          "Não sabem como funciona o processo",
          "Acham complicado/burocrático",
          "Me acham inacessível",
          "Outro"
        ],
        why: "Define qual objeção resolver primeiro no conteúdo."
      },
      {
        id: "p18",
        text: "Quando alguém te manda DM, qual a primeira dúvida que eles têm?",
        type: "radio",
        options: [
          "Meu caso é publicável?",
          "Como funciona o processo?",
          "Quanto tempo leva?",
          "Preciso saber escrever?",
          "Por que publicar é importante?",
          "Você cobra alguma coisa?",
          "Outro"
        ],
        why: "Conteúdo precisa antecipar e resolver isso."
      }
    ]
  },
  {
    id: "bloco5",
    title: "BLOCO 5: BENCHMARK",
    objective: "O que já funciona",
    questions: [
      {
        id: "p19",
        text: "Quem são 3 radiologistas ou mentores científicos que você admira?",
        type: "text",
        placeholder: "Nome 1, Nome 2, Nome 3",
        why: "Podemos analisar o que eles fazem bem e adaptar."
      },
      {
        id: "p20",
        text: "Desses que você mencionou, o que eles fazem que FUNCIONA?",
        type: "radio",
        options: [
          "Postam muito (alta frequência)",
          "Postam pouco mas com qualidade alta",
          "Interagem bastante",
          "Fazem lives/webinars",
          "Compartilham bastidores",
          "Não sei",
          "Nenhum é ativo online"
        ],
        why: "Replicar estratégia validada."
      },
      {
        id: "p21",
        text: "Você quer fazer parecido com eles ou diferente?",
        type: "radio",
        options: [
          "Parecido (modelo já funciona)",
          "Diferente (quero me destacar)",
          "Não sei"
        ],
        why: "Se diferente, em quê?"
      },
      {
        id: "p22",
        text: "Em 6 meses, qual seria um resultado BOM pra você?",
        type: "radio",
        options: [
          "5-10 novos casos",
          "10-20 novos casos",
          "20+ novos casos",
          "Não importa quantidade, importa qualidade"
        ],
        why: "Calibra expectativa vs esforço."
      },
      {
        id: "p23",
        text: "Quantos papers a mais você gostaria de publicar por ano?",
        type: "radio",
        options: [
          "+3-5 artigos/ano",
          "+5-10 artigos/ano",
          "+10 artigos/ano",
          "Não tenho número específico"
        ],
        why: "Define agressividade da estratégia."
      },
      {
        id: "p24",
        text: "Você prefere:",
        type: "radio",
        options: [
          "Fluxo constante (2-3 casos novos/mês)",
          "Fluxo sazonal (10 casos de uma vez)",
          "Tanto faz"
        ],
        why: "Define frequência de postagem."
      }
    ]
  },
  {
    id: "bloco6",
    title: "BLOCO 6: VALIDAÇÃO DE HIPÓTESES",
    objective: "Testar mensagens e canais",
    questions: [
      {
        id: "p25",
        text: "Qual dessas mensagens faria alguém pensar 'quero falar com esse cara'?",
        type: "checkbox",
        options: [
          "Opção A - Prova Social: '3º artigo publicado este ano. O próximo pode ser seu.'",
          "Opção B - Educação: 'Achou esse caso comum? Pode ser publicável.'",
          "Opção C - Bastidores: 'Revisei 5 manuscritos hoje. Saiba por que um foi rejeitado.'",
          "Opção D - Escassez: 'Aceito 3 novos casos este mês.'",
          "Opção E - Outra (Sugestão Leonardo)"
        ],
        why: "Valida tipo de conteúdo que ressoa."
      },
      {
        id: "p26",
        text: "Na sua percepção, onde está seu público-alvo ideal?",
        type: "radio",
        options: [
          "Instagram (estudantes, residentes jovens)",
          "LinkedIn (profissionais, acadêmicos)",
          "Ambos igualmente",
          "Não sei, preciso testar"
        ],
        why: "Define priorização de plataforma."
      },
      {
        id: "p27",
        text: "Toparia fazer um experimento de 2 semanas postando a MESMA mensagem em ambas?",
        type: "radio",
        options: [
          "Sim, faz sentido validar",
          "Não, prefiro estratégia definida",
          "Depende do esforço"
        ],
        why: "Validação rápida."
      },
      {
        id: "p28",
        text: "Como você prefere que pessoas entrem em contato?",
        type: "radio",
        options: [
          "Opção A - Formulário na bio",
          "Opção B - DM direto com palavra-chave"
        ],
        why: "CTA errado cria fricção."
      },
      {
        id: "p29",
        text: "Você tem medo de ser inundado de DMs/calls de casos ruins?",
        type: "radio",
        options: [
          "Sim, prefiro filtro automatizado",
          "Não, consigo filtrar rápido",
          "Depende do volume"
        ],
        why: "Define necessidade de pré-qualificação."
      }
    ]
  },
  {
    id: "bloco7",
    title: "BLOCO 7: PRIORIZAÇÃO",
    objective: "O que resolver primeiro",
    questions: [
      {
        id: "p30",
        text: "Se você tivesse que escolher ONDE INVESTIR PRIMEIRO, seria:",
        type: "radio",
        options: [
          "Opção A - Sistema de Conteúdo Automatizado (Você dá input, IA gera posts)",
          "Opção B - Setup Estratégico + Teste Manual (Validar antes de automatizar)",
          "Opção C - Solução Completa (Conteúdo + Qualificação + Pipeline)"
        ],
        why: "Define escopo do projeto e orçamento."
      }
    ]
  }
];
