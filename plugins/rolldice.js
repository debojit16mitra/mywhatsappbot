/* Copyright (C) 2021 BunnyBot.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
*/

const Bunny = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const con = require('../config');
const Language = require('../language');
const Lang = Language.getString('rolldice');


    if (con.WORKTYPE === 'private') {

        Bunny.addCommand({pattern: 'roll', fromMe: true, desc: Lang.SEWA}, (async (message, match) => {

            await message.client.sendMessage(message.jid, Lang.SEWB, MessageType.text);
            await new Promise(r => setTimeout(r, 4000));

            // Numbers
            var r_text = new Array ();
            r_text[0] = "🎲 *1* 🎲";
            r_text[1] = "🎲 *2* 🎲";
            r_text[2] = "🎲 *3* 🎲";
            r_text[3] = "🎲 *4* 🎲";
            r_text[4] = "🎲 *5* 🎲";
            r_text[5] = "🎲 *6* 🎲";

            var i = Math.floor(6*Math.random())

            await message.client.sendMessage(message.jid, Lang.SEWC + `${r_text[i]}`, MessageType.text);

        }));
    }
    else if (con.WORKTYPE === 'public') {

        Bunny.addCommand({pattern: 'roll', fromMe: false, desc: Lang.SEWA}, (async (message, match) => {

            await message.client.sendMessage(message.jid, Lang.SEWB, MessageType.text);
            await new Promise(r => setTimeout(r, 4000));

            // Numbers
            var r_text = new Array ();
            r_text[0] = "🎲 *1* 🎲";
            r_text[1] = "🎲 *2* 🎲";
            r_text[2] = "🎲 *3* 🎲";
            r_text[3] = "🎲 *4* 🎲";
            r_text[4] = "🎲 *5* 🎲";
            r_text[5] = "🎲 *6* 🎲";

            var i = Math.floor(6*Math.random())

            await message.client.sendMessage(message.jid, Lang.SEWC + `${r_text[i]}`, MessageType.text);

        }));
    }
