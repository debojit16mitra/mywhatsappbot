const bunny = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const request = require('request');

const Language = require('../language');
const Lang2 = Language.getString('chatbot'); //for chat_bot sleep
const Lang = Language.getString('random_pic');
let LOL = Config.WORKTYPE == 'public' ? false : true

//-----------------------------------------------------SFW----------------------------------------------------------------------------------
bunny.applyCMD({pattern: 'waifu ?(.*)', fromMe: LOL, dontAddCommandList: true,  deleteCommand: false}, (async (message, match) => {

    var webimage = await axios.get('https://zenzapi.xyz/api/random/waifu?apikey=bunnybotzensapikey', { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAP, quoted: message.data })

}));



//-----------------------------------------------------NSFW----------------------------------------------------------------------------------
bunny.applyCMD({pattern: 'nswaifu ?(.*)', fromMe: LOL, dontAddCommandList: true,  deleteCommand: false}, (async (message, match) => {
if (Config.CHAT_BOT == 'true') {

    var webimage = await axios.get('https://zenzapi.xyz/api/random/waifus?apikey=bunnybotzensapikey', { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAP, quoted: message.data })
}
  else if (Config.CHAT_BOT == 'false') {
 await message.client.sendMessage(message.jid, '\n👸🏻 ' + Lang2.BOT + Lang2.NOT_AVAILABLE3 , MessageType.text,{quoted: message.data});
}
}));
