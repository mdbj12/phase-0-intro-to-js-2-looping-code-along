// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
// }

// const gifts = ["teddy bear", "drone", "doll"];
// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//         debugger;
//     }
//     return gifts;
// }
// wrapGifts(gifts);


// cards: list
// event: string
// function writeCards(cards, event) {
//     const thankYouMessage = [];
//     for (let i = 0; i < cards.length; i++) {
//         thankYouMessage[i] = `Thank you ${cards[i]} for the ${event} gift!`;
//     }
//     return thankYouMessage;
// }

// const cards = ["Michael", "Christina", "Peanut", "Langley", "Chilly"];
// const event = 'housewarming'
// // console.log(writeCards(cards, event));

// function writeCards(cards, event) {
//     let i = 0;
//     while (i < cards.length) {
//         console.log(`Thank you ${cards[i]} for the ${event} gift!`);
//         i++;
//     }
//     return cards;
// }
// writeCards(cards, event);

function writeCards(names, event) {
    let messages = []
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
}

function countDown(number) {
    let i = number;
    while (i >= 0) {
        console.log(i);
        i--;
    }
    return i;
}