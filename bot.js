const Discord = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();

client.on('ready', () => {
   console.log(`----------------`);
   console.log(`Credit Farmm - Script By : Kahrbaa `);
   console.log(`----------------`);
   console.log(`Loadinng`);
   console.log(`Loadinng.`);
   console.log(`Loadinng..`);
   console.log(`Loadinng...`);
   console.log(`This Bots Online ' `);
   console.log(`----------------`);
});


client.on('message', message => {
    if(message.content === '-جيب'){
        message.channel.send('#rep @wxy#4800')
    }
});


client.on('message', message => {
    if(message.content === '-راتب'){
        message.channel.send('#daily')
    }
});

client.on('message', message => {
    if(message.content === '-مبلغ'){
        message.channel.send('#credit <@460606140666085378> 500')
    }
});

client.on('message', message => {
    if(message.content === '-ريب'){
        message.channel.send('#credits')
    }
});

client2.on('message', message => {
    if(message.content === '-راتب'){
        message.channel.send('#daily')
    }
});





client.on("message", message => {
  if (message.author.id != "460606140666085378") return;
  if (message.content.split(' ')[0] == '-say') {
    message.delete();
    message.channel.sendMessage(message.content.substr(5));
  }
});



client2.on("message", message => {
  if (message.author.id != "460606140666085378") return;
  if (message.content.split(' ')[0] == '-say') {
    message.delete();
    message.channel.sendMessage(message.content.substr(5));
  }
});



client3.on("message", message => {
  if (message.author.id != "438862789302419464") return;
  if (message.content.split(' ')[0] == '1say') {
    message.delete();
    message.channel.sendMessage(message.content.substr(5));
  }
});


client.on('message', message => { // لا تغير شئ عشان ما تخرب الدنيا
if (message.content === '-spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**wxy Spam **[ #" ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});


client3.on('message', message => { // لا تغير شئ عشان ما تخرب الدنيا
if (message.content === '-spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**wxy Spam **[ #" ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});



client2.on('message', message => { // لا تغير شئ عشان ما تخرب الدنيا
if (message.content === '-spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**wxy Spam **[ #" ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});




client.login(process.env.TOKEN);// لا تغير فيها شيء
client2.login(process.env.TOKEN2);// لا تغير فيها شيء
client3.login(process.env.TOKEN3);
