const cardArray = [
    {
        name: 'alpaca',
        img: 'images/alpaca.webp',
    },
    {
        name: 'bear',
        img: 'images/bear.webp',
    },
    {
        name: 'cat',
        img: 'images/cat.webp',
    },
    {
        name: 'corgi',
        img: 'images/corgi.webp',
    },
    {
        name: 'duck',
        img: 'images/duck.webp',
    },
    {
        name: 'kirakuya',
        img: 'images/kirakuya.webp',
    },
    {
        name: 'lion',
        img: 'images/lion.webp',
    },
    {
        name: 'moose',
        img: 'images/moose.webp',
    },
    {
        name: 'octopus',
        img: 'images/octopus.webp',
    },
    {
        name: 'penguin',
        img: 'images/penguin.webp',
    },
    {
        name: 'pomsky',
        img: 'images/pomsky.webp',
    },
    {
        name: 'rabbit',
        img: 'images/rabbit.webp',
    },
    {
        name: 'squirrel',
        img: 'images/squirrel.webp',
    },
    {
        name: 'stork',
        img: 'images/stork.webp',
    },
    {
        name: 'yogaBear',
        img: 'images/yogaBear.webp',
    },
    {
        name: 'alpaca',
        img: 'images/alpaca.webp',
    },
    {
        name: 'bear',
        img: 'images/bear.webp',
    },
    {
        name: 'cat',
        img: 'images/cat.webp',
    },
    {
        name: 'corgi',
        img: 'images/corgi.webp',
    },
    {
        name: 'duck',
        img: 'images/duck.webp',
    },
    {
        name: 'kirakuya',
        img: 'images/kirakuya.webp',
    },
    {
        name: 'lion',
        img: 'images/lion.webp',
    },
    {
        name: 'moose',
        img: 'images/moose.webp',
    },
    {
        name: 'octopus',
        img: 'images/octopus.webp',
    },
    {
        name: 'penguin',
        img: 'images/penguin.webp',
    },
    {
        name: 'pomsky',
        img: 'images/pomsky.webp',
    },
    {
        name: 'rabbit',
        img: 'images/rabbit.webp',
    },
    {
        name: 'squirrel',
        img: 'images/squirrel.webp',
    },
    {
        name: 'stork',
        img: 'images/stork.webp',
    },
    {
        name: 'yogaBear',
        img: 'images/yogaBear.webp',
    },
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplayed = document.querySelector("#grid")
const score = document.querySelector("#result")
let result = 0

const cardArrayLength = cardArray.length
let cardChosen = []
let cardChosenId = []
let cardWons = []

function createBoard() {
    for (let i=0; i < cardArrayLength; i++) {
        const card = document.createElement("img")
        card.setAttribute("src", "images/blank.jpg")
        card.setAttribute("data-id", i)
        card.addEventListener("click", flipCard)
        gridDisplayed.append(card)
    }
}

createBoard()

function checkMatch() {
    const cards = document.querySelectorAll("img")
    const optionOne = cardChosen[0]
    const optionTwo = cardChosen[1]
    const optionOneId = cardChosenId[0]
    const optionTwoId = cardChosenId[1]

    console.log("Check for match!")
    if (optionOne == optionTwo && optionOneId !== optionTwoId) {
        // alert("You found a match!")
        cards[optionOneId].setAttribute("src", "images/white.png")
        cards[optionTwoId].setAttribute("src", "images/white.png")
        cards[optionOneId].removeEventListener("click", flipCard)
        cards[optionTwoId].removeEventListener("click", flipCard)

        cardWons.push(cardChosen)

        result++
        score.textContent = result
    } else { 
        cards[optionOneId].setAttribute("src", "images/blank.jpg")
        cards[optionTwoId].setAttribute("src", "images/blank.jpg")
    }

    cardChosen = []
    cardChosenId = []

    if (cardWons.length === cardArrayLength / 2) {
        document.getElementById('victory-text').classList.add('visible');
    }
}

function flipCard() {
    const cardId = this.getAttribute('data-id')

    if (cardChosen.length < 2) {
        cardChosen.push(cardArray[cardId].name)
        cardChosenId.push(cardId)
        console.log(cardChosen)
        this.setAttribute("src", cardArray[cardId].img)
    }
    
    if (cardChosen.length == 2) {
        this.removeEventListener("click", flipCard)
        setTimeout(checkMatch, 500)
    }
    this.addEventListener('click', flipCard)
}