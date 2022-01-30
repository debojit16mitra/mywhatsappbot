/* Copyright (C) 2021 BunnyBot.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
*/

const bunny = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const got = require('got');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('weather');

if (Config.WORKTYPE == 'private') {

bunny.addCommand({pattern: 'compli ?(.*)', fromMe: true, desc: Lang.CM_DESC, deleteCommand: false, dontAddCommandList: true}, async (message, match) => {
	if (match[1] === 'xx') return await message.reply(Lang.NEED_LOCATIONA);
	const url = `https://complimentr.com/api`;
	try {
		const response = await got(url);
		const json = JSON.parse(response.body);
		if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '\n *👸🏻:* ' + Lang.CM +'* ```' + json.compliment + '``` *\n' , MessageType.text,{quoted: message.data});
	} catch {
		return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDAC, MessageType.text,{quoted: message.data});
	}
});
}

else if (Config.WORKTYPE == 'public') {

bunny.addCommand({pattern: 'compli ?(.*)', fromMe: false, desc: Lang.CM_DESC, deleteCommand: false, dontAddCommandList: true}, async (message, match) => {
	if (match[1] === 'xx') return await message.reply(Lang.NEED_LOCATIONA);
	const url = `https://complimentr.com/api`;
	try {
		const response = await got(url);
		const json = JSON.parse(response.body);
		if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '\n *👸🏻:* ' + Lang.CM +'* ```' + json.compliment + '``` *\n' , MessageType.text,{quoted: message.data});
	} catch {
		return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDAC, MessageType.text,{quoted: message.data});
	}
});
}
