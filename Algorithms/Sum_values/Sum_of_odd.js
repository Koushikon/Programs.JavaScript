// Sum of n odd numbers

function sum_of_odd_slowOne(num) {
    let start = 1, sum = 0
    for (let i = 1; i <= num; ++i) {
        sum += start
        start += 2
    }
    return sum
}

function sum_of_odd_fastOne(num) {
    let odd = 1
    return (num * (2 * odd + (num - 1) * 2)) / 2
}

console.log(sum_of_odd_slowOne(7))

console.log(sum_of_odd_fastOne(7))