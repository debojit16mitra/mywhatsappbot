const Asena = require('../events');
const { MessageType } = require('@adiwajshing/baileys');
const got = require('got');
const Config = require('../config');
const axios = require('axios');
const { errorMessage, infoMessage } = require('../helpers');

const Language = require('../language');
const Lang = Language.getString('deviceinfo');

const QueenAmdi = require('queenamdi-public-2');



if (Config.WORKTYPE == 'private') {
	
Asena.addCommand({pattern: 'faced ?(.*)', fromMe: true, desc: Lang.DEVICE , deleteCommand: false}, async (message, match) => {
	var apikey = await QueenAmdi.api()
	const url = 'https://api.lolhuman.xyz/api/facebook?apikey=' + apikey.key + `&url=${match[1]}`;
	try {
		const response = await got(url);
    
		const json = JSON.parse(response.body);
		
		let msgs = '```';
	msgs +=	'⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍\n' + ' ```⚕️ Büññy®Bot Facebook Downloader Panel ⚕️```\n' + '⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n';
	msgs += '📥Link : ' + json.result + '```';
    
		if (response.statusCode === 200) return await message.client.sendMessage(message.jid, msgs, MessageType.text);
	} catch {
		return await message.client.sendMessage(message.jid, Lang.NO_DEVICE, MessageType.text);
	}
});
}

else if (Config.WORKTYPE == 'public') {
	
Asena.addCommand({pattern: 'faced ?(.*)', fromMe: false, desc: Lang.DEVICE , deleteCommand: false}, async (message, match) => {
	var apikey = await QueenAmdi.api()
	const url = 'https://api.lolhuman.xyz/api/facebook?apikey=' + apikey.key + `&url=${match[1]}`;
	try {
		const response = await got(url);
    
		const json = JSON.parse(response.body);
		
		let msgs = '```';
	msgs +=	'⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍\n' + ' ```⚕️ Büññy®Bot Facebook Downloader Panel ⚕️```\n' + '⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n';
	msgs += '📥Link : ' + json.result + '```';
    
    
		if (response.statusCode === 200) return await message.client.sendMessage(message.jid, msgs, MessageType.text);
	} catch {
		return await message.client.sendMessage(message.jid, Lang.NO_DEVICE, MessageType.text);
	}
});
	 Asena.addCommand({pattern: 'dehelp ?(.*)', fromMe: false, desc: Lang.DEVICEHELP }, (async (message, match) => {  
       
        await message.sendMessage('*CMND* \n .device\n *DESC* \n know details of a mobilephone\n *example:* .device rog 5\n\n *CMND* \n .rdmore\n *DESC* \n add readmore after give text\n *example:* .rdmore pinky\n\n *CMND* \n.brdmore\n *DESC* \n add readmore before given text\n *example:* .brdmore pinky\n\n *CMND* \n.bgm one \n .bgm two \n *DESC* \n will change the type of reply bgm \n *example:* .bgm one (.bgm one \n is the default bgm mode - to change that use .bgm two ) ', MessageType.text,{ quoted: message.data });
        
    }));
}
