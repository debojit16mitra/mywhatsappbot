/* Copyright (C) 2021 BunnyBot.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
*/

const Asena = require('../events');
const { MessageType, Mimetype} = require('@adiwajshing/baileys');
const got = require('got');
const Config = require('../config');
const axios = require('axios');
const { errorMessage, infoMessage } = require('../helpers');

const Language = require('../language');
const Lang = Language.getString('deviceinfo');



if (Config.WORKTYPE == 'private') {
	
Asena.addCommand({pattern: 'device ?(.*)', fromMe: true, desc: Lang.DEVICE , deleteCommand: false}, async (message, match) => {
	const url = `https://docs-jojo.herokuapp.com/api/gsm_arena?q=${match[1]}`;
		const response = await got(url);
    
		const json = JSON.parse(response.body);
		
		let msgs = '```';
	msgs +=	'⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍\n' + ' ```⚕️ Büññy®Bot Device Panel ⚕️```\n' + '⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n';
	msgs += '📱Name         : ' + json.title + '\n\n';
	msgs += '📅Released On  : ' + json.released + '\n\n';
	msgs += '📲Based On     : ' + json.os_version + '\n\n';
	msgs += '💽Rom          : ' + json.storage + '\n\n';
	msgs += '💾Ram          : ' + json.ram + 'GB'+'\n\n';
	msgs += '🔋Battery       : ' + json.battery + '\n\n';
	msgs += '💻Display Size : ' + json.display_size + '\n\n';
	msgs += '🖥Resolution    : ' + json.display_resolution + '\n\n';
	msgs += '📸Main Camera  : ' + json.camera_pixel + '\n\n';
	msgs += '🎥Video Reso   : ' + json.video_pixel + '\n\n';
	msgs += '🏋️Wgt & Thknes : ' + json.weight + '```';
    	let imgg = json.img;
	var webimage = await axios.get(imgg, {responseType: 'arraybuffer'})
	await message.sendMessage(Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, quoted: message.data, caption: msgs})
});
}

else if (Config.WORKTYPE == 'public') {
	
Asena.addCommand({pattern: 'device ?(.*)', fromMe: false, desc: Lang.DEVICE , deleteCommand: false}, async (message, match) => {
	const url = `https://docs-jojo.herokuapp.com/api/gsm_arena?q=${match[1]}`;
		const response = await got(url);
    
		const json = JSON.parse(response.body);
		
		let msgs = '```';
	msgs +=	'⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍\n' + ' ```⚕️ Büññy®Bot Device Panel ⚕️```\n' + '⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n';
	msgs += '📱Name         : ' + json.title + '\n\n';
	msgs += '📅Released On  : ' + json.released + '\n\n';
	msgs += '📲Based On     : ' + json.os_version + '\n\n';
	msgs += '💽Rom          : ' + json.storage + '\n\n';
	msgs += '💾Ram          : ' + json.ram + 'GB'+'\n\n';
	msgs += '🔋Battery       : ' + json.battery + '\n\n';
	msgs += '💻Display Size : ' + json.display_size + '\n\n';
	msgs += '🖥Resolution    : ' + json.display_resolution + '\n\n';
	msgs += '📸Main Camera  : ' + json.camera_pixel + '\n\n';
	msgs += '🎥Video Reso   : ' + json.video_pixel + '\n\n';
	msgs += '🏋️Wgt & Thknes : ' + json.weight + '```';
    
   	let imgg = json.img;
	var webimage = await axios.get(imgg, {responseType: 'arraybuffer'})
	await message.sendMessage(Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, quoted: message.data, caption: msgs})
		//if (response.statusCode === 200) return await message.client.sendMessage(message.jid, msgs, MessageType.text);
});
	 Asena.addCommand({pattern: 'dehelp ?(.*)', fromMe: false, desc: Lang.DEVICEHELP }, (async (message, match) => {  
       
        await message.sendMessage('*CMND* \n .device\n *DESC* \n know details of a mobilephone\n *example:* .device rog 5\n\n *CMND* \n .rdmore\n *DESC* \n add readmore after give text\n *example:* .rdmore pinky\n\n *CMND* \n.brdmore\n *DESC* \n add readmore before given text\n *example:* .brdmore pinky\n\n *CMND* \n.bgm one \n .bgm two \n *DESC* \n will change the type of reply bgm \n *example:* .bgm one (.bgm one \n is the default bgm mode - to change that use .bgm two ) ', MessageType.text,{ quoted: message.data });
        
  }));
}




/*

if (Config.WORKTYPE == 'private') {
	
Asena.addCommand({pattern: 'device ?(.*)', fromMe: true, desc: Lang.DEVICE , deleteCommand: false}, async (message, match) => {
	const url = `https://docs-jojo.herokuapp.com/api/gsm_arena?q=${match[1]}`;
	try {
		const response = await got(url);
    
		const json = JSON.parse(response.body);
    
		if (response.statusCode === 200) return await message.client.sendMessage(message.jid,  'NAME      : *' + json.title + '* \n' + 'DATE      :'+ json.released + 'WEIGHT    :' + json.weight + '\n' + 'VERSION   :'+ json.os_version + '\n' + 'ROM       :' + json.storage + '\n' + 'DISPLAY   :'+ json.display_size  + '\n' + 'RAM       :' + json.ram + '\n' + 'BATTERY   :'+ json.battery + '\n' + 'MP        :' + json.camera_pixel + '\n' + 'VIDEO MP  :'+ json.video_pixel , MessageType.text);
	} catch {
		return await message.client.sendMessage(message.jid, Lang.NO_DEVICE, MessageType.text);
	}
});
}

else if (Config.WORKTYPE == 'public') {
	
Asena.addCommand({pattern: 'device ?(.*)', fromMe: false, desc: Lang.DEVICE , deleteCommand: false}, async (message, match) => {
	const url = `https://docs-jojo.herokuapp.com/api/gsm_arena?q=${match[1]}`;
	try {
		const response = await got(url);
    
		const json = JSON.parse(response.body);
    
		if (response.statusCode === 200) return await message.client.sendMessage(message.jid,  '``` NAME      : *' + json.title + '* \n' + 'DATE      :'+ json.released + '\n' + 'WEIGHT    :' + json.weight +  'VERSION   :'+ json.os_version + '\n' + 'ROM       :' + json.storage + '\n' + 'DISPLAY   :'+ json.display_size  + '\n' + 'RAM       :' + json.ram + '\n' + 'BATTERY   :'+ json.battery + '\n' + 'MP        :' + json.camera_pixel + '\n' + 'VIDEO MP  :'+ json.video_pixel + '```' , MessageType.text);
	} catch {
		return await message.client.sendMessage(message.jid, Lang.NO_DEVICE, MessageType.text);
	}
});
	 Asena.addCommand({pattern: 'dehelp ?(.*)', fromMe: false, desc: Lang.DEVICEHELP }, (async (message, match) => {  
       
        await message.sendMessage('*CMND* \n .device\n *DESC* \n know details of a mobilephone\n *example:* .device rog 5\n\n *CMND* \n .rdmore\n *DESC* \n add readmore after give text\n *example:* .rdmore pinky\n\n *CMND* \n.brdmore\n *DESC* \n add readmore before given text\n *example:* .brdmore pinky\n\n *CMND* \n.bgm one \n .bgm two \n *DESC* \n will change the type of reply bgm \n *example:* .bgm one (.bgm one \n is the default bgm mode - to change that use .bgm two ) ', MessageType.text,{ quoted: message.data });
        
    }));
}

*/
