const Amdi = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const QueenAmdi = require('queenamdi-public-2');
const axios = require('axios');
const request = require('request');
const { fetchJson, getBuffer } = require('./fetcher')

// LIST
const Language = require('../language');
const Lang2 = Language.getString('chatbot');
const Lang = Language.getString('search')

let LOL = Config.WORKTYPE == 'public' ? false : true

//------------------------------Youtube Shots-----------------------------------//
Amdi.applyCMD({ pattern: 'shorts ?(.*)', fromMe: LOL, desc: Lang.USAGE,  deleteCommand: false }, async (message, match) => {

  if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text, {quoted: message.data});    
  var load = await message.client.sendMessage(message.jid,Lang.GET_MODD,MessageType.text, {quoted: message.data});

  var apikey = await QueenAmdi.api()

  get_result = await fetchJson('https://api.lolhuman.xyz/api/ytreels?apikey=' + apikey.key + `&query=${match[1]}`)
  get_result = get_result.result
    ini_txt = ""
        for (var x of get_result) {
        ini_txt += `📚 Name : ${x.title}\n`
        ini_txt += `⚙️ Audio Link : ${x.audio}\n`
        ini_txt += `⚙️ Video Link : ${x.video}\n\n`
        ini_txt += `*THESE LINKS ARE DIRECT DOWNLOAD LINKS*\n\n`
        }

      await message.client.sendMessage(message.jid, '*❖ Büññy®Bot Search Engine ❖*\n' + Lang.MODDROID + '\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n\n' + ini_txt,MessageType.text, {quoted: message.data});
      return await message.client.deleteMessage(message.jid, {id: load.key.id, remoteJid: message.jid, fromMe: true})
})

//------------------------------Youtube Shots-----------------------------------//
