/* Copyright (C) 2021 Queen Amdi.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Queen Amdi - Black Amda
*/

const Amdi = require('../events');
const Config = require('../config');
const {MessageType} = require('@adiwajshing/baileys');

const Language = require('../language');
const Lang = Language.getString('scrapers');

const sin = `💠●*Text සිට Image Effect List*●💠\n\n` + 
`⚙️විධානය: *.glitch*\nℹ️විස්තර: Text සිට Tiktok glitch effect.\n_(Ex: .glitch Büññy®;Bot)_\n\n` + 
`⚙️විධානය: *.pemoji*\nℹ️විස්තර: Emoji සිට පින්තූරයට.\n\n` + 
`⚙️විධානය: *.hacker*\nℹ️විස්තර: ඔබේ නම සමඟ hacker wallpaper සෑදීම.\n\n` + 
`⚙️විධානය: *.matrix*\nℹ️විස්තර: ඔබේ නම සමඟ matrix wallpaper සෑදීම.\n\n` + 
`⚙️විධානය: *.hbd*\nℹ️විස්තර: ඔබේ නම සමඟ උපන්දින කේක් එකක් සෑදීම.\n\n` + 
`⚙️විධානය: *.gaming*\nℹ️විස්තර: ඔබේ නම සමඟ gaming logo සෑදීම.\n\n` + 
`⚙️විධානය: *.fpslogo*\nℹ️විස්තර: ඔබේ නම සමඟ fps gaming logo සෑදීම.\n\n` + 
`⚙️විධානය: *.sand*\nℹ️විස්තර: ඔබේ text සමඟ sand summer effect wallpaper සෑදීම.\n\n` + 
`⚙️විධානය: *.holo*\nℹ️විස්තර: ඔබේ text සඳහා holographic effect wallpaper සෑදිය හැකිය.\n\n` + 
`⚙️විධානය: *.shadow*\nℹ️විස්තර: ඔබේ text සඳහා සෙවනැලි effect wallpaper සෑදිය හැකිය.\n\n` + 
`⚙️විධානය: *.grafiti*\nℹ️විස්තර: ඔබේ text සඳහා grafiti wallpaper සෑදිය හැකිය.\n\n` + 
`⚙️විධානය: *.cup*\nℹ️විස්තර: ඔබට ඔබේ text කෝප්පයක් මත ටයිප් කළ හැකිය.\n\n` + 
`⚙️විධානය: *.sad*\nℹ️විස්තර: ඔබට ඔබේ text glass මත ටයිප් කළ හැකිය.\n\n` + 
`⚙️විධානය: *.wolfm*\nℹ️විස්තර: ලෝහමය වෘක බැනරයකින් ඔබේ text ටයිප් කළ හැකිය.\n\n` + 
`⚙️විධානය: *.wflogo*\nℹ️විස්තර: වෘක logo ඔබේ text ටයිප් කළ හැකිය.\n\n` + 
`⚙️විධානය: *.naruto*\nℹ️විස්තර: Naruto themed බැනරයකින් ඔබේ text ටයිප් කළ හැකිය.\n\n` + 
`⚙️විධානය: *.fflogo*\nℹ️විස්තර: ඔබේ නම සමඟ Free Fire logo සෑදීම.\n\n` + 
`⚙️විධානය: *.flame*\nℹ️විස්තර: ඔබට ඔබේ text ගිනිදැල් බවට පත් කළ හැකිය.\n\n` + 
`⚙️විධානය: *.avenger*\nℹ️විස්තර: ඔබේ නම සමඟ Avengers logo සෑදීම.\n_(Ex: .avenger Büññy®/Bot)_\n\n` + 
`⚙️විධානය: *.harry*\nℹ️විස්තර: ඔබට හැරීපොටර් වර්ගයේ logo සෑදිය හැකිය.\n\n` + 
`⚙️විධානය: *.dota*\nℹ️විස්තර: ඔබේ නම සමඟ DOTA logo සෑදිය හැකිය.\n\n` + 
`⚙️විධානය: *.lol*\nℹ️විස්තර: ඔබේ නම සමඟ LEAGUE OF LEGENDS logo සෑදිය හැකිය.\n\n` + 
`⚙️විධානය: *.aov*\nℹ️විස්තර: ඔබේ නම සමඟ Arena Of Valor logo සෑදිය හැකිය.\n\n` + 
`⚙️විධානය: *.ml*\nℹ️විස්තර: ඔබේ නම සමඟ Mobile Legends logo සෑදිය හැකිය.\n\n` + 
`⚙️විධානය: *.valorant*\nℹ️විස්තර: ඔබේ නම සමඟ valorant logo සෑදිය හැකිය. \n_(Ex: .valorant Büññy®Bot/Facebook/Twitter)_\n\n` + 
`⚙️විධානය: *.lionlogo*\nℹ️විස්තර: ඔබේ නම සමඟ lion logo සෑදීම.\n_(Ex: .lionlogo Büññy®/Bot)_\n\n` + 
`⚙️විධානය: *.metal*\nℹ️විස්තර: ඔබේ නම සමඟ iron logo සෑදීම.\n\n` + 
`⚙️විධානය: *.pornhub*\nℹ️විස්තර: එය සපයා ඇති text කළු පැහැති තැඹිලි පාට රූපයක් යවයි.\nඔබ පිළිවෙලින් */* මගින් වෙන් කර ඇති top සහ bottom text ඇතුළත් කළ යුතුය.\n\n` + 
`⚙️විධානය: *.sandwriting*\nℹ️විස්තර: එය සපයා ඇති textයේ වැලි රූපයක් යවයි.\n\n` + 
`⚙️විධානය: *.vintage*\nℹ️විස්තර: එය සපයා ඇති textයේ buld display රූපයක් යවයි. \n_(Ex: .vintage Büññy®/Bot_\n\n` + 
`⚙️විධානය: *.bplogo*\nℹ️විස්තර: එය සපයා ඇති textයේ black pink logo යවයි.\n\n` + 
`⚙️විධානය: *.blood*\nℹ️විස්තර: එය සපයා ඇති textයේ රුධිර රූපයක් යවයි.\n\n` + 
`⚙️විධානය: *.silk*\nℹ️විස්තර: එය සපයා ඇති textයේ silk cloth රූපයක් යවයි.\n\n` + 
`⚙️විධානය: *.snow*\nℹ️විස්තර: එය සපයා ඇති textයේ හිම රූපයක් යවයි.\n\n` + 
`⚙️විධානය: *.light*\nℹ️විස්තර: එය සපයා ඇති textයේ light effect යවයි.\n\n` + 
`⚙️විධානය: *.cloud*\nℹ️විස්තර: එය සපයා ඇති textයේ අහස රූපයක් යවයි.\n\n` + 
`⚙️විධානය: *.sparkling*\nℹ️විස්තර: Text දීප්තිමත් තේමා රූපයක් බවට පරිවර්තනය කරයි\nඔබ පිළිවෙලින් */* මගින් වෙන් කර ඇති top සහ bottom text ඇතුළත් කළ යුතුය.\n\n` + 
`⚙️විධානය: *.watercolour*\nℹ️විස්තර: Text ජල වර්ණ තේමා රූපයක් බවට පරිවර්තනය කරයි.\n\n` + 
`⚙️විධානය: *.royal*\nℹ️විස්තර: Text royal තේමා රූපයක් බවට පරිවර්තනය කරයි.\n\n` + 
`⚙️විධානය: *.gneon*\nℹ️විස්තර: Text green neon ආලෝක තේමා රූපයක් බවට පරිවර්තනය කරයි.\n\n` + 
`⚙️විධානය: *.3dtext*\nℹ️විස්තර: ලබා දී ඇති text ත්රිමාණ විලාසිතාවේ රූපයක් බවට පරිවර්තනය කරයි.\n\n` + 
`⚙️විධානය: *.v3d*\nℹ️විස්තර: සපයා ඇති text violet ත්රිමාණ විලාසිතාවේ රූපයක් බවට පරිවර්තනය කරයි.\n\n` + 
`⚙️විධානය: *demon*\nℹ️විස්තර: සපයා ඇති text සමඟ demon තේමා රූපයක් සෑදිය හැකියි.\n\n` +
`⚙️විධානය: *rust*\nℹ️විස්තර: සපයා ඇති text සමඟ rust තේමා රූපයක් සෑදිය හැකියි.\n\n` +
`⚙️විධානය: *transformer*\nℹ️විස්තර: සපයා ඇති text සමඟ transformer තේමා රූපයක් සෑදිය හැකියි.\n\n` +
`⚙️විධානය: *fiction*\nℹ️විස්තර: සපයා ඇති text සමඟ fiction තේමා රූපයක් සෑදිය හැකියි.\n\n` +
`⚙️විධානය: *berry*\nℹ️විස්තර: සපයා ඇති text සමඟ berry තේමා රූපයක් සෑදිය හැකියි.\n\n` +
`⚙️විධානය: *thunder*\nℹ️විස්තර: සපයා ඇති text සමඟ thunder තේමා රූපයක් සෑදිය හැකියි.\n\n` +
`⚙️විධානය: *magma*\nℹ️විස්තර: සපයා ඇති text සමඟ magma තේමා රූපයක් සෑදිය හැකියි.\n\n` +
`⚙️විධානය: *stone*\nℹ️විස්තර: සපයා ඇති text සමඟ stone තේමා රූපයක් සෑදිය හැකියි.\n\n` +
`⚙️විධානය: *2glitch*\nℹ️විස්තර: සපයා ඇති text සමඟ 2glitch තේමා රූපයක් සෑදිය හැකියි.\n\n` +
`⚙️විධානය: *harry*\nℹ️විස්තර: සපයා ඇති text සමඟ harry තේමා රූපයක් සෑදිය හැකියි.\n\n` +
`⚙️විධානය: *cracked*\nℹ️විස්තර: සපයා ඇති text සමඟ cracked තේමා රූපයක් සෑදිය හැකියි.\n\n` +
`⚙️විධානය: *glass*\nℹ️විස්තර: සපයා ඇති text සමඟ glass තේමා රූපයක් සෑදිය හැකියි.\n\n` +
`⚙️විධානය: *glossy*\nℹ️විස්තර: සපයා ඇති text සමඟ glossy තේමා රූපයක් සෑදිය හැකියි.\n\n` +
`⚙️විධානය: *beach*\nℹ️විස්තර: සපයා ඇති text සමඟ beach තේමා රූපයක් සෑදිය හැකියි.\n\n` +
`⚙️විධානය: *devil*\nℹ️විස්තර: සපයා ඇති text සමඟ devil තේමා රූපයක් සෑදිය හැකියි.\n\n` +
`⚙️විධානය: *underwater*\nℹ️විස්තර: සපයා ඇති text සමඟ underwater තේමා රූපයක් සෑදිය හැකියි.\n\n` +
`⚙️විධානය: *bear*\nℹ️විස්තර: සපයා ඇති text සමඟ bear තේමා රූපයක් සෑදිය හැකියි.\n\n` +
`⚙️විධානය: *xmas*\nℹ️විස්තර: සපයා ඇති text සමඟ xmas තේමා රූපයක් සෑදිය හැකියි.\n\n` +
`⚙️විධානය: *future*\nℹ️විස්තර: සපයා ඇති text සමඟ future තේමා රූපයක් සෑදිය හැකියි.\n\n` +
`⚙️විධානය: *cloud*\nℹ️විස්තර: සපයා ඇති text සමඟ cloud තේමා රූපයක් සෑදිය හැකියි.\n\n` +
`⚙️විධානය: *luxury*\nℹ️විස්තර: සපයා ඇති text සමඟ luxury තේමා රූපයක් සෑදිය හැකියි.\n\n` +
`⚙️විධානය: *leaves*\nℹ️විස්තර: සපයා ඇති text සමඟ leaves තේමා රූපයක් සෑදිය හැකියි.\n\n` +
`⚙️විධානය: *gneon*\nℹ️විස්තර: සපයා ඇති text සමඟ gneon තේමා රූපයක් සෑදිය හැකියි.\n\n` +
`Check official website : https://www.amdaniwasa.com/`

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

if (Config.LANG == 'SI') {
    if (Config.WORKTYPE == 'private') {
        Amdi.applyCMD({pattern: 'effectimg', fromMe: true,  deleteCommand: false, desc: Lang.EFFECT_DESC}, (async (message, match) => {    
            await message.client.sendMessage(message.jid,sin, MessageType.text,{quoted: message.data});
        }));
    }

    else if (Config.WORKTYPE == 'public') {
        Amdi.applyCMD({pattern: 'effectimg', fromMe: false, desc: Lang.EFFECT_DESC}, (async (message, match) => {    
            await message.client.sendMessage(message.jid,sin, MessageType.text,{quoted: message.data});
        }));
    }
}
