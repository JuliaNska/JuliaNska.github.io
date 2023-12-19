
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEL = document.getElementById('message-el');
let sumaEl = document.getElementById('suma-el');
let cardsEl = document.getElementById('cards-el');

function getRandomCard() {
    randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber === 1) {
        randomNumber = 11;
    } else if (randomNumber >= 11 && randomNumber <=13) {
        randomNumber = 10;
    }
    return randomNumber;
}

function start() {
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    isAlive = true;
    renderGame();
}
function renderGame() {
    cardsEl.textContent = "Karty: ";
    for (i=0; i<cards.length; i++)
    {
        cardsEl.textContent += cards[i] + " ";
    }

    sumaEl.textContent = "Suma: " + sum;
if (sum < 21) {
    message = "Chcesz dobrać kolejną karte?";
    isAlive= true;
    hasBlackJack= false;
} else if (sum === 21) {
    message = "Masz blackjacka";
    hasBlackJack = true;
} else {
    message = "Przegrałeś";
    isAlive = false;
}

messageEL.textContent = message;

}

function newCard() {
    if (isAlive === true && hasBlackJack === false)
    {
    let card = getRandomCard();
    sum = sum + card;
    cards.push(card);
    renderGame();
    }
}

/*
let cards1 = [7,3,5];
for (i=0; i<=cards.length; i++) {
    console.log(cards1[i]);
}

let randomNumber = Math.floor(Math.random()*6) + 1;
console.log(randomNumber);*/

