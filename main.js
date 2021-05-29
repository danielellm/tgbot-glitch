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

bot.on('message', function (message) {
    if (message.new_chat_members != undefined) {
        console.log(message.new_chat_member.username);
        console.log(message.new_chat_member.id);
       ctx.reply('Hello, ' +message.new_chat_member.username)
    }else{
        console.log("new_chat_members is not defined");
    }
});

bot.command('hello', ctx => {
 //There's no need slash.

 //Reply when /hello command was executed
  ctx.reply('Huzzah! hello');
})

bot.launch()


