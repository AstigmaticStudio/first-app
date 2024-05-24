const TelegramBot = require('node-telegram-bot-api');

const token = '6817765528:AAGdV909SPuezWt4W1Jj8FQTNFzy_3YPs_0';

const bot = new TelegramBot(token, {polling: true});

const WebAppUrl = `https://fist-web-app.netlify.app`


bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text === `/star`){
    bot.sendMessage(chatId, `Заполните форму ниже`, {
      reply_markup:{
        inline_keyboard: [
          [{text: `Заполнить форму`, web_app: {url: WebAppUrl}}]
        ]
      }
    })
  }
});