const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Who should we call you by?', (answer) => {
  console.log(`Cool : ${answer}`);
  rl.question('Where do you like to spend your time off?', (answer) => {
    console.log(`Sounds fun: ${answer}`);
    rl.question('What kind of food would you say no to, even if your grandmother served it to you?', (answer) => {
      console.log(`Poor grandma: ${answer}`);
      rl.question('If you could be anywhere in the world in the click of a keyboard, where to?', (answer) => {
        console.log(`Good choice: ${answer}`);
        rl.question('What are you proudly mediocre at?', (answer) => {
          console.log(`Good. Don't change: ${answer}`);
          rl.question('Do you feel like you know yourself now, or would you like to keep going?', (answer) => {
            console.log(`That's all folks!: ${answer}`);
          
            rl.close();
          });
        });
      });
    });
  });
});










