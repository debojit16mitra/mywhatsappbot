


const Amdi = require('../events');
const Config = require('../config');
const {MessageType} = require('@adiwajshing/baileys');

const Language = require('../language');
const Lang = Language.getString('scrapers');

const eng = `💠● *UPDATE LIST (29/09/2021)* ●💠\n` + 
`💠● *Büññy®Bot Version: 1.2.0v* ●💠\n\n` +
`1. Added (.compli)\n` +
`2. Added (.insult)\n` +
`3. Improved (.movie)\n` +
`4. Bot admins are fixed. (.botmin) If you want to be a bot admin pay 1 Million $ to existing admins.\n` +
`5. Removed (.currency) its buggy\n` +
`6. Introduced (.news)\n` +
`7. Added (.gaymeter)\n` +
`8. Fixed (.report) Enjoy reporting\n` +
`9. Inroduced (.device)\n` +
`10. Sleep mode enhanced for admins to control NSFW\n` +
`11. Introduced (.anisearch)\n` +
`12. Fixed (.filters) for admins\n`

      

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
