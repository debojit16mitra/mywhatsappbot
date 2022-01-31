/* Copyright (C) 2021 BunnyBot.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
*/

const bunny = require('../events');
const Config = require('../config');
const {MessageType} = require('@adiwajshing/baileys');

const Language = require('../language');
const Lang = Language.getString('scrapers');

const eng = `💠● *ALL ANIME COMMANDS PLUGIN LIST* ●💠\n\n` + 
`💠● *SFW* ●💠\n\n` +
`⚙️Command: *.ranime*\nℹ️Description: Random Anime Images.\n\n` +
`⚙️Command: *.waifu*\nℹ️Description: Get random Waifu images.\n\n` + 
`⚙️Command: *.neko*\nℹ️Description: Get random Neko images.\n\n` + 
`⚙️Command: *.shinobu*\nℹ️Description: Get random Anime Shinobu.\n\n` + 
`⚙️Command: *.hasbu*\nℹ️Description: Get random Anime Hasbu.\n\n` + 

`💠● *NSFW* ●💠\n\n` + 
`⚙️Command: *.nswaifu*\nℹ️Description: Get random NSFW Waifu images.\n\n` + 
`⚙️Command: *.nsneko*\nℹ️Description: Get random NSFW Neko images.\n\n` + 
`⚙️Command: *.nsass*\nℹ️Description: Get random NSFW Ass images.\n\n` + 
`⚙️Command: *.nsahegao*\nℹ️Description: Get random NSFW Ahegao images.\n\n` + 
`⚙️Command: *.nsbdsm*\nℹ️Description: Get random NSFW BDSM images.\n\n` + 
`⚙️Command: *.nshentai*\nℹ️Description: Get random NSFW Hentai images.\n\n` + 
`⚙️Command: *.nscum*\nℹ️Description: Get random NSFW Cum images.\n\n` + 
`⚙️Command: *.nslewd*\nℹ️Description: Get random NSFW Lewd images.\n\n` + 
`⚙️Command: *.nsgang*\nℹ️Description: Get random NSFW Gang Bang images.\n\n` + 
`⚙️Command: *.nsfemdom*\nℹ️Description: Get random NSFW Femdom images.\n\n` + 
`⚙️Command: *.nspuss*\nℹ️Description: Get random NSFW Pussy images.\n\n` + 
`⚙️Command: *.nsblow*\nℹ️Description: Get random NSFW Blow Job images.\n\n` + 
`⚙️Command: *.nsglasses*\nℹ️Description: Get random NSFW Girl with glasses images.\n\n` + 
`⚙️Command: *.nsmaid*\nℹ️Description: Get random NSFW Anime Maid images.\n\n` + 
`⚙️Command: *.nsmast*\nℹ️Description: Get random NSFW Musturbation images.\n\n` + 
`⚙️Command: *.nsyuri*\nℹ️Description: Get random NSFW Yuri images.\n\n` + 
`⚙️Command: *.nspant*\nℹ️Description: Get random NSFW Girl in Panties images.\n\n` + 
`⚙️Command: *.nsthighs*\nℹ️Description: Get random NSFW Girl in thighs images.\n\n` + 
`⚙️Command: *.nsero*\nℹ️Description: Get random NSFW ERO images.\n\n` + 
`⚙️Command: *.nstits*\nℹ️Description: Get random NSFW Girl in Panties images.\n\n` + 
`⚙️Command: *.nssolo*\nℹ️Description: Get random NSFW Girl in thighs images.\n\n` + 
`⚙️Command: *.nseroyuri*\nℹ️Description: Get random NSFW ERO images.\n\n` + 
`⚙️Command: *.nsmobwall*\nℹ️Description: Get random NSFW Mobile Wallpaper.\n\n`

if (Config.LANG == 'EN') {
    if (Config.WORKTYPE == 'private') {
        bunny.applyCMD({pattern: 'animeall', fromMe: true,  deleteCommand: false, desc: Lang.ANIMEALL_DESC}, (async (message, match) => {    
            await message.client.sendMessage(message.jid,eng, MessageType.text,{quoted: message.data});
        }));
    }

    else if (Config.WORKTYPE == 'public') {
        bunny.applyCMD({pattern: 'animeall', fromMe: false, desc: Lang.ANIMEALL_DESC}, (async (message, match) => {    
            await message.client.sendMessage(message.jid,eng, MessageType.text,{quoted: message.data});
        }));
    }
}
