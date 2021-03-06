


const Amdi = require('../events');
const Config = require('../config');
const {MessageType} = require('@adiwajshing/baileys');

const Language = require('../language');
const Lang = Language.getString('scrapers');

const eng = `● *UPDATE LIST (29/09/2021)* ●\n` + 
`● *Büññy®Bot Version: 1.2.0v* ●\n\n` +
`*1.* Added (.compli)\n\n` +
`*2.* Added (.insult)\n\n` +
`*3.* Improved (.movie)\n\n` +
`*4.* Bot admins are fixed. (.botmin) *If you want to be a bot admin pay 1 Million $ to existing Admins.*\n\n` +
`*5.* Removed (.currency) its buggy\n\n` +
`*6.* Introduced (.news)\n\n` +
`*7.* Added (.gaymeter)\n\n` +
`*8.* Fixed (.report) Enjoy reporting\n\n` +
`*9.* Inroduced (.device)\n\n` +
`*10.* Sleep mode enhanced for admins to control NSFW\n\n` +
`*11.* Introduced (.anisearch)\n\n` +
`*12.* Fixed (.filters) for admins\n`

      

if (Config.LANG == 'EN') {
    if (Config.WORKTYPE == 'private') {
        Amdi.applyCMD({pattern: 'latest', fromMe: true,  deleteCommand: false, desc: Lang.UPDATE_LIST}, (async (message, match) => {    
            await message.client.sendMessage(message.jid,eng, MessageType.text,{quoted: message.data});
        }));
    }

    else if (Config.WORKTYPE == 'public') {
        Amdi.applyCMD({pattern: 'latest', fromMe: false, desc: Lang.UPDATE_LIST}, (async (message, match) => {    
            await message.client.sendMessage(message.jid,eng, MessageType.text,{quoted: message.data});
        }));
    }
}
