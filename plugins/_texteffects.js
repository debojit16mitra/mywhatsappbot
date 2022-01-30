const bunny = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const request = require('request');

// LIST
const Language = require('../language');
const Lang = Language.getString('effects');
const Lang2 = Language.getString('chatbot');
let LOL = Config.WORKTYPE == 'public' ? false : true

//heroku
const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: Config.HEROKU.API_KEY
});

let baseURI = '/apps/' + Config.HEROKU.APP_NAME;


//-------------------------------------QR-------------------------------------------
bunny.applyCMD({pattern: 'qr ?(.*)', fromMe: LOL,  deleteCommand: false, desc: Lang.QR_DESC, dontAddCommandList: true}, (async (message, match) => {
if (Config.CHAT_BOT == 'true') {
  if (match[1] === '') return await message.sendMessage(Lang.NEED_TEXT);
  
  var webimage = await axios.get(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${match[1].replace(/#/g, '\n')} `, { responseType: 'arraybuffer' })
  
  await message.sendMessage(Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAP, quoted: message.data })
}
  else if (Config.CHAT_BOT == 'false') {
 await message.client.sendMessage(message.jid, '\n👸🏻 ' + Lang2.BOT + Lang2.NOT_AVAILABLE2 , MessageType.text,{quoted: message.data});
}  
}));

//----------------------------------------one_word---------------------------------------
bunny.applyCMD({pattern: '3dchristmas ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
if (Config.CHAT_BOT == 'true') {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);
  
    var webimage = await axios.get(`https://zenzapi.xyz/textpro/3dchristmas?text=${match[1]}&apikey=bunnybotzensapikey`, { responseType: 'arraybuffer' })
  
    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAP, quoted: message.data })
}
  else if (Config.CHAT_BOT == 'false') {
 await message.client.sendMessage(message.jid, '\n👸🏻 ' + Lang2.BOT + Lang2.NOT_AVAILABLE2 , MessageType.text,{quoted: message.data});
}  
}));

bunny.applyCMD({pattern: 'tdeepsea ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
if (Config.CHAT_BOT == 'true') {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);
  
    var webimage = await axios.get(`https://zenzapi.xyz/textpro/3ddeepsea?text=${match[1]}&apikey=bunnybotzensapikey`, { responseType: 'arraybuffer' })
  
    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAP, quoted: message.data })
}
  else if (Config.CHAT_BOT == 'false') {
 await message.client.sendMessage(message.jid, '\n👸🏻 ' + Lang2.BOT + Lang2.NOT_AVAILABLE2 , MessageType.text,{quoted: message.data});
}  
}));

bunny.applyCMD({pattern: '3dscifi ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
if (Config.CHAT_BOT == 'true') {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);
  
    var webimage = await axios.get(`https://zenzapi.xyz/textpro/3dscifi?text=${match[1]}&apikey=bunnybotzensapikey`, { responseType: 'arraybuffer' })
  
    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAP, quoted: message.data })
}
  else if (Config.CHAT_BOT == 'false') {
 await message.client.sendMessage(message.jid, '\n👸🏻 ' + Lang2.BOT + Lang2.NOT_AVAILABLE2 , MessageType.text,{quoted: message.data});
}  
}));

bunny.applyCMD({pattern: '3drainbow ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
if (Config.CHAT_BOT == 'true') {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);
  
    var webimage = await axios.get(`https://zenzapi.xyz/textpro/3drainbow?text=${match[1]}&apikey=bunnybotzensapikey`, { responseType: 'arraybuffer' })
  
    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAP, quoted: message.data })
}
  else if (Config.CHAT_BOT == 'false') {
 await message.client.sendMessage(message.jid, '\n👸🏻 ' + Lang2.BOT + Lang2.NOT_AVAILABLE2 , MessageType.text,{quoted: message.data});
}  
}));

bunny.applyCMD({pattern: '3dwaterpipe ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
if (Config.CHAT_BOT == 'true') {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);
  
    var webimage = await axios.get(`https://zenzapi.xyz/textpro/3dwaterpipe?text=${match[1]}&apikey=bunnybotzensapikey`, { responseType: 'arraybuffer' })
  
    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAP, quoted: message.data })
}
  else if (Config.CHAT_BOT == 'false') {
 await message.client.sendMessage(message.jid, '\n👸🏻 ' + Lang2.BOT + Lang2.NOT_AVAILABLE2 , MessageType.text,{quoted: message.data});
}  
}));

bunny.applyCMD({pattern: 'thalloween ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
if (Config.CHAT_BOT == 'true') {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);
  
    var webimage = await axios.get(`https://zenzapi.xyz/textpro/halloween?text=${match[1]}&apikey=bunnybotzensapikey`, { responseType: 'arraybuffer' })
  
    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAP, quoted: message.data })
}
  else if (Config.CHAT_BOT == 'false') {
 await message.client.sendMessage(message.jid, '\n👸🏻 ' + Lang2.BOT + Lang2.NOT_AVAILABLE2 , MessageType.text,{quoted: message.data});
}  
}));

bunny.applyCMD({pattern: 'tsketch ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
if (Config.CHAT_BOT == 'true') {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);
  
    var webimage = await axios.get(`https://zenzapi.xyz/textpro/sketch?text=${match[1]}&apikey=bunnybotzensapikey`, { responseType: 'arraybuffer' })
  
    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAP, quoted: message.data })
}
  else if (Config.CHAT_BOT == 'false') {
 await message.client.sendMessage(message.jid, '\n👸🏻 ' + Lang2.BOT + Lang2.NOT_AVAILABLE2 , MessageType.text,{quoted: message.data});
}  
}));

bunny.applyCMD({pattern: 'tbluecircuit ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
if (Config.CHAT_BOT == 'true') {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);
  
    var webimage = await axios.get(`https://zenzapi.xyz/textpro/bluecircuit?text=${match[1]}&apikey=bunnybotzensapikey`, { responseType: 'arraybuffer' })
  
    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAP, quoted: message.data })
}
  else if (Config.CHAT_BOT == 'false') {
 await message.client.sendMessage(message.jid, '\n👸🏻 ' + Lang2.BOT + Lang2.NOT_AVAILABLE2 , MessageType.text,{quoted: message.data});
}  
}));

bunny.applyCMD({pattern: 'tspace ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
if (Config.CHAT_BOT == 'true') {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);
  
    var webimage = await axios.get(`https://zenzapi.xyz/textpro/space?text=${match[1]}&apikey=bunnybotzensapikey`, { responseType: 'arraybuffer' })
  
    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAP, quoted: message.data })
}
  else if (Config.CHAT_BOT == 'false') {
 await message.client.sendMessage(message.jid, '\n👸🏻 ' + Lang2.BOT + Lang2.NOT_AVAILABLE2 , MessageType.text,{quoted: message.data});
}  
}));

bunny.applyCMD({pattern: 'tmetallic ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
if (Config.CHAT_BOT == 'true') {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);
  
    var webimage = await axios.get(`https://zenzapi.xyz/textpro/metallic?text=${match[1]}&apikey=bunnybotzensapikey`, { responseType: 'arraybuffer' })
  
    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAP, quoted: message.data })
}
  else if (Config.CHAT_BOT == 'false') {
 await message.client.sendMessage(message.jid, '\n👸🏻 ' + Lang2.BOT + Lang2.NOT_AVAILABLE2 , MessageType.text,{quoted: message.data});
}  
}));

bunny.applyCMD({pattern: 'tfiction ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
if (Config.CHAT_BOT == 'true') {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);
  
    var webimage = await axios.get(`https://zenzapi.xyz/textpro/fiction?text=${match[1]}&apikey=bunnybotzensapikey`, { responseType: 'arraybuffer' })
  
    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAP, quoted: message.data })
}
  else if (Config.CHAT_BOT == 'false') {
 await message.client.sendMessage(message.jid, '\n👸🏻 ' + Lang2.BOT + Lang2.NOT_AVAILABLE2 , MessageType.text,{quoted: message.data});
}  
}));

bunny.applyCMD({pattern: 'tgreenhorror ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
if (Config.CHAT_BOT == 'true') {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);
  
    var webimage = await axios.get(`https://zenzapi.xyz/textpro/greenhorror?text=${match[1]}&apikey=bunnybotzensapikey`, { responseType: 'arraybuffer' })
  
    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAP, quoted: message.data })
}
  else if (Config.CHAT_BOT == 'false') {
 await message.client.sendMessage(message.jid, '\n👸🏻 ' + Lang2.BOT + Lang2.NOT_AVAILABLE2 , MessageType.text,{quoted: message.data});
}  
}));

bunny.applyCMD({pattern: 'ttransformer ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
if (Config.CHAT_BOT == 'true') {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);
  
    var webimage = await axios.get(`https://zenzapi.xyz/textpro/transformer?text=&apikey=${match[1]}&apikey=bunnybotzensapikey`, { responseType: 'arraybuffer' })
  
    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAP, quoted: message.data })
}
  else if (Config.CHAT_BOT == 'false') {
 await message.client.sendMessage(message.jid, '\n👸🏻 ' + Lang2.BOT + Lang2.NOT_AVAILABLE2 , MessageType.text,{quoted: message.data});
}  
}));

bunny.applyCMD({pattern: 'tberry ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
if (Config.CHAT_BOT == 'true') {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);
  
    var webimage = await axios.get(`https://zenzapi.xyz/textpro/berry?text=${match[1]}&apikey=bunnybotzensapikey`, { responseType: 'arraybuffer' })
  
    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAP, quoted: message.data })
}
  else if (Config.CHAT_BOT == 'false') {
 await message.client.sendMessage(message.jid, '\n👸🏻 ' + Lang2.BOT + Lang2.NOT_AVAILABLE2 , MessageType.text,{quoted: message.data});
}  
}));

bunny.applyCMD({pattern: 'tthunder ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
if (Config.CHAT_BOT == 'true') {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);
  
    var webimage = await axios.get(`https://zenzapi.xyz/textpro/thunder?text=${match[1]}&apikey=bunnybotzensapikey`, { responseType: 'arraybuffer' })
  
    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAP, quoted: message.data })
}
  else if (Config.CHAT_BOT == 'false') {
 await message.client.sendMessage(message.jid, '\n👸🏻 ' + Lang2.BOT + Lang2.NOT_AVAILABLE2 , MessageType.text,{quoted: message.data});
}  
}));

bunny.applyCMD({pattern: 'tmagma ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
if (Config.CHAT_BOT == 'true') {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);
  
    var webimage = await axios.get(`https://zenzapi.xyz/textpro/magma?text=${match[1]}&apikey=bunnybotzensapikey`, { responseType: 'arraybuffer' })
  
    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAP, quoted: message.data })
}
  else if (Config.CHAT_BOT == 'false') {
 await message.client.sendMessage(message.jid, '\n👸🏻 ' + Lang2.BOT + Lang2.NOT_AVAILABLE2 , MessageType.text,{quoted: message.data});
}  
}));

bunny.applyCMD({pattern: 'tcrackedstone ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
if (Config.CHAT_BOT == 'true') {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);
  
    var webimage = await axios.get(`https://zenzapi.xyz/textpro/crackedstone?text=${match[1]}&apikey=bunnybotzensapikey`, { responseType: 'arraybuffer' })
  
    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAP, quoted: message.data })
}
  else if (Config.CHAT_BOT == 'false') {
 await message.client.sendMessage(message.jid, '\n👸🏻 ' + Lang2.BOT + Lang2.NOT_AVAILABLE2 , MessageType.text,{quoted: message.data});
}  
}));

bunny.applyCMD({pattern: '3dneonlight ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
if (Config.CHAT_BOT == 'true') {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);
  
    var webimage = await axios.get(`https://zenzapi.xyz/textpro/3dneonlight?text=&apikey=${match[1]}&apikey=bunnybotzensapikey`, { responseType: 'arraybuffer' })
  
    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAP, quoted: message.data })
}
  else if (Config.CHAT_BOT == 'false') {
 await message.client.sendMessage(message.jid, '\n👸🏻 ' + Lang2.BOT + Lang2.NOT_AVAILABLE2 , MessageType.text,{quoted: message.data});
}  
}));

bunny.applyCMD({pattern: 'tglitch ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
if (Config.CHAT_BOT == 'true') {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);
  
    var webimage = await axios.get(`https://zenzapi.xyz/textpro/impressiveglitch?text=${match[1]}&apikey=bunnybotzensapikey`, { responseType: 'arraybuffer' })
  
    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAP, quoted: message.data })
}
  else if (Config.CHAT_BOT == 'false') {
 await message.client.sendMessage(message.jid, '\n👸🏻 ' + Lang2.BOT + Lang2.NOT_AVAILABLE2 , MessageType.text,{quoted: message.data});
}  
}));

bunny.applyCMD({pattern: 'tharrypotter ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
if (Config.CHAT_BOT == 'true') {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);
  
    var webimage = await axios.get(`https://zenzapi.xyz/textpro/harrypotter?text=${match[1]}&apikey=bunnybotzensapikey`, { responseType: 'arraybuffer' })
  
    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAP, quoted: message.data })
}
  else if (Config.CHAT_BOT == 'false') {
 await message.client.sendMessage(message.jid, '\n👸🏻 ' + Lang2.BOT + Lang2.NOT_AVAILABLE2 , MessageType.text,{quoted: message.data});
}  
}));

bunny.applyCMD({pattern: 'tfogwindows ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
if (Config.CHAT_BOT == 'true') {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);
  
    var webimage = await axios.get(`https://zenzapi.xyz/textpro/foggywindows?text=${match[1]}&apikey=bunnybotzensapikey`, { responseType: 'arraybuffer' })
  
    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAP, quoted: message.data })
}
  else if (Config.CHAT_BOT == 'false') {
 await message.client.sendMessage(message.jid, '\n👸🏻 ' + Lang2.BOT + Lang2.NOT_AVAILABLE2 , MessageType.text,{quoted: message.data});
}  
}));


bunny.applyCMD({pattern: 'tneondevil ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
if (Config.CHAT_BOT == 'true') {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);
  
    var webimage = await axios.get(`https://zenzapi.xyz/textpro/neondevil?text=${match[1]}&apikey=bunnybotzensapikey`, { responseType: 'arraybuffer' })
  
    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAP, quoted: message.data })
}
  else if (Config.CHAT_BOT == 'false') {
 await message.client.sendMessage(message.jid, '\n👸🏻 ' + Lang2.BOT + Lang2.NOT_AVAILABLE2 , MessageType.text,{quoted: message.data});
}  
}));

bunny.applyCMD({pattern: 'tchristmas ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
if (Config.CHAT_BOT == 'true') {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);
  
    var webimage = await axios.get(`https://zenzapi.xyz/textpro/christmas?text=&apikey=${match[1]}&apikey=bunnybotzensapikey`, { responseType: 'arraybuffer' })
  
    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAP, quoted: message.data })
}
  else if (Config.CHAT_BOT == 'false') {
 await message.client.sendMessage(message.jid, '\n👸🏻 ' + Lang2.BOT + Lang2.NOT_AVAILABLE2 , MessageType.text,{quoted: message.data});
}  
}));

bunny.applyCMD({pattern: '3dgradient ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
if (Config.CHAT_BOT == 'true') {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);
  
    var webimage = await axios.get(`https://zenzapi.xyz/textpro/3dgradient?text=${match[1]}&apikey=bunnybotzensapikey`, { responseType: 'arraybuffer' })
  
    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAP, quoted: message.data })
}
  else if (Config.CHAT_BOT == 'false') {
 await message.client.sendMessage(message.jid, '\n👸🏻 ' + Lang2.BOT + Lang2.NOT_AVAILABLE2 , MessageType.text,{quoted: message.data});
}  
}));

bunny.applyCMD({pattern: 'tblackpink ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
if (Config.CHAT_BOT == 'true') {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);
  
    var webimage = await axios.get(`https://zenzapi.xyz/textpro/blackpink?text=${match[1]}&apikey=bunnybotzensapikey`, { responseType: 'arraybuffer' })
  
    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAP, quoted: message.data })
}
  else if (Config.CHAT_BOT == 'false') {
 await message.client.sendMessage(message.jid, '\n👸🏻 ' + Lang2.BOT + Lang2.NOT_AVAILABLE2 , MessageType.text,{quoted: message.data});
}  
}));

bunny.applyCMD({pattern: 'tgluetext ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
if (Config.CHAT_BOT == 'true') {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);
  
    var webimage = await axios.get(`https://zenzapi.xyz/textpro/gluetext?text=${match[1]}&apikey=bunnybotzensapikey`, { responseType: 'arraybuffer' })
  
    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAP, quoted: message.data })
}
  else if (Config.CHAT_BOT == 'false') {
 await message.client.sendMessage(message.jid, '\n👸🏻 ' + Lang2.BOT + Lang2.NOT_AVAILABLE2 , MessageType.text,{quoted: message.data});
}  
}));

bunny.applyCMD({pattern: 'tnatural ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
if (Config.CHAT_BOT == 'true') {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);
  
    var webimage = await axios.get(`https://zenzapi.xyz/textpro/natural?text=&apikey=${match[1]}&apikey=bunnybotzensapikey`, { responseType: 'arraybuffer' })
  
    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAP, quoted: message.data })
}
  else if (Config.CHAT_BOT == 'false') {
 await message.client.sendMessage(message.jid, '\n👸🏻 ' + Lang2.BOT + Lang2.NOT_AVAILABLE2 , MessageType.text,{quoted: message.data});
}  
}));

bunny.applyCMD({pattern: 'twaterdrop ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
if (Config.CHAT_BOT == 'true') {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);
  
    var webimage = await axios.get(`https://zenzapi.xyz/textpro/dropwater?text=${match[1]}&apikey=bunnybotzensapikey`, { responseType: 'arraybuffer' })
  
    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAP, quoted: message.data })
}
  else if (Config.CHAT_BOT == 'false') {
 await message.client.sendMessage(message.jid, '\n👸🏻 ' + Lang2.BOT + Lang2.NOT_AVAILABLE2 , MessageType.text,{quoted: message.data});
}  
}));

bunny.applyCMD({pattern: 'tmatrix ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
if (Config.CHAT_BOT == 'true') {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);
  
    var webimage = await axios.get(`https://zenzapi.xyz/textpro/matrix?text=${match[1]}&apikey=bunnybotzensapikey`, { responseType: 'arraybuffer' })
  
    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAP, quoted: message.data })
}
  else if (Config.CHAT_BOT == 'false') {
 await message.client.sendMessage(message.jid, '\n👸🏻 ' + Lang2.BOT + Lang2.NOT_AVAILABLE2 , MessageType.text,{quoted: message.data});
}  
}));

bunny.applyCMD({pattern: 'tfireworks ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
if (Config.CHAT_BOT == 'true') {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);
  
    var webimage = await axios.get(`https://zenzapi.xyz/textpro/firework?text=${match[1]}&apikey=bunnybotzensapikey`, { responseType: 'arraybuffer' })
  
    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAP, quoted: message.data })
}
  else if (Config.CHAT_BOT == 'false') {
 await message.client.sendMessage(message.jid, '\n👸🏻 ' + Lang2.BOT + Lang2.NOT_AVAILABLE2 , MessageType.text,{quoted: message.data});
}  
}));

//------------------------------------two_words---------------------------------------
bunny.applyCMD({pattern: 'tpornhub ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
if (Config.CHAT_BOT == 'true') {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);
  
    var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
    }

    var webimage = await axios.get(`https://zenzapi.xyz/textpro/pornhub?text=${topText}&text2=${bottomText}&apikey=bunnybotzensapikey`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAP, quoted: message.data })
}
  else if (Config.CHAT_BOT == 'false') {
 await message.client.sendMessage(message.jid, '\n👸🏻 ' + Lang2.BOT + Lang2.NOT_AVAILABLE2 , MessageType.text,{quoted: message.data});
}
}));

bunny.applyCMD({pattern: '2glitch ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
if (Config.CHAT_BOT == 'true') {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);
  
    var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
    }

    var webimage = await axios.get(`https://zenzapi.xyz/textpro/glitch?text=${topText}&text2=${bottomText}&apikey=bunnybotzensapikey`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAP, quoted: message.data })
}
  else if (Config.CHAT_BOT == 'false') {
 await message.client.sendMessage(message.jid, '\n👸🏻 ' + Lang2.BOT + Lang2.NOT_AVAILABLE2 , MessageType.text,{quoted: message.data});
}
}));

bunny.applyCMD({pattern: 'twolflogo ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
if (Config.CHAT_BOT == 'true') {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);
  
    var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
    }

    var webimage = await axios.get(`https://zenzapi.xyz/textpro/logowolf?text=${topText}&text2=${bottomText}&apikey=bunnybotzensapikey`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAP, quoted: message.data })
}
  else if (Config.CHAT_BOT == 'false') {
 await message.client.sendMessage(message.jid, '\n👸🏻 ' + Lang2.BOT + Lang2.NOT_AVAILABLE2 , MessageType.text,{quoted: message.data});
}
}));

bunny.applyCMD({pattern: 'twolfgalaxy ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
if (Config.CHAT_BOT == 'true') {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);
  
    var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
    }

    var webimage = await axios.get(`https://zenzapi.xyz/textpro/logowolf2?text=${topText}&text2=${bottomText}&apikey=bunnybotzensapikey`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAP, quoted: message.data })
}
  else if (Config.CHAT_BOT == 'false') {
 await message.client.sendMessage(message.jid, '\n👸🏻 ' + Lang2.BOT + Lang2.NOT_AVAILABLE2 , MessageType.text,{quoted: message.data});
}
}));

bunny.applyCMD({pattern: 'tmarvel ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
if (Config.CHAT_BOT == 'true') {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);
  
    var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
    }

    var webimage = await axios.get(`https://zenzapi.xyz/textpro/marvel?text=${topText}&text2=${bottomText}&apikey=bunnybotzensapikey`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAP, quoted: message.data })
}
  else if (Config.CHAT_BOT == 'false') {
 await message.client.sendMessage(message.jid, '\n👸🏻 ' + Lang2.BOT + Lang2.NOT_AVAILABLE2 , MessageType.text,{quoted: message.data});
}
}));

