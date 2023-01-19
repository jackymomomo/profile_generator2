const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Whats your name? Nicknames are also cool ', (answer) => {
  console.log(`nice to meet you ${answer}`);

  rl.question("What's an activity you like doing? ", (answer) => {
    console.log(`I like ${answer} to man thats sick`)

    rl.question("Man we are so alike Whats your favourite music album 🎸 ", (answer) => {
      console.log(`my favourite has gotta be cage the Elepahant 🐘, ${answer}? damn wish i thought of them XD `)

      rl.question("If you could only have one food the rest of your life what would it be? ", (answer) => {
        console.log(`XD ${answer} is a good answer`)

        rl.question("Whats your favourtie sport? ", (answer) => {
          console.log(`I like basketball gets a good workout but ${answer} is cool too`)

          rl.question("What superpower would you choose ", (answer) => {
            console.log(`WHOA! ${answer}! damn I would prolly choose teleportation`)
          
          rl.close()
          })
        })
      })
    })
  })
});