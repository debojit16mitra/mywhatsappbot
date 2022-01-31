
const bunny = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const Config = require('../config')

const INBO = "Private Messaging Not Allowed"
const Heroku = require('heroku-client');
const heroku = new Heroku({
	token: Config.HEROKU.API_KEY
});

let baseURI = '/apps/' + Config.HEROKU.APP_NAME;

var pmblock_desc = ''
var OFF = ''
var ON = ''

if (Config.LANG == 'EN') {

  pmblock_desc = 'change pm block mode'
  OFF = '𝐏𝐦 𝐛𝐥𝐨𝐜𝐤 𝐟𝐞𝐚𝐭𝐮𝐫𝐞 𝐬𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥𝐥𝐲 𝐬𝐡𝐮𝐭𝐝𝐨𝐰𝐧𝐞𝐝 \n          𝐩𝐥𝐞𝐚𝐬𝐞 𝐰𝐚𝐢𝐭 𝐟𝐞𝐰 𝐦𝐢𝐧𝐮𝐭𝐞 🧚‍♀️'
  ON = '𝐏𝐦 𝐛𝐥𝐨𝐜𝐤 𝐟𝐞𝐚𝐭𝐮𝐫𝐞 𝐬𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥𝐥𝐲 𝐨𝐩𝐞𝐧𝐞𝐝 \n          𝐩𝐥𝐞𝐚𝐬𝐞 𝐰𝐚𝐢𝐭 𝐟𝐞𝐰 𝐦𝐢𝐧𝐮𝐭𝐞 🧚‍♀️'
}

bunny.addCommand({ pattern: 'pmblock ?(.*)', fromMe: true, desc: pmblock_desc, usage: '.pmblock on / off', dontAddCommandList: true }, (async (message, match) => {
  if (match[1] == 'off') {
    await heroku.patch(baseURI + '/config-vars', {
      body: {
                        ['PM_BLOCK']: 'false'
      }
    });
    await message.sendMessage(OFF)
  } else if (match[1] == 'on') {
    await heroku.patch(baseURI + '/config-vars', {
      body: {
                        ['PM_BLOCK']: 'true'
      }
    });
    await message.sendMessage(ON)
  }
}));

 if (Config.PM_BLOCK == 'true') {
	var plk = ''
	var plk2 = ''
	if (Config.LANG == 'EN') plk = 'Sorry Chatting in PM is not Allowed! Bye! Bye!'
	if (Config.LANG == 'EN') plk2 = '.block'
bunny.addCommand({on: 'text', fromMe: false, onlyPm: true , deleteCommand: false}, (async (message, match) => {
    if (message.jid !== '918876708209@s.whatsapp.net') {
        let regex1 = anything
        if (!regex1.test(message.message)) {
           await message.client.sendMessage(message.jid,plk, MessageType.text, {quoted: message.data })
           await message.client.sendMessage(message.jid,plk2, MessageType.text);
        }  
    }
          
}));

}


