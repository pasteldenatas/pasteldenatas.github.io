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
  past: Forms
}
const verbs: WORD[] = [
  {
    infinitive: 'querer',
    present: {
      eu: 'quero',
      tu: 'queres',
      ele: 'quer',
      nos: 'queremos',
      eles: 'querem',
    },
    past: {
      eu: 'quis',
      tu: 'quiseste',
      ele: 'quis',
      nos: 'quisemos',
      eles: 'quiseram',
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
    past: {
      eu: 'fiquei',
      tu: 'ficaste',
      ele: 'ficou',
      nos: 'ficamos',
      eles: 'ficaram',
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
    past: {
      eu: 'devei',
      tu: 'deveste',
      ele: 'deveu',
      nos: 'devemos',
      eles: 'deveram',
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
    past: {
      eu: 'pareci',
      tu: 'pareceste',
      ele: 'pareceu',
      nos: 'parecemos',
      eles: 'pareceram',
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
    past: {
      eu: 'falei',
      tu: 'falaste',
      ele: 'falou',
      nos: 'falamos',
      eles: 'falaram',
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
    past: {
      eu: 'deixei',
      tu: 'deixaste',
      ele: 'deixou',
      nos: 'deixamos',
      eles: 'deixaram',
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
    past: {
      eu: 'continuei',
      tu: 'continuaste',
      ele: 'continuou',
      nos: 'continuamos',
      eles: 'continuaram',
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
    past: {
      eu: 'senti',
      tu: 'sentiste',
      ele: 'sentiu',
      nos: 'sentimos',
      eles: 'sentiram',
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
    past: {
      eu: 'cheguei',
      tu: 'chegaste',
      ele: 'chegou',
      nos: 'chegamos',
      eles: 'chegaram',
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
    past: {
      eu: 'andei',
      tu: 'andaste',
      ele: 'andou',
      nos: 'andamos',
      eles: 'andaram',
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
    past: {
      eu: 'entrei',
      tu: 'entraste',
      ele: 'entrou',
      nos: 'entramos',
      eles: 'entraram',
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
    past: {
      eu: 'saí',
      tu: 'saíste',
      ele: 'saiu',
      nos: 'saímos',
      eles: 'saíram',
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
    past: {
      eu: 'voltei',
      tu: 'voltaste',
      ele: 'voltou',
      nos: 'voltamos',
      eles: 'voltaram',
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
    past: {
      eu: 'precisei',
      tu: 'precisaste',
      ele: 'precisou',
      nos: 'precisamos',
      eles: 'precisaram',
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
    past: {
      eu: 'esperei',
      tu: 'esperaste',
      ele: 'esperou',
      nos: 'esperamos',
      eles: 'esperaram',
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
    past: {
      eu: 'olhei',
      tu: 'olhaste',
      ele: 'olhou',
      nos: 'olhamos',
      eles: 'olharam',
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
    past: {
      eu: 'pensei',
      tu: 'pensaste',
      ele: 'pensou',
      nos: 'pensamos',
      eles: 'pensaram',
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
    past: {
      eu: 'comecei',
      tu: 'começaste',
      ele: 'começou',
      nos: 'começamos',
      eles: 'começaram',
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
    past: {
      eu: 'conheci',
      tu: 'conheceste',
      ele: 'conheceu',
      nos: 'conhecemos',
      eles: 'conheceram',
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
    past: {
      eu: 'vivi',
      tu: 'viveste',
      ele: 'viveu',
      nos: 'vivemos',
      eles: 'viveram',
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
    past: {
      eu: 'fiz',
      tu: 'fizeste',
      ele: 'fez',
      nos: 'fizemos',
      eles: 'fizeram',
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
    past: {
      eu: 'disse',
      tu: 'disseste',
      ele: 'disse',
      nos: 'dissemos',
      eles: 'disseram',
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
    past: {
      eu: 'vim',
      tu: 'veste',
      ele: 'veio',
      nos: 'viemos',
      eles: 'vieram',
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
    past: {
      eu: 'dei',
      tu: 'deste',
      ele: 'deu',
      nos: 'demos',
      eles: 'deram',
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
    past: {
      eu: 'pus',
      tu: 'puseste',
      ele: 'pôs',
      nos: 'pusemos',
      eles: 'puseram',
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
    past: {
      eu: 'vi',
      tu: 'viste',
      ele: 'viu',
      nos: 'vimos',
      eles: 'viram',
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
    past: {
      eu: 'fui',
      tu: 'foste',
      ele: 'foi',
      nos: 'fomos',
      eles: 'foram',
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
    past: {
      eu: 'fui',
      tu: 'foste',
      ele: 'foi',
      nos: 'fomos',
      eles: 'foram',
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
    past: {
      eu: 'tive',
      tu: 'tiveste',
      ele: 'teve',
      nos: 'tivemos',
      eles: 'tiveram',
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
    past: {
      eu: 'estive',
      tu: 'estiveste',
      ele: 'esteve',
      nos: 'estivemos',
      eles: 'estiveram',
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
    past: {
      eu: '',
      tu: '',
      ele: 'houve',
      nos: '',
      eles: '',
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
    past: {
      eu: 'trouxe',
      tu: 'trouxeste',
      ele: 'trouxe',
      nos: 'trouxemos',
      eles: 'trouxeram',
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
    past: {
      eu: 'quis',
      tu: 'quiseste',
      ele: 'quis',
      nos: 'quisemos',
      eles: 'quiseram',
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
    past: {
      eu: 'soube',
      tu: 'soubeste',
      ele: 'soube',
      nos: 'soubemos',
      eles: 'souberam',
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
    past: {
      eu: 'pude',
      tu: 'pudeste',
      ele: 'pôde',
      nos: 'pudemos',
      eles: 'puderam',
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
    past: {
      eu: 'fiquei',
      tu: 'ficaste',
      ele: 'ficou',
      nos: 'ficamos',
      eles: 'ficaram',
    },
  },
]

// Variables to keep track of score and total questions
let correctAnswers = 0
let totalQuestions = 0

// Function to update the score display
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

// Variable to store the correct answer for the current question
let currentCorrectAnswer: string = ''

// Function to ask a random question
function askRandomQuestionForConjugation() {
  const verb = getRandomElement(verbs)
  const tenseKey = getRandomElement(['present', 'past']) as keyof Omit<WORD, 'infinitive'>
  const person = getRandomElement(['eu', 'tu', 'ele', 'nos', 'eles']) as keyof Forms

  const questionElement = document.getElementById('question')
  const verbElement = document.getElementById('verb')
  if (questionElement && verbElement) {
    questionElement.textContent = `Como se conjuga o verbo no ${
      tenseKey === 'present' ? 'presente do indicativo' : 'pretérito perfeito do indicativo'
    } a ${person} ${['nos', 'eles'].includes(person) ? '(plural)' : '(singular)'}`

    verbElement.textContent = verb.infinitive
  }

  // Ensure that we are only indexing into the Forms part of the WORD type
  const tenseForms = verb[tenseKey] // Exclude 'infinitive' from the keys
  currentCorrectAnswer = tenseForms[person] // Store the correct answer
}
function askRandomQuestionForReverse() {
  const verb = getRandomElement(verbs)
  const tenseKey = getRandomElement(['present', 'past']) as keyof Omit<WORD, 'infinitive'>
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
<th>PPS</th>
`
    tableHead.appendChild(headerRow)

    // Create a row for each person
    const persons = ['eu', 'tu', 'ele', 'nos', 'eles']
    persons.forEach((person) => {
      const personRow = createPersonRow(person, verb.present, verb.past)
      tableBody.appendChild(personRow)
    })
  }
}

// Helper function to create a row for each person
function createPersonRow(person: string, presentForms: any, pastForms: any): HTMLTableRowElement {
  const row = document.createElement('tr')
  const personKey = person.toLowerCase().replace('/', '').trim() // Adjust the key to match object properties
  row.innerHTML = `
<td>${person}</td>
<td>${presentForms[personKey]}</td>
<td>${pastForms[personKey]}</td>
`
  return row
}
// Call the function to populate the list on page load
document.addEventListener('DOMContentLoaded', () => {
  populateInfinitiveList()
})
