const { Telegraf } = require('telegraf')
   
// Bot TOKEN


const bot = new Telegraf(process.env.BOT_TOKEN)

debug('Bot runs in production mode');
bot.telegram.setWebhook('https://api.vercel.com/v1/integrations/deploy/prj_zztUObwqX2bWs0EAroerlaeOPWpw/VbJvlvf1u2')

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

bot.launch()


