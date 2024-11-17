const { Telegraf } = require('telegraf');
const { message } = require('telegraf/filters');
require('dotenv').config();

const bot = new Telegraf(process.env.TOKEN);

const helpMessage = `
Say something to me:
/start - start the bot;
/help - command for get help;
`;

bot.start((ctx) => {
    logger(ctx)
    ctx.reply("Hello. I am symple echo bot.");
    ctx.reply(helpMessage);
});

bot.command('echo', (ctx) => {
    logger(ctx)
    let input = ctx.message.text;

    let inputArray = input.split(' ');

    let message = '';
    if(inputArray.length == 1) {
        message = 'You said echo';
    } else {
        inputArray.shift();
        message = inputArray.join(' ');
    }
    ctx.reply(message);
})

function logger(ctx) {
    console.log("Someone used your bot!");
    console.log(ctx.from);
    console.log(ctx.from.username + " said:" + ctx.message.text);
}

bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))