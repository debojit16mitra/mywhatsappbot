const bunny = require('../events');
const Config = require('../config');
const {MessageType} = require('@adiwajshing/baileys');

const Language = require('../language');
const Lang = Language.getString('scrapers');

let eng = '⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍\n' + ' ```⚕️ Büññy®Bot Movie & Series Panel ⚕️```\n' + '⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n';
eng += '*🤖Command:* ```.gdrive```\n*📙Description:*' + '```Google Drive Limit Bypass```\n\n';
eng += '*🤖Command:* ```.gdrive```\n*📙Description:*' + '```Google Drive Limit Bypass```\n\n';
eng += '*🤖Command:* ```.gdrive```\n*📙Description:*' + '```Google Drive Limit Bypass```\n\n';
eng += '*🤖Command:* ```.gdrive```\n*📙Description:*' + '```Google Drive Limit Bypass```\n\n';
eng += '*🤖Command:* ```.gdrive```\n*📙Description:*' + '```Google Drive Limit Bypass```\n\n';
eng += '*🤖Command:* ```.gdrive```\n*📙Description:*' + '```Google Drive Limit Bypass```\n\n';
eng += '*🤖Command:* ```.gdrive```\n*📙Description:*' + '```Google Drive Limit Bypass```\n\n';
eng += '*🤖Command:* ```.gdrive```\n*📙Description:*' + '```Google Drive Limit Bypass```\n\n';
eng += '*🤖Command:* ```.gdrive```\n*📙Description:*' + '```Google Drive Limit Bypass```\n\n';


if (Config.LANG == 'EN') {
    if (Config.WORKTYPE == 'private') {
        bunny.applyCMD({pattern: 'extra', fromMe: true,  deleteCommand: false, desc: Lang.ANIMEALL_DESC}, (async (message, match) => {    
            await message.client.sendMessage(message.jid,eng, MessageType.text,{quoted: message.data});
        }));
    }

    else if (Config.WORKTYPE == 'public') {
        bunny.applyCMD({pattern: 'extra', fromMe: false, desc: Lang.ANIMEALL_DESC}, (async (message, match) => {    
            await message.client.sendMessage(message.jid,eng, MessageType.text,{quoted: message.data});
        }));
    }
}

