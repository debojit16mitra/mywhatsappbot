/* Copyright (C) 2021 BunnyBot.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
*/

const bunny = require('../events');
const Config = require('../config');
const QueenAmdi = require('queenamdi-public-2');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const request = require('request');

const Language = require('../language');
const Lang2 = Language.getString('chatbot'); //for chat_bot sleep
const Lang = Language.getString('random_pic');
let LOL = Config.WORKTYPE == 'public' ? false : true


bunny.applyCMD({pattern: 'bts ?(.*)', fromMe: LOL, desc: Lang.BTS_DESC,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {


    var webimage = await axios.get('https://api.xteam.xyz/randomimage/bts?APIKEY=05399de2c0395767', { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAP, quoted: message.data })

}));

    
bunny.applyCMD({pattern: 'blackpink ?(.*)', fromMe: LOL, desc: Lang.BP_DESC,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {

    var webimage = await axios.get('https://api.xteam.xyz/randomimage/blackpink?APIKEY=05399de2c0395767', { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAP, quoted: message.data })

}));


bunny.applyCMD({pattern: 'rwallpaper ?(.*)', fromMe: LOL, desc: Lang.RWALL_DESC,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {

    var webimage = await axios.get(`https://source.unsplash.com/random/1920x1080`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAP, quoted: message.data })

}));

bunny.applyCMD({pattern: 'cosplay ?(.*)', fromMe: LOL, desc: Lang.BP_DESC,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {

    var webimage = await axios.get('https://zenzapi.xyz/api/random/cosplay?apikey=bunnybotzensapikey', { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAP, quoted: message.data })

}));
