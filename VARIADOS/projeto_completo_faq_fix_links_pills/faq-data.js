// Arquivo: faq-data.js

export const faqItems = [
  // =============================================================
  // 2. FAQ - PERGUNTAS FREQUENTES (DEZENAS DE ITENS)
  // =============================================================
  // Banco de horas / compensação
  {
    q: "Qual o prazo para compensar Banco de Horas?",
    a: "Saldo positivo: até 6 meses. Saldo negativo: até o mês seguinte. <span class='cite-badge' data-pdf='manual' data-page='13'>Manual Pág. 13</span>",
    tags: ["banco", "prazo", "compensação", "saldo"],
  },
  {
    q: "Posso compensar banco de horas “por fora”, sem registrar no sistema?",
    a: "Não. Compensação paralela/banco paralelo é vedado. Sempre registre e siga o fluxo oficial. <span class='cite-badge' data-pdf='norma' data-page='16'>Norma (Vedações)</span>",
    tags: ["banco", "paralelo", "vedação"],
  },
  {
    q: "Saldo negativo pode acumular por vários meses?",
    a: "Não é o recomendado: a regra é compensar até o mês seguinte à ocorrência. <span class='cite-badge' data-pdf='manual' data-page='12'>Manual Págs. 12/13</span>",
    tags: ["saldo", "negativo", "prazo"],
  },
  {
    q: "Quem deve combinar/autorizar a compensação do banco de horas?",
    a: "Deve ser acordado com a chefia/gestor e executado no sistema, respeitando regras e prazos do normativo e do manual.",
    tags: ["autorização", "chefia", "banco"],
  },

  // Intervalos (intra / inter)
  {
    q: "Qual é a regra geral da interjornada?",
    a: "Em regra, deve haver descanso mínimo de 11h entre jornadas. <span class='cite-badge' data-pdf='norma' data-page='3'>Norma Pág. 3 Art. 4º</span>",
    tags: ["interjornada", "11h", "descanso"],
  },
  {
    q: "Qual é a regra geral da intrajornada em jornada administrativa?",
    a: "Em regra, o intervalo intrajornada deve ser de 1h a 2h, conforme previsto no normativo aplicável. <span class='cite-badge' data-pdf='norma' data-page='3'>Norma Pág. 3 Art. 4º</span>",
    tags: ["intrajornada", "almoço", "intervalo"],
  },
  {
    q: "Posso fazer apenas 1h de almoço?",
    a: "Em alguns regimes há flexibilidade para intervalo mínimo de 1h, quando previsto e autorizado conforme norma. <span class='cite-badge' data-pdf='norma' data-page='8'>Norma (Flexibilidade)</span>",
    tags: ["almoço", "intrajornada", "redução"],
  },
  {
    q: "O que acontece se eu não fizer o intervalo completo?",
    a: "Além do risco de irregularidade no ponto, pode haver caracterização de descumprimento de norma e necessidade de tratativa pelo gestor/RH. Sempre registre corretamente e trate ocorrências de imediato.",
    tags: ["intervalo", "descumprimento", "irregularidade"],
  },

  // Escalas e indenização de intervalo
  {
    q: "Qual o intervalo em escala 12x36?",
    a: "Regra usual: 30 minutos, com previsão de indenização conforme ACT (quando aplicável). <span class='cite-badge' data-pdf='acordo' data-page='16'>ACT Pág. 16</span>",
    tags: ["12x36", "escala", "intervalo"],
  },
  {
    q: "Qual o intervalo em escala 24x72?",
    a: "Regra usual: 1 hora, podendo ser fracionado em 2 períodos de 30 minutos, com previsão de indenização conforme ACT (quando aplicável). <span class='cite-badge' data-pdf='acordo' data-page='16'>ACT Pág. 16</span>",
    tags: ["24x72", "escala", "intervalo"],
  },
  {
    q: "Em substituição de escala, existe ajuda de custo?",
    a: "Sim, há previsão de ajuda de custo em situações específicas, conforme ACT. <span class='cite-badge' data-pdf='acordo' data-page='3'>ACT Pág. 3</span>",
    tags: ["ajuda de custo", "substituição", "escala"],
  },

  // Ponto / ajustes
  {
    q: "Esqueci de bater o ponto. O que fazer?",
    a: "Abra o ajuste/ocorrência conforme o manual. Há limite mensal para uso do motivo “esqueci”. <span class='cite-badge' data-pdf='manual' data-page='7'>Manual Pág. 7</span>",
    tags: ["ponto", "esquecimento", "ajuste"],
  },
  {
    q: "Outra pessoa pode bater o ponto por mim?",
    a: "Não. Registro por terceiros é vedado e pode configurar falta grave (risco disciplinar). <span class='cite-badge' data-pdf='norma' data-page='4'>Norma (Vedações)</span>",
    tags: ["ponto", "terceiros", "vedação"],
  },
  {
    q: "Preciso conferir minha folha de ponto?",
    a: "Sim. O empregado deve conferir/assinar a folha no período indicado pelo manual, ou assim que disponíbilizada pelo Núcleo de Pessoal. <span class='cite-badge' data-pdf='manual' data-page='4'>Manual Pág. 4</span>",
    tags: ["folha", "conferir", "assinatura"],
  },
  {
    q: "Qual é o papel do gestor no fechamento do ponto?",
    a: "Validar a folha e tratar ocorrências no prazo definido no manual. <span class='cite-badge' data-pdf='manual' data-page='5'>Manual Pág. 5</span>",
    tags: ["gestor", "validação", "prazo"],
  },

  // Troca de serviço / permutas
  {
    q: "Quantas trocas de serviço posso fazer?",
    a: "Há limite de trocas e exigência de antecedência conforme normas/ACT. <span class='cite-badge' data-pdf='norma' data-page='14'>Norma Pág. 14</span>",
    tags: ["troca", "permuta"],
  },
  {
    q: "Troca de plantão precisa de autorização?",
    a: "Sim. Deve seguir o fluxo e autorização definidos (evite acertos informais). <span class='cite-badge' data-pdf='acordo' data-page='30'>ACT Pág. 30</span>",
    tags: ["permuta", "autorização", "plantão"],
  },

  // Responsabilidades e “desconhecimento”
  {
    q: "Os normativos são acessíveis a todos os empregados?",
    a: "Sim. Estão disponíveis na intranet/SEI/Sindicato e também podem ser solicitados ao gestor ou ao Núcleo de Pessoal/RH. Por isso, não é cabível alegar desconhecimento das regras.",
    tags: ["normativo", "intranet", "desconhecimento"],
  },
  {
    q: "Este site substitui os documentos oficiais?",
    a: "Não. Este guia é apenas um apoio de consulta. Em caso de divergência, prevalece sempre o documento oficial vigente.",
    tags: ["aviso", "documento oficial", "guia"],
  },

  // Situações comuns (extras)
  {
    q: "Posso emendar o intervalo e sair mais cedo?",
    a: "Não é permitido pelo normativo. Não faça ajustes informais.",
    tags: ["intervalo", "saída", "flex"],
  },
  {
    q: "O intervalo conta como hora trabalhada?",
    a: "Em regra não. Em escalas, pode haver regramento específico de indenização conforme ACT. <span class='cite-badge' data-pdf='acordo' data-page='16'>ACT Pág. 16</span>",
    tags: ["intervalo", "indenização"],
  },
  {
    q: "Como agir quando a operação impede intervalo no horário planejado?",
    a: "Registrar corretamente, tratar ocorrência com o gestor e seguir orientação do RH quando necessário.",
    tags: ["operação", "ocorrência", "gestor"],
  },
  {
    q: "Existe risco trabalhista se o intervalo não for cumprido?",
    a: "Sim. O descumprimento de intervalo pode gerar passivo e responsabilização. Por isso, o controle é rigoroso.",
    tags: ["risco", "passivo", "intervalo"],
  },

  // Adicionais (mais itens)
  {
    q: "Posso fazer hora extra sem autorização?",
    a: "Não é recomendado. Siga o fluxo de autorização e registro de horas, evitando irregularidades.",
    tags: ["hora extra", "autorização"],
  },
  {
    q: "Como registrar convocação em folga/feriado?",
    a: "Registrar no sistema e aplicar as regras do ACT para adicional quando cabível. <span class='cite-badge' data-pdf='acordo' data-page='15'>ACT Pág. 15</span>",
    tags: ["feriado", "folga", "adicional"],
  },
  {
    q: "O que é interjornada e por que importa?",
    a: "É o descanso entre duas jornadas. Ajuda a evitar fadiga e reduz risco jurídico.",
    tags: ["interjornada", "conceito"],
  },
  {
    q: "O que é intrajornada e por que importa?",
    a: "É o intervalo dentro da jornada (ex.: almoço). Protege saúde e reduz riscos.",
    tags: ["intrajornada", "conceito"],
  },
  {
    q: "Se eu esqueci de bater o ponto, posso pedir para o gestor 'arrumar'?",
    a: "O gestor deve orientar e validar dentro do fluxo oficial, evitando qualquer adulteração. <span class='cite-badge' data-pdf='manual' data-page='5'>Manual Pág. 5</span>",
    tags: ["ajuste", "gestor"],
  },
  {
    q: "O que devo fazer se o sistema estiver fora do ar?",
    a: "Registrar evidências (ex.: print/ocorrência), comunicar gestor e regularizar assim que o sistema retornar.",
    tags: ["sistema", "indisponibilidade"],
  },
  {
    q: "Como funciona a tolerância de marcação?",
    a: "A tolerância (quando prevista) não autoriza descumprir intervalo; ela é regra operacional de registro. Consulte o manual/norma.",
    tags: ["tolerância", "registro"],
  },
  {
    q: "Intervalo pode ser fracionado?",
    a: "Somente quando houver previsão e orientação formal. Caso contrário, mantenha o padrão.",
    tags: ["fracionar", "intervalo"],
  },
  {
    q: "Quem fiscaliza o cumprimento de jornada e intervalos?",
    a: "Empregado (autocontrole), gestor (fiscalização) e RH (normatização/auditoria).",
    tags: ["fiscalização", "papéis"],
  },
  {
    q: "O que é 'banco paralelo'?",
    a: "Qualquer acerto de horas sem registro oficial (planilha, caderno, acordo verbal). É vedado. <span class='cite-badge' data-pdf='norma' data-page='16'>Norma (Vedações)</span>",
    tags: ["banco paralelo", "vedação"],
  },
  {
    q: "Posso alterar marcações antigas?",
    a: "Somente via fluxo de ocorrência/ajuste previsto, com justificativa e validação dentro do prazo.",
    tags: ["alterar", "marcação", "prazo"],
  },
  {
    q: "Qual o prazo para o gestor tratar ocorrências?",
    a: "O manual estabelece prazo para análise/tratativa. <span class='cite-badge' data-pdf='manual' data-page='5'>Manual Pág. 5</span>",
    tags: ["prazo", "gestor", "ocorrência"],
  },
  {
    q: "Onde encontro o ACT e a cartilha?",
    a: "Na intranet/Sindicato e também via RH/Sindicato (conforme divulgado).",
    tags: ["act", "cartilha", "onde"],
  },
  {
    q: "Como buscar um tema específico no PDF?",
    a: "Abra um documento e use o campo 'Buscar no índice' ou a busca do próprio visualizador do PDF.",
    tags: ["buscar", "pdf"],
  },
  {
    q: "Este guia é para quem?",
    a: "Para gestores, empregados e Núcleo de Pessoal/RH como apoio de consulta rápida. Ele não substitui normativos.",
    tags: ["público", "guia"],
  },

  // ==========================================
  // FAQ - NORMA: CAPÍTULOS I, II e III
  // (Abrangendo Artigos 1º ao 11º)
  // ==========================================

  // Art. 1º: Definições (Página 1)
  {
    q: "O que é considerado 'Horário Administrativo' padrão?",
    a: "É o período compreendido entre 07h30 e 17h30, de segunda a sexta-feira. <span class='cite-badge' data-pdf='norma' data-page='1'>Norma Art. 1º XV</span>",
    tags: ["horário", "administrativo", "padrão", "definição"],
  },

  // Art. 2º: Tolerância de Ponto (Página 2)
  {
    q: "Qual a tolerância para atrasos ou saídas antecipadas?",
    a: "5 minutos por batida, observado o limite máximo de 10 minutos diários. <span class='cite-badge' data-pdf='norma' data-page='2'>Norma Art. 2º §2º</span>",
    tags: ["tolerância", "atraso", "minutos", "limite"],
  },
  {
    q: "O que acontece se a variação de horário passar de 15 minutos?",
    a: "O sistema exigirá validação do gestor. Isso não exime o empregado de cumprir a carga horária integral. <span class='cite-badge' data-pdf='norma' data-page='2'>Norma Art. 2º §3º</span>",
    tags: ["validação", "gestor", "15 minutos", "variação"],
  },

  // Art. 3º: Intervalo Intrajornada (Página 3)
  {
    q: "Qual o intervalo obrigatório para quem trabalha mais de 6 horas?",
    a: "Mínimo de 1 hora e máximo de 2 horas para repouso ou alimentação. <span class='cite-badge' data-pdf='norma' data-page='3'>Norma Art. 3º I</span>",
    tags: ["intervalo", "almoço", "1 hora", "2 horas"],
  },

  // Art. 4º: Intervalo Interjornada (Página 3)
  {
    q: "Quanto tempo devo descansar entre uma jornada e outra?",
    a: "Deve haver um intervalo mínimo de 11 (onze) horas consecutivas de descanso entre duas jornadas. <span class='cite-badge' data-pdf='norma' data-page='3'>Norma Art. 4º</span>",
    tags: ["descanso", "interjornada", "11 horas"],
  },

  // Art. 5º: Tempo de Deslocamento (Página 3)
  {
    q: "O tempo de deslocamento casa-trabalho conta na jornada?",
    a: "Não. O tempo de deslocamento até o posto de trabalho (e vice-versa) não é computado na jornada. <span class='cite-badge' data-pdf='norma' data-page='3'>Norma Art. 5º I</span>",
    tags: ["deslocamento", "trânsito", "trajeto"],
  },

  // Art. 6º e 7º: Obrigatoriedade e Frequência (Página 3)
  {
    q: "Quantas vezes devo registrar o ponto diariamente?",
    a: "Para jornada padrão (>4h): 4 vezes (início, saída intervalo, volta intervalo, fim). Escala 24x72: 6 vezes. <span class='cite-badge' data-pdf='norma' data-page='3'>Norma Art. 7º</span>",
    tags: ["batida", "registro", "quantidade", "vezes"],
  },
  {
    q: "Esqueci de bater o ponto. Quantas vezes posso ajustar?",
    a: "O gestor pode validar o esquecimento até 4 vezes no mês. Acima disso, gera notificação. <span class='cite-badge' data-pdf='norma' data-page='3'>Norma Art. 7º §3º</span>",
    tags: ["esquecimento", "ajuste", "limite"],
  },

  // Art. 8º: Estagiários (Página 4)
  {
    q: "Estagiário bate ponto no sistema eletrônico?",
    a: "Não. O controle é manual (Folha de Frequência), devendo ser preenchido com horários reais (sem 'horário britânico'). <span class='cite-badge' data-pdf='norma' data-page='4'>Norma Art. 8º II</span>",
    tags: ["estagiário", "manual", "folha"],
  },

  // Art. 9º: Ausências (Página 4 e 5)
  {
    q: "Quais ausências são consideradas justificadas?",
    a: "O Art. 9º lista situações como: Doação de sangue, Casamento, Falecimento de parente, Acompanhamento médico, etc. <span class='cite-badge' data-pdf='norma' data-page='4'>Norma Art. 9º</span>",
    tags: ["ausência", "justificativa", "abono"],
  },

  // Art. 10º: Regra de Presença (Página 5)
  {
    q: "Qual a regra para abonar ausências programadas no setor?",
    a: "Deve ser garantida a presença mínima de 50% dos empregados efetivos do setor no dia. <span class='cite-badge' data-pdf='norma' data-page='5'>Norma Art. 10 §3º</span>",
    tags: ["50%", "setor", "presença", "escala"],
  },

  // Art. 11º: Descontos (Página 5)
  {
    q: "Falta injustificada desconta do banco de horas?",
    a: "Se for falta na jornada completa, desconta do salário (pecúnia). Se for parcial (atraso), desconta do banco (para quem tem banco). <span class='cite-badge' data-pdf='norma' data-page='5'>Norma Art. 11</span>",
    tags: ["falta", "desconto", "salário", "banco"],
  },

  // ==========================================
  // FAQ - CAPÍTULO III: REGISTRO DE FREQUÊNCIA
  // (Artigos 7 a 12 da Norma)
  // ==========================================

  // Artigo 7º: Limite de ajustes por esquecimento (Página 3)
  {
    q: "Esqueci de bater o ponto. Quantas vezes o gestor pode ajustar?",
    a: "O gestor pode validar o esquecimento até 4 vezes no mês. Acima disso, o ajuste considera a hora efetiva e gera notificação à gerência. <span class='cite-badge' data-pdf='norma' data-page='3'>Norma Art. 7 §3º</span>",
    tags: ["esquecimento", "limite", "ajuste", "4 vezes"],
  },

  // Artigo 8º: Indisponibilidade do Sistema (Página 4)
  {
    q: "O sistema eletrônico caiu. Como devo registrar o ponto?",
    a: "Excepcionalmente, em caso de indisponibilidade, deve-se usar a Folha de Frequência manual. <span class='cite-badge' data-pdf='norma' data-page='4'>Norma Art. 8 P. Único</span>",
    tags: ["sistema", "indisponibilidade", "manual", "queda"],
  },

  // Artigo 9º: Ausências Justificadas (Página 4)
  {
    q: "Quais são as ausências consideradas justificadas?",
    a: "O Art. 9º lista diversas situações (ex: Abono TRE, consulta médica de filhos até 6 anos, doação de sangue, etc). Consulte a lista completa. <span class='cite-badge' data-pdf='norma' data-page='4'>Norma Art. 9</span>",
    tags: ["ausência", "justificativa", "abono", "médico"],
  },

  // Artigo 10: Regra de Presença Mínima (Página 5)
  {
    q: "Existe limite de pessoas do setor que podem se ausentar ao mesmo tempo?",
    a: "Sim. Para validar ausências programadas, deve ser garantida a presença de no mínimo 50% dos empregados efetivos do setor. <span class='cite-badge' data-pdf='norma' data-page='5'>Norma Art. 10 §3º</span>",
    tags: ["setor", "escala", "50%", "presença"],
  },

  // Artigo 11: Desconto de Falta Integral (Página 5)
  {
    q: "Faltei o dia todo sem justificativa. Desconta do Banco de Horas?",
    a: "Não. A ausência na jornada completa acarreta desconto financeiro (pecúnia) direto no salário, independente de haver saldo no banco. <span class='cite-badge' data-pdf='norma' data-page='5'>Norma Art. 11 §1º</span>",
    tags: ["falta", "desconto", "salário", "dia completo"],
  },

  // Artigo 12: Prazos de Comunicação (Página 5)
  {
    q: "Qual o prazo para comunicar ou justificar ocorrências?",
    a: "Deve-se comunicar até 48h antes do fato. Em casos imprevisíveis, comunicar até 24h após o fato. O gestor tem 24h para aprovar. <span class='cite-badge' data-pdf='norma' data-page='5'>Norma Art. 12</span>",
    tags: ["prazo", "comunicar", "justificativa", "48 horas"],
  },

  // =============================================================
  // 1. INTERVALO INTRAJORNADA (ALMOÇO/REFEIÇÃO)
  // =============================================================
  {
    q: "O que é intervalo intrajornada?",
    a: "É a pausa obrigatória para descanso ou refeição concedida durante o dia de trabalho. <span class='cite-badge' data-pdf='norma' data-page='3'>Norma Art. 3º</span>",
    tags: ["intrajornada", "definição", "conceito", "almoço"],
  },
  {
    q: "Qual o tempo de intervalo para quem trabalha 8h?",
    a: "Mínimo de 1 hora e máximo de 2 horas. <span class='cite-badge' data-pdf='norma' data-page='3'>Norma Art. 3º I</span>",
    tags: ["8 horas", "tempo", "duração", "1 hora"],
  },
  {
    q: "Qual o tempo de intervalo para jornada de 6h?",
    a: "Exatamente 15 minutos. <span class='cite-badge' data-pdf='norma' data-page='3'>Norma Art. 3º II</span>",
    tags: ["6 horas", "15 minutos", "lanche"],
  },
  {
    q: "Quem trabalha 4h tem direito a intervalo?",
    a: "Pela regra geral, não há intervalo obrigatório para jornadas de até 4 horas.",
    tags: ["4 horas", "obrigatório", "isento"],
  },
  {
    q: "A pausa do almoço conta como hora trabalhada?",
    a: "Não. Os intervalos de descanso não são computados na duração do trabalho. <span class='cite-badge' data-pdf='norma' data-page='3'>Norma Art. 3º §1º</span>",
    tags: ["computada", "jornada", "contagem"],
  },
  {
    q: "Posso reduzir meu almoço para 30 minutos?",
    a: "Sim, mas apenas em casos previstos em acordo ou convenção coletiva (ex: escalas de revezamento). <span class='cite-badge' data-pdf='acordo' data-page='16'>ACT Cl. 14</span>",
    tags: ["redução", "30 minutos", "acordo"],
  },
  {
    q: "Posso trabalhar direto e sair 1 hora mais cedo?",
    a: "Não. O objetivo do intervalo é a saúde do trabalhador, devendo ocorrer no meio da jornada. A supressão é ilegal.",
    tags: ["sair mais cedo", "troca", "proibido"],
  },
  {
    q: "E se eu não tirar o intervalo (Supressão)?",
    a: "A empresa deve indenizar o tempo suprimido com adicional de 50%. Isso gera passivo trabalhista e deve ser evitado. <span class='cite-badge' data-pdf='norma' data-page='3'>Norma Art. 3º §2º</span>",
    tags: ["supressão", "indenização", "50%", "multa"],
  },
  {
    q: "O intervalo de 15 minutos pode ser reduzido?",
    a: "Não. A possibilidade de redução para 30 minutos aplica-se apenas aos intervalos que seriam de 1 hora (jornadas > 6h).",
    tags: ["15 minutos", "redução", "proibido"],
  },
  {
    q: "A empresa é obrigada a oferecer refeitório?",
    a: "A CLT exige condições adequadas. A Norma Interna prevê locais apropriados, mas a obrigatoriedade de 'refeitório completo' depende do porte (NR-24).",
    tags: ["refeitório", "local", "almoçar"],
  },

  // =============================================================
  // 2. INTERVALO INTERJORNADA (ENTRE DIAS)
  // =============================================================
  {
    q: "O que é intervalo interjornada?",
    a: "É o tempo de descanso entre o fim de uma jornada diária e o início da outra. <span class='cite-badge' data-pdf='norma' data-page='3'>Norma Art. 4º</span>",
    tags: ["interjornada", "entre dias", "definição"],
  },
  {
    q: "Qual a duração mínima da interjornada?",
    a: "11 horas consecutivas de descanso. <span class='cite-badge' data-pdf='norma' data-page='3'>Norma Art. 4º</span>",
    tags: ["11 horas", "mínimo", "descanso"],
  },
  {
    q: "O que acontece se eu descansar apenas 8 horas entre dias?",
    a: "As horas faltantes para completar as 11h obrigatórias devem ser pagas como horas extras (indenizadas). <span class='cite-badge' data-pdf='norma' data-page='3'>Norma Art. 4º</span>",
    tags: ["descanso curto", "8 horas", "extra"],
  },
  {
    q: "Como funciona a interjornada na escala 12x36?",
    a: "O descanso de 36 horas subsequentes já engloba e substitui a interjornada padrão de 11 horas. <span class='cite-badge' data-pdf='acordo' data-page='15'>ACT Cl. 14</span>",
    tags: ["12x36", "escala", "36 horas"],
  },
  {
    q: "Posso ser chamado para reunião no interjornada?",
    a: "Não. O período deve ser de total desconexão. Acionamentos podem configurar sobreaviso ou hora extra.",
    tags: ["reunião", "chamado", "desconexão"],
  },
  {
    q: "O deslocamento casa-trabalho conta no intervalo?",
    a: "Não. O tempo de deslocamento não conta como jornada, nem como descanso. A contagem inicia/termina no registro de ponto. <span class='cite-badge' data-pdf='norma' data-page='3'>Norma Art. 5º</span>",
    tags: ["deslocamento", "trajeto", "contagem"],
  },

  // =============================================================
  // 3. DESCANSO SEMANAL REMUNERADO (DSR)
  // =============================================================
  {
    q: "O que é o DSR?",
    a: "É uma folga de 24 horas consecutivas a cada 7 dias, preferencialmente aos domingos. <span class='cite-badge' data-pdf='norma' data-page='3'>Norma Art. 4º §1º</span>",
    tags: ["dsr", "folga", "semanal"],
  },
  {
    q: "O intervalo interjornada (11h) inclui o DSR?",
    a: "Não. O DSR (24h) soma-se à interjornada (11h), totalizando 35 horas de descanso entre semanas de trabalho.",
    tags: ["soma", "35 horas", "acumulado"],
  },
  {
    q: "Perco o DSR se chegar atrasado?",
    a: "Sim. Atrasos injustificados ou faltas na semana podem levar ao desconto da remuneração do descanso semanal.",
    tags: ["atraso", "perda", "desconto dsr"],
  },
  {
    q: "Qual o limite de dias seguidos de trabalho?",
    a: "O trabalhador não deve trabalhar mais de 6 dias consecutivos sem usufruir de uma folga de 24h.",
    tags: ["6 dias", "consecutivos", "limite"],
  },

  // =============================================================
  // 4. BANCO DE HORAS E COMPENSAÇÃO
  // =============================================================
  {
    q: "Qual o prazo para compensar Banco de Horas?",
    a: "Saldo positivo: até 6 meses. Saldo negativo: até o mês seguinte. <span class='cite-badge' data-pdf='manual' data-page='13'>Manual Pág. 13</span>",
    tags: ["banco", "prazo", "compensação", "saldo"],
  },
  {
    q: "Posso compensar banco de horas “por fora”?",
    a: "Não. Compensação paralela (banco de gaveta) é vedada. Tudo deve estar no sistema. <span class='cite-badge' data-pdf='norma' data-page='16'>Norma (Vedações)</span>",
    tags: ["banco", "paralelo", "vedação", "gaveta"],
  },
  {
    q: "Faltei o dia todo. Desconta do Banco de Horas?",
    a: "Não. A ausência na jornada completa acarreta desconto em salário (pecúnia). Banco é para frações de jornada. <span class='cite-badge' data-pdf='norma' data-page='5'>Norma Art. 11</span>",
    tags: ["falta", "dia todo", "desconto", "pecúnia"],
  },

  // =============================================================
  // 5. CASOS ESPECÍFICOS E PROFISSÕES
  // =============================================================
  {
    q: "Como funciona a pausa para amamentação?",
    a: "São dois intervalos de 30 minutos cada, concedidos até o filho completar 6 meses de idade. (Regra geral CLT).",
    tags: ["amamentação", "mãe", "30 minutos", "filho"],
  },
  {
    q: "Operadores de Telemarketing têm pausas especiais?",
    a: "Sim. Geralmente 2 pausas de 10 minutos e um intervalo de 20 minutos para refeição (NR-17).",
    tags: ["telemarketing", "call center", "nr17"],
  },
  {
    q: "Digitadores têm direito a pausa?",
    a: "Sim, 10 minutos de pausa a cada 90 minutos trabalhados, computados como tempo de serviço (NR-17).",
    tags: ["digitador", "90 minutos", "ler"],
  },
  {
    q: "Pausa para café é obrigatória por lei?",
    a: "Não. Pequenas pausas para café são concessões da empresa/costume, não exigências legais.",
    tags: ["café", "cafezinho", "obrigatório"],
  },
  {
    q: "Posso somar as pausas de café e sair mais cedo?",
    a: "Não. Essas pausas não são redutores de jornada oficiais e não podem ser acumuladas para saída antecipada.",
    tags: ["somar", "café", "sair cedo"],
  },

  // =============================================================
  // 6. SUPRESSÃO, CONSEQUÊNCIAS E GESTÃO
  // =============================================================
  {
    q: "O que significa 'natureza indenizatória' do intervalo?",
    a: "Significa que o valor pago pelo intervalo não gozado não incide em FGTS ou INSS (Mudança da Reforma 2017). <span class='cite-badge' data-pdf='norma' data-page='3'>Norma Art. 3º</span>",
    tags: ["indenizatória", "natureza", "reflexos"],
  },
  {
    q: "Se eu tirar 40 min de almoço (deveria ser 1h), recebo quanto?",
    a: "A empresa deve indenizar apenas os 20 minutos suprimidos com adicional de 50%.",
    tags: ["parcial", "40 minutos", "cálculo"],
  },
  {
    q: "Onde denunciar descumprimento de intervalos?",
    a: "Canais internos (Ouvidoria/Compliance), Sindicato ou Ministério do Trabalho e Emprego.",
    tags: ["denúncia", "ouvidoria", "descumprimento"],
  },
  {
    q: "Como provar que não tive intervalo?",
    a: "Através dos registros de ponto (se fidedignos), testemunhas ou e-mails/mensagens enviadas durante o horário de pausa.",
    tags: ["prova", "testemunha", "jurídico"],
  },
  {
    q: "Trabalho 12h direto sem pausa, é legal?",
    a: "Não. Mesmo em jornadas longas ou escalas, a pausa para alimentação é norma de saúde obrigatória.",
    tags: ["12 horas", "direto", "sem pausa"],
  },
  {
    q: "Posso vender meu intervalo de almoço?",
    a: "Não. Diferente das férias, não existe previsão legal para 'venda' (abono pecuniário) do intervalo intrajornada.",
    tags: ["venda", "vender", "dinheiro"],
  },

  // =============================================================
  // 7. REGRAS DE REGISTRO (NORMA CAERN)
  // =============================================================
  {
    q: "Quantas vezes o gestor pode ajustar meu ponto por esquecimento?",
    a: "Até 4 vezes no mês. Acima disso, gera notificação à gerência. <span class='cite-badge' data-pdf='norma' data-page='3'>Norma Art. 7º</span>",
    tags: ["esquecimento", "ajuste", "4 vezes"],
  },
  {
    q: "O sistema de ponto caiu. Como registrar?",
    a: "Deve-se utilizar excepcionalmente a Folha de Frequência manual. <span class='cite-badge' data-pdf='norma' data-page='4'>Norma Art. 8º</span>",
    tags: ["sistema", "queda", "manual"],
  },
  {
    q: "Qual o prazo para comunicar ocorrências no ponto?",
    a: "Até 48h antes do fato (previsíveis) ou 24h após (imprevisíveis). <span class='cite-badge' data-pdf='norma' data-page='5'>Norma Art. 12</span>",
    tags: ["prazo", "comunicar", "justificativa"],
  },
  {
    q: "O patrão pode exigir que eu use o celular no almoço?",
    a: "Não. O intervalo é tempo de livre disposição do empregado. Exigir trabalho (mesmo remoto) configura tempo à disposição.",
    tags: ["celular", "whatsapp", "livre"],
  },
];