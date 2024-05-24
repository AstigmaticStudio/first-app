const TelegramBot = require('node-telegram-bot-api');

const token = '6817765528:AAGdV909SPuezWt4W1Jj8FQTNFzy_3YPs_0';

const bot = new TelegramBot(token, {polling: true});

const WebAppUrl = `https://www.youtube.com/watch?v=MzO-0IYkZMU&t=316s`


bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text === `/start`){
    bot.sendMessage(chatId, `Заполните форму ниже`, {
      reply_markup:{
        inline_keyboard: [
          [{text: `Заполнить форму`, web_app: {url: WebAppUrl}}]
        ]
      }
    })
  }
});