console.log('🍟 Synchronous 1')

setTimeout(_ => console.log('💫 Timeout 2'), 0)

Promise.resolve().then(_ => console.log('💦 Water Drop 3'))

console.log('🍟 Synchronous 4')