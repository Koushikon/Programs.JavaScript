function fibonacci(n) {
    let n1 = 0, n2 = 1, n3 = 0
    for (let i = 0; i < n - 1; ++i) {
        n3 = n1 + n2
        n1 = n2
        n2 = n3
    }
    return n3
}

console.log(fibonacci(7))