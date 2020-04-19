const Iota = require('@iota/core');

const send = require('./send')
const receive = require('./receive')


const question() {
    prompt("Your question?")
   .then(input => {
       console.log(input)
   })
   .catch(err => {
       console.log(err)
       process.exit()
   })
} 

const process() {
    
}

const prompt = (question) => {
    return new Promise((resolve, reject) => {
        const { stdin, stdout } = process
        stdin.resume()
        stdout.write(question)
        stdin.on('data', data => resolve(data.toString().trim()))
        stdin.on('error', err => reject(err))
    })
 }

