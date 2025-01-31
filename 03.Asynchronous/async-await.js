async function f1() {
    return 1
}

console.log(f1());
f1().then(console.log('Nice'))

async function f2() {
    return Promise.resolve(1)
}

console.log(f2());
f2().then(console.log('Nice'))