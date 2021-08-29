// Algorithm Posteriori Performance analysis

function sum_of_natural_slow(n) {
    let total = 0
    for (let i = 1; i <= n; ++i)
        total += i
    return total
}

let t1 = performance.now()
let slow_algorithm = sum_of_natural_slow(5000000)
let t2 = performance.now()


console.log('The slow one ', slow_algorithm)

console.log(`The algorithm takes ${(t2 - t1) / 2} seconds to process`)