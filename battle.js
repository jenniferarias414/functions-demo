let darthHealth = 100
let lukeHealth = 100

console.log(Boolean(darthHealth)) //true.....anything other than zero will return true
let status = 'Darth Vader is dead.'
let newStatus = status.replace('dead', 'alive')

if(newStatus.includes('alive')) {
    console.log('Oh no! We have to go find Darth Vader, he still alive')
    let panicStatus = newStatus.toUpperCase()
    console.log(panicStatus)

    let words = panicStatus.split(" ") //changes to an array
    let kebabCase = words.join("-") //join is string

    console.log(words)
    console.log(kebabCase)

    function surpriseAttack(attack) {   //fxn declaration
        darthHealth -= attack
    } //fxn only available inside this if-statement, not outside

    surpriseAttack(35)
    console.log(darthHealth)

    const isDarthAlive = function() { //fxn expression
        if(darthHealth <= 0) {
            console.log('he is dead')
            return false
        } else {
            console.log('he still aliveeee')
            return true
        }
    }

    let aliveStatus = isDarthAlive()
    console.log(aliveStatus)

    const greeting = (char1, char2) => {  //arrow fxn
        console.log(`Hello ${char1}, I am ${char2}, and now you die`)
    }
    greeting('Luke', 'darth Vader')

    let attackDarth = () => darthHealth -= 10
    let attack = (charHealth) => charHealth - 10


    darthHealth = attack(darthHealth)
    console.log(darthHealth)
//  this attack fxn is going to receive any acharacters current health as a parameter. it will then subtract 10 from their health and return the new total health. it is used to reassign  the health value of a character.
// ex darthHealth = attack(darthHealth): if darthHealth starts at 100, it results in a total health of 90 bc it would subtract 10 from current health
    lukeHealth = attack(lukeHealth)
    console.log(lukeHealth)

    while(darthHealth > 0 && lukeHealth > 0) {
        darthHealth = attack(darthHealth) //luke attacks
        if(darthHealth > 0) {
            lukeHealth = attack(lukeHealth)
        }
    }

    if(darthHealth > 0) {
        console.log('Im Darth. I won.')
    } else {
        console.log('Im Luke. I da winner')
    }
}

// console.log(panicStatus) //panicStatus is part of inner scope of if-statement block...results error



//this is a dice-rolling application
function rollDice() {
    let possibleNums = [1, 2, 3, 4, 5, 6]
    let randomNumber = possibleNums[Math.floor(Math.random() * possibleNums.length)]
    return randomNumber
}
//how you select random pieces of an array

//hold shift/option/up or down key to duplicate lines
console.log(rollDice())
console.log(rollDice())
console.log(rollDice())