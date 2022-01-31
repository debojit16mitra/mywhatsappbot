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
const Lang = Language.getString('ip_des');

const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: Config.HEROKU.API_KEY
});

let baseURI = '/apps/' + Config.HEROKU.APP_NAME;

if (Config.CHAT_BOT == 'true') {
    Bunny.addCommand({ pattern: 'ip ?(.*)', desc: Lang.BOT_IP,  deleteCommand: false}, (async (message, match) => {
    let url = `https://api.ipify.org/?format=json`
    const response = await got(url);
    const json = JSON.parse(response.body);
    let msg = '👩🏻: Bots IP: ' + json.ip + '\n\n';
    await message.client.sendMessage(message.jid, msg, MessageType.text, { quoted: message.data });
  }));
  Bunny.addCommand({ pattern: 'findip ?(.*)', desc: Lang.FIND_IP ,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid, '```Write Your IP😒```', MessageType.text, { quoted: message.data });
    let url = `https://ipinfo.io/${match[1]}/geo`
    const response = await got(url);
    const json = JSON.parse(response.body);
    let msg = '⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍\n' + ' ```⚕️ Büññy®Bot IP Panel ⚕️```\n' + '⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n\n';
    msg += '👩🏻: Given IP: ' + json.ip + '\n\n';
    msg += 'HostName      : ' + json.hostname + '\n';
    msg += 'City          : ' + json.city + '\n';
    msg += 'Region        : ' + json.region + '\n';
    msg += 'Country       : ' + json.country + '\n';
    msg += 'Location      : ' + json.loc + '\n';
    msg += 'Org           : ' + json.org + '\n';
    msg += 'Pincode       : ' + json.postal + '\n';
    msg += 'Timezone      : ' + json.timezone + '\n';
    await message.client.sendMessage(message.jid, msg, MessageType.text, { quoted: message.data });
  }));
}
else if (Config.CHAT_BOT == 'false') {
    Bunny.addCommand({ pattern: 'findip ?(.*)', desc: Lang.FIND_IP ,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid, '👩🏻: Get Lost. I am not available right now!', MessageType.text, { quoted: message.data });
    let msg = '👩🏻: Get Lost. I am not available right now!\n';
    await message.client.sendMessage(message.jid, msg, MessageType.text, { quoted: message.data });
  }));
  Bunny.addCommand({ pattern: 'ip ?(.*)', desc: Lang.BOT_IP ,  deleteCommand: false}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid, '👩🏻: Get Lost. I am not available right now!', MessageType.text, { quoted: message.data });
    let msg = '👩🏻: Get Lost. I am not available right now!\n';
    await message.client.sendMessage(message.jid, msg, MessageType.text, { quoted: message.data });
  }));
}  
