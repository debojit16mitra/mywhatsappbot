/* Copyright (C) 2021 BunnyBot.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
*/
/*
const Amdi = require('../events');
const Config = require('../config');
const {MessageType} = require('@adiwajshing/baileys');

const Language = require('../language');
const Lang = Language.getString('scrapers');

const eng = `💠🧩 ● *Custom TTP List* ● 🧩💠\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n\n` + 
`⚙️Command: *.attp*\nℹ️Description: Animated rainbow text sticker.\n\n` + 
`⚙️Command: *.ttpwater*\nℹ️Description: Blue text sticker. _[Sinhala font supported]_\n\n` + 
`⚙️Command: *.ttppink*\nℹ️Description: Pink text sticker. _[Sinhala font supported]_\n\n` + 
`⚙️Command: *.ttpblack*\nℹ️Description: Black text sticker. _[Sinhala font supported]_\n\n` + 
`⚙️Command: *.ttpf*\nℹ️Description: Fluffy style text sticker. _[Sinhala font supported]_\n\n` + 
`⚙️Command: *.ttpsm*\nℹ️Description: Smurfs style text sticker. _[Sinhala font supported]_\n\n` + 
`⚙️Command: *.ttpelec*\nℹ️Description: Electrical text sticker. _[Sinhala font supported]_\n\n` + 
`⚙️Command: *.ttphigh*\nℹ️Description: Animated highlight text sticker. _[Sinhala font supported]_\n\n` + 
`⚙️Command: *.ttpmem*\nℹ️Description: Animated red text sticker. _[Sinhala font supported]_\n\n` + 
`Check official website : I dont have one right now😹`

if (Config.LANG == 'EN') {
    if (Config.WORKTYPE == 'private') {
        Amdi.applyCMD({pattern: 'helpttp', fromMe: true,  deleteCommand: false, desc: Lang.ATTP_DESC}, (async (message, match) => {    
            await message.client.sendMessage(message.jid,eng, MessageType.text,{quoted: message.data});
        }));
    }

    else if (Config.WORKTYPE == 'public') {
        Amdi.applyCMD({pattern: 'helpttp', fromMe: false, desc: Lang.ATTP_DESC}, (async (message, match) => {    
            await message.client.sendMessage(message.jid,eng, MessageType.text,{quoted: message.data});
        }));
    }
}
*/
