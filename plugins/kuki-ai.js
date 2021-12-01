/* Copyright (C) 2021 BunnyBot.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
*/

const Bunny = require('../events');
const { MessageType } = require('@adiwajshing/baileys');
const got = require('got');
const Config = require('../config');
const axios = require('axios');
const { errorMessage, infoMessage } = require('../helpers');
const QueenAmdi = require('queenamdi-public-2');

const Language = require('../language');
const Lang = Language.getString('kukiai');

const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: Config.HEROKU.API_KEY
});

let baseURI = '/apps/' + Config.HEROKU.APP_NAME;

if (Config.CHAT_BOT == 'true') {
    Bunny.addCommand({ pattern: 'kuki ?(.*)', desc: Lang.KUKI_DESC ,  deleteCommand: false}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid, '```Say Something😒```', MessageType.text, { quoted: message.data });
    let url = `https://www.kuki-api.tk/api/BunnyBot/Bunny/message=${match[1]}`
    const response = await got(url);
    const json = JSON.parse(response.body);
    let msg = '👩🏻: ' + json.reply + '\n\n';
    await message.client.sendMessage(message.jid, msg, MessageType.text, { quoted: message.data });
  }));
}
else if (Config.CHAT_BOT == 'false') {
    Bunny.addCommand({ pattern: 'kuki ?(.*)', desc: Lang.KUKI_DESC ,  deleteCommand: false}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid, '👩🏻: Get Lost. I am not available right now!', MessageType.text, { quoted: message.data });
    let msg = '👩🏻: Get Lost. I am not available right now!\n';
    await message.client.sendMessage(message.jid, msg, MessageType.text, { quoted: message.data });
  }));
}  

 Bunny.addCommand({ pattern: 'shrt ?(.*)', desc: Lang.KUKI_DESC ,  deleteCommand: false}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid, '```Say Something😒```', MessageType.text, { quoted: message.data });
    var apikey = await QueenAmdi.api()
    let url = ('https://api.lolhuman.xyz/api/ytreels?apikey=' + apikey.key + `&query=${match[1]}`)
    const response = await got(url);
    const json = JSON.parse(response.body);
    let msg = '👩🏻: ' + json.message + '\n\n';
        msg += '🎬Title      : ' + json.title + '\n\n';
        msg += '🎬Title 2    : ' + json.result.title + '\n\n';
        msg += '🎬Title 3    : ' + json.title.result + '\n\n';

    await message.client.sendMessage(message.jid, msg, MessageType.text, { quoted: message.data });
  }));
    
    
    
