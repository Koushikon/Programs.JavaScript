/**
 * Array Elements:
 * -5 Index: 10
 * -4 Index: 6
 * -3 Index: 7
 * -2 Index: 8
 * -1 Index: 9
 */
var Nums = [10, 6, 7, 8, 9];
console.log(Nums.at(-5));

/**
 * * Array Destructurig:
 */
const states = ["Abia", "Adamawa", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno", "Cross River", "Delta", "Ebonyi", "Enugu", "Edo"];

// Getting values from start and with few skip
const [first, second, , fourth] = states;
console.log(first, second, fourth)

// Getting only specified position values
const { 2: third, 5: fifth, 9: tenth } = states;
console.log(third, fifth, tenth);


const my = { name: 'Random People', company: 'Andela' };
const { name } = my;
console.log(name);
const { name: Human } = my;
console.log(Human);
