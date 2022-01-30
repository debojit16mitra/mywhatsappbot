const bunny = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const request = require('request');

const Language = require('../language');
const Lang2 = Language.getString('chatbot'); //for chat_bot sleep
const Lang = Language.getString('random_pic');
let LOL = Config.WORKTYPE == 'public' ? false : true

//-----------------------------------------------------SFW----------------------------------------------------------------------------------
bunny.applyCMD({pattern: 'waifu ?(.*)', fromMe: LOL, dontAddCommandList: true,  deleteCommand: false}, (async (message, match) => {

    var webimage = await axios.get('https://zenzapi.xyz/api/random/waifu?apikey=bunnybotzensapikey', { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAP, quoted: message.data })

}));

bunny.applyCMD({pattern: 'hasbu ?(.*)', fromMe: LOL, dontAddCommandList: true,  deleteCommand: false}, (async (message, match) => {

    var webimage = await axios.get('https://zenzapi.xyz/api/random/husbu?apikey=bunnybotzensapikey', { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAP, quoted: message.data })

}));

bunny.applyCMD({pattern: 'shinobu ?(.*)', fromMe: LOL, dontAddCommandList: true,  deleteCommand: false}, (async (message, match) => {

    var webimage = await axios.get('https://zenzapi.xyz/api/random/shinobu?apikey=bunnybotzensapikey', { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAP, quoted: message.data })

}));

bunny.applyCMD({pattern: 'neko ?(.*)', fromMe: LOL, dontAddCommandList: true,  deleteCommand: false}, (async (message, match) => {

    var webimage = await axios.get('https://zenzapi.xyz/api/random/neko?apikey=bunnybotzensapikey', { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAP, quoted: message.data })

}));

bunny.applyCMD({pattern: 'ranime ?(.*)', fromMe: LOL, dontAddCommandList: true,  deleteCommand: false}, (async (message, match) => {

    var webimage = await axios.get('https://zenzapi.xyz/api/random/anime?apikey=bunnybotzensapikey', { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAP, quoted: message.data })

}));

//-----------------------------------------------------SFW GIF----------------------------------------------------------------------------------
/*
bunny.applyCMD({pattern: 'cuddle ?(.*)', fromMe: LOL, dontAddCommandList: true,  deleteCommand: false}, (async (message, match) => {

    var webimage = await axios.get('https://zenzapi.xyz/api/anime/sfw/cuddle?apikey=bunnybotzensapikey', { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.gif, caption: Config.CAP, quoted: message.data })

}));
bunny.applyCMD({pattern: 'cudle ?(.*)', fromMe: LOL, dontAddCommandList: true,  deleteCommand: false}, (async (message, match) => {

    var webimage = await axios.get('https://zenzapi.xyz/api/anime/sfw/cuddle?apikey=bunnybotzensapikey', { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.webp, caption: Config.CAP, quoted: message.data })

}));
*/



//-----------------------------------------------------NSFW----------------------------------------------------------------------------------
bunny.applyCMD({pattern: 'nswaifu ?(.*)', fromMe: LOL, dontAddCommandList: true,  deleteCommand: false}, (async (message, match) => {
if (Config.CHAT_BOT == 'true') {

    var webimage = await axios.get('https://zenzapi.xyz/api/random/waifus?apikey=bunnybotzensapikey', { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAP, quoted: message.data })
}
  else if (Config.CHAT_BOT == 'false') {
 await message.client.sendMessage(message.jid, '\n👸🏻 ' + Lang2.BOT + Lang2.NOT_AVAILABLE3 , MessageType.text,{quoted: message.data});
}
}));

bunny.applyCMD({pattern: 'nsass ?(.*)', fromMe: LOL, dontAddCommandList: true,  deleteCommand: false}, (async (message, match) => {
if (Config.CHAT_BOT == 'true') {

    var webimage = await axios.get('https://zenzapi.xyz/api/morensfw/ass?apikey=bunnybotzensapikey', { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAP, quoted: message.data })
}
  else if (Config.CHAT_BOT == 'false') {
 await message.client.sendMessage(message.jid, '\n👸🏻 ' + Lang2.BOT + Lang2.NOT_AVAILABLE3 , MessageType.text,{quoted: message.data});
}
}));

bunny.applyCMD({pattern: 'nsahegao ?(.*)', fromMe: LOL, dontAddCommandList: true,  deleteCommand: false}, (async (message, match) => {
if (Config.CHAT_BOT == 'true') {

    var webimage = await axios.get('https://zenzapi.xyz/api/morensfw/ahegao?apikey=bunnybotzensapikey', { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAP, quoted: message.data })
}
  else if (Config.CHAT_BOT == 'false') {
 await message.client.sendMessage(message.jid, '\n👸🏻 ' + Lang2.BOT + Lang2.NOT_AVAILABLE3 , MessageType.text,{quoted: message.data});
}
}));

bunny.applyCMD({pattern: 'nsbdsm ?(.*)', fromMe: LOL, dontAddCommandList: true,  deleteCommand: false}, (async (message, match) => {
if (Config.CHAT_BOT == 'true') {

    var webimage = await axios.get('https://zenzapi.xyz/api/morensfw/bdsm?apikey=bunnybotzensapikey', { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAP, quoted: message.data })
}
  else if (Config.CHAT_BOT == 'false') {
 await message.client.sendMessage(message.jid, '\n👸🏻 ' + Lang2.BOT + Lang2.NOT_AVAILABLE3 , MessageType.text,{quoted: message.data});
}
}));

bunny.applyCMD({pattern: 'nsblow ?(.*)', fromMe: LOL, dontAddCommandList: true,  deleteCommand: false}, (async (message, match) => {
if (Config.CHAT_BOT == 'true') {

    var webimage = await axios.get('https://zenzapi.xyz/api/morensfw/blowjob?apikey=bunnybotzensapikey', { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAP, quoted: message.data })
}
  else if (Config.CHAT_BOT == 'false') {
 await message.client.sendMessage(message.jid, '\n👸🏻 ' + Lang2.BOT + Lang2.NOT_AVAILABLE3 , MessageType.text,{quoted: message.data});
}
}));

bunny.applyCMD({pattern: 'nscum ?(.*)', fromMe: LOL, dontAddCommandList: true,  deleteCommand: false}, (async (message, match) => {
if (Config.CHAT_BOT == 'true') {

    var webimage = await axios.get('https://zenzapi.xyz/api/morensfw/cum?apikey=bunnybotzensapikey', { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAP, quoted: message.data })
}
  else if (Config.CHAT_BOT == 'false') {
 await message.client.sendMessage(message.jid, '\n👸🏻 ' + Lang2.BOT + Lang2.NOT_AVAILABLE3 , MessageType.text,{quoted: message.data});
}
}));

bunny.applyCMD({pattern: 'nsero ?(.*)', fromMe: LOL, dontAddCommandList: true,  deleteCommand: false}, (async (message, match) => {
if (Config.CHAT_BOT == 'true') {

    var webimage = await axios.get('https://zenzapi.xyz/api/morensfw/ero?apikey=bunnybotzensapikey', { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAP, quoted: message.data })
}
  else if (Config.CHAT_BOT == 'false') {
 await message.client.sendMessage(message.jid, '\n👸🏻 ' + Lang2.BOT + Lang2.NOT_AVAILABLE3 , MessageType.text,{quoted: message.data});
}
}));

bunny.applyCMD({pattern: 'nsfemdom ?(.*)', fromMe: LOL, dontAddCommandList: true,  deleteCommand: false}, (async (message, match) => {
if (Config.CHAT_BOT == 'true') {

    var webimage = await axios.get('https://zenzapi.xyz/api/morensfw/femdom?apikey=bunnybotzensapikey', { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAP, quoted: message.data })
}
  else if (Config.CHAT_BOT == 'false') {
 await message.client.sendMessage(message.jid, '\n👸🏻 ' + Lang2.BOT + Lang2.NOT_AVAILABLE3 , MessageType.text,{quoted: message.data});
}
}));

bunny.applyCMD({pattern: 'nsgang ?(.*)', fromMe: LOL, dontAddCommandList: true,  deleteCommand: false}, (async (message, match) => {
if (Config.CHAT_BOT == 'true') {

    var webimage = await axios.get('https://zenzapi.xyz/api/morensfw/gangbang?apikey=bunnybotzensapikey', { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAP, quoted: message.data })
}
  else if (Config.CHAT_BOT == 'false') {
 await message.client.sendMessage(message.jid, '\n👸🏻 ' + Lang2.BOT + Lang2.NOT_AVAILABLE3 , MessageType.text,{quoted: message.data});
}
}));

bunny.applyCMD({pattern: 'nsglasses ?(.*)', fromMe: LOL, dontAddCommandList: true,  deleteCommand: false}, (async (message, match) => {
if (Config.CHAT_BOT == 'true') {

    var webimage = await axios.get('https://zenzapi.xyz/api/morensfw/glasses?apikey=bunnybotzensapikey', { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAP, quoted: message.data })
}
  else if (Config.CHAT_BOT == 'false') {
 await message.client.sendMessage(message.jid, '\n👸🏻 ' + Lang2.BOT + Lang2.NOT_AVAILABLE3 , MessageType.text,{quoted: message.data});
}
}));

bunny.applyCMD({pattern: 'nshentai ?(.*)', fromMe: LOL, dontAddCommandList: true,  deleteCommand: false}, (async (message, match) => {
if (Config.CHAT_BOT == 'true') {

    var webimage = await axios.get('https://zenzapi.xyz/api/morensfw/hentai?apikey=bunnybotzensapikey', { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAP, quoted: message.data })
}
  else if (Config.CHAT_BOT == 'false') {
 await message.client.sendMessage(message.jid, '\n👸🏻 ' + Lang2.BOT + Lang2.NOT_AVAILABLE3 , MessageType.text,{quoted: message.data});
}
}));

bunny.applyCMD({pattern: 'nsmaid ?(.*)', fromMe: LOL, dontAddCommandList: true,  deleteCommand: false}, (async (message, match) => {
if (Config.CHAT_BOT == 'true') {

    var webimage = await axios.get('https://zenzapi.xyz/api/morensfw/maid?apikey=bunnybotzensapikey', { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAP, quoted: message.data })
}
  else if (Config.CHAT_BOT == 'false') {
 await message.client.sendMessage(message.jid, '\n👸🏻 ' + Lang2.BOT + Lang2.NOT_AVAILABLE3 , MessageType.text,{quoted: message.data});
}
}));

bunny.applyCMD({pattern: 'nsmast ?(.*)', fromMe: LOL, dontAddCommandList: true,  deleteCommand: false}, (async (message, match) => {
if (Config.CHAT_BOT == 'true') {

    var webimage = await axios.get('https://zenzapi.xyz/api/morensfw/masturbation?apikey=bunnybotzensapikey', { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAP, quoted: message.data })
}
  else if (Config.CHAT_BOT == 'false') {
 await message.client.sendMessage(message.jid, '\n👸🏻 ' + Lang2.BOT + Lang2.NOT_AVAILABLE3 , MessageType.text,{quoted: message.data});
}
}));

bunny.applyCMD({pattern: 'nsmobwall ?(.*)', fromMe: LOL, dontAddCommandList: true,  deleteCommand: false}, (async (message, match) => {
if (Config.CHAT_BOT == 'true') {

    var webimage = await axios.get('https://zenzapi.xyz/api/morensfw/mobilewall?apikey=bunnybotzensapikey', { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAP, quoted: message.data })
}
  else if (Config.CHAT_BOT == 'false') {
 await message.client.sendMessage(message.jid, '\n👸🏻 ' + Lang2.BOT + Lang2.NOT_AVAILABLE3 , MessageType.text,{quoted: message.data});
}
}));

bunny.applyCMD({pattern: 'nsneko ?(.*)', fromMe: LOL, dontAddCommandList: true,  deleteCommand: false}, (async (message, match) => {
if (Config.CHAT_BOT == 'true') {

    var webimage = await axios.get('https://zenzapi.xyz/api/morensfw/sfwneko?apikey=bunnybotzensapikey', { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAP, quoted: message.data })
}
  else if (Config.CHAT_BOT == 'false') {
 await message.client.sendMessage(message.jid, '\n👸🏻 ' + Lang2.BOT + Lang2.NOT_AVAILABLE3 , MessageType.text,{quoted: message.data});
}
}));

bunny.applyCMD({pattern: 'nspant ?(.*)', fromMe: LOL, dontAddCommandList: true,  deleteCommand: false}, (async (message, match) => {
if (Config.CHAT_BOT == 'true') {

    var webimage = await axios.get('https://zenzapi.xyz/api/morensfw/panties?apikey=bunnybotzensapikey', { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAP, quoted: message.data })
}
  else if (Config.CHAT_BOT == 'false') {
 await message.client.sendMessage(message.jid, '\n👸🏻 ' + Lang2.BOT + Lang2.NOT_AVAILABLE3 , MessageType.text,{quoted: message.data});
}
}));

bunny.applyCMD({pattern: 'nspussy ?(.*)', fromMe: LOL, dontAddCommandList: true,  deleteCommand: false}, (async (message, match) => {
if (Config.CHAT_BOT == 'true') {

    var webimage = await axios.get('https://zenzapi.xyz/api/morensfw/pussy?apikey=bunnybotzensapikey', { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAP, quoted: message.data })
}
  else if (Config.CHAT_BOT == 'false') {
 await message.client.sendMessage(message.jid, '\n👸🏻 ' + Lang2.BOT + Lang2.NOT_AVAILABLE3 , MessageType.text,{quoted: message.data});
}
}));

bunny.applyCMD({pattern: 'nsthighs ?(.*)', fromMe: LOL, dontAddCommandList: true,  deleteCommand: false}, (async (message, match) => {
if (Config.CHAT_BOT == 'true') {

    var webimage = await axios.get('https://zenzapi.xyz/api/morensfw/thighs?apikey=bunnybotzensapikey', { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAP, quoted: message.data })
}
  else if (Config.CHAT_BOT == 'false') {
 await message.client.sendMessage(message.jid, '\n👸🏻 ' + Lang2.BOT + Lang2.NOT_AVAILABLE3 , MessageType.text,{quoted: message.data});
}
}));

bunny.applyCMD({pattern: 'nsyuri ?(.*)', fromMe: LOL, dontAddCommandList: true,  deleteCommand: false}, (async (message, match) => {
if (Config.CHAT_BOT == 'true') {

    var webimage = await axios.get('https://zenzapi.xyz/api/morensfw/yuri?apikey=bunnybotzensapikey', { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAP, quoted: message.data })
}
  else if (Config.CHAT_BOT == 'false') {
 await message.client.sendMessage(message.jid, '\n👸🏻 ' + Lang2.BOT + Lang2.NOT_AVAILABLE3 , MessageType.text,{quoted: message.data});
}
}));

bunny.applyCMD({pattern: 'nslewd ?(.*)', fromMe: LOL, dontAddCommandList: true,  deleteCommand: false}, (async (message, match) => {
if (Config.CHAT_BOT == 'true') {

    var webimage = await axios.get('https://zenzapi.xyz/api/anime/nsfw/lewd?apikey=bunnybotzensapikey', { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAP, quoted: message.data })
}
  else if (Config.CHAT_BOT == 'false') {
 await message.client.sendMessage(message.jid, '\n👸🏻 ' + Lang2.BOT + Lang2.NOT_AVAILABLE3 , MessageType.text,{quoted: message.data});
}
}));

bunny.applyCMD({pattern: 'nstits ?(.*)', fromMe: LOL, dontAddCommandList: true,  deleteCommand: false}, (async (message, match) => {
if (Config.CHAT_BOT == 'true') {

    var webimage = await axios.get('https://zenzapi.xyz/api/anime/nsfw/tits?apikey=bunnybotzensapikey', { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAP, quoted: message.data })
}
  else if (Config.CHAT_BOT == 'false') {
 await message.client.sendMessage(message.jid, '\n👸🏻 ' + Lang2.BOT + Lang2.NOT_AVAILABLE3 , MessageType.text,{quoted: message.data});
}
}));

bunny.applyCMD({pattern: 'nssolo ?(.*)', fromMe: LOL, dontAddCommandList: true,  deleteCommand: false}, (async (message, match) => {
if (Config.CHAT_BOT == 'true') {

    var webimage = await axios.get('https://zenzapi.xyz/api/anime/nsfw/solo?apikey=bunnybotzensapikey', { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAP, quoted: message.data })
}
  else if (Config.CHAT_BOT == 'false') {
 await message.client.sendMessage(message.jid, '\n👸🏻 ' + Lang2.BOT + Lang2.NOT_AVAILABLE3 , MessageType.text,{quoted: message.data});
}
}));

bunny.applyCMD({pattern: 'nseroyuri ?(.*)', fromMe: LOL, dontAddCommandList: true,  deleteCommand: false}, (async (message, match) => {
if (Config.CHAT_BOT == 'true') {

    var webimage = await axios.get('https://zenzapi.xyz/api/anime/nsfw/eroyuri?apikey=bunnybotzensapikey', { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAP, quoted: message.data })
}
  else if (Config.CHAT_BOT == 'false') {
 await message.client.sendMessage(message.jid, '\n👸🏻 ' + Lang2.BOT + Lang2.NOT_AVAILABLE3 , MessageType.text,{quoted: message.data});
}
}));
