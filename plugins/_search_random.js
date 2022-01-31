const bunny = require('../events');
const Config = require('../config');
const {MessageType} = require('@adiwajshing/baileys');

const Language = require('../language');
const Lang = Language.getString('scrapers');

let hel = '⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍\n' + '```⚕️ Büññy®Bot Search Panel ⚕️```\n' + '⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍\n';
hel += '*🤖Command:* ```.movie```\n*📙Description:*' + ' ```Gives you Details about the Searched Movie.```\n\n';
hel += '*🤖Command:* ```.anisearch```\n*📙Description:*' + ' ```Gives you Details about the Searched Anime/Tv Series.```\n\n';
hel += '*🤖Command:* ```.news```\n*📙Description:*' + ' ```Gives you Latest News. Eg: .news sports```\n\n';



if (Config.LANG == 'EN') {
    if (Config.WORKTYPE == 'private') {
        bunny.applyCMD({pattern: 'search', fromMe: true,  deleteCommand: false, desc: Lang.ANIMEALL_DESC}, (async (message, match) => {    
            await message.client.sendMessage(message.jid,hel, MessageType.text,{quoted: message.data});
        }));
    }

    else if (Config.WORKTYPE == 'public') {
        bunny.applyCMD({pattern: 'search', fromMe: false, desc: Lang.ANIMEALL_DESC}, (async (message, match) => {    
            await message.client.sendMessage(message.jid,hel, MessageType.text,{quoted: message.data});
        }));
    }
}

let hel2 = '⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍\n' + '```⚕️ Büññy®Bot Random Image Panel ⚕️```\n' + '⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍\n';
hel2 += '*🤖Command:* ```.bts```\n*📙Description:*' + ' ```Gives you Random BTS Images.```\n\n';
hel2 += '*🤖Command:* ```.blackpink```\n*📙Description:*' + ' ```Gives you Random Blackpink Images.```\n\n';
hel2 += '*🤖Command:* ```.rwallpaper```\n*📙Description:*' + ' ```Gives you Random Wallpapers.```\n\n';



if (Config.LANG == 'EN') {
    if (Config.WORKTYPE == 'private') {
        bunny.applyCMD({pattern: 'randomimg', fromMe: true,  deleteCommand: false, desc: Lang.ANIMEALL_DESC}, (async (message, match) => {    
            await message.client.sendMessage(message.jid,hel2, MessageType.text,{quoted: message.data});
        }));
    }

    else if (Config.WORKTYPE == 'public') {
        bunny.applyCMD({pattern: 'randomimg', fromMe: false, desc: Lang.ANIMEALL_DESC}, (async (message, match) => {    
            await message.client.sendMessage(message.jid,hel2, MessageType.text,{quoted: message.data});
        }));
    }
}
