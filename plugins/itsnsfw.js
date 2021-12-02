
const Bunny = require('../events');
const QueenAmdi = require('queenamdi-public-2');
const { MessageType, Mimetype} = require('@adiwajshing/baileys');
const got = require('got');
const Config = require('../config');
const axios = require('axios');
const Language = require('../language');

const { fetchJson, getBuffer } = require('./fetcher')
const Lang2 = Language.getString('search')



Bunny.addCommand({ pattern: 'tiktp ?(.*)', fromMe: false, desc: Lang2.APK_DESC,  deleteCommand: false }, async (message, match) => {
	//if (Config.NSFW == 'true') {
  var load = await message.client.sendMessage(message.jid,Lang2.GET_MODD,MessageType.text, {quoted: message.data});

  get_result = await fetchJson('https://zenzapi.xyz/api/tikporn?apikey=7848cd94229e')	
    get_status = get_result.status
  get_result = get_result.result
    ini_txt = ""
	ini_txt += `*📚 API Status :* ${get_status}\n`
        ini_txt += `*✍ Name :* ${get_result.title}\n`
        ini_txt += `*📃 Description :* ${get_result.desc}\n`
        ini_txt += `*📆 Upload Date :* ${get_result.upload}\n`
	ini_txt += `*🌐 Watch Online :* ${get_result.source}\n`
        ini_txt += `*📁 Download Link :* ${get_result.video}\n\n`


  await message.client.sendMessage(message.jid, '\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*❖ Büññy®Bot NSFW Engine ❖*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n```Note: 1. click (read more) then only click on download link or else link will be broken.\n2. After download change file format to .mp4```\n\n' + ini_txt,MessageType.text, {quoted: message.data});
  return await message.client.deleteMessage(message.jid, {id: load.key.id, remoteJid: message.jid, fromMe: true})
	//}
	//else if (Config.NSFW == 'false') {
	 //await message.client.sendMessage(message.jid, '*Get lost you horny shit🤬*', MessageType.text,{quoted: message.data});
	//}
})

Bunny.addCommand({ pattern: 'ysht ?(.*)', fromMe: false, desc: Lang2.APK_DESC,  deleteCommand: false }, async (message, match) => {
  if (match[1] === '') return await message.client.sendMessage(message.jid, '```Give me a link😒```', MessageType.text, { quoted: message.data });
var load = await message.client.sendMessage(message.jid,Lang2.GET_MODD,MessageType.text, {quoted: message.data});

	var apikey = await QueenAmdi.api()
  get_result = await fetchJson('https://api.lolhuman.xyz/api/ytreels?apikey=' + apikey.key + `&url=${match[1]}`)	
  get_status = get_result.status
  get_result = get_result.result
  get_thumb = get_result.thumbnail
    ini_txt = ""
	ini_txt += `*📚 API Status :* ${get_status}\n`
        ini_txt += `*✍ Name :* ${get_result.title}\n`
        ini_txt += `*📃 Audio Download Link :* ${get_result.audio}\n`
        ini_txt += `*📁 Video Download Link :* ${get_result.video}\n\n`

	var webimage = await axios.get(get_thumb, {responseType: 'arraybuffer'})
       await message.sendMessage(Buffer.from(webimage.data), MessageType.video, { mimetype: Mimetype.jpg, quoted: message.data, caption: '\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*❖ Büññy®Bot YT Shorts Engine ❖*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n\n' + ini_txt})
 	
	//await message.client.sendMessage(message.jid, '\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*❖ Büññy®Bot YT Shorts Engine ❖*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n\n' + ini_txt,MessageType.text, {quoted: message.data});
	//return await message.client.deleteMessage(message.jid, {id: load.key.id, remoteJid: message.jid, fromMe: true})
	
})

