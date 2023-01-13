const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        
    }

    return gifts;
}

wrapGifts(gifts)

const anArrayOfStringNames = ["bat", "cat", "mat"] 

function writeCards(anArrayOfStringNames, eventName){
    const newArray= []
    for (let i = 0; i < anArrayOfStringNames.length; i++) {
newArray.push(`Thank you, ${anArrayOfStringNames[i] }, for the wonderful ${eventName} gift!`)
    } 
    return newArray
}
function countDown() {
let countDown = 10
while (countDown >= 0){
    console.log(countDown--)
}
}