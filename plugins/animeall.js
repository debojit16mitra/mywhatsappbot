/* Copyright (C) 2021 BunnyBot.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
*/

const Amdi = require('../events');
const Config = require('../config');
const {MessageType} = require('@adiwajshing/baileys');

const Language = require('../language');
const Lang = Language.getString('scrapers');

const eng = `💠● *ALL ANIME COMMANDS PLUGIN LIST* ●💠\n\n` + 
`💠● *SFW* ●💠\n\n` +
`⚙️Command: *.ranimel*\nℹ️Description: Random Anime Images.\n\n` +
`⚙️Command: *.waifu*\nℹ️Description: Get random Waifu images.\n\n` + 
`⚙️Command: *.neko*\nℹ️Description: Get random Neko images.\n\n` + 
`⚙️Command: *.animeart*\nℹ️Description: Get random Anime Fan Art.\n\n` + 
`💠● *NSFW* ●💠\n\n` + 
`⚙️Command: *.nswaifu*\nℹ️Description: Get random NSFW Waifu images.\n\n` + 
`⚙️Command: *.nsneko*\nℹ️Description: Get random NSFW Neko images.\n\n` + 
`⚙️Command: *.nsloli*\nℹ️Description: Get random NSFW Loli images.\n\n` + 
`⚙️Command: *.nsloli2*\nℹ️Description: Get random NSFW Loli Type 2 images.\n\n` + 
`⚙️Command: *.nsecchi*\nℹ️Description: Get random NSFW Ecchi images.\n\n` + 
`⚙️Command: *.nshentai*\nℹ️Description: Get random NSFW Hentai images.\n\n` + 
`⚙️Command: *.nscum*\nℹ️Description: Get random NSFW Cum images.\n\n` + 
`⚙️Command: *.nstiddies*\nℹ️Description: Get random NSFW Big Tiddies images.\n\n` + 
`⚙️Command: *.nsbooty*\nℹ️Description: Get random NSFW Booty images.\n\n` + 
`⚙️Command: *.nsana*\nℹ️Description: Get random NSFW Anal images.\n\n` + 
`⚙️Command: *.nspuss*\nℹ️Description: Get random NSFW Pussy images.\n\n` + 
`⚙️Command: *.nsblo*\nℹ️Description: Get random NSFW Blow Job images.\n\n` + 
`⚙️Command: *.nsall*\nℹ️Description: Get random NSFW All Types (any) images.\n\n`

if (Config.LANG == 'EN') {
    if (Config.WORKTYPE == 'private') {
        Amdi.applyCMD({pattern: 'animeall', fromMe: true,  deleteCommand: false, desc: Lang.ANIMEALL_DESC}, (async (message, match) => {    
            await message.client.sendMessage(message.jid,eng, MessageType.text,{quoted: message.data});
        }));
    }

    else if (Config.WORKTYPE == 'public') {
        Amdi.applyCMD({pattern: 'animeall', fromMe: false, desc: Lang.ANIMEALL_DESC}, (async (message, match) => {    
            await message.client.sendMessage(message.jid,eng, MessageType.text,{quoted: message.data});
        }));
    }
}

if (Config.LANG == 'SI') {
    if (Config.WORKTYPE == 'private') {
        Amdi.applyCMD({pattern: 'animeall', fromMe: true,  deleteCommand: false, desc: Lang.ANIMEALL_DESC}, (async (message, match) => {    
            await message.client.sendMessage(message.jid,sin, MessageType.text,{quoted: message.data});
        }));
    }

    else if (Config.WORKTYPE == 'public') {
        Amdi.applyCMD({pattern: 'animeall', fromMe: false, desc: Lang.ANIMEALL_DESC}, (async (message, match) => {    
            await message.client.sendMessage(message.jid,sin, MessageType.text,{quoted: message.data});
        }));
    }
}
