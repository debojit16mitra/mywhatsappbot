/* Copyright (C) 2021 BunnyBot.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
*/

const Amdi = require('../events')
const QueenAmdi = require('queenamdi-public');
const { MessageType, Mimetype } = require('@adiwajshing/baileys')
const axios = require('axios')
const FormData = require('form-data');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const Config = require('../config');
let LOL = Config.WORKTYPE == 'public' ? false : true
const { fetchJson, getBuffer } = require('./fetcher')

const Language = require('../language')
const Lang = Language.getString('search')


Amdi.applyCMD({ pattern: 'mod ?(.*)', fromMe: LOL, desc: Lang.USAGE,  deleteCommand: false }, async (message, match) => {

  if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text, {quoted: message.data});    
  var load = await message.client.sendMessage(message.jid,Lang.GET_MODD,MessageType.text, {quoted: message.data});

  var apikey = await QueenAmdi.api()

  get_result = await fetchJson('https://api.lolhuman.xyz/api/moddroid?apikey=' + apikey.key + `&query=${match[1]}`)
  get_result = get_result.result
    ini_txt = ""
        for (var x of get_result) {
        ini_txt += `📚 Name : ${x.name}\n`
        ini_txt += `⚙️ Link : ${x.link}\n\n`
        }

      await message.client.sendMessage(message.jid, '*❖ Büññy®Bot Search Engine ❖*\n' + Lang.MODDROID + '\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n\n' + ini_txt,MessageType.text, {quoted: message.data});
      return await message.client.deleteMessage(message.jid, {id: load.key.id, remoteJid: message.jid, fromMe: true})
})

Amdi.applyCMD({ pattern: 'getspo ?(.*)', fromMe: LOL, desc: Lang.SPO_USAGE,  deleteCommand: false }, async (message, match) => {

  if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text, {quoted: message.data});    
  var load = await message.client.sendMessage(message.jid,Lang.GET_MODD,MessageType.text, {quoted: message.data});

  var apikey = await QueenAmdi.api()

  get_result = await fetchJson('https://api.lolhuman.xyz/api/spotifysearch?apikey=' + apikey.key + `&query=${match[1]}`)
  get_result = get_result.result
    ini_txt = ""
        for (var x of get_result) {
        ini_txt += `📚 Title : ${x.title}\n`
        ini_txt += `🕺🏻 Artists : ${x.artists}\n`
        ini_txt += `⚙️ Link : ${x.link}\n\n`
        }

  await message.client.sendMessage(message.jid, '*❖ Büññy®Bot Search Engine ❖*\n' + Lang.SPOTIFY + '\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n\n' + ini_txt,MessageType.text, {quoted: message.data});
  return await message.client.deleteMessage(message.jid, {id: load.key.id, remoteJid: message.jid, fromMe: true})
})
/*  ('https://api.lolhuman.xyz/api/spotifysearch?apikey=' + apikey.key + `&query=${match[1]}`)  */
Amdi.applyCMD({ pattern: 'getpack ?(.*)', fromMe: LOL, desc: Lang.APK_DESC,  deleteCommand: false }, async (message, match) => {

  if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text, {quoted: message.data});    
  var load = await message.client.sendMessage(message.jid,Lang.GET_MODD,MessageType.text, {quoted: message.data});

  var apikey = await QueenAmdi.api()

  get_result = await fetchJson('https://api.lolhuman.xyz/api/playstore?apikey=' + apikey.key + `&query=${match[1]}`)
  get_result = get_result.result
    ini_txt = ""
        for (var x of get_result) {
        ini_txt += `📚 Name : ${x.title}\n`
        ini_txt += `💵 Price : ${x.priceText}\n`
        ini_txt += `👨🏻‍💻 Developer : ${x.developer}\n`
        ini_txt += `⚙️ Playstore Link : ${x.url}\n`
        ini_txt += `📁 Package name : ${x.appId}\n\n`
        }

  await message.client.sendMessage(message.jid, '*❖ Büññy®Bot Search Engine ❖*\n' + Lang.PSTORE + '\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n\n' + ini_txt,MessageType.text, {quoted: message.data});
  return await message.client.deleteMessage(message.jid, {id: load.key.id, remoteJid: message.jid, fromMe: true})
})
/* -----------------------------Anime Serach------------------------------------------------------ */
/*
Amdi.applyCMD({ pattern: 'getanime ?(.*)', fromMe: LOL, desc: Lang.XNXX_USAGE,  deleteCommand: false, dontAddCommandList: true}, async (message, match) => {

  if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text, {quoted: message.data});    
  var load = await message.client.sendMessage(message.jid,Lang.GET_MODD,MessageType.text, {quoted: message.data});

  var apikey = await QueenAmdi.api()

  get_result = await fetchJson('https://api.lolhuman.xyz/api/anime?apikey=' + apikey.key + `&query=${match[1]}`)
  get_result = get_result.result
    ini_txt = ""
        for (var x of get_result) {
        ini_txt += `📚Title     : ${x.title}\n`
        ini_txt += `👀Episodes  : ${x.episodes}\n`
        ini_txt += `⏳Duration   : ${x.duration}\n`
        ini_txt += `📤Source    : ${x.source}\n`
        ini_txt += `🖼Genres     : ${x.genres}\n\n`
        }
  await message.client.sendMessage(message.jid, '*❖ Büññy®Bot Search Engine ❖*\n' + Lang.XNXX1 + '\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n\n' + ini_txt,MessageType.text, {quoted: message.data});
  return await message.client.deleteMessage(message.jid, {id: load.key.id, remoteJid: message.jid, fromMe: true})
})
*/

/* -----------------------------PRO THINGS------------------------------------------------------ */
Amdi.applyCMD({ pattern: 'getxnxx ?(.*)', fromMe: LOL, desc: Lang.XNXX_USAGE,  deleteCommand: false, dontAddCommandList: true}, async (message, match) => {

  if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text, {quoted: message.data});    
  var load = await message.client.sendMessage(message.jid,Lang.GET_MODD,MessageType.text, {quoted: message.data});

  var apikey = await QueenAmdi.api()

  get_result = await fetchJson('https://api.lolhuman.xyz/api/xnxxsearch?apikey=' + apikey.key + `&query=${match[1]}`)
  get_result = get_result.result
    ini_txt = ""
        for (var x of get_result) {
        ini_txt += `📚 Title : ${x.title}\n`
        ini_txt += `👀 Views : ${x.views}\n`
        ini_txt += `⏳ Duration : ${x.duration}\n`
        ini_txt += `📤 Uploader : ${x.uploader}\n`
        ini_txt += `🖼 Thumbnail Link : ${x.thumbnail}\n`
        ini_txt += `⚙️ Link : ${x.link}\n\n`
        }
  await message.client.sendMessage(message.jid, '*❖ Büññy®Bot Search Engine ❖*\n' + Lang.XNXX1 + '\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n\n' + ini_txt,MessageType.text, {quoted: message.data});
  return await message.client.deleteMessage(message.jid, {id: load.key.id, remoteJid: message.jid, fromMe: true})
})

  
/* WORKING IN PROGRESS
Amdi.applyCMD({ pattern: 'getsong ?(.*)', fromMe: LOL, desc: Lang.FIND_DESC,  deleteCommand: false }, async (message, match) => {
  if (message.reply_message === false) return await message.client.sendMessage(message.jid, 'replay to a audio!', MessageType.text);
  var filePath = await message.client.downloadAndSaveMediaMessage({
      key: {
          remoteJid: message.reply_message.jid,
          id: message.reply_message.id
      },
      message: message.reply_message.data.quotedMessage
  });
  var form = new FormData();
  ffmpeg(filePath).format('mp3').save('music.mp3').on('end', async () => {
      form.append('api_token', '2bd1fcb3ccd15607f72cdbb527907ce6');
      form.append('file', fs.createReadStream('./music.mp3'));
      form.append('return', 'apple_music, spotify');
      var configs = {
          headers: {
              ...form.getHeaders()
          }
      }
      await axios.post('https://api.audd.io/', form, configs).then(async (response) => {
          var res = response.data
          if (res === 'success') {
              await message.client.sendMessage(message.jid, `Title: ${res.title}\nArtist: ${res.artist}`, MessageType.text);
          } else {
              await message.client.sendMessage(message.jid, 'No results found', MessageType.text);
          }
      }).catch((error) =>  {
          console.log(error);
      });
  });

});*/
