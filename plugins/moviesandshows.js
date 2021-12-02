/* Copyright (C) 2021 BunnyBot.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
*/

const Asena = require('../events');
const Bunny = require('../events');
const QueenAmdi = require('queenamdi-public-2');
const { MessageType, Mimetype} = require('@adiwajshing/baileys');
const got = require('got');
const Config = require('../config');
const axios = require('axios');
const { errorMessage, infoMessage } = require('../helpers');

const Language = require('../language');
const Lang = Language.getString('scrapers');
//----------------------------------Pro Things----------------------------------------
const { fetchJson, getBuffer } = require('./fetcher')
const Lang2 = Language.getString('search')
//------------------------------------------------------------------------------------



if (Config.WORKTYPE == 'private') {
	
Bunny.addCommand({ pattern: 'movie ?(.*)', desc: Lang.MOVIE_DESC ,  deleteCommand: false}, (async (message, match) => {
	if (match[1] === '') return await message.client.sendMessage(message.jid, '```Give me a name😒```', MessageType.text, { quoted: message.data });
	let url = `http://www.omdbapi.com/?apikey=742b2d09&t=${match[1]}&plot=full`
	const response = await got(url);
	const json = JSON.parse(response.body);
	if (json.Response != 'True') return await message.client.sendMessage(message.jid, '*Not found!!😕*', MessageType.text, { quoted: message.data });
	let msg = '```';
	msg +=	'⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍\n' + ' ```⚕️ Büññy®Bot Movie & Series Panel ⚕️```\n' + '⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n';
	msg += '🎬Title      : ' + json.Title + '\n\n';
	msg += '📅Year       : ' + json.Year + '\n\n';
	msg += '⭐Rated      : ' + json.Rated + '\n\n';
	msg += '📆Released   : ' + json.Released + '\n\n';
	msg += '⏳Runtime    : ' + json.Runtime + '\n\n';
	msg += '🌀Genre      : ' + json.Genre + '\n\n';
	msg += '👨🏻‍💻Director   : ' + json.Director + '\n\n';
	msg += '✍Writer     : ' + json.Writer + '\n\n';
	msg += '👨Actors     : ' + json.Actors + '\n\n';
	msg += '📃Plot       : ' + json.Plot + '\n\n';
	msg += '🌐Language   : ' + json.Language + '\n\n';
	msg += '🌍Country    : ' + json.Country + '\n\n';
	msg += '🎖️Awards     : ' + json.Awards + '\n\n';
	msg += '📦BoxOffice  : ' + json.BoxOffice + '\n\n';
	msg += '🏙️Production : ' + json.Production + '\n\n';
	msg += '🌟imdbRating : ' + json.imdbRating + '\n\n';
	msg += '❎imdbVotes  : ' + json.imdbVotes + '```';
	let imgg = json.Poster;
	var webimage = await axios.get(imgg, {responseType: 'arraybuffer'})
        await message.sendMessage(Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, quoted: message.data, caption: msg})
	//await message.client.sendMessage(message.jid, imgg, MessageType.image, {mimetype: Mimetype.jpg, quoted: message.data });
	//await message.client.sendMessage(message.jid, msg, MessageType.text, { quoted: message.data });
}));
}

else if (Config.WORKTYPE == 'public') {
	
Bunny.addCommand({ pattern: 'movie ?(.*)', desc: Lang.MOVIE_DESC ,  deleteCommand: false}, (async (message, match) => {
	if (match[1] === '') return await message.client.sendMessage(message.jid, '```Give me a name😒```', MessageType.text, { quoted: message.data });
	let url = `http://www.omdbapi.com/?apikey=742b2d09&t=${match[1]}&plot=full`
	const response = await got(url);
	const json = JSON.parse(response.body);
	if (json.Response != 'True') return await message.client.sendMessage(message.jid, '*Not found!!😕*', MessageType.text, { quoted: message.data });
	let msg = '```';
	msg +=	'⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍\n' + ' ```⚕️ Büññy®Bot Movie & Series Panel ⚕️```\n' + '⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n';
	msg += '🎬Title      : ' + json.Title + '\n\n';
	msg += '📅Year       : ' + json.Year + '\n\n';
	msg += '⭐Rated      : ' + json.Rated + '\n\n';
	msg += '📆Released   : ' + json.Released + '\n\n';
	msg += '⏳Runtime    : ' + json.Runtime + '\n\n';
	msg += '🌀Genre      : ' + json.Genre + '\n\n';
	msg += '👨🏻‍💻Director   : ' + json.Director + '\n\n';
	msg += '✍Writer     : ' + json.Writer + '\n\n';
	msg += '👨Actors     : ' + json.Actors + '\n\n';
	msg += '📃Plot       : ' + json.Plot + '\n\n';
	msg += '🌐Language   : ' + json.Language + '\n\n';
	msg += '🌍Country    : ' + json.Country + '\n\n';
	msg += '🎖️Awards     : ' + json.Awards + '\n\n';
	msg += '📦BoxOffice  : ' + json.BoxOffice + '\n\n';
	msg += '🏙️Production : ' + json.Production + '\n\n';
	msg += '🌟imdbRating : ' + json.imdbRating + '\n\n';
	msg += '❎imdbVotes  : ' + json.imdbVotes + '```';
	let imgg = json.Poster;
        var webimage = await axios.get(imgg, {responseType: 'arraybuffer'})
        await message.sendMessage(Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, quoted: message.data, caption: msg})
	//await message.client.sendMessage(message.jid, imgg, MessageType.image, {mimetype: Mimetype.jpg, quoted: message.data });
	//await message.client.sendMessage(message.jid, msg, MessageType.text, { quoted: message.data });
}));
}

//-----------------------------------Anime/Show Search-----------------------------------------------------
Asena.addCommand({ pattern: 'anisearch ?(.*)', fromMe: false , desc: Lang.SHOW_DESC,  deleteCommand: false}, async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid, '```Give me a name😒```', MessageType.text, { quoted: message.data });

  await axios
      .get(`http://api.tvmaze.com/search/shows?q=${match[1]}`)
      .then(async (response) => {
        const {
          name,
	  genres,
         status,
	averageRuntime,
	premiered,
	ended,
	officialSite,
	summary,
        } = response.data[0].show
	const {
          average,
        } = response.data[0].show.rating
	 const {
          original,
        } = response.data[0].show.image
	
	const profileBuffer = await axios.get(original, {responseType: 'arraybuffer'})
        const msg = `*${"🎥Name"}*: ${name}\n\n*${"✍Status"}*: ${status}\n\n*${"🌀Genres"}*: ${genres}\n\n*${"⏳Average Runtime"}*: ${averageRuntime}\n\n*${"📆Started"}*: ${premiered}\n\n*${"📅Ended"}*: ${ended}\n\n*${"⭐Average Rating"}*: ${average}\n\n*${"📋Official Site"}*: ${officialSite}\n\n*${"📃Summary"}*: ${summary}`
       await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
          caption: msg,
        })
      })
      .catch(
        async (err) => await message.client.sendMessage(message.jid, '*Not found!!😕*', MessageType.text, { quoted: message.data }),
      )
  },
)

//----------------------------------Pro Things----------------------------------------

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
