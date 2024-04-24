type Forms = {
  eu: string
  tu: string
  ele: string
  nos: string
  eles: string
}

type WORD = {
  infinitive: string
  regular: boolean
  translation: string
  present: Forms
  perfeito: Forms
  imperfeito: Forms
}

const verbs: WORD[] = [
  {
    infinitive: 'haver',
    regular: false,
    translation: 'бути, існувати',
    present: { eu: 'hei', tu: 'hás', ele: 'há', nos: 'havemos', eles: 'hão' },
    perfeito: { eu: 'houve', tu: 'houveste', ele: 'houve', nos: 'houvemos', eles: 'houveram' },
    imperfeito: { eu: 'havia', tu: 'havias', ele: 'havia', nos: 'havíamos', eles: 'haviam' },
  },
  {
    infinitive: 'trazer',
    regular: false,
    translation: 'принести',
    present: { eu: 'trago', tu: 'trazes', ele: 'traz', nos: 'trazemos', eles: 'trazem' },
    perfeito: { eu: 'trouxe', tu: 'trouxeste', ele: 'trouxe', nos: 'trouxemos', eles: 'trouxeram' },
    imperfeito: { eu: 'trazia', tu: 'trazias', ele: 'trazia', nos: 'trazíamos', eles: 'traziam' },
  },
  {
    infinitive: 'querer',
    regular: false,
    translation: 'хотіти',
    present: { eu: 'quero', tu: 'queres', ele: 'quer', nos: 'queremos', eles: 'querem' },
    perfeito: { eu: 'quis', tu: 'quiseste', ele: 'quis', nos: 'quisemos', eles: 'quiseram' },
    imperfeito: { eu: 'queria', tu: 'querias', ele: 'queria', nos: 'queríamos', eles: 'queriam' },
  },
  {
    infinitive: 'saber',
    regular: false,
    translation: 'знати',
    present: { eu: 'sei', tu: 'sabes', ele: 'sabe', nos: 'sabemos', eles: 'sabem' },
    perfeito: { eu: 'soube', tu: 'soubeste', ele: 'soube', nos: 'soubemos', eles: 'souberam' },
    imperfeito: { eu: 'sabia', tu: 'sabias', ele: 'sabia', nos: 'sabíamos', eles: 'sabiam' },
  },
  {
    infinitive: 'poder',
    regular: false,
    translation: 'могти, мати можливість',
    present: { eu: 'posso', tu: 'podes', ele: 'pode', nos: 'podemos', eles: 'podem' },
    perfeito: { eu: 'pude', tu: 'pudeste', ele: 'pôde', nos: 'pudemos', eles: 'puderam' },
    imperfeito: { eu: 'podia', tu: 'podias', ele: 'podia', nos: 'podíamos', eles: 'podiam' },
  },
  {
    infinitive: 'ficar',
    regular: true,
    translation: 'залишатися, ставати',
    present: { eu: 'fico', tu: 'ficas', ele: 'fica', nos: 'ficamos', eles: 'ficam' },
    perfeito: { eu: 'fiquei', tu: 'ficaste', ele: 'ficou', nos: 'ficamos', eles: 'ficaram' },
    imperfeito: { eu: 'ficava', tu: 'ficavas', ele: 'ficava', nos: 'ficávamos', eles: 'ficavam' },
  },
  {
    infinitive: 'acreditar',
    regular: true,
    translation: 'вірити',
    present: { eu: 'acredito', tu: 'acreditas', ele: 'acredita', nos: 'acreditamos', eles: 'acreditam' },
    perfeito: { eu: 'acreditei', tu: 'acreditaste', ele: 'acreditou', nos: 'acreditamos', eles: 'acreditaram' },
    imperfeito: { eu: 'acreditava', tu: 'acreditavas', ele: 'acreditava', nos: 'acreditávamos', eles: 'acreditavam' },
  },
  {
    infinitive: 'comer',
    regular: true,
    translation: 'їсти',
    present: { eu: 'como', tu: 'comes', ele: 'come', nos: 'comemos', eles: 'comem' },
    perfeito: { eu: 'comi', tu: 'comeste', ele: 'comeu', nos: 'comemos', eles: 'comeram' },
    imperfeito: { eu: 'comia', tu: 'comias', ele: 'comia', nos: 'comíamos', eles: 'comiam' },
  },
  {
    infinitive: 'beber',
    regular: true,
    translation: 'пити',
    present: { eu: 'bebo', tu: 'bebes', ele: 'bebe', nos: 'bebemos', eles: 'bebem' },
    perfeito: { eu: 'bebi', tu: 'bebeste', ele: 'bebeu', nos: 'bebemos', eles: 'beberam' },
    imperfeito: { eu: 'bebia', tu: 'bebias', ele: 'bebia', nos: 'bebíamos', eles: 'bebiam' },
  },
  {
    infinitive: 'correr',
    regular: true,
    translation: 'бігти',
    present: { eu: 'corro', tu: 'corres', ele: 'corre', nos: 'corremos', eles: 'correm' },
    perfeito: { eu: 'corri', tu: 'correste', ele: 'correu', nos: 'corremos', eles: 'correram' },
    imperfeito: { eu: 'corria', tu: 'corrias', ele: 'corria', nos: 'corríamos', eles: 'corriam' },
  },
  {
    infinitive: 'abrir',
    regular: true,
    translation: 'відкривати',
    present: { eu: 'abro', tu: 'abres', ele: 'abre', nos: 'abrimos', eles: 'abrem' },
    perfeito: { eu: 'abri', tu: 'abriste', ele: 'abriu', nos: 'abrimos', eles: 'abriram' },
    imperfeito: { eu: 'abria', tu: 'abrias', ele: 'abria', nos: 'abríamos', eles: 'abriam' },
  },
  {
    infinitive: 'fechar',
    regular: true,
    translation: 'закривати',
    present: { eu: 'fecho', tu: 'fechas', ele: 'fecha', nos: 'fechamos', eles: 'fecham' },
    perfeito: { eu: 'fechei', tu: 'fechaste', ele: 'fechou', nos: 'fechamos', eles: 'fecharam' },
    imperfeito: { eu: 'fechava', tu: 'fechavas', ele: 'fechava', nos: 'fechávamos', eles: 'fechavam' },
  },
  {
    infinitive: 'passar',
    regular: true,
    translation: 'проходити',
    present: { eu: 'passo', tu: 'passas', ele: 'passa', nos: 'passamos', eles: 'passam' },
    perfeito: { eu: 'passei', tu: 'passaste', ele: 'passou', nos: 'passamos', eles: 'passaram' },
    imperfeito: { eu: 'passava', tu: 'passavas', ele: 'passava', nos: 'passávamos', eles: 'passavam' },
  },
  {
    infinitive: 'conseguir',
    regular: false,
    translation: 'зуміти',
    present: { eu: 'consigo', tu: 'consegues', ele: 'consegue', nos: 'conseguimos', eles: 'conseguem' },
    perfeito: { eu: 'consegui', tu: 'conseguiste', ele: 'conseguiu', nos: 'conseguimos', eles: 'conseguiram' },
    imperfeito: { eu: 'conseguia', tu: 'conseguias', ele: 'conseguia', nos: 'conseguíamos', eles: 'conseguiam' },
  },
  {
    infinitive: 'acabar',
    regular: true,
    translation: 'закінчувати',
    present: { eu: 'acabo', tu: 'acabas', ele: 'acaba', nos: 'acabamos', eles: 'acabam' },
    perfeito: { eu: 'acabei', tu: 'acabaste', ele: 'acabou', nos: 'acabamos', eles: 'acabaram' },
    imperfeito: { eu: 'acabava', tu: 'acabavas', ele: 'acabava', nos: 'acabávamos', eles: 'acabavam' },
  },
  {
    infinitive: 'lembrar',
    regular: true,
    translation: 'пам’ятати, згадувати',
    present: { eu: 'lembro', tu: 'lembras', ele: 'lembra', nos: 'lembramos', eles: 'lembram' },
    perfeito: { eu: 'lembrei', tu: 'lembraste', ele: 'lembrou', nos: 'lembramos', eles: 'lembraram' },
    imperfeito: { eu: 'lembrava', tu: 'lembravas', ele: 'lembrava', nos: 'lembrávamos', eles: 'lembravam' },
  },
  {
    infinitive: 'esquecer',
    regular: false,
    translation: 'забувати',
    present: { eu: 'esqueço', tu: 'esqueces', ele: 'esquece', nos: 'esquecemos', eles: 'esquecem' },
    perfeito: { eu: 'esqueci', tu: 'esqueceste', ele: 'esqueceu', nos: 'esquecemos', eles: 'esqueceram' },
    imperfeito: { eu: 'esquecia', tu: 'esquecias', ele: 'esquecia', nos: 'esquecíamos', eles: 'esqueciam' },
  },
  {
    infinitive: 'ouvir',
    regular: true,
    translation: 'слухати',
    present: { eu: 'ouço', tu: 'ouves', ele: 'ouve', nos: 'ouvimos', eles: 'ouvem' },
    perfeito: { eu: 'ouvi', tu: 'ouviste', ele: 'ouviu', nos: 'ouvimos', eles: 'ouviram' },
    imperfeito: { eu: 'ouvia', tu: 'ouvias', ele: 'ouvia', nos: 'ouvíamos', eles: 'ouviam' },
  },
  {
    infinitive: 'pedir',
    regular: false,
    translation: 'просити',
    present: { eu: 'peço', tu: 'pedes', ele: 'pede', nos: 'pedimos', eles: 'pedem' },
    perfeito: { eu: 'pedi', tu: 'pediste', ele: 'pediu', nos: 'pedimos', eles: 'pediram' },
    imperfeito: { eu: 'pedia', tu: 'pedias', ele: 'pedia', nos: 'pedíamos', eles: 'pediam' },
  },
  {
    infinitive: 'receber',
    regular: true,
    translation: 'отримувати',
    present: { eu: 'recebo', tu: 'recebes', ele: 'recebe', nos: 'recebemos', eles: 'recebem' },
    perfeito: { eu: 'recebi', tu: 'recebeste', ele: 'recebeu', nos: 'recebemos', eles: 'receberam' },
    imperfeito: { eu: 'recebia', tu: 'recebias', ele: 'recebia', nos: 'recebíamos', eles: 'recebiam' },
  },
  {
    infinitive: 'perder',
    regular: true,
    translation: 'втрачати',
    present: { eu: 'perco', tu: 'perdes', ele: 'perde', nos: 'perdemos', eles: 'perdem' },
    perfeito: { eu: 'perdi', tu: 'perdeste', ele: 'perdeu', nos: 'perdemos', eles: 'perderam' },
    imperfeito: { eu: 'perdia', tu: 'perdias', ele: 'perdia', nos: 'perdíamos', eles: 'perdiam' },
  },
  {
    infinitive: 'ganhar',
    regular: true,
    translation: 'вигравати, заробляти',
    present: { eu: 'ganho', tu: 'ganhas', ele: 'ganha', nos: 'ganhamos', eles: 'ganham' },
    perfeito: { eu: 'ganhei', tu: 'ganhaste', ele: 'ganhou', nos: 'ganhamos', eles: 'ganharam' },
    imperfeito: { eu: 'ganhava', tu: 'ganhavas', ele: 'ganhava', nos: 'ganhávamos', eles: 'ganhavam' },
  },
  {
    infinitive: 'encontrar',
    regular: true,
    translation: 'знаходити',
    present: { eu: 'encontro', tu: 'encontras', ele: 'encontra', nos: 'encontramos', eles: 'encontram' },
    perfeito: { eu: 'encontrei', tu: 'encontraste', ele: 'encontrou', nos: 'encontramos', eles: 'encontraram' },
    imperfeito: { eu: 'encontrava', tu: 'encontravas', ele: 'encontrava', nos: 'encontrávamos', eles: 'encontravam' },
  },
  {
    infinitive: 'tentar',
    regular: true,
    translation: 'спробувати',
    present: { eu: 'tento', tu: 'tentas', ele: 'tenta', nos: 'tentamos', eles: 'tentam' },
    perfeito: { eu: 'tentei', tu: 'tentaste', ele: 'tentou', nos: 'tentamos', eles: 'tentaram' },
    imperfeito: { eu: 'tentava', tu: 'tentavas', ele: 'tentava', nos: 'tentávamos', eles: 'tentavam' },
  },
  {
    infinitive: 'usar',
    regular: true,
    translation: 'використовувати',
    present: { eu: 'uso', tu: 'usas', ele: 'usa', nos: 'usamos', eles: 'usam' },
    perfeito: { eu: 'usei', tu: 'usaste', ele: 'usou', nos: 'usamos', eles: 'usaram' },
    imperfeito: { eu: 'usava', tu: 'usavas', ele: 'usava', nos: 'usávamos', eles: 'usavam' },
  },
  {
    infinitive: 'trabalhar',
    regular: true,
    translation: 'працювати',
    present: { eu: 'trabalho', tu: 'trabalhas', ele: 'trabalha', nos: 'trabalhamos', eles: 'trabalham' },
    perfeito: { eu: 'trabalhei', tu: 'trabalhaste', ele: 'trabalhou', nos: 'trabalhamos', eles: 'trabalharam' },
    imperfeito: { eu: 'trabalhava', tu: 'trabalhavas', ele: 'trabalhava', nos: 'trabalhávamos', eles: 'trabalhavam' },
  },
  {
    infinitive: 'chamar',
    regular: true,
    translation: 'називати/кликати',
    present: { eu: 'chamo', tu: 'chamas', ele: 'chama', nos: 'chamamos', eles: 'chamam' },
    perfeito: { eu: 'chamei', tu: 'chamaste', ele: 'chamou', nos: 'chamamos', eles: 'chamaram' },
    imperfeito: { eu: 'chamava', tu: 'chamavas', ele: 'chamava', nos: 'chamávamos', eles: 'chamavam' },
  },
  {
    infinitive: 'morrer',
    regular: false,
    translation: 'померти',
    present: { eu: 'morro', tu: 'morres', ele: 'morre', nos: 'morremos', eles: 'morrem' },
    perfeito: { eu: 'morri', tu: 'morreste', ele: 'morreu', nos: 'morremos', eles: 'morreram' },
    imperfeito: { eu: 'morria', tu: 'morrias', ele: 'morria', nos: 'morríamos', eles: 'morriam' },
  },
  {
    infinitive: 'nascer',
    regular: false,
    translation: 'народитися',
    present: { eu: 'nasço', tu: 'nasces', ele: 'nasce', nos: 'nascemos', eles: 'nascem' },
    perfeito: { eu: 'nasci', tu: 'nasceste', ele: 'nasceu', nos: 'nascemos', eles: 'nasceram' },
    imperfeito: { eu: 'nascia', tu: 'nascias', ele: 'nascia', nos: 'nascíamos', eles: 'nasciam' },
  },
  {
    infinitive: 'escrever',
    regular: false,
    translation: 'писати',
    present: { eu: 'escrevo', tu: 'escreves', ele: 'escreve', nos: 'escrevemos', eles: 'escrevem' },
    perfeito: { eu: 'escrevi', tu: 'escreveste', ele: 'escreveu', nos: 'escrevemos', eles: 'escreveram' },
    imperfeito: { eu: 'escrevia', tu: 'escrevias', ele: 'escrevia', nos: 'escrevíamos', eles: 'escreviam' },
  },
  {
    infinitive: 'ler',
    regular: false,
    translation: 'читати',
    present: { eu: 'leio', tu: 'lês', ele: 'lê', nos: 'lemos', eles: 'leem' },
    perfeito: { eu: 'li', tu: 'leste', ele: 'leu', nos: 'lemos', eles: 'leram' },
    imperfeito: { eu: 'lia', tu: 'lias', ele: 'lia', nos: 'líamos', eles: 'liam' },
  },
  {
    infinitive: 'vender',
    regular: true,
    translation: 'продавати',
    present: { eu: 'vendo', tu: 'vendes', ele: 'vende', nos: 'vendemos', eles: 'vendem' },
    perfeito: { eu: 'vendi', tu: 'vendeste', ele: 'vendeu', nos: 'vendemos', eles: 'venderam' },
    imperfeito: { eu: 'vendia', tu: 'vendias', ele: 'vendia', nos: 'vendíamos', eles: 'vendiam' },
  },
  {
    infinitive: 'comprar',
    regular: true,
    translation: 'купувати',
    present: { eu: 'compro', tu: 'compras', ele: 'compra', nos: 'compramos', eles: 'compram' },
    perfeito: { eu: 'comprei', tu: 'compraste', ele: 'comprou', nos: 'compramos', eles: 'compraram' },
    imperfeito: { eu: 'comprava', tu: 'compravas', ele: 'comprava', nos: 'comprávamos', eles: 'compravam' },
  },
  {
    infinitive: 'ajudar',
    regular: true,
    translation: 'допомагати',
    present: { eu: 'ajudo', tu: 'ajudas', ele: 'ajuda', nos: 'ajudamos', eles: 'ajudam' },
    perfeito: { eu: 'ajudei', tu: 'ajudaste', ele: 'ajudou', nos: 'ajudamos', eles: 'ajudaram' },
    imperfeito: { eu: 'ajudava', tu: 'ajudavas', ele: 'ajudava', nos: 'ajudávamos', eles: 'ajudavam' },
  },
  {
    infinitive: 'gostar',
    regular: true,
    translation: 'любити, подобатися',
    present: { eu: 'gosto', tu: 'gostas', ele: 'gosta', nos: 'gostamos', eles: 'gostam' },
    perfeito: { eu: 'gostei', tu: 'gostaste', ele: 'gostou', nos: 'gostamos', eles: 'gostaram' },
    imperfeito: { eu: 'gostava', tu: 'gostavas', ele: 'gostava', nos: 'gostávamos', eles: 'gostavam' },
  },
  {
    infinitive: 'decidir',
    regular: true,
    translation: 'вирішувати',
    present: { eu: 'decido', tu: 'decides', ele: 'decide', nos: 'decidimos', eles: 'decidem' },
    perfeito: { eu: 'decidi', tu: 'decidiste', ele: 'decidiu', nos: 'decidimos', eles: 'decidiram' },
    imperfeito: { eu: 'decidia', tu: 'decidias', ele: 'decidia', nos: 'decidíamos', eles: 'decidiam' },
  },
  {
    infinitive: 'pagar',
    regular: true,
    translation: 'платити',
    present: { eu: 'pago', tu: 'pagas', ele: 'paga', nos: 'pagamos', eles: 'pagam' },
    perfeito: { eu: 'paguei', tu: 'pagaste', ele: 'pagou', nos: 'pagamos', eles: 'pagaram' },
    imperfeito: { eu: 'pagava', tu: 'pagavas', ele: 'pagava', nos: 'pagávamos', eles: 'pagavam' },
  },
  {
    infinitive: 'guardar',
    regular: true,
    translation: 'зберігати',
    present: { eu: 'guardo', tu: 'guardas', ele: 'guarda', nos: 'guardamos', eles: 'guardam' },
    perfeito: { eu: 'guardei', tu: 'guardaste', ele: 'guardou', nos: 'guardamos', eles: 'guardaram' },
    imperfeito: { eu: 'guardava', tu: 'guardavas', ele: 'guardava', nos: 'guardávamos', eles: 'guardavam' },
  },
  {
    infinitive: 'mudar',
    regular: true,
    translation: 'змінювати',
    present: { eu: 'mudo', tu: 'mudas', ele: 'muda', nos: 'mudamos', eles: 'mudam' },
    perfeito: { eu: 'mudei', tu: 'mudaste', ele: 'mudou', nos: 'mudamos', eles: 'mudaram' },
    imperfeito: { eu: 'mudava', tu: 'mudavas', ele: 'mudava', nos: 'mudávamos', eles: 'mudavam' },
  },
  {
    infinitive: 'oferecer',
    regular: false,
    translation: 'пропонувати',
    present: { eu: 'ofereço', tu: 'ofereces', ele: 'oferece', nos: 'oferecemos', eles: 'oferecem' },
    perfeito: { eu: 'ofereci', tu: 'ofereceste', ele: 'ofereceu', nos: 'oferecemos', eles: 'ofereceram' },
    imperfeito: { eu: 'oferecia', tu: 'oferecias', ele: 'oferecia', nos: 'oferecíamos', eles: 'ofereciam' },
  },
  {
    infinitive: 'recordar',
    regular: true,
    translation: 'згадувати',
    present: { eu: 'recordo', tu: 'recordas', ele: 'recorda', nos: 'recordamos', eles: 'recordam' },
    perfeito: { eu: 'recordei', tu: 'recordaste', ele: 'recordou', nos: 'recordamos', eles: 'recordaram' },
    imperfeito: { eu: 'recordava', tu: 'recordavas', ele: 'recordava', nos: 'recordávamos', eles: 'recordavam' },
  },
  {
    infinitive: 'sentar',
    regular: false,
    translation: 'сідати',
    present: { eu: 'sento', tu: 'sentas', ele: 'senta', nos: 'sentamos', eles: 'sentam' },
    perfeito: { eu: 'sentei', tu: 'sentaste', ele: 'sentou', nos: 'sentamos', eles: 'sentaram' },
    imperfeito: { eu: 'sentava', tu: 'sentavas', ele: 'sentava', nos: 'sentávamos', eles: 'sentavam' },
  },
  {
    infinitive: 'levantar',
    regular: true,
    translation: 'піднімати',
    present: { eu: 'levanto', tu: 'levantas', ele: 'levanta', nos: 'levantamos', eles: 'levantam' },
    perfeito: { eu: 'levantei', tu: 'levantaste', ele: 'levantou', nos: 'levantamos', eles: 'levantaram' },
    imperfeito: { eu: 'levantava', tu: 'levantavas', ele: 'levantava', nos: 'levantávamos', eles: 'levantavam' },
  },
  {
    infinitive: 'querer',
    regular: false,
    translation: 'хотіти',
    present: {
      eu: 'quero',
      tu: 'queres',
      ele: 'quer',
      nos: 'queremos',
      eles: 'querem',
    },
    perfeito: {
      eu: 'quis',
      tu: 'quiseste',
      ele: 'quis',
      nos: 'quisemos',
      eles: 'quiseram',
    },
    imperfeito: {
      eu: 'queria',
      tu: 'querias',
      ele: 'queria',
      nos: 'queríamos',
      eles: 'queriam',
    },
  },
  {
    infinitive: 'ficar',
    regular: true,
    translation: 'залишатися/ставати',
    present: {
      eu: 'fico',
      tu: 'ficas',
      ele: 'fica',
      nos: 'ficamos',
      eles: 'ficam',
    },
    perfeito: {
      eu: 'fiquei',
      tu: 'ficaste',
      ele: 'ficou',
      nos: 'ficamos',
      eles: 'ficaram',
    },
    imperfeito: {
      eu: 'ficava',
      tu: 'ficavas',
      ele: 'ficava',
      nos: 'ficávamos',
      eles: 'ficavam',
    },
  },
  {
    infinitive: 'dever',
    regular: true,
    translation: 'повинен',
    present: {
      eu: 'devo',
      tu: 'deves',
      ele: 'deve',
      nos: 'devemos',
      eles: 'devem',
    },
    perfeito: {
      eu: 'devei',
      tu: 'deveste',
      ele: 'deveu',
      nos: 'devemos',
      eles: 'deveram',
    },
    imperfeito: {
      eu: 'devia',
      tu: 'devias',
      ele: 'devia',
      nos: 'devíamos',
      eles: 'deviam',
    },
  },
  {
    infinitive: 'parecer',
    regular: true,
    translation: 'здаватися/виглядати',
    present: {
      eu: 'pareço',
      tu: 'pareces',
      ele: 'parece',
      nos: 'parecemos',
      eles: 'parecem',
    },
    perfeito: {
      eu: 'pareci',
      tu: 'pareceste',
      ele: 'pareceu',
      nos: 'parecemos',
      eles: 'pareceram',
    },
    imperfeito: {
      eu: 'parecia',
      tu: 'parecias',
      ele: 'parecia',
      nos: 'parecíamos',
      eles: 'pareciam',
    },
  },
  {
    infinitive: 'falar',
    regular: true,
    translation: 'говорити',
    present: {
      eu: 'falo',
      tu: 'falas',
      ele: 'fala',
      nos: 'falamos',
      eles: 'falam',
    },
    perfeito: {
      eu: 'falei',
      tu: 'falaste',
      ele: 'falou',
      nos: 'falamos',
      eles: 'falaram',
    },
    imperfeito: {
      eu: 'falava',
      tu: 'falavas',
      ele: 'falava',
      nos: 'falávamos',
      eles: 'falavam',
    },
  },
  {
    infinitive: 'deixar',
    regular: true,
    translation: 'залишати/дозволяти',
    present: {
      eu: 'deixo',
      tu: 'deixas',
      ele: 'deixa',
      nos: 'deixamos',
      eles: 'deixam',
    },
    perfeito: {
      eu: 'deixei',
      tu: 'deixaste',
      ele: 'deixou',
      nos: 'deixamos',
      eles: 'deixaram',
    },
    imperfeito: {
      eu: 'deixava',
      tu: 'deixavas',
      ele: 'deixava',
      nos: 'deixávamos',
      eles: 'deixavam',
    },
  },
  {
    infinitive: 'continuar',
    regular: true,
    translation: 'продовжувати',
    present: {
      eu: 'continuo',
      tu: 'continuas',
      ele: 'continua',
      nos: 'continuamos',
      eles: 'continuam',
    },
    perfeito: {
      eu: 'continuei',
      tu: 'continuaste',
      ele: 'continuou',
      nos: 'continuamos',
      eles: 'continuaram',
    },
    imperfeito: {
      eu: 'continuava',
      tu: 'continuavas',
      ele: 'continuava',
      nos: 'continuávamos',
      eles: 'continuavam',
    },
  },
  {
    infinitive: 'sentir',
    regular: false,
    translation: 'відчувати',
    present: {
      eu: 'sinto',
      tu: 'sentes',
      ele: 'sente',
      nos: 'sentimos',
      eles: 'sentem',
    },
    perfeito: {
      eu: 'senti',
      tu: 'sentiste',
      ele: 'sentiu',
      nos: 'sentimos',
      eles: 'sentiram',
    },
    imperfeito: {
      eu: 'sentia',
      tu: 'sentias',
      ele: 'sentia',
      nos: 'sentíamos',
      eles: 'sentiam',
    },
  },
  {
    infinitive: 'chegar',
    regular: true,
    translation: 'прибувати, досягати',
    present: {
      eu: 'chego',
      tu: 'chegas',
      ele: 'chega',
      nos: 'chegamos',
      eles: 'chegam',
    },
    perfeito: {
      eu: 'cheguei',
      tu: 'chegaste',
      ele: 'chegou',
      nos: 'chegamos',
      eles: 'chegaram',
    },
    imperfeito: {
      eu: 'chegava',
      tu: 'chegavas',
      ele: 'chegava',
      nos: 'chegávamos',
      eles: 'chegavam',
    },
  },
  {
    infinitive: 'andar',
    regular: true,
    translation: 'ходити, їздити',
    present: {
      eu: 'ando',
      tu: 'andas',
      ele: 'anda',
      nos: 'andamos',
      eles: 'andam',
    },
    perfeito: {
      eu: 'andei',
      tu: 'andaste',
      ele: 'andou',
      nos: 'andamos',
      eles: 'andaram',
    },
    imperfeito: {
      eu: 'andava',
      tu: 'andavas',
      ele: 'andava',
      nos: 'andávamos',
      eles: 'andavam',
    },
  },
  {
    infinitive: 'entrar',
    regular: true,
    translation: 'входити',
    present: {
      eu: 'entro',
      tu: 'entras',
      ele: 'entra',
      nos: 'entramos',
      eles: 'entram',
    },
    perfeito: {
      eu: 'entrei',
      tu: 'entraste',
      ele: 'entrou',
      nos: 'entramos',
      eles: 'entraram',
    },
    imperfeito: {
      eu: 'entrava',
      tu: 'entravas',
      ele: 'entrava',
      nos: 'entrávamos',
      eles: 'entravam',
    },
  },
  {
    infinitive: 'sair',
    regular: true,
    translation: 'виходити',
    present: {
      eu: 'saio',
      tu: 'sais',
      ele: 'sai',
      nos: 'saímos',
      eles: 'saem',
    },
    perfeito: {
      eu: 'saí',
      tu: 'saíste',
      ele: 'saiu',
      nos: 'saímos',
      eles: 'saíram',
    },
    imperfeito: {
      eu: 'saía',
      tu: 'saías',
      ele: 'saía',
      nos: 'saíamos',
      eles: 'saíam',
    },
  },
  {
    infinitive: 'voltar',
    regular: true,
    translation: 'повертатися',
    present: {
      eu: 'volto',
      tu: 'voltas',
      ele: 'volta',
      nos: 'voltamos',
      eles: 'voltam',
    },
    perfeito: {
      eu: 'voltei',
      tu: 'voltaste',
      ele: 'voltou',
      nos: 'voltamos',
      eles: 'voltaram',
    },
    imperfeito: {
      eu: 'voltava',
      tu: 'voltavas',
      ele: 'voltava',
      nos: 'voltávamos',
      eles: 'voltavam',
    },
  },
  {
    infinitive: 'precisar',
    regular: true,
    translation: 'потребувати',
    present: {
      eu: 'preciso',
      tu: 'precisas',
      ele: 'precisa',
      nos: 'precisamos',
      eles: 'precisam',
    },
    perfeito: {
      eu: 'precisei',
      tu: 'precisaste',
      ele: 'precisou',
      nos: 'precisamos',
      eles: 'precisaram',
    },
    imperfeito: {
      eu: 'precisava',
      tu: 'precisavas',
      ele: 'precisava',
      nos: 'precisávamos',
      eles: 'precisavam',
    },
  },
  {
    infinitive: 'esperar',
    regular: true,
    translation: 'очікувати',
    present: {
      eu: 'espero',
      tu: 'esperas',
      ele: 'espera',
      nos: 'esperamos',
      eles: 'esperam',
    },
    perfeito: {
      eu: 'esperei',
      tu: 'esperaste',
      ele: 'esperou',
      nos: 'esperamos',
      eles: 'esperaram',
    },
    imperfeito: {
      eu: 'esperava',
      tu: 'esperavas',
      ele: 'esperava',
      nos: 'esperávamos',
      eles: 'esperavam',
    },
  },
  {
    infinitive: 'olhar',
    regular: true,
    translation: 'дивитися',
    present: {
      eu: 'olho',
      tu: 'olhas',
      ele: 'olha',
      nos: 'olhamos',
      eles: 'olham',
    },
    perfeito: {
      eu: 'olhei',
      tu: 'olhaste',
      ele: 'olhou',
      nos: 'olhamos',
      eles: 'olharam',
    },
    imperfeito: {
      eu: 'olhava',
      tu: 'olhavas',
      ele: 'olhava',
      nos: 'olhávamos',
      eles: 'olhavam',
    },
  },
  {
    infinitive: 'pensar',
    regular: true,
    translation: 'думати',
    present: {
      eu: 'penso',
      tu: 'pensas',
      ele: 'pensa',
      nos: 'pensamos',
      eles: 'pensam',
    },
    perfeito: {
      eu: 'pensei',
      tu: 'pensaste',
      ele: 'pensou',
      nos: 'pensamos',
      eles: 'pensaram',
    },
    imperfeito: {
      eu: 'pensava',
      tu: 'pensavas',
      ele: 'pensava',
      nos: 'pensávamos',
      eles: 'pensavam',
    },
  },
  {
    infinitive: 'começar',
    regular: true,
    translation: 'починати',
    present: {
      eu: 'começo',
      tu: 'começas',
      ele: 'começa',
      nos: 'começamos',
      eles: 'começam',
    },
    perfeito: {
      eu: 'comecei',
      tu: 'começaste',
      ele: 'começou',
      nos: 'começamos',
      eles: 'começaram',
    },
    imperfeito: {
      eu: 'começava',
      tu: 'começavas',
      ele: 'começava',
      nos: 'começávamos',
      eles: 'começavam',
    },
  },
  {
    infinitive: 'conhecer',
    regular: false,
    translation: 'знати/пізнавати',
    present: {
      eu: 'conheço',
      tu: 'conheces',
      ele: 'conhece',
      nos: 'conhecemos',
      eles: 'conhecem',
    },
    perfeito: {
      eu: 'conheci',
      tu: 'conheceste',
      ele: 'conheceu',
      nos: 'conhecemos',
      eles: 'conheceram',
    },
    imperfeito: {
      eu: 'conhecia',
      tu: 'conhecias',
      ele: 'conhecia',
      nos: 'conhecíamos',
      eles: 'conheciam',
    },
  },
  {
    infinitive: 'viver',
    regular: true,
    translation: 'жити',
    present: {
      eu: 'vivo',
      tu: 'vives',
      ele: 'vive',
      nos: 'vivemos',
      eles: 'vivem',
    },
    perfeito: {
      eu: 'vivi',
      tu: 'viveste',
      ele: 'viveu',
      nos: 'vivemos',
      eles: 'viveram',
    },
    imperfeito: {
      eu: 'vivia',
      tu: 'vivias',
      ele: 'vivia',
      nos: 'vivíamos',
      eles: 'viviam',
    },
  },
  {
    infinitive: 'fazer',
    regular: false,
    translation: 'робити',
    present: {
      eu: 'faço',
      tu: 'fazes',
      ele: 'faz',
      nos: 'fazemos',
      eles: 'fazem',
    },
    perfeito: {
      eu: 'fiz',
      tu: 'fizeste',
      ele: 'fez',
      nos: 'fizemos',
      eles: 'fizeram',
    },
    imperfeito: {
      eu: 'fazia',
      tu: 'fazias',
      ele: 'fazia',
      nos: 'fazíamos',
      eles: 'faziam',
    },
  },
  {
    infinitive: 'dizer',
    regular: false,
    translation: 'казати',
    present: {
      eu: 'digo',
      tu: 'dizes',
      ele: 'diz',
      nos: 'dizemos',
      eles: 'dizem',
    },
    perfeito: {
      eu: 'disse',
      tu: 'disseste',
      ele: 'disse',
      nos: 'dissemos',
      eles: 'disseram',
    },
    imperfeito: {
      eu: 'dizia',
      tu: 'dizias',
      ele: 'dizia',
      nos: 'dizíamos',
      eles: 'diziam',
    },
  },
  {
    infinitive: 'vir',
    regular: false,
    translation: 'приходити',
    present: {
      eu: 'venho',
      tu: 'vens',
      ele: 'vem',
      nos: 'vimos',
      eles: 'vêm',
    },
    perfeito: {
      eu: 'vim',
      tu: 'veste',
      ele: 'veio',
      nos: 'viemos',
      eles: 'vieram',
    },
    imperfeito: {
      eu: 'vinha',
      tu: 'vinhas',
      ele: 'vinha',
      nos: 'vínhamos',
      eles: 'vinham',
    },
  },
  {
    infinitive: 'dar',
    regular: false,
    translation: 'давати',
    present: {
      eu: 'dou',
      tu: 'dás',
      ele: 'dá',
      nos: 'damos',
      eles: 'dão',
    },
    perfeito: {
      eu: 'dei',
      tu: 'deste',
      ele: 'deu',
      nos: 'demos',
      eles: 'deram',
    },
    imperfeito: {
      eu: 'dava',
      tu: 'davas',
      ele: 'dava',
      nos: 'dávamos',
      eles: 'davam',
    },
  },
  {
    infinitive: 'pôr',
    regular: false,
    translation: 'класти',
    present: {
      eu: 'ponho',
      tu: 'pões',
      ele: 'põe',
      nos: 'pomos',
      eles: 'põem',
    },
    perfeito: {
      eu: 'pus',
      tu: 'puseste',
      ele: 'pôs',
      nos: 'pusemos',
      eles: 'puseram',
    },
    imperfeito: {
      eu: 'punha',
      tu: 'punhas',
      ele: 'punha',
      nos: 'púnhamos',
      eles: 'punham',
    },
  },
  {
    infinitive: 'ver',
    regular: false,
    translation: 'бачити',
    present: {
      eu: 'vejo',
      tu: 'vês',
      ele: 'vê',
      nos: 'vemos',
      eles: 'veem',
    },
    perfeito: {
      eu: 'vi',
      tu: 'viste',
      ele: 'viu',
      nos: 'vimos',
      eles: 'viram',
    },
    imperfeito: {
      eu: 'via',
      tu: 'vias',
      ele: 'via',
      nos: 'víamos',
      eles: 'viam',
    },
  },
  {
    infinitive: 'ser',
    regular: false,
    translation: 'бути',
    present: {
      eu: 'sou',
      tu: 'és',
      ele: 'é',
      nos: 'somos',
      eles: 'são',
    },
    perfeito: {
      eu: 'fui',
      tu: 'foste',
      ele: 'foi',
      nos: 'fomos',
      eles: 'foram',
    },
    imperfeito: {
      eu: 'era',
      tu: 'eras',
      ele: 'era',
      nos: 'éramos',
      eles: 'eram',
    },
  },
  {
    infinitive: 'ir',
    regular: false,
    translation: 'йти',
    present: {
      eu: 'vou',
      tu: 'vais',
      ele: 'vai',
      nos: 'vamos',
      eles: 'vão',
    },
    perfeito: {
      eu: 'fui',
      tu: 'foste',
      ele: 'foi',
      nos: 'fomos',
      eles: 'foram',
    },
    imperfeito: {
      eu: 'ia',
      tu: 'ias',
      ele: 'ia',
      nos: 'íamos',
      eles: 'iam',
    },
  },
  {
    infinitive: 'ter',
    regular: false,
    translation: 'мати',
    present: {
      eu: 'tenho',
      tu: 'tens',
      ele: 'tem',
      nos: 'temos',
      eles: 'têm',
    },
    perfeito: {
      eu: 'tive',
      tu: 'tiveste',
      ele: 'teve',
      nos: 'tivemos',
      eles: 'tiveram',
    },
    imperfeito: {
      eu: 'tinha',
      tu: 'tinhas',
      ele: 'tinha',
      nos: 'tínhamos',
      eles: 'tinham',
    },
  },
  {
    infinitive: 'estar',
    regular: false,
    translation: 'бути',
    present: {
      eu: 'estou',
      tu: 'estás',
      ele: 'está',
      nos: 'estamos',
      eles: 'estão',
    },
    perfeito: {
      eu: 'estive',
      tu: 'estiveste',
      ele: 'esteve',
      nos: 'estivemos',
      eles: 'estiveram',
    },
    imperfeito: {
      eu: 'estava',
      tu: 'estavas',
      ele: 'estava',
      nos: 'estávamos',
      eles: 'estavam',
    },
  },
  {
    infinitive: 'conseguir',
    regular: false,
    translation: 'досягти',
    present: { eu: 'consigo', tu: 'consegues', ele: 'consegue', nos: 'conseguimos', eles: 'conseguem' },
    perfeito: { eu: 'consegui', tu: 'conseguiste', ele: 'conseguiu', nos: 'conseguimos', eles: 'conseguiram' },
    imperfeito: { eu: 'conseguia', tu: 'conseguias', ele: 'conseguia', nos: 'conseguíamos', eles: 'conseguiam' },
  },
  {
    infinitive: 'tentar',
    regular: true,
    translation: 'спробувати',
    present: { eu: 'tento', tu: 'tentas', ele: 'tenta', nos: 'tentamos', eles: 'tentam' },
    perfeito: { eu: 'tentei', tu: 'tentaste', ele: 'tentou', nos: 'tentamos', eles: 'tentaram' },
    imperfeito: { eu: 'tentava', tu: 'tentavas', ele: 'tentava', nos: 'tentávamos', eles: 'tentavam' },
  },
  {
    infinitive: 'começar',
    regular: true,
    translation: 'почати',
    present: { eu: 'começo', tu: 'começas', ele: 'começa', nos: 'começamos', eles: 'começam' },
    perfeito: { eu: 'comecei', tu: 'começaste', ele: 'começou', nos: 'começamos', eles: 'começaram' },
    imperfeito: { eu: 'começava', tu: 'começavas', ele: 'começava', nos: 'começávamos', eles: 'começavam' },
  },
  {
    infinitive: 'tornar-se',
    regular: false,
    translation: 'стати',
    present: { eu: 'torno-me', tu: 'tornas-te', ele: 'torna-se', nos: 'tornamo-nos', eles: 'tornam-se' },
    perfeito: { eu: 'tornei-me', tu: 'tornaste-te', ele: 'tornou-se', nos: 'tornamo-nos', eles: 'tornaram-se' },
    imperfeito: { eu: 'tornava-me', tu: 'tornavas-te', ele: 'tornava-se', nos: 'tornávamo-nos', eles: 'tornavam-se' },
  },
  {
    infinitive: 'achar',
    regular: true,
    translation: 'знайти',
    present: { eu: 'acho', tu: 'achas', ele: 'acha', nos: 'achamos', eles: 'acham' },
    perfeito: { eu: 'achei', tu: 'achaste', ele: 'achou', nos: 'achamos', eles: 'acharam' },
    imperfeito: { eu: 'achava', tu: 'achavas', ele: 'achava', nos: 'achávamos', eles: 'achavam' },
  },
  {
    infinitive: 'existir',
    regular: true,
    translation: 'існувати',
    present: { eu: 'existo', tu: 'existes', ele: 'existe', nos: 'existimos', eles: 'existem' },
    perfeito: { eu: 'existi', tu: 'exististe', ele: 'existiu', nos: 'existimos', eles: 'existiram' },
    imperfeito: { eu: 'existia', tu: 'existias', ele: 'existia', nos: 'existíamos', eles: 'existiam' },
  },
  {
    infinitive: 'considerar',
    regular: true,
    translation: 'розглядати',
    present: { eu: 'considero', tu: 'consideras', ele: 'considera', nos: 'consideramos', eles: 'consideram' },
    perfeito: { eu: 'considerei', tu: 'consideraste', ele: 'considerou', nos: 'consideramos', eles: 'consideraram' },
    imperfeito: { eu: 'considerava', tu: 'consideravas', ele: 'considerava', nos: 'considerávamos', eles: 'consideravam' },
  },
  {
    infinitive: 'tirar',
    regular: true,
    translation: 'взяти',
    present: { eu: 'tiro', tu: 'tiras', ele: 'tira', nos: 'tiramos', eles: 'tiram' },
    perfeito: { eu: 'tirei', tu: 'tiraste', ele: 'tirou', nos: 'tiramos', eles: 'tiraram' },
    imperfeito: { eu: 'tirava', tu: 'tiravas', ele: 'tirava', nos: 'tirávamos', eles: 'tiravam' },
  },
  {
    infinitive: 'criar',
    regular: true,
    translation: 'створити',
    present: { eu: 'crio', tu: 'crias', ele: 'cria', nos: 'criamos', eles: 'criam' },
    perfeito: { eu: 'criei', tu: 'criaste', ele: 'criou', nos: 'criamos', eles: 'criaram' },
    imperfeito: { eu: 'criava', tu: 'criavas', ele: 'criava', nos: 'criávamos', eles: 'criavam' },
  },
  {
    infinitive: 'matar',
    regular: true,
    translation: 'вбити',
    present: { eu: 'mato', tu: 'matas', ele: 'mata', nos: 'matamos', eles: 'matam' },
    perfeito: { eu: 'matei', tu: 'mataste', ele: 'matou', nos: 'matamos', eles: 'mataram' },
    imperfeito: { eu: 'matava', tu: 'matavas', ele: 'matava', nos: 'matávamos', eles: 'matavam' },
  },
  {
    infinitive: 'tomar',
    regular: true,
    translation: 'взяти',
    present: { eu: 'tomo', tu: 'tomas', ele: 'toma', nos: 'tomamos', eles: 'tomam' },
    perfeito: { eu: 'tomei', tu: 'tomaste', ele: 'tomou', nos: 'tomamos', eles: 'tomaram' },
    imperfeito: { eu: 'tomava', tu: 'tomavas', ele: 'tomava', nos: 'tomávamos', eles: 'tomavam' },
  },
  {
    infinitive: 'andar',
    regular: true,
    translation: 'ходити',
    present: { eu: 'ando', tu: 'andas', ele: 'anda', nos: 'andamos', eles: 'andam' },
    perfeito: { eu: 'andei', tu: 'andaste', ele: 'andou', nos: 'andamos', eles: 'andaram' },
    imperfeito: { eu: 'andava', tu: 'andavas', ele: 'andava', nos: 'andávamos', eles: 'andavam' },
  },
  {
    infinitive: 'nadar',
    regular: true,
    translation: 'плавати',
    present: { eu: 'nado', tu: 'nadas', ele: 'nada', nos: 'nadamos', eles: 'nadam' },
    perfeito: { eu: 'nadei', tu: 'nadaste', ele: 'nadou', nos: 'nadamos', eles: 'nadaram' },
    imperfeito: { eu: 'nadava', tu: 'nadavas', ele: 'nadava', nos: 'nadávamos', eles: 'nadavam' },
  },
  {
    infinitive: 'voar',
    regular: true,
    translation: 'летіти',
    present: { eu: 'voo', tu: 'voas', ele: 'voa', nos: 'voamos', eles: 'voam' },
    perfeito: { eu: 'voei', tu: 'voaste', ele: 'voou', nos: 'voamos', eles: 'voaram' },
    imperfeito: { eu: 'voava', tu: 'voavas', ele: 'voava', nos: 'voávamos', eles: 'voavam' },
  },
  {
    infinitive: 'perguntar',
    regular: true,
    translation: 'питати',
    present: { eu: 'pergunto', tu: 'perguntas', ele: 'pergunta', nos: 'perguntamos', eles: 'perguntam' },
    perfeito: { eu: 'perguntei', tu: 'perguntaste', ele: 'perguntou', nos: 'perguntamos', eles: 'perguntaram' },
    imperfeito: { eu: 'perguntava', tu: 'perguntavas', ele: 'perguntava', nos: 'perguntávamos', eles: 'perguntavam' },
  },
  {
    infinitive: 'responder',
    regular: true,
    translation: 'відповідати',
    present: { eu: 'respondo', tu: 'respondes', ele: 'responde', nos: 'respondemos', eles: 'respondem' },
    perfeito: { eu: 'respondi', tu: 'respondeste', ele: 'respondeu', nos: 'respondemos', eles: 'responderam' },
    imperfeito: { eu: 'respondia', tu: 'respondias', ele: 'respondia', nos: 'respondíamos', eles: 'respondiam' },
  },
  {
    infinitive: 'contar',
    regular: true,
    translation: 'рахувати',
    present: { eu: 'conto', tu: 'contas', ele: 'conta', nos: 'contamos', eles: 'contam' },
    perfeito: { eu: 'contei', tu: 'contaste', ele: 'contou', nos: 'contamos', eles: 'contaram' },
    imperfeito: { eu: 'contava', tu: 'contavas', ele: 'contava', nos: 'contávamos', eles: 'contavam' },
  },
  {
    infinitive: 'afirmar',
    regular: true,
    translation: 'стверджувати',
    present: { eu: 'afirmo', tu: 'afirmas', ele: 'afirma', nos: 'afirmamos', eles: 'afirmam' },
    perfeito: { eu: 'afirmei', tu: 'afirmaste', ele: 'afirmou', nos: 'afirmamos', eles: 'afirmaram' },
    imperfeito: { eu: 'afirmava', tu: 'afirmavas', ele: 'afirmava', nos: 'afirmávamos', eles: 'afirmavam' },
  },
  {
    infinitive: 'acontecer',
    regular: true,
    translation: 'відбуватися',
    present: { eu: 'aconteço', tu: 'aconteces', ele: 'acontece', nos: 'acontecemos', eles: 'acontecem' },
    perfeito: { eu: 'aconteci', tu: 'aconteceste', ele: 'aconteceu', nos: 'acontecemos', eles: 'aconteceram' },
    imperfeito: { eu: 'acontecia', tu: 'acontecias', ele: 'acontecia', nos: 'acontecíamos', eles: 'aconteciam' },
  },
  {
    infinitive: 'tratar',
    regular: true,
    translation: 'лікувати',
    present: { eu: 'trato', tu: 'tratas', ele: 'trata', nos: 'tratamos', eles: 'tratam' },
    perfeito: { eu: 'tratei', tu: 'trataste', ele: 'tratou', nos: 'tratamos', eles: 'trataram' },
    imperfeito: { eu: 'tratava', tu: 'tratavas', ele: 'tratava', nos: 'tratávamos', eles: 'tratavam' },
  },
  {
    infinitive: 'adorar',
    regular: true,
    translation: 'обожнювати',
    present: { eu: 'adoro', tu: 'adoras', ele: 'adora', nos: 'adoramos', eles: 'adoram' },
    perfeito: { eu: 'adorei', tu: 'adoraste', ele: 'adorou', nos: 'adoramos', eles: 'adoraram' },
    imperfeito: { eu: 'adorava', tu: 'adoravas', ele: 'adorava', nos: 'adorávamos', eles: 'adoravam' },
  },
  {
    infinitive: 'amar',
    regular: true,
    translation: 'кохати',
    present: { eu: 'amo', tu: 'amas', ele: 'ama', nos: 'amamos', eles: 'amam' },
    perfeito: { eu: 'amei', tu: 'amaste', ele: 'amou', nos: 'amamos', eles: 'amaram' },
    imperfeito: { eu: 'amava', tu: 'amavas', ele: 'amava', nos: 'amávamos', eles: 'amavam' },
  },
  {
    infinitive: 'odiar',
    regular: true,
    translation: 'ненавидіти',
    present: { eu: 'odeio', tu: 'odeias', ele: 'odeia', nos: 'odiamos', eles: 'odeiam' },
    perfeito: { eu: 'odiei', tu: 'odiaste', ele: 'odiou', nos: 'odiamos', eles: 'odiaram' },
    imperfeito: { eu: 'odiava', tu: 'odiavas', ele: 'odiava', nos: 'odiávamos', eles: 'odiavam' },
  },
  {
    infinitive: 'realizar',
    regular: true,
    translation: 'реалізувати',
    present: { eu: 'realizo', tu: 'realizas', ele: 'realiza', nos: 'realizamos', eles: 'realizam' },
    perfeito: { eu: 'realizei', tu: 'realizaste', ele: 'realizou', nos: 'realizamos', eles: 'realizaram' },
    imperfeito: { eu: 'realizava', tu: 'realizavas', ele: 'realizava', nos: 'realizávamos', eles: 'realizavam' },
  },
  {
    infinitive: 'mostrar',
    regular: true,
    translation: 'показувати',
    present: { eu: 'mostro', tu: 'mostras', ele: 'mostra', nos: 'mostramos', eles: 'mostram' },
    perfeito: { eu: 'mostrei', tu: 'mostraste', ele: 'mostrou', nos: 'mostramos', eles: 'mostraram' },
    imperfeito: { eu: 'mostrava', tu: 'mostravas', ele: 'mostrava', nos: 'mostrávamos', eles: 'mostravam' },
  },
  {
    infinitive: 'esconder',
    regular: true,
    translation: 'ховати',
    present: { eu: 'escondo', tu: 'escondes', ele: 'esconde', nos: 'escondemos', eles: 'escondem' },
    perfeito: { eu: 'escondi', tu: 'escondeste', ele: 'escondeu', nos: 'escondemos', eles: 'esconderam' },
    imperfeito: { eu: 'escondia', tu: 'escondias', ele: 'escondia', nos: 'escondíamos', eles: 'escondiam' },
  },
  {
    infinitive: 'formar',
    regular: true,
    translation: 'формувати',
    present: { eu: 'formo', tu: 'formas', ele: 'forma', nos: 'formamos', eles: 'formam' },
    perfeito: { eu: 'formei', tu: 'formaste', ele: 'formou', nos: 'formamos', eles: 'formaram' },
    imperfeito: { eu: 'formava', tu: 'formavas', ele: 'formava', nos: 'formávamos', eles: 'formavam' },
  },
  {
    infinitive: 'incluir',
    regular: true,
    translation: 'включати',
    present: { eu: 'incluo', tu: 'incluis', ele: 'inclui', nos: 'incluímos', eles: 'incluem' },
    perfeito: { eu: 'incluí', tu: 'incluíste', ele: 'incluiu', nos: 'incluímos', eles: 'incluíram' },
    imperfeito: { eu: 'incluía', tu: 'incluías', ele: 'incluía', nos: 'incluíamos', eles: 'incluíam' },
  },
  {
    infinitive: 'aparecer',
    regular: true,
    translation: 'зявлятися',
    present: { eu: 'apareço', tu: 'apareces', ele: 'aparece', nos: 'aparecemos', eles: 'aparecem' },
    perfeito: { eu: 'apareci', tu: 'apareceste', ele: 'apareceu', nos: 'aparecemos', eles: 'apareceram' },
    imperfeito: { eu: 'aparecia', tu: 'aparecias', ele: 'aparecia', nos: 'aparecíamos', eles: 'apareciam' },
  },
  {
    infinitive: 'desaparecer',
    regular: true,
    translation: 'зникати',
    present: { eu: 'desapareço', tu: 'desapareces', ele: 'desaparece', nos: 'desaparecemos', eles: 'desaparecem' },
    perfeito: { eu: 'desapareci', tu: 'desapareceste', ele: 'desapareceu', nos: 'desaparecemos', eles: 'desapareceram' },
    imperfeito: { eu: 'desaparecia', tu: 'desaparecias', ele: 'desaparecia', nos: 'desaparecíamos', eles: 'desapareciam' },
  },
  {
    infinitive: 'cair',
    regular: false,
    translation: 'падати',
    present: { eu: 'caio', tu: 'cais', ele: 'cai', nos: 'caímos', eles: 'caem' },
    perfeito: { eu: 'caí', tu: 'caíste', ele: 'caiu', nos: 'caímos', eles: 'caíram' },
    imperfeito: { eu: 'caía', tu: 'caías', ele: 'caía', nos: 'caíamos', eles: 'caíam' },
  },
  {
    infinitive: 'trabalhar',
    regular: true,
    translation: 'працювати',
    present: { eu: 'trabalho', tu: 'trabalhas', ele: 'trabalha', nos: 'trabalhamos', eles: 'trabalham' },
    perfeito: { eu: 'trabalhei', tu: 'trabalhaste', ele: 'trabalhou', nos: 'trabalhamos', eles: 'trabalharam' },
    imperfeito: { eu: 'trabalhava', tu: 'trabalhavas', ele: 'trabalhava', nos: 'trabalhávamos', eles: 'trabalhavam' },
  },
  {
    infinitive: 'estudar',
    regular: true,
    translation: 'вчити',
    present: { eu: 'estudo', tu: 'estudas', ele: 'estuda', nos: 'estudamos', eles: 'estudam' },
    perfeito: { eu: 'estudei', tu: 'estudaste', ele: 'estudou', nos: 'estudamos', eles: 'estudaram' },
    imperfeito: { eu: 'estudava', tu: 'estudavas', ele: 'estudava', nos: 'estudávamos', eles: 'estudavam' },
  },
  {
    infinitive: 'perceber',
    regular: true,
    translation: 'розуміти',
    present: { eu: 'percebo', tu: 'percebes', ele: 'percebe', nos: 'percebemos', eles: 'percebem' },
    perfeito: { eu: 'percebi', tu: 'percebeste', ele: 'percebeu', nos: 'percebemos', eles: 'perceberam' },
    imperfeito: { eu: 'percebia', tu: 'percebias', ele: 'percebia', nos: 'percebíamos', eles: 'percebiam' },
  },
  {
    infinitive: 'aprender',
    regular: true,
    translation: 'вчити',
    present: { eu: 'aprendo', tu: 'aprendes', ele: 'aprende', nos: 'aprendemos', eles: 'aprendem' },
    perfeito: { eu: 'aprendi', tu: 'aprendeste', ele: 'aprendeu', nos: 'aprendemos', eles: 'aprenderam' },
    imperfeito: { eu: 'aprendia', tu: 'aprendias', ele: 'aprendia', nos: 'aprendíamos', eles: 'aprendiam' },
  },
  {
    infinitive: 'ensinar',
    regular: true,
    translation: 'навчати',
    present: { eu: 'ensino', tu: 'ensinas', ele: 'ensina', nos: 'ensinamos', eles: 'ensinam' },
    perfeito: { eu: 'ensinei', tu: 'ensinaste', ele: 'ensinou', nos: 'ensinamos', eles: 'ensinaram' },
    imperfeito: { eu: 'ensinava', tu: 'ensinavas', ele: 'ensinava', nos: 'ensinávamos', eles: 'ensinavam' },
  },
  {
    infinitive: 'explicar',
    regular: true,
    translation: 'пояснювати',
    present: { eu: 'explico', tu: 'explicas', ele: 'explica', nos: 'explicamos', eles: 'explicam' },
    perfeito: { eu: 'expliquei', tu: 'explicaste', ele: 'explicou', nos: 'explicamos', eles: 'explicaram' },
    imperfeito: { eu: 'explicava', tu: 'explicavas', ele: 'explicava', nos: 'explicávamos', eles: 'explicavam' },
  },
  {
    infinitive: 'descobrir',
    regular: false,
    translation: 'відкривати',
    present: { eu: 'descubro', tu: 'descobres', ele: 'descobre', nos: 'descobrimos', eles: 'descobrem' },
    perfeito: { eu: 'descobri', tu: 'descobriste', ele: 'descobriu', nos: 'descobrimos', eles: 'descobriram' },
    imperfeito: { eu: 'descobria', tu: 'descobrias', ele: 'descobria', nos: 'descobríamos', eles: 'descobriam' },
  },
  {
    infinitive: 'desenvolver',
    regular: false,
    translation: 'розвивати',
    present: { eu: 'desenvolvo', tu: 'desenvolves', ele: 'desenvolve', nos: 'desenvolvemos', eles: 'desenvolvem' },
    perfeito: { eu: 'desenvolvi', tu: 'desenvolveste', ele: 'desenvolveu', nos: 'desenvolvemos', eles: 'desenvolveram' },
    imperfeito: { eu: 'desenvolvia', tu: 'desenvolvias', ele: 'desenvolvia', nos: 'desenvolvíamos', eles: 'desenvolviam' },
  },
  {
    infinitive: 'produzir',
    regular: false,
    translation: 'виробляти',
    present: { eu: 'produzo', tu: 'produzes', ele: 'produz', nos: 'produzimos', eles: 'produzem' },
    perfeito: { eu: 'produzi', tu: 'produziste', ele: 'produziu', nos: 'produzimos', eles: 'produziram' },
    imperfeito: { eu: 'produzia', tu: 'produzias', ele: 'produzia', nos: 'produzíamos', eles: 'produziam' },
  },
  {
    infinitive: 'parar',
    regular: true,
    translation: 'зупиняти',
    present: { eu: 'paro', tu: 'paras', ele: 'para', nos: 'paramos', eles: 'param' },
    perfeito: { eu: 'parei', tu: 'paraste', ele: 'parou', nos: 'paramos', eles: 'pararam' },
    imperfeito: { eu: 'parava', tu: 'paravas', ele: 'parava', nos: 'parávamos', eles: 'paravam' },
  },
  {
    infinitive: 'aumentar',
    regular: true,
    translation: 'збільшувати',
    present: { eu: 'aumento', tu: 'aumentas', ele: 'aumenta', nos: 'aumentamos', eles: 'aumentam' },
    perfeito: { eu: 'aumentei', tu: 'aumentaste', ele: 'aumentou', nos: 'aumentamos', eles: 'aumentaram' },
    imperfeito: { eu: 'aumentava', tu: 'aumentavas', ele: 'aumentava', nos: 'aumentávamos', eles: 'aumentavam' },
  },
  {
    infinitive: 'diminuir',
    regular: true,
    translation: 'зменшувати',
    present: { eu: 'diminuo', tu: 'diminuis', ele: 'diminui', nos: 'diminuímos', eles: 'diminuem' },
    perfeito: { eu: 'diminuí', tu: 'diminuíste', ele: 'diminuiu', nos: 'diminuímos', eles: 'diminuíram' },
    imperfeito: { eu: 'diminuía', tu: 'diminuías', ele: 'diminuía', nos: 'diminuíamos', eles: 'diminuíam' },
  },
  {
    infinitive: 'manter',
    regular: false,
    translation: 'підтримувати',
    present: { eu: 'mantenho', tu: 'manténs', ele: 'mantém', nos: 'mantemos', eles: 'mantêm' },
    perfeito: { eu: 'mantive', tu: 'mantiveste', ele: 'manteve', nos: 'mantivemos', eles: 'mantiveram' },
    imperfeito: { eu: 'mantinha', tu: 'mantinhas', ele: 'mantinha', nos: 'mantínhamos', eles: 'mantinham' },
  },
  {
    infinitive: 'defender',
    regular: true,
    translation: 'захищати',
    present: { eu: 'defendo', tu: 'defendes', ele: 'defende', nos: 'defendemos', eles: 'defendem' },
    perfeito: { eu: 'defendi', tu: 'defendeste', ele: 'defendeu', nos: 'defendemos', eles: 'defenderam' },
    imperfeito: { eu: 'defendia', tu: 'defendias', ele: 'defendia', nos: 'defendíamos', eles: 'defendiam' },
  },
  {
    infinitive: 'atacar',
    regular: true,
    translation: 'атакувати',
    present: { eu: 'ataco', tu: 'atacas', ele: 'ataca', nos: 'atacamos', eles: 'atacam' },
    perfeito: { eu: 'ataquei', tu: 'atacaste', ele: 'atacou', nos: 'atacamos', eles: 'atacaram' },
    imperfeito: { eu: 'atacava', tu: 'atacavas', ele: 'atacava', nos: 'atacávamos', eles: 'atacavam' },
  },
  {
    infinitive: 'bater',
    regular: false,
    translation: 'бити',
    present: { eu: 'bato', tu: 'bates', ele: 'bate', nos: 'batemos', eles: 'batem' },
    perfeito: { eu: 'bati', tu: 'bateste', ele: 'bateu', nos: 'batemos', eles: 'bateram' },
    imperfeito: { eu: 'batia', tu: 'batias', ele: 'batia', nos: 'batíamos', eles: 'batiam' },
  },
  {
    infinitive: 'duvidar',
    regular: true,
    translation: 'сумніватися',
    present: { eu: 'duvido', tu: 'duvidas', ele: 'duvida', nos: 'duvidamos', eles: 'duvidam' },
    perfeito: { eu: 'duvidei', tu: 'duvidaste', ele: 'duvidou', nos: 'duvidamos', eles: 'duvidaram' },
    imperfeito: { eu: 'duvidava', tu: 'duvidavas', ele: 'duvidava', nos: 'duvidávamos', eles: 'duvidavam' },
  },
  {
    infinitive: 'sorrir',
    regular: false,
    translation: 'усміхатися',
    present: { eu: 'sorrio', tu: 'sorris', ele: 'sorri', nos: 'sorrimos', eles: 'sorriem' },
    perfeito: { eu: 'sorri', tu: 'sorriste', ele: 'sorriu', nos: 'sorrimos', eles: 'sorriram' },
    imperfeito: { eu: 'sorria', tu: 'sorrias', ele: 'sorria', nos: 'sorríamos', eles: 'sorriam' },
  },
  {
    infinitive: 'rir-se',
    regular: false,
    translation: 'сміятися',
    present: { eu: 'rio-me', tu: 'ris-te', ele: 'ri-se', nos: 'rimo-nos', eles: 'riem-se' },
    perfeito: { eu: 'ri-me', tu: 'riste-te', ele: 'riu-se', nos: 'rimo-nos', eles: 'riram-se' },
    imperfeito: { eu: 'ria-me', tu: 'rias-te', ele: 'ria-se', nos: 'ríamo-nos', eles: 'riam-se' },
  },
  {
    infinitive: 'chorar',
    regular: true,
    translation: 'плакати',
    present: { eu: 'choro', tu: 'choras', ele: 'chora', nos: 'choramos', eles: 'choram' },
    perfeito: { eu: 'chorei', tu: 'choraste', ele: 'chorou', nos: 'choramos', eles: 'choraram' },
    imperfeito: { eu: 'chorava', tu: 'choravas', ele: 'chorava', nos: 'chorávamos', eles: 'choravam' },
  },
  {
    infinitive: 'aproveitar',
    regular: true,
    translation: 'скористатися',
    present: { eu: 'aproveito', tu: 'aproveitas', ele: 'aproveita', nos: 'aproveitamos', eles: 'aproveitam' },
    perfeito: { eu: 'aproveitei', tu: 'aproveitaste', ele: 'aproveitou', nos: 'aproveitamos', eles: 'aproveitaram' },
    imperfeito: { eu: 'aproveitava', tu: 'aproveitavas', ele: 'aproveitava', nos: 'aproveitávamos', eles: 'aproveitavam' },
  },
  {
    infinitive: 'viajar',
    regular: true,
    translation: 'подорожувати',
    present: { eu: 'viajo', tu: 'viajas', ele: 'viaja', nos: 'viajamos', eles: 'viajam' },
    perfeito: { eu: 'viajei', tu: 'viajaste', ele: 'viajou', nos: 'viajamos', eles: 'viajaram' },
    imperfeito: { eu: 'viajava', tu: 'viajavas', ele: 'viajava', nos: 'viajávamos', eles: 'viajavam' },
  },
  {
    infinitive: 'subir',
    regular: true,
    translation: 'підніматися',
    present: { eu: 'subo', tu: 'sobes', ele: 'sobe', nos: 'subimos', eles: 'sobem' },
    perfeito: { eu: 'subi', tu: 'subiste', ele: 'subiu', nos: 'subimos', eles: 'subiram' },
    imperfeito: { eu: 'subia', tu: 'subias', ele: 'subia', nos: 'subíamos', eles: 'subiam' },
  },
  {
    infinitive: 'descer',
    regular: true,
    translation: 'спускатися',
    present: { eu: 'desço', tu: 'desces', ele: 'desce', nos: 'descemos', eles: 'descem' },
    perfeito: { eu: 'desci', tu: 'desceste', ele: 'desceu', nos: 'descemos', eles: 'desceram' },
    imperfeito: { eu: 'descia', tu: 'descias', ele: 'descia', nos: 'descíamos', eles: 'desciam' },
  },
  {
    infinitive: 'dormir',
    regular: false,
    translation: 'спати',
    present: { eu: 'durmo', tu: 'dormes', ele: 'dorme', nos: 'dormimos', eles: 'dormem' },
    perfeito: { eu: 'dormi', tu: 'dormiste', ele: 'dormiu', nos: 'dormimos', eles: 'dormiram' },
    imperfeito: { eu: 'dormia', tu: 'dormias', ele: 'dormia', nos: 'dormíamos', eles: 'dormiam' },
  },
  {
    infinitive: 'acordar',
    regular: true,
    translation: 'прокидатися',
    present: { eu: 'acordo', tu: 'acordas', ele: 'acorda', nos: 'acordamos', eles: 'acordam' },
    perfeito: { eu: 'acordei', tu: 'acordaste', ele: 'acordou', nos: 'acordamos', eles: 'acordaram' },
    imperfeito: { eu: 'acordava', tu: 'acordavas', ele: 'acordava', nos: 'acordávamos', eles: 'acordavam' },
  },
  {
    infinitive: 'aceitar',
    regular: true,
    translation: 'приймати',
    present: { eu: 'aceito', tu: 'aceitas', ele: 'aceita', nos: 'aceitamos', eles: 'aceitam' },
    perfeito: { eu: 'aceitei', tu: 'aceitaste', ele: 'aceitou', nos: 'aceitamos', eles: 'aceitaram' },
    imperfeito: { eu: 'aceitava', tu: 'aceitavas', ele: 'aceitava', nos: 'aceitávamos', eles: 'aceitavam' },
  },
  {
    infinitive: 'resultar',
    regular: true,
    translation: 'результат',
    present: { eu: 'resulto', tu: 'resultas', ele: 'resulta', nos: 'resultamos', eles: 'resultam' },
    perfeito: { eu: 'resultei', tu: 'resultaste', ele: 'resultou', nos: 'resultamos', eles: 'resultaram' },
    imperfeito: { eu: 'resultava', tu: 'resultavas', ele: 'resultava', nos: 'resultávamos', eles: 'resultavam' },
  },
  {
    infinitive: 'reconhecer',
    regular: false,
    translation: 'визнавати',
    present: { eu: 'reconheço', tu: 'reconheces', ele: 'reconhece', nos: 'reconhecemos', eles: 'reconhecem' },
    perfeito: { eu: 'reconheci', tu: 'reconheceste', ele: 'reconheceu', nos: 'reconhecemos', eles: 'reconheceram' },
    imperfeito: { eu: 'reconhecia', tu: 'reconhecias', ele: 'reconhecia', nos: 'reconhecíamos', eles: 'reconheciam' },
  },
  {
    infinitive: 'marcar',
    regular: true,
    translation: 'позначати',
    present: { eu: 'marco', tu: 'marcas', ele: 'marca', nos: 'marcamos', eles: 'marcam' },
    perfeito: { eu: 'marquei', tu: 'marcaste', ele: 'marcou', nos: 'marcamos', eles: 'marcaram' },
    imperfeito: { eu: 'marcava', tu: 'marcavas', ele: 'marcava', nos: 'marcávamos', eles: 'marcavam' },
  },
  {
    infinitive: 'apanhar',
    regular: true,
    translation: 'ловити',
    present: { eu: 'apanho', tu: 'apanhas', ele: 'apanha', nos: 'apanhamos', eles: 'apanham' },
    perfeito: { eu: 'apanhei', tu: 'apanhaste', ele: 'apanhou', nos: 'apanhamos', eles: 'apanharam' },
    imperfeito: { eu: 'apanhava', tu: 'apanhavas', ele: 'apanhava', nos: 'apanhávamos', eles: 'apanhavam' },
  },
  {
    infinitive: 'soltar',
    regular: true,
    translation: 'відпускати',
    present: { eu: 'solto', tu: 'soltas', ele: 'solta', nos: 'soltamos', eles: 'soltam' },
    perfeito: { eu: 'soltei', tu: 'soltaste', ele: 'soltou', nos: 'soltamos', eles: 'soltaram' },
    imperfeito: { eu: 'soltava', tu: 'soltavas', ele: 'soltava', nos: 'soltávamos', eles: 'soltavam' },
  },
  {
    infinitive: 'crescer',
    regular: true,
    translation: 'рости',
    present: { eu: 'cresço', tu: 'cresces', ele: 'cresce', nos: 'crescemos', eles: 'crescem' },
    perfeito: { eu: 'cresci', tu: 'cresceste', ele: 'cresceu', nos: 'crescemos', eles: 'cresceram' },
    imperfeito: { eu: 'crescia', tu: 'crescias', ele: 'crescia', nos: 'crescíamos', eles: 'cresciam' },
  },
  {
    infinitive: 'publicar',
    regular: true,
    translation: 'публікувати',
    present: { eu: 'publico', tu: 'publicas', ele: 'publica', nos: 'publicamos', eles: 'publicam' },
    perfeito: { eu: 'publiquei', tu: 'publicaste', ele: 'publicou', nos: 'publicamos', eles: 'publicaram' },
    imperfeito: { eu: 'publicava', tu: 'publicavas', ele: 'publicava', nos: 'publicávamos', eles: 'publicavam' },
  },
  {
    infinitive: 'aperceber-se',
    regular: false,
    translation: 'усвідомлювати',
    present: { eu: 'apercebo-me', tu: 'apercebes-te', ele: 'apercebe-se', nos: 'apercebemo-nos', eles: 'apercebem-se' },
    perfeito: { eu: 'apercebi-me', tu: 'apercebeste-te', ele: 'apercebeu-se', nos: 'apercebemo-nos', eles: 'aperceberam-se' },
    imperfeito: { eu: 'apercebia-me', tu: 'apercebias-te', ele: 'apercebia-se', nos: 'apercebíamo-nos', eles: 'apercebiam-se' },
  },
  {
    infinitive: 'revelar',
    regular: true,
    translation: 'розкривати',
    present: { eu: 'revelo', tu: 'revelas', ele: 'revela', nos: 'revelamos', eles: 'revelam' },
    perfeito: { eu: 'revelei', tu: 'revelaste', ele: 'revelou', nos: 'revelamos', eles: 'revelaram' },
    imperfeito: { eu: 'revelava', tu: 'revelavas', ele: 'revelava', nos: 'revelávamos', eles: 'revelavam' },
  },
  {
    infinitive: 'prever',
    regular: false,
    translation: 'передбачати',
    present: { eu: 'prevejo', tu: 'prevês', ele: 'prevê', nos: 'prevemos', eles: 'preveem' },
    perfeito: { eu: 'previ', tu: 'previste', ele: 'previu', nos: 'previmos', eles: 'preveram' },
    imperfeito: { eu: 'previa', tu: 'previas', ele: 'previa', nos: 'prevíamos', eles: 'previam' },
  },
  {
    infinitive: 'ocupar',
    regular: true,
    translation: 'займати',
    present: { eu: 'ocupo', tu: 'ocupas', ele: 'ocupa', nos: 'ocupamos', eles: 'ocupam' },
    perfeito: { eu: 'ocupei', tu: 'ocupaste', ele: 'ocupou', nos: 'ocupamos', eles: 'ocuparam' },
    imperfeito: { eu: 'ocupava', tu: 'ocupavas', ele: 'ocupava', nos: 'ocupávamos', eles: 'ocupavam' },
  },
  {
    infinitive: 'tocar',
    regular: true,
    translation: 'грати',
    present: { eu: 'toco', tu: 'tocas', ele: 'toca', nos: 'tocamos', eles: 'tocam' },
    perfeito: { eu: 'toquei', tu: 'tocaste', ele: 'tocou', nos: 'tocamos', eles: 'tocaram' },
    imperfeito: { eu: 'tocava', tu: 'tocavas', ele: 'tocava', nos: 'tocávamos', eles: 'tocavam' },
  },
  {
    infinitive: 'envolver',
    regular: false,
    translation: 'залучати',
    present: { eu: 'envolvo', tu: 'envolves', ele: 'envolve', nos: 'envolvemos', eles: 'envolvem' },
    perfeito: { eu: 'envolvi', tu: 'envolveste', ele: 'envolveu', nos: 'envolvemos', eles: 'envolveram' },
    imperfeito: { eu: 'envolvia', tu: 'envolvias', ele: 'envolvia', nos: 'envolvíamos', eles: 'envolviam' },
  },
  {
    infinitive: 'fugir',
    regular: false,
    translation: 'тікати',
    present: { eu: 'fujo', tu: 'foges', ele: 'foge', nos: 'fugimos', eles: 'fogem' },
    perfeito: { eu: 'fugi', tu: 'fugiste', ele: 'fugiu', nos: 'fugimos', eles: 'fugiram' },
    imperfeito: { eu: 'fugia', tu: 'fugias', ele: 'fugia', nos: 'fugíamos', eles: 'fugiam' },
  },
  {
    infinitive: 'indicar',
    regular: true,
    translation: 'вказувати',
    present: { eu: 'indico', tu: 'indicas', ele: 'indica', nos: 'indicamos', eles: 'indicam' },
    perfeito: { eu: 'indiquei', tu: 'indicaste', ele: 'indicou', nos: 'indicamos', eles: 'indicaram' },
    imperfeito: { eu: 'indicava', tu: 'indicavas', ele: 'indicava', nos: 'indicávamos', eles: 'indicavam' },
  },
  {
    infinitive: 'valer',
    regular: false,
    translation: 'коштувати',
    present: { eu: 'valho', tu: 'vales', ele: 'vale', nos: 'valemos', eles: 'valem' },
    perfeito: { eu: 'vali', tu: 'valeste', ele: 'valeu', nos: 'valemos', eles: 'valeram' },
    imperfeito: { eu: 'valia', tu: 'valias', ele: 'valia', nos: 'valíamos', eles: 'valiam' },
  },
  {
    infinitive: 'terminar',
    regular: true,
    translation: 'закінчувати',
    present: { eu: 'termino', tu: 'terminas', ele: 'termina', nos: 'terminamos', eles: 'terminam' },
    perfeito: { eu: 'terminei', tu: 'terminaste', ele: 'terminou', nos: 'terminamos', eles: 'terminaram' },
    imperfeito: { eu: 'terminava', tu: 'terminavas', ele: 'terminava', nos: 'terminávamos', eles: 'terminavam' },
  },
  {
    infinitive: 'jogar',
    regular: true,
    translation: 'грати',
    present: { eu: 'jogo', tu: 'jogas', ele: 'joga', nos: 'jogamos', eles: 'jogam' },
    perfeito: { eu: 'joguei', tu: 'jogaste', ele: 'jogou', nos: 'jogamos', eles: 'jogaram' },
    imperfeito: { eu: 'jogava', tu: 'jogavas', ele: 'jogava', nos: 'jogávamos', eles: 'jogavam' },
  },
  {
    infinitive: 'construir',
    regular: false,
    translation: 'будувати',
    present: { eu: 'construo', tu: 'constróis', ele: 'constrói', nos: 'construímos', eles: 'constroem' },
    perfeito: { eu: 'construí', tu: 'construíste', ele: 'construiu', nos: 'construímos', eles: 'construíram' },
    imperfeito: { eu: 'construía', tu: 'construías', ele: 'construía', nos: 'construíamos', eles: 'construíam' },
  },
  {
    infinitive: 'destruir',
    regular: false,
    translation: 'знищувати',
    present: { eu: 'destruo', tu: 'destróis', ele: 'destrói', nos: 'destruímos', eles: 'destroem' },
    perfeito: { eu: 'destruí', tu: 'destruíste', ele: 'destruiu', nos: 'destruímos', eles: 'destruíram' },
    imperfeito: { eu: 'destruía', tu: 'destruías', ele: 'destruía', nos: 'destruíamos', eles: 'destruíam' },
  },
  {
    infinitive: 'definir',
    regular: true,
    translation: 'визначати',
    present: { eu: 'defino', tu: 'defines', ele: 'define', nos: 'definimos', eles: 'definem' },
    perfeito: { eu: 'defini', tu: 'definiste', ele: 'definiu', nos: 'definimos', eles: 'definiram' },
    imperfeito: { eu: 'definia', tu: 'definias', ele: 'definia', nos: 'definíamos', eles: 'definiam' },
  },
  {
    infinitive: 'escolher',
    regular: false,
    translation: 'вибирати',
    present: { eu: 'escolho', tu: 'escolhes', ele: 'escolhe', nos: 'escolhemos', eles: 'escolhem' },
    perfeito: { eu: 'escolhi', tu: 'escolheste', ele: 'escolheu', nos: 'escolhemos', eles: 'escolheram' },
    imperfeito: { eu: 'escolhia', tu: 'escolhias', ele: 'escolhia', nos: 'escolhíamos', eles: 'escolhiam' },
  },
  {
    infinitive: 'causar',
    regular: true,
    translation: 'спричиняти',
    present: { eu: 'causo', tu: 'causas', ele: 'causa', nos: 'causamos', eles: 'causam' },
    perfeito: { eu: 'causei', tu: 'causaste', ele: 'causou', nos: 'causamos', eles: 'causaram' },
    imperfeito: { eu: 'causava', tu: 'causavas', ele: 'causava', nos: 'causávamos', eles: 'causavam' },
  },
  {
    infinitive: 'evitar',
    regular: true,
    translation: 'уникати',
    present: { eu: 'evito', tu: 'evitas', ele: 'evita', nos: 'evitamos', eles: 'evitam' },
    perfeito: { eu: 'evitei', tu: 'evitaste', ele: 'evitou', nos: 'evitamos', eles: 'evitaram' },
    imperfeito: { eu: 'evitava', tu: 'evitavas', ele: 'evitava', nos: 'evitávamos', eles: 'evitavam' },
  },
  {
    infinitive: 'determinar',
    regular: true,
    translation: 'визначати',
    present: { eu: 'determino', tu: 'determinas', ele: 'determina', nos: 'determinamos', eles: 'determinam' },
    perfeito: { eu: 'determinei', tu: 'determinaste', ele: 'determinou', nos: 'determinamos', eles: 'determinaram' },
    imperfeito: { eu: 'determinava', tu: 'determinavas', ele: 'determinava', nos: 'determinávamos', eles: 'determinavam' },
  },
  {
    infinitive: 'anunciar',
    regular: true,
    translation: 'оголошувати',
    present: { eu: 'anuncio', tu: 'anuncias', ele: 'anuncia', nos: 'anunciamos', eles: 'anunciam' },
    perfeito: { eu: 'anunciei', tu: 'anunciaste', ele: 'anunciou', nos: 'anunciamos', eles: 'anunciaram' },
    imperfeito: { eu: 'anunciava', tu: 'anunciavas', ele: 'anunciava', nos: 'anunciávamos', eles: 'anunciavam' },
  },
  {
    infinitive: 'exigir',
    regular: false,
    translation: 'вимагати',
    present: { eu: 'exijo', tu: 'exiges', ele: 'exige', nos: 'exigimos', eles: 'exigem' },
    perfeito: { eu: 'exigi', tu: 'exigiste', ele: 'exigiu', nos: 'exigimos', eles: 'exigiram' },
    imperfeito: { eu: 'exigia', tu: 'exigias', ele: 'exigia', nos: 'exigíamos', eles: 'exigiam' },
  },
  {
    infinitive: 'transformar',
    regular: true,
    translation: 'трансформувати',
    present: { eu: 'transformo', tu: 'transformas', ele: 'transforma', nos: 'transformamos', eles: 'transformam' },
    perfeito: { eu: 'transformei', tu: 'transformaste', ele: 'transformou', nos: 'transformamos', eles: 'transformaram' },
    imperfeito: { eu: 'transformava', tu: 'transformavas', ele: 'transformava', nos: 'transformávamos', eles: 'transformavam' },
  },
  {
    infinitive: 'vencer',
    regular: true,
    translation: 'перемагати',
    present: { eu: 'venço', tu: 'vences', ele: 'vence', nos: 'vencemos', eles: 'vencem' },
    perfeito: { eu: 'venci', tu: 'venceste', ele: 'venceu', nos: 'vencemos', eles: 'venceram' },
    imperfeito: { eu: 'vencia', tu: 'vencias', ele: 'vencia', nos: 'vencíamos', eles: 'venciam' },
  },
  {
    infinitive: 'faltar',
    regular: true,
    translation: 'бракувати',
    present: { eu: 'falto', tu: 'faltas', ele: 'falta', nos: 'faltamos', eles: 'faltam' },
    perfeito: { eu: 'faltei', tu: 'faltaste', ele: 'faltou', nos: 'faltamos', eles: 'faltaram' },
    imperfeito: { eu: 'faltava', tu: 'faltavas', ele: 'faltava', nos: 'faltávamos', eles: 'faltavam' },
  },
  {
    infinitive: 'entregar',
    regular: true,
    translation: 'здавати',
    present: { eu: 'entrego', tu: 'entregas', ele: 'entrega', nos: 'entregamos', eles: 'entregam' },
    perfeito: { eu: 'entreguei', tu: 'entregaste', ele: 'entregou', nos: 'entregamos', eles: 'entregaram' },
    imperfeito: { eu: 'entregava', tu: 'entregavas', ele: 'entregava', nos: 'entregávamos', eles: 'entregavam' },
  },
  {
    infinitive: 'casar',
    regular: true,
    translation: 'одружуватися',
    present: { eu: 'caso', tu: 'casas', ele: 'casa', nos: 'casamos', eles: 'casam' },
    perfeito: { eu: 'casei', tu: 'casaste', ele: 'casou', nos: 'casamos', eles: 'casaram' },
    imperfeito: { eu: 'casava', tu: 'casavas', ele: 'casava', nos: 'casávamos', eles: 'casavam' },
  },
  {
    infinitive: 'pegar',
    regular: true,
    translation: 'брати',
    present: { eu: 'pego', tu: 'pegas', ele: 'pega', nos: 'pegamos', eles: 'pegam' },
    perfeito: { eu: 'peguei', tu: 'pegaste', ele: 'pegou', nos: 'pegamos', eles: 'pegaram' },
    imperfeito: { eu: 'pegava', tu: 'pegavas', ele: 'pegava', nos: 'pegávamos', eles: 'pegavam' },
  },
  {
    infinitive: 'apontar',
    regular: true,
    translation: 'направляти',
    present: { eu: 'aponto', tu: 'apontas', ele: 'aponta', nos: 'apontamos', eles: 'apontam' },
    perfeito: { eu: 'apontei', tu: 'apontaste', ele: 'apontou', nos: 'apontamos', eles: 'apontaram' },
    imperfeito: { eu: 'apontava', tu: 'apontavas', ele: 'apontava', nos: 'apontávamos', eles: 'apontavam' },
  },
  {
    infinitive: 'virar',
    regular: true,
    translation: 'повертати',
    present: { eu: 'viro', tu: 'viras', ele: 'vira', nos: 'viramos', eles: 'viram' },
    perfeito: { eu: 'virei', tu: 'viraste', ele: 'virou', nos: 'viramos', eles: 'viraram' },
    imperfeito: { eu: 'virava', tu: 'viravas', ele: 'virava', nos: 'virávamos', eles: 'viravam' },
  },
  {
    infinitive: 'concluir',
    regular: false,
    translation: 'закінчувати',
    present: { eu: 'concluo', tu: 'concluis', ele: 'conclui', nos: 'concluímos', eles: 'concluem' },
    perfeito: { eu: 'concluí', tu: 'concluíste', ele: 'concluiu', nos: 'concluímos', eles: 'concluíram' },
    imperfeito: { eu: 'concluía', tu: 'concluías', ele: 'concluía', nos: 'concluíamos', eles: 'concluíam' },
  },
  {
    infinitive: 'significar',
    regular: true,
    translation: 'означати',
    present: { eu: 'significo', tu: 'significas', ele: 'significa', nos: 'significamos', eles: 'significam' },
    perfeito: { eu: 'signifiquei', tu: 'significaste', ele: 'significou', nos: 'significamos', eles: 'significaram' },
    imperfeito: { eu: 'significava', tu: 'significavas', ele: 'significava', nos: 'significávamos', eles: 'significavam' },
  },
  {
    infinitive: 'depender',
    regular: true,
    translation: 'залежати',
    present: { eu: 'dependo', tu: 'dependes', ele: 'depende', nos: 'dependemos', eles: 'dependem' },
    perfeito: { eu: 'dependi', tu: 'dependeste', ele: 'dependeu', nos: 'dependemos', eles: 'dependeram' },
    imperfeito: { eu: 'dependia', tu: 'dependias', ele: 'dependia', nos: 'dependíamos', eles: 'dependiam' },
  },
  {
    infinitive: 'repetir',
    regular: false,
    translation: 'повторювати',
    present: { eu: 'repito', tu: 'repetes', ele: 'repete', nos: 'repetimos', eles: 'repetem' },
    perfeito: { eu: 'repeti', tu: 'repetiste', ele: 'repetiu', nos: 'repetimos', eles: 'repetiram' },
    imperfeito: { eu: 'repetia', tu: 'repetias', ele: 'repetia', nos: 'repetíamos', eles: 'repetiam' },
  },
  {
    infinitive: 'abandonar',
    regular: true,
    translation: 'залишати',
    present: { eu: 'abandono', tu: 'abandonas', ele: 'abandona', nos: 'abandonamos', eles: 'abandonam' },
    perfeito: { eu: 'abandonei', tu: 'abandonaste', ele: 'abandonou', nos: 'abandonamos', eles: 'abandonaram' },
    imperfeito: { eu: 'abandonava', tu: 'abandonavas', ele: 'abandonava', nos: 'abandonávamos', eles: 'abandonavam' },
  },
  {
    infinitive: 'obrigar',
    regular: true,
    translation: 'зобовязувати',
    present: { eu: 'obrigo', tu: 'obrigas', ele: 'obriga', nos: 'obrigamos', eles: 'obrigam' },
    perfeito: { eu: 'obriguei', tu: 'obrigaste', ele: 'obrigou', nos: 'obrigamos', eles: 'obrigaram' },
    imperfeito: { eu: 'obrigava', tu: 'obrigavas', ele: 'obrigava', nos: 'obrigávamos', eles: 'obrigavam' },
  },
  {
    infinitive: 'preparar',
    regular: true,
    translation: 'готувати',
    present: { eu: 'preparo', tu: 'preparas', ele: 'prepara', nos: 'preparamos', eles: 'preparam' },
    perfeito: { eu: 'preparei', tu: 'preparaste', ele: 'preparou', nos: 'preparamos', eles: 'prepararam' },
    imperfeito: { eu: 'preparava', tu: 'preparavas', ele: 'preparava', nos: 'preparávamos', eles: 'preparavam' },
  },
  {
    infinitive: 'aplicar',
    regular: true,
    translation: 'застосовувати',
    present: { eu: 'aplico', tu: 'aplicas', ele: 'aplica', nos: 'aplicamos', eles: 'aplicam' },
    perfeito: { eu: 'apliquei', tu: 'aplicaste', ele: 'aplicou', nos: 'aplicamos', eles: 'aplicaram' },
    imperfeito: { eu: 'aplicava', tu: 'aplicavas', ele: 'aplicava', nos: 'aplicávamos', eles: 'aplicavam' },
  },
  {
    infinitive: 'pertencer',
    regular: false,
    translation: 'належати',
    present: { eu: 'pertenço', tu: 'pertences', ele: 'pertence', nos: 'pertencemos', eles: 'pertencem' },
    perfeito: { eu: 'pertenci', tu: 'pertençeste', ele: 'pertenceu', nos: 'pertencemos', eles: 'pertenceram' },
    imperfeito: { eu: 'pertencia', tu: 'pertencias', ele: 'pertencia', nos: 'pertencíamos', eles: 'pertenciam' },
  },
  {
    infinitive: 'funcionar',
    regular: true,
    translation: 'працювати',
    present: { eu: 'funciono', tu: 'funcionas', ele: 'funciona', nos: 'funcionamos', eles: 'funcionam' },
    perfeito: { eu: 'funcionei', tu: 'funcionaste', ele: 'funcionou', nos: 'funcionamos', eles: 'funcionaram' },
    imperfeito: { eu: 'funcionava', tu: 'funcionavas', ele: 'funcionava', nos: 'funcionávamos', eles: 'funcionavam' },
  },
  {
    infinitive: 'retirar',
    regular: true,
    translation: 'відкликати',
    present: { eu: 'retiro', tu: 'retiras', ele: 'retira', nos: 'retiramos', eles: 'retiram' },
    perfeito: { eu: 'retirei', tu: 'retiraste', ele: 'retirou', nos: 'retiramos', eles: 'retiraram' },
    imperfeito: { eu: 'retirava', tu: 'retiravas', ele: 'retirava', nos: 'retirávamos', eles: 'retiravam' },
  },
  {
    infinitive: 'verificar',
    regular: true,
    translation: 'перевіряти',
    present: { eu: 'verifico', tu: 'verificas', ele: 'verifica', nos: 'verificamos', eles: 'verificam' },
    perfeito: { eu: 'verifiquei', tu: 'verificaste', ele: 'verificou', nos: 'verificamos', eles: 'verificaram' },
    imperfeito: { eu: 'verificava', tu: 'verificavas', ele: 'verificava', nos: 'verificávamos', eles: 'verificavam' },
  },
  {
    infinitive: 'acrescentar',
    regular: true,
    translation: 'додавати',
    present: { eu: 'acrescento', tu: 'acrescentas', ele: 'acrescenta', nos: 'acrescentamos', eles: 'acrescentam' },
    perfeito: { eu: 'acrescentei', tu: 'acrescentaste', ele: 'acrescentou', nos: 'acrescentamos', eles: 'acrescentaram' },
    imperfeito: { eu: 'acrescentava', tu: 'acrescentavas', ele: 'acrescentava', nos: 'acrescentávamos', eles: 'acrescentavam' },
  },
  {
    infinitive: 'desejar',
    regular: true,
    translation: 'бажати',
    present: { eu: 'desejo', tu: 'desejas', ele: 'deseja', nos: 'desejamos', eles: 'desejam' },
    perfeito: { eu: 'desejei', tu: 'desejaste', ele: 'desejou', nos: 'desejamos', eles: 'desejaram' },
    imperfeito: { eu: 'desejava', tu: 'desejavas', ele: 'desejava', nos: 'desejávamos', eles: 'desejavam' },
  },
  {
    infinitive: 'imaginar',
    regular: true,
    translation: 'уявляти',
    present: { eu: 'imagino', tu: 'imaginas', ele: 'imagina', nos: 'imaginamos', eles: 'imaginam' },
    perfeito: { eu: 'imaginei', tu: 'imaginaste', ele: 'imaginou', nos: 'imaginamos', eles: 'imaginaram' },
    imperfeito: { eu: 'imaginava', tu: 'imaginavas', ele: 'imaginava', nos: 'imaginávamos', eles: 'imaginavam' },
  },
  {
    infinitive: 'discutir',
    regular: true,
    translation: 'обговорювати',
    present: { eu: 'discuto', tu: 'discutes', ele: 'discute', nos: 'discutimos', eles: 'discutem' },
    perfeito: { eu: 'discuti', tu: 'discutiste', ele: 'discutiu', nos: 'discutimos', eles: 'discutiram' },
    imperfeito: { eu: 'discutia', tu: 'discutias', ele: 'discutia', nos: 'discutíamos', eles: 'discutiam' },
  },
  {
    infinitive: 'preferir',
    regular: false,
    translation: 'віддавати перевагу',
    present: { eu: 'prefiro', tu: 'preferes', ele: 'prefere', nos: 'preferimos', eles: 'preferem' },
    perfeito: { eu: 'preferi', tu: 'preferiste', ele: 'preferiu', nos: 'preferimos', eles: 'preferiram' },
    imperfeito: { eu: 'preferia', tu: 'preferias', ele: 'preferia', nos: 'preferíamos', eles: 'preferiam' },
  },
]

let correctAnswers = 0
let totalQuestions = 0

function updateScoreDisplay() {
  const scoreElement = document.getElementById('score')
  if (scoreElement) {
    const percentage = totalQuestions > 0 ? ((correctAnswers / totalQuestions) * 100).toFixed(0) : 0
    scoreElement.textContent = `${correctAnswers}/${totalQuestions} (${percentage}%)`
  }
}

// Function to get a random element from an array
function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)]
}

// Define a variable to hold the correct answer
let currentCorrectAnswer: string

// Function to ask a random question
function askRandomQuestionForConjugation() {
  // Filter verbs based on checkbox selection
  const regularCheckbox = document.getElementById('option-regular') as HTMLInputElement
  const irregularCheckbox = document.getElementById('option-irregular') as HTMLInputElement
  const filteredVerbs = verbs.filter((verb) => {
    if (regularCheckbox.checked && irregularCheckbox.checked) return true // Both regular and irregular
    if (regularCheckbox.checked) return verb.regular
    if (irregularCheckbox.checked) return !verb.regular
    if (!regularCheckbox.checked && !irregularCheckbox.checked) return true
  })

  const verb = getRandomElement(filteredVerbs)
  const tenses: { [key: string]: keyof Omit<WORD, 'infinitive'> } = {
    'option-present': 'present',
    'option-pps': 'perfeito',
    'option-pis': 'imperfeito',
  }
  const selectedTenses = Object.keys(tenses)
    .filter((checkboxId) => {
      const checkboxElement = document.getElementById(checkboxId) as HTMLInputElement | null
      return checkboxElement !== null && checkboxElement.checked
    })
    .map((checkboxId) => tenses[checkboxId])

  // Use all tenses if none are selected
  const tenseKey = selectedTenses.length > 0 ? getRandomElement(selectedTenses) : (getRandomElement(Object.values(tenses)) as keyof Omit<WORD, 'infinitive'>)
  const person = getRandomElement(['eu', 'tu', 'ele', 'nos', 'eles']) as keyof Forms
  const questionElement = document.getElementById('question')
  const verbElement = document.getElementById('verb')

  if (questionElement && verbElement) {
    const tenseDisplay = tenseKey === 'present' ? 'Presente' : tenseKey === 'perfeito' ? 'Perfeito (PPS)' : 'Imperfeito (PIS)'
    const personDisplay = ['nos', 'eles'].includes(person) ? '(plural)' : '(singular)'
    questionElement.textContent = `Como se conjuga no ${tenseDisplay} a ${person} ${personDisplay}`
    verbElement.textContent = verb.infinitive

    // Ensure that we are only indexing into the Forms part of the WORD type
    const tenseForms = verb[tenseKey] as Forms // Exclude 'infinitive' from the keys
    currentCorrectAnswer = tenseForms[person] // Store the correct answer
  }
  const verbTranslationElement = document.getElementById('verb-translation')
  // Display the translation
  if (verbTranslationElement) {
    verbTranslationElement.textContent = `(${verb.translation})`
  }
}

function askRandomQuestionForReverse() {
  const verb = getRandomElement(verbs)
  const tenseKey = getRandomElement(['present', 'perfeito', 'imperfeito']) as keyof Omit<WORD, 'infinitive'>
  const person = getRandomElement(['eu', 'tu', 'ele', 'nos', 'eles']) as keyof Forms
  const verbInTense = document.getElementById('verb-in-tense')
  if (verbInTense) {
    const form = verb[tenseKey] as Forms
    verbInTense.textContent = form[person]
  }
  currentCorrectAnswer = verb.infinitive
}

function checkAnswerForReverse() {
  const correctResultDiv = document.querySelector('.correct-result')
  const errorResultDiv = document.querySelector('.error-result')
  const errorResultDivVerb = document.querySelector('.error-result-verb')
  const userAnswer = (document.getElementById('input-for-infinitiv') as HTMLInputElement).value
  if (correctResultDiv && errorResultDiv && errorResultDivVerb) {
    // Clear previous messages
    correctResultDiv.textContent = ''
    errorResultDiv.textContent = ''
    errorResultDivVerb.textContent = ''
    // Check if the user's answer matches the infinitive form of the verb
    if (userAnswer.trim().toLowerCase() === currentCorrectAnswer.toLowerCase()) {
      correctResultDiv.textContent = 'Correto! A forma infinitiva é ' + currentCorrectAnswer + '.'
    } else {
      errorResultDiv.textContent = 'Incorreto. A forma infinitiva correta é '
      errorResultDivVerb.textContent = currentCorrectAnswer
    }
  } else {
    console.error('Result divs not found in the document.')
  }
  // Clear the input field and display a new conjugation
  ;(document.getElementById('input-for-infinitiv') as HTMLInputElement).value = ''
  askRandomQuestionForReverse()
}

function checkAnswerForConjugation() {
  var correctResultDiv = document.querySelector('.correct-result')
  var errorResultDiv = document.querySelector('.error-result')
  var errorResultDivVerb = document.querySelector('.error-result-verb')
  const userAnswer = (document.getElementById('input') as HTMLInputElement).value
  if (correctResultDiv && errorResultDiv && errorResultDivVerb) {
    // Clear previous messages
    correctResultDiv.textContent = ''
    errorResultDiv.textContent = ''
    if (userAnswer.trim().toLowerCase() === currentCorrectAnswer.toLowerCase()) {
      correctAnswers++
      correctResultDiv.textContent = 'Correto!'
      errorResultDiv.textContent = ``
      errorResultDivVerb.textContent = ''
    } else {
      errorResultDiv.textContent = `Incorreto. A resposta correta é `
      errorResultDivVerb.textContent = currentCorrectAnswer
    }
    totalQuestions++
    updateScoreDisplay()
  } else {
    console.error('Result divs not found in the document.')
  }
  // Clear the input field and ask a new question
  ;(document.getElementById('input') as HTMLInputElement).value = ''
  askRandomQuestionForConjugation()
}

// Event listener for the submit button
document.getElementById('submit-conjugation')?.addEventListener('click', () => {
  checkAnswerForConjugation()
})

// Event listener for the submit button
document.getElementById('submit-reverse')?.addEventListener('click', () => {
  checkAnswerForReverse()
})

// Ask the first question on page load
document.addEventListener('DOMContentLoaded', () => {
  askRandomQuestionForConjugation()
  askRandomQuestionForReverse()
})

var inputFieldForCong = document.getElementById('input')
var inputFieldForReverse = document.getElementById('input-for-infinitiv')
var submitButtonForCong = document.getElementById('submit-conjugation')
var submitButtonForReverse = document.getElementById('submit-reverse')

if (inputFieldForCong)
  inputFieldForCong.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      event.preventDefault()
      checkAnswerForConjugation()
    }
  })

if (inputFieldForReverse)
  inputFieldForReverse.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      event.preventDefault()
      checkAnswerForReverse()
    }
  })

// Function to populate the list of infinitive words
function populateInfinitiveList() {
  const verbsListElement = document.getElementById('verbs-list')
  if (verbsListElement) {
    verbs.forEach((verb) => {
      const link = document.createElement('a')
      link.href = '#'
      link.textContent = verb.infinitive
      link.classList.add('infinitive-link')
      link.addEventListener('click', () => populateConjugationTable(verb))
      verbsListElement.appendChild(link)
    })
  }
}

// Function to populate the conjugation table for a given verb
function populateConjugationTable(verb: WORD) {
  const tableHead = document.querySelector('#conjugation-table thead')
  const tableBody = document.querySelector('#conjugation-table tbody')

  if (tableHead && tableBody) {
    // Clear existing table head and body
    tableHead.innerHTML = ''
    tableBody.innerHTML = ''
    // Create the header row with tenses
    const headerRow = document.createElement('tr')
    headerRow.innerHTML = `
<th>Person</th>
<th>Presente</th>
<th>Perfeito</th>
<th>Imperfeito</th>
`
    tableHead.appendChild(headerRow)

    // Create a row for each person
    const persons = ['eu', 'tu', 'ele', 'nos', 'eles']
    persons.forEach((person) => {
      const personRow = createPersonRow(person, verb.present, verb.perfeito, verb.imperfeito)
      tableBody.appendChild(personRow)
    })
  }
}

// Helper function to create a row for each person
function createPersonRow(person: string, presentForms: any, perfeitoForms: any, imperfeitoForms: any): HTMLTableRowElement {
  const row = document.createElement('tr')
  const personKey = person.toLowerCase().replace('/', '').trim() // Adjust the key to match object properties
  row.innerHTML = `
<td>${person}</td>
<td>${presentForms[personKey]}</td>
<td>${perfeitoForms[personKey]}</td>
<td>${imperfeitoForms[personKey]}</td>
`
  return row
}
// Call the function to populate the list on page load
document.addEventListener('DOMContentLoaded', () => {
  populateInfinitiveList()
})
