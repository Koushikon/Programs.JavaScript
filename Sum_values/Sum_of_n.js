function sum_of_natural_slow(n) {
    let total = 0
    for (let i = 1; i <= n; ++i)
        total += i
    return total
}

function sum_of_natural_fast(n) {
    return (n * (n + 1)) / 2
}

let slow_algorithm = sum_of_natural_slow(7)
let fast_algorithm = sum_of_natural_fast(7)

console.log('The slow one ', slow_algorithm)
console.log('The fast one ', fast_algorithm)

console.log('They both are same it\'s', (slow_algorithm == fast_algorithm))