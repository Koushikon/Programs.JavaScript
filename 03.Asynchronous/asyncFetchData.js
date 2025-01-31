// Fetching data from remote Server
import fetch from 'node-fetch'

const promise = fetch('https://jsonplaceholder.typicode.com/todos/1')

promise
    .then(res => res.json())
    .then(user => console.log('🤠', user.title, user.completed))

console.log('🍟 Synchronous 5')