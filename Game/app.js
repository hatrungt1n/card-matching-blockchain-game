const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    },
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
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
        card.setAttribute("src", "images/blank.png")
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
        cards[optionOneId].setAttribute("src", "images/blank.png")
        cards[optionTwoId].setAttribute("src", "images/blank.png")
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

// function ready() {
//     const overlays = Array.from(document.getElementsByClassName('overlay-text'));
//     // let buttonPlay = document.getElementsByClassName("overlay-button-small")[0];
//     const buttonPlay = document.querySelector("button");

//     overlays.forEach((overlay) => {
//             buttonPlay.addEventListener('click', () => {
//                 overlay.classList.remove('visible')
//             })
//         })
// }

// ready()