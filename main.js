const { Telegraf } = require('telegraf')
   
// Bot TOKEN


const bot = new Telegraf(process.env.BOT_TOKEN)




// Listener



bot.command('help', ctx => {
 //There's no need slash.

 //Reply when /hello command was executed
  ctx.reply('Huzzah! help');
})

//Do something when start command was executed
bot.start(ctx => {
//Yes, you need callback son.

//Send a message when /start command has executed
ctx.reply('Hello, Human!');
})

bot.command('hello', ctx => {
 //There's no need slash.

 //Reply when /hello command was executed
  ctx.reply('Huzzah! hello');
})

bot.launch().then(() => {
        console.log("Logged as "+bot.context.botInfo.first_name)
        //If it's shows your bot name, Then try execute /start Command, Enjoy!
});


