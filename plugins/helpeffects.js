/* Copyright (C) 2021 BunnyBot.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
*/

const Amdi = require('../events');
const Config = require('../config');
const {MessageType} = require('@adiwajshing/baileys');

const Language = require('../language');
const Lang = Language.getString('scrapers');

const eng = `💠●*Text To Image Effect List*●💠\n\n` + 
`⚙️Command: *.pemoji*\nℹ️Description: Emoji to PNG.\n\n` + 
`⚙️Command: *.fancy*\nℹ️Description: Fancy text. Try it!!\n\n` + 
`⚙️Command: *.hacker*\nℹ️Description: Text to Hacker wallpaper.\n\n` + 
`⚙️Command: *.matrix*\nℹ️Description: Text to matrix wallpaper\n\n` + 
`⚙️Command: *.hbd*\nℹ️Description: Making birthday cake with a name.\n\n` + 
`⚙️Command: *.gaming*\nℹ️Description: Text to Gaming logo.\n\n` + 
`⚙️Command: *.fpslogo*\nℹ️Description: Text to FPS Gaming logo.\n\n` + 
`⚙️Command: *.shadow*\nℹ️Description: Text to shadow effect.\n\n` + 
`⚙️Command: *.cup*\nℹ️Description: Cup themed image.\n\n` + 
`⚙️Command: *.sad*\nℹ️Description: Text to wet glass effect.\n\n` + 
`⚙️Command: *.wolfm*\nℹ️Description: Text to metal wolf badge.\n\n` + 
`⚙️Command: *.wflogo*\nℹ️Description: Wolf logo with your text.\n\n` + 
`⚙️Command: *.naruto*\nℹ️Description: Text to naruto themed banner.\n\n` + 
`⚙️Command: *.fflogo*\nℹ️Description: Text to FreeFire logo\n\n` + 
`⚙️Command: *.flame*\nℹ️Description: Text to fire effect.\n\n` + 
`⚙️Command: *.avenger*\nℹ️Description: Text to avenger logo\n_(Ex: .avenger Büññy®/Bot)_\n\n` + 
`⚙️Command: *.dota*\nℹ️Description: Text to DOTA logo.\n\n` + 
`⚙️Command: *.lol*\nℹ️Description: Text to League Of Legends logo.\n\n` + 
`⚙️Command: *.aov*\nℹ️Description: Text to  Arena Of Valor logo.\n\n` + 
`⚙️Command: *.ml*\nℹ️Description: Text to Mobile Legends logo.\n\n` + 
`⚙️Command: *.valorant*\nℹ️Description: Text to Valorant Banner. \n_(Ex: .valorant Büññy®Bot/Facebook/Twitter)_\n\n` + 
`⚙️Command: *.lionlogo*\nℹ️Description: Text to lion logo.\n_(Ex: .lionlogo Büññy®/Bot)_\n\n` + 
`⚙️Command: *.pornhub*\nℹ️Description: Text to PornHub themed logo.\nType */* to split two words.\n\n` + 
`⚙️Command: *.sandwriting*\nℹ️Description: Text to sand themed logo.\n\n` + 
`⚙️Command: *.vintage*\nℹ️Description: Text to bulb display unit. \n_(Ex: .vintage Büññy®/Bot)_\n\n` + 
`⚙️Command: *.bplogo*\nℹ️Description: Text to Black Pink themed logo.\n\n` + 
`⚙️Command: *.blood*\nℹ️Description: Text to Blood themed.\n\n` + 
`⚙️Command: *.silk*\nℹ️Description: Text to silk cloth.\n\n` + 
`⚙️Command: *.light*\nℹ️Description: Text to light theme banner.\n\n` + 
`⚙️Command: *.royal*\nℹ️Description: Text to royal themed text.\n\n` + 
`⚙️Command: *.3dtext*\nℹ️Description: Text to 3D text effect.\n\n` +
      `💠●*Latest Added Effects (11/09/2021)*●💠\n\n` +
`⚙️Command: *.marvel*\nℹ️Description: Text to Marvel Studios logo.\n_(Ex: .glitch Büññy®;Bot)_\n\n` + 
`⚙️Command: *.wallbreak*\nℹ️Description: Text to  broken wall text effect.\n\n` + 
`⚙️Command: *.monsoon*\nℹ️Description: Text to rainy glass effect.\n\n` + 
`⚙️Command: *.flowertxt*\nℹ️Description: Text to flower text effects. \n\n` + 
`⚙️Command: *.crosslogo*\nℹ️Description: Text to crossfire logo.\n\n` + 
`⚙️Command: *.lovely*\nℹ️Description: Text to lovely text effect.\n\n` + 
`⚙️Command: *.skytext*\nℹ️Description: Text to sky wallpaper text effect.\n\n` + 
`⚙️Command: *.lgttxt*\nℹ️Description: Text to light text effect. \n\n` + 
`⚙️Command: *.christmas*\nℹ️Description: Text to christmas style effect text.\n\n` + 
`⚙️Command: *.snowtxt*\nℹ️Description: Text to snow text effect.\n\n` + 
`⚙️Command: *.watercolor*\nℹ️Description: Text to water color text effect.\n_(Ex: .watercolor Büññy®/Bot)_\n\n` + 
`⚙️Command: *.txt3d2*\nℹ️Description: Text to 3d text effect.\n\n` + 
`⚙️Command: *.fireworks*\nℹ️Description: Text to fireworks style text effect.\n\n` + 
`⚙️Command: *.leaves*\nℹ️Description: Text to leaves style text effect.\n\n` +
`⚙️Command: *.tikglich*\nℹ️Description: Text to 3D text effect.\n_(Ex: .tikglich Büññy®/Bot)_\n\n`

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
