const { Telegraf } = require('telegraf')
   
// Bot TOKEN


const BOT_TOKEN = process.env.BOT_TOKEN || '';
const PORT = (process.env.PORT && parseInt(process.env.PORT, 10)) || 3000;
const WEBHOOK_URL = '${process.env.WEBHOOK_URL}/bot${BOT_TOKEN}';

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.telegram.setWebhook(WEBHOOK_URL);
bot.startWebhook('/bot${BOT_TOKEN}', null, PORT);
// Listener

bot.command('help', ctx => {

  ctx.reply('How can i help you? /n 
           use this buttons to find your topic.. /n
            
            /welcome
            /where
            /what
            /when
            /rules
            
            
');
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


