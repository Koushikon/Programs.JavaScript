/**
 * ? Syntax: Array_name.reverse()
 * * Array One Method reverses the original array.
 * ? Syntax: [...Array_name].reverse()
 * * Array Another Method keeps the original array as it is and creates a new array of reversed elements.
 */

const names_1 = ["Alice", "Bob", "Charlie", "David"]
const reversed_1 = names_1.reverse()

// Output: David, Charlie, Bob, Alice
console.log(names_1)
// Output: David, Charlie, Bob, Alice
console.log(reversed_1)



const names_2 = ["Alice", "Bob", "Charlie", "David"]
const reversed_2 = [...names_2].reverse()

// Output: Alice, Bob, Charlie, David
console.log(names_2)
// Output: David, Charlie, Bob, Alice
console.log(reversed_2)