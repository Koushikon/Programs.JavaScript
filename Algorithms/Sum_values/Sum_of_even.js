// Sum of n even numbers

function sum_of_even_slowOne(num) {
    let start = 2, sum = 0
    for (let i = 1; i <= num; ++i) {
        sum += start
        start += 2
    }
    return sum
}

function sum_of_even_fastOne(num) {
    let even = 2
    return (num * (2 * even + (num - 1) * 2)) / 2
}

console.log(sum_of_even_slowOne(7))

console.log(sum_of_even_fastOne(7))