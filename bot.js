const { Telegraf } = require('telegraf');
// const { message } = require('telegraf/filters');
require('dotenv').config();

const bot = new Telegraf(process.env.TOKEN);

const helpMessage = `
Say something to me:
/start - start the bot;
/help - command for get help;
`;

bot.start((ctx) => {
    ctx.reply("Hello. I am echo bot.");
    ctx.reply(helpMessage);
});

bot.command('echo', (ctx) => {
    let input = ctx.message.text;

    let inputArray = input.split(' ');

    let message = '';
    if(inputArray == 1) {
        message = 'You said echo';
    } else {
        inputArray.shift();
        message = inputArray.join(' ')
    }
    ctx.reply(message);
})

bot.launch();