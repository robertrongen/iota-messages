## Exercise-chat assignment

Create a new file called exercise-chat.js and program a simple chat client based on send.js and receive.js with which you can send and receive messages: 
- A prompt appears: _"Enter a message:"_.
- After entering the message and ENTER the message is sent to a certain address in the tangle and another message can be entered.
- New messages sent to the address should be output automatically.
Note: You can use the following function to read data asynchronously into Node.js via a command prompt:
`
const prompt = (question) => {
   return new Promise((resolve, reject) => {
       const { stdin, stdout } = process
       stdin.resume()
       stdout.write(question)
       stdin.on('data', data => resolve(data.toString().trim()))
       stdin.on('error', err => reject(err))
   })
}
 
This is how you use the function:
 
prompt("Ihre Eingabe? ")
   .then(input => {
       console.log(input)
   })
   .catch(err => {
       console.log(err)
       process.exit()
   })

`

## Additional Task
Extend the application from Task 3 so that each chat participant only sees the messages of the other participants and not his own.
