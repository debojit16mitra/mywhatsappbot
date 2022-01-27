/* Copyright (C) 2021 BunnyBot.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
*/

//Basic requirements
const Amdi = require('../events');
const QueenAmdi = require('queenamdi-public');
const {MessageType} = require('@adiwajshing/baileys');
const axios = require('axios');
const got = require("got");

// Config Checker
const Config = require('../config');
let LOL = Config.WORKTYPE == 'public' ? false : true

//Language
const Language = require('../language');
const Lang = Language.getString('lyric');


Amdi.applyCMD({pattern: 'lyric ?(.*)', fromMe: LOL, desc: Lang.LY_DESC,  deleteCommand: false}, async (message, match) => {
    const song = match[1]

    if (song === 'xx') return await message.client.sendMessage(message.jid, Lang.NEED_WORD, MessageType.text, {quoted: message.data});

    var payload = await QueenAmdi.lyrics(song)
    try {
        await message.client.sendMessage(message.jid, '*Song name :* ' + song + '\n\n' + payload.lyr, MessageType.text, {quoted: message.data});
    } catch {
        return await message.client.sendMessage(message.jid, Lang.NO_RESULT, MessageType.text, {quoted: message.data});
    }
});
