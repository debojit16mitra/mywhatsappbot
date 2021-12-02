
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

  var load = await message.client.sendMessage(message.jid,Lang2.GET_MODD,MessageType.text, {quoted: message.data});

  get_result = await fetchJson('https://zenzapi.xyz/api/tikporn?apikey=7848cd94229e')	
    get_status = get_result.status
  get_result = get_result.result
    ini_txt = ""
	ini_txt += `📚 API Status : ${get_status}\n`
        ini_txt += `✍ Name : ${get_result.title}\n`
        ini_txt += `📃 Description : ${get_result.desc}\n`
        ini_txt += `📆 Upload Date : ${get_result.upload}\n`
	ini_txt += `🌐 Watch Online : ${get_result.source}\n`
        ini_txt += `📁 Download Link : ${get_result.video}\n\n`


  await message.client.sendMessage(message.jid, '*❖ Büññy®Bot NSFW Engine ❖*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n\n' + ini_txt,MessageType.text, {quoted: message.data});
  return await message.client.deleteMessage(message.jid, {id: load.key.id, remoteJid: message.jid, fromMe: true})
})
