type Forms = {
  eu: string
  tu: string
  ele: string
  nos: string
  eles: string
}

type WORD = {
  infinitive: string
  present: Forms
  perfeito: Forms
  imperfeito: Forms
}

const verbs = [
  {
    infinitive: 'querer',
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
    infinitive: 'haver',
    present: {
      eu: 'hei',
      tu: 'hás',
      ele: 'há',
      nos: 'havemos',
      eles: 'hão',
    },
    perfeito: {
      eu: 'houve',
      tu: 'houveste',
      ele: 'houve',
      nos: 'houvemos',
      eles: 'houveram',
    },
    imperfeito: {
      eu: 'havia',
      tu: 'havias',
      ele: 'havia',
      nos: 'havíamos',
      eles: 'haviam',
    },
  },
  {
    infinitive: 'trazer',
    present: {
      eu: 'trago',
      tu: 'trazes',
      ele: 'traz',
      nos: 'trazemos',
      eles: 'trazem',
    },
    perfeito: {
      eu: 'trouxe',
      tu: 'trouxeste',
      ele: 'trouxe',
      nos: 'trouxemos',
      eles: 'trouxeram',
    },
    imperfeito: {
      eu: 'trazia',
      tu: 'trazias',
      ele: 'trazia',
      nos: 'trazíamos',
      eles: 'traziam',
    },
  },
  {
    infinitive: 'querer',
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
    infinitive: 'saber',
    present: {
      eu: 'sei',
      tu: 'sabes',
      ele: 'sabe',
      nos: 'sabemos',
      eles: 'sabem',
    },
    perfeito: {
      eu: 'soube',
      tu: 'soubeste',
      ele: 'soube',
      nos: 'soubemos',
      eles: 'souberam',
    },
    imperfeito: {
      eu: 'sabia',
      tu: 'sabias',
      ele: 'sabia',
      nos: 'sabíamos',
      eles: 'sabiam',
    },
  },
  {
    infinitive: 'poder',
    present: {
      eu: 'posso',
      tu: 'podes',
      ele: 'pode',
      nos: 'podemos',
      eles: 'podem',
    },
    perfeito: {
      eu: 'pude',
      tu: 'pudeste',
      ele: 'pôde',
      nos: 'pudemos',
      eles: 'puderam',
    },
    imperfeito: {
      eu: 'podia',
      tu: 'podias',
      ele: 'podia',
      nos: 'podíamos',
      eles: 'podiam',
    },
  },
  {
    infinitive: 'ficar',
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
  const verb = getRandomElement(verbs)
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
  const tenseKey =
    selectedTenses.length > 0 ? getRandomElement(selectedTenses) : (getRandomElement(Object.values(tenses)) as keyof Omit<WORD, 'infinitive'>)

  const person = getRandomElement(['eu', 'tu', 'ele', 'nos', 'eles']) as keyof Forms
  const questionElement = document.getElementById('question')
  const verbElement = document.getElementById('verb')

  if (questionElement && verbElement) {
    const tenseDisplay = tenseKey === 'present' ? 'Presente' : tenseKey === 'perfeito' ? 'Perfeito (PPS)' : 'Imperfeito (PIS)'
    const personDisplay = ['nos', 'eles'].includes(person) ? '(plural)' : '(singular)'
    questionElement.textContent = `Como se conjuga o verbo no ${tenseDisplay} a ${person} ${personDisplay}`
    verbElement.textContent = verb.infinitive

    // Ensure that we are only indexing into the Forms part of the WORD type
    const tenseForms = verb[tenseKey] // Exclude 'infinitive' from the keys
    currentCorrectAnswer = tenseForms[person] // Store the correct answer
  }
}
function askRandomQuestionForReverse() {
  const verb = getRandomElement(verbs)
  const tenseKey = getRandomElement(['present', 'perfeito', 'imperfeito']) as keyof Omit<WORD, 'infinitive'>
  const person = getRandomElement(['eu', 'tu', 'ele', 'nos', 'eles']) as keyof Forms
  const verbInTense = document.getElementById('verb-in-tense')
  if (verbInTense) {
    verbInTense.textContent = verb[tenseKey][person]
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
