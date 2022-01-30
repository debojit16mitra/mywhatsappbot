const bunny = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const request = require('request');

// LIST
const Language = require('../language');
const Lang = Language.getString('effects');
const Lang2 = Language.getString('chatbot');
let LOL = Config.WORKTYPE == 'public' ? false : true

//heroku
const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: Config.HEROKU.API_KEY
});

let baseURI = '/apps/' + Config.HEROKU.APP_NAME;



bunny.applyCMD({pattern: 'qr ?(.*)', fromMe: LOL,  deleteCommand: false, desc: Lang.QR_DESC, dontAddCommandList: true}, (async (message, match) => {
if (Config.CHAT_BOT == 'true') {
  if (match[1] === '') return await message.sendMessage(Lang.NEED_TEXT);
  
  var webimage = await axios.get(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${match[1].replace(/#/g, '\n')} `, { responseType: 'arraybuffer' })
  
  await message.sendMessage(Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAP, quoted: message.data })
}
  else if (Config.CHAT_BOT == 'false') {
 await message.client.sendMessage(message.jid, '\n👸🏻 ' + Lang2.BOT + Lang2.NOT_AVAILABLE2 , MessageType.text,{quoted: message.data});
}  
}));


bunny.applyCMD({pattern: '3dchristmas ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
if (Config.CHAT_BOT == 'true') {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);
  
    var webimage = await axios.get('https://zenzapi.xyz/textpro/3dchristmas?text=${match[1]}&apikey=bunnybotzensapikey', { responseType: 'arraybuffer' })
  
    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAP, quoted: message.data })
}
  else if (Config.CHAT_BOT == 'false') {
 await message.client.sendMessage(message.jid, '\n👸🏻 ' + Lang2.BOT + Lang2.NOT_AVAILABLE2 , MessageType.text,{quoted: message.data});
}  
}));

bunny.applyCMD({pattern: 'pornhub ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
if (Config.CHAT_BOT == 'true') {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);
  
    var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
    }

    var webimage = await axios.get(`https://zenzapi.xyz/textpro/pornhub?text=${topText}&text2=${bottomText}&apikey=bunnybotzensapikey`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAP, quoted: message.data })
}
  else if (Config.CHAT_BOT == 'false') {
 await message.client.sendMessage(message.jid, '\n👸🏻 ' + Lang2.BOT + Lang2.NOT_AVAILABLE2 , MessageType.text,{quoted: message.data});
}
}));
