/* Copyright (C) 2021 BunnyBot.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
*/

const Amdi = require('../events');
const Config = require('../config');
const {MessageType} = require('@adiwajshing/baileys');

const Language = require('../language');
const Lang = Language.getString('scrapers');

const eng = `💠●*Text To Image Effect List*●💠\n` + 
`💠●*Single Text (Eg: .tsketch Bunnybot )*●💠\n\n` + 
`⚙️Command: *.3dchristmas*\n` + 
`⚙️Command: *.tdeepsea*\n` + 
`⚙️Command: *.3dscifi*\n` + 
`⚙️Command: *.3drainbow*\n` + 
`⚙️Command: *.3dwaterpipe*\n` + 
`⚙️Command: *.thalloween*\n` + 
`⚙️Command: *.tsketch*\n` + 
`⚙️Command: *.tbluecircuit*\n` + 
`⚙️Command: *.tspace*\n` + 
`⚙️Command: *.tmetallic*\n` + 
`⚙️Command: *.tfiction*\n` + 
`⚙️Command: *.tgreenhorror*\n` + 
`⚙️Command: *.tberry*\n` + 
`⚙️Command: *.tthunder*\n` + 
`⚙️Command: *.tmagma*\n` + 
`⚙️Command: *.tneondevil*\n` + 
`⚙️Command: *.tchristmas*\n` + 
`⚙️Command: *.3dgradient*\n` + 
`⚙️Command: *.tblackpink*\n` + 
`⚙️Command: *.tgluetext*\n` + 
`⚙️Command: *.tnatural*\n` + 
`⚙️Command: *.twaterdrop*\n` + 
`⚙️Command: *.tmatrix*\n` + 
`⚙️Command: *.tfireworks*\n` + 
`⚙️Command: *.tcrackedstone*\n` + 
`⚙️Command: *.3dneonlight*\n` + 
`⚙️Command: *.tglitch*\n` + 
`⚙️Command: *.tharrypotter*\n` +
`⚙️Command: *.tfogwindows*\n\n` +
`💠●*Multiple Text (Eg: .tpornhub Bunny/bot )*●💠\n\n` +
`⚙️Command: *.tpornhub*\n` + 
`⚙️Command: *.2glitch*\n` + 
`⚙️Command: *.tmarvel*\n` + 
`⚙️Command: *.twolflogo*\n` +
`⚙️Command: *.twolfgalaxy*\n\n` 
      


if (Config.LANG == 'EN') {
    if (Config.WORKTYPE == 'private') {
        Amdi.applyCMD({pattern: 'effectimg', fromMe: true,  deleteCommand: false, desc: Lang.EFFECT_DESC}, (async (message, match) => {    
            await message.client.sendMessage(message.jid,eng, MessageType.text,{quoted: message.data});
        }));
    }

    else if (Config.WORKTYPE == 'public') {
        Amdi.applyCMD({pattern: 'effectimg', fromMe: false, desc: Lang.EFFECT_DESC}, (async (message, match) => {    
            await message.client.sendMessage(message.jid,eng, MessageType.text,{quoted: message.data});
        }));
    }
}
