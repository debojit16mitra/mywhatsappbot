
/* Copyright (C) 2021 BunnyBot.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
*/

//Basic requirements
const Amdi = require('../events');
const QueenAmdi = require('queenamdi-public-2');
const {MessageType} = require('@adiwajshing/baileys');
const got = require("got");

// Config Checker
const Config = require('../config');
let LOL = Config.WORKTYPE == 'public' ? false : true

//Language
const Language = require('../language');
const Lang = Language.getString('font');

Amdi.applyCMD({ pattern: 'fancy ?(.*)', fromMe: LOL, desc: Lang.FONT_DESC,  deleteCommand: false, dontAddCommandList: true}, async (message, match) => {
    const name = match[1]

    if (name === 'xx') return await message.reply(Lang.NEED_WORD);
    var payload = await QueenAmdi.fancy(name)
   
    await message.client.sendMessage(message.jid, '*✨Fancy Text✨*' + '\n\n' + payload.cool, MessageType.text, {quoted: message.data});
})

