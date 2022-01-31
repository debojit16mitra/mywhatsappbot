/* Copyright (C) 2021 BunnyBot.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
*/

const Amdi = require('../events');
const QueenAmdi = require('queenamdi-public-2');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const translatte = require('translatte');
const Config = require('../config');
const axios = require('axios')
/*
//============================== CURRENCY =============================================
const { exchangeRates } = require('exchange-rates-api');
const ExchangeRatesError = require('exchange-rates-api/src/exchange-rates-error.js')
//=====================================================================================
*/
//============================== TTS ==================================================
const fs = require('fs');
const https = require('https');
const googleTTS = require('google-translate-tts');
//=====================================================================================

//============================== YOUTUBE ==============================================
const ytdl = require('ytdl-core');
const ffmpeg = require('fluent-ffmpeg');
const yts = require( 'yt-search' )
const got = require("got");
const ID3Writer = require('browser-id3-writer');
const SpotifyWebApi = require('spotify-web-api-node');

const spotifyApi = new SpotifyWebApi({
    clientId: 'acc6302297e040aeb6e4ac1fbdfd62c3',
    clientSecret: '0e8439a1280a43aba9a5bc0a16f3f009'
});
//=====================================================================================

const Language = require('../language');
const Lang2 = Language.getString('chatbot'); //for chat_bot sleep
const Lang = Language.getString('scrapers');
const Glang = Language.getString('github');
const TKlang = Language.getString('tiktok');

const wiki = require('wikijs').default;
var gis = require('g-i-s');
const { BYE_LOGO } = require('../config');
let LOL = Config.WORKTYPE == 'public' ? false : true
//======================================heroku=========================================
const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: Config.HEROKU.API_KEY
});

let baseURI = '/apps/' + Config.HEROKU.APP_NAME;
//=====================================================================================

Amdi.applyCMD({ pattern: 'song ?(.*)', fromMe: LOL,  deleteCommand: false, desc: Lang.SONG_DESC}, (async (message, match) => {
if (Config.CHAT_BOT == 'true') {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_TEXT_SONG,MessageType.text, {quoted: message.data});   
    let arama = await yts(match[1]);
    arama = arama.all;
    if(arama.length < 1) return await message.client.sendMessage(message.jid,Lang.NO_RESULT,MessageType.text, {quoted: message.data});
    var downloading = await message.client.sendMessage(message.jid,Lang.DOWNLOADING_SONG,MessageType.text, {quoted: message.data});
  
    let title = arama[0].title.replace(' ', '+');
    let stream = ytdl(arama[0].videoId, {
        quality: 'highestaudio',
    });
    
    got.stream(arama[0].image).pipe(fs.createWriteStream(title + '.jpg'));
    ffmpeg(stream)
        .audioBitrate(320)
        .save('./' + title + '.mp3')
        .on('end', async () => {
            const writer = new ID3Writer(fs.readFileSync('./' + title + '.mp3'));
            writer.setFrame('TIT2', arama[0].title)
                .setFrame('TPE1', [arama[0].author.name])
                .setFrame('APIC', {
                    type: 3,
                    data: fs.readFileSync(title + '.jpg'),
                        description: arama[0].description
                });
            writer.addTag();
            
            if (Config.SONG_TYPE == 'document') {
                var uploading = await message.client.sendMessage(message.jid,Lang.UPLOADING_SONG,MessageType.text, {quoted: message.data});
                await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true});
                await message.client.sendMessage(message.jid,Buffer.from(writer.arrayBuffer), MessageType.document, {quoted: message.data, filename: title + '.mp3', mimetype: 'audio/mpeg'});
                return await message.client.deleteMessage(message.jid, {id: uploading.key.id, remoteJid: message.jid, fromMe: true})
            }
            else if (Config.SONG_TYPE == 'audio') {
                var uploading = await message.client.sendMessage(message.jid,Lang.UPLOADING_SONG,MessageType.text, {quoted: message.data});
                await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true});
                await message.client.sendMessage(message.jid,Buffer.from(writer.arrayBuffer), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
                return await message.client.deleteMessage(message.jid, {id: uploading.key.id, remoteJid: message.jid, fromMe: true})
            }
        });
}
  else if (Config.CHAT_BOT == 'false') {
 await message.client.sendMessage(message.jid, '\n👸🏻 ' + Lang2.BOT + Lang2.NOT_AVAILABLE2 , MessageType.text,{quoted: message.data});
}
}));
  

Amdi.applyCMD({ pattern: 'video ?(.*)', fromMe: LOL,  deleteCommand: false, desc: Lang.VIDEO_DESC, dontAddCommandList: true}, (async (message, match) => {
if (Config.CHAT_BOT == 'true') {  
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_VIDEO,MessageType.text, {quoted: message.data});    
    if (match[1].includes('shorts')) return await message.client.sendMessage(message.jid,Lang.SHORTS,MessageType.text, {quoted: message.data});

    var VID = '';
    try {
        if (match[1].includes('watch')) {
            var tsts = match[1].replace('watch?v=', '')
                var alal = tsts.split('/')[3]
                VID = alal
        } else {     
                VID = match[1].split('/')[3]
        }
    } catch {
            return await message.client.sendMessage(message.jid,Lang.NO_RESULT,MessageType.text, {quoted: message.data});
    }
    var downloading = await message.client.sendMessage(message.jid,Lang.DOWNLOADING_VIDEO,MessageType.text, {quoted: message.data});
  
    var yt = ytdl(VID, {filter: format => format.container === 'mp4' && ['720p', '480p', '360p', '240p', '144p'].map(() => true)});
        yt.pipe(fs.createWriteStream('./' + VID + '.mp4'));
  
    yt.on('end', async () => {
        var uploading = await message.client.sendMessage(message.jid,Lang.UPLOADING_VIDEO,MessageType.text, {quoted: message.data});
        await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true});
        await message.client.sendMessage(message.jid,fs.readFileSync('./' + VID + '.mp4'), MessageType.video, {mimetype: Mimetype.mp4, quoted: message.data, caption: Config.CAP });
        return await message.client.deleteMessage(message.jid, {id: uploading.key.id, remoteJid: message.jid, fromMe: true})
    });
    }
  else if (Config.CHAT_BOT == 'false') {
 await message.client.sendMessage(message.jid, '\n👸🏻 ' + Lang2.BOT + Lang2.NOT_AVAILABLE2 , MessageType.text,{quoted: message.data});
}
}));


Amdi.applyCMD({pattern: 'yt ?(.*)', fromMe: LOL,  deleteCommand: false, desc: Lang.YT_DESC, dontAddCommandList: true}, (async (message, match) => { 
if (Config.CHAT_BOT == 'true') {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text);    
    var searching = await message.client.sendMessage(message.jid,Lang.GETTING_VIDEOS,MessageType.text, {quoted: message.data});

    try {
        var arama = await yts(match[1]);
    } catch {
        return await message.client.sendMessage(message.jid,Lang.NOT_FOUND,MessageType.text);
    }
    
    var ytgot = '';
    arama.all.map((video) => {
        ytgot += '▶️ *' + video.title + '* - ' + video.url + '\n\n'
    });

    await message.client.sendMessage(message.jid, '*❖ Büññy®Bot Search Engine ❖*\n' + Lang.YTS + '\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n\n' + ytgot,MessageType.text, {quoted: message.data});
    return await message.client.deleteMessage(message.jid, {id: searching.key.id, remoteJid: message.jid, fromMe: true})
}
  else if (Config.CHAT_BOT == 'false') {
 await message.client.sendMessage(message.jid, '\n👸🏻 ' + Lang2.BOT + Lang2.NOT_AVAILABLE2 , MessageType.text,{quoted: message.data});
}
}));


Amdi.applyCMD({ pattern: 'ig ?(.*)', fromMe: LOL,  deleteCommand: false, desc: Lang.IG_DESC}, (async (message, match) => {
if (Config.CHAT_BOT == 'true') {
    const userName = match[1]

    if (!userName) return await message.client.sendMessage(message.jid,Lang.NEED_WORD,MessageType.text, {quoted: message.data});

    var payload = await QueenAmdi.insta(userName)

    const profileBuffer = await axios.get(payload.link, {responseType: 'arraybuffer'})
    var downloading = await message.client.sendMessage(message.jid,Lang.DL_VID,MessageType.text, {quoted: message.data});

    var uploading = await message.client.sendMessage(message.jid,Lang.UP_VID,MessageType.text, {quoted: message.data});
    await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, {quoted: message.data, caption: Config.CAP })  
    return await message.client.deleteMessage(message.jid, {id: uploading.key.id, remoteJid: message.jid, fromMe: true})
    }
  else if (Config.CHAT_BOT == 'false') {
 await message.client.sendMessage(message.jid, '\n👸🏻 ' + Lang2.BOT + Lang2.NOT_AVAILABLE2 , MessageType.text,{quoted: message.data});
}
}));

/* NOT READY
Amdi.applyCMD({ pattern: 'fb ?(.*)', fromMe: LOL,  deleteCommand: false, desc: Lang.FBDESC}, (async (message, match) => {

    const userName = match[1]

    if (!userName) return await message.client.sendMessage(message.jid,Lang.NEED_WORD,MessageType.text, {quoted: message.data});

    var payload = await QueenAmdi.fb(userName)

    const profileBuffer = await axios.get(payload.video, {responseType: 'arraybuffer'})
    var downloading = await message.client.sendMessage(message.jid,Lang.DL_VID,MessageType.text, {quoted: message.data});

    var uploading = await message.client.sendMessage(message.jid,Lang.UP_VID,MessageType.text, {quoted: message.data});
    await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, {caption: Config.CAP, quoted: message.data, thumbnail: thumb}) 
    return await message.client.deleteMessage(message.jid, {id: uploading.key.id, remoteJid: message.jid, fromMe: true})
}));
*/

Amdi.applyCMD({pattern: 'trt(?: |$)(\\S*) ?(\\S*)', desc: Lang.TRANSLATE_DESC, usage: Lang.TRANSLATE_USAGE, fromMe: LOL}, (async (message, match) => {
if (Config.CHAT_BOT == 'true') {
    if (!message.reply_message) {
            return await message.client.sendMessage(message.jid,Lang.NEED_REPLY,MessageType.text,{quoted: message.data});
        }

    ceviri = await translatte(message.reply_message.message, {from: match[1] === '' ? 'auto' : match[1], to: match[2] === '' ? Config.LANG : match[2]}, {quoted: message.data});
    if ('text' in ceviri) {
        return await message.reply('*▶️ ' + Lang.LANG + ':* ```' + (match[1] === '' ? 'auto' : match[1]) + '```\n'
            + '*◀️ ' + Lang.FROM + '*: ```' + (match[2] === '' ? Config.LANG : match[2]) + '```\n'
            + '*🔎 ' + Lang.RESULT + ':*\n ```' + ceviri.text + '```');
    } else {
        return await message.client.sendMessage(message.jid,Lang.TRANSLATE_ERROR,MessageType.text, {quoted: message.data})
    }
 }
  else if (Config.CHAT_BOT == 'false') {
 await message.client.sendMessage(message.jid, '\n👸🏻 ' + Lang2.BOT + Lang2.NOT_AVAILABLE2 , MessageType.text,{quoted: message.data});
}
}));


Amdi.applyCMD({pattern: 'spdf ?(.*)', fromMe: LOL,  deleteCommand: false, desc: Lang.SPDF_DESC, dontAddCommandList: true }, (async (message, match) => {
if (Config.CHAT_BOT == 'true') {
    if (match[1] === '') return await message.sendMessage(Lang.SPDF_LINK);
    
    var webimage = await axios.get(`https://api.html2pdf.app/v1/generate?url=${match[1]}&apiKey=begC4dFAup1b8LyRXxAfjetfqDg2uYx8PWmh9YJ59tTZXiUyh2Vs72HdYQB68vyc`, { responseType: 'arraybuffer' })
    
    var downloading = await message.client.sendMessage(message.jid,Lang.SPDF_PROC,MessageType.text, {quoted: message.data});
    
    await message.sendMessage(Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf}, {quoted: message.data})
    return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
}
  else if (Config.CHAT_BOT == 'false') {
 await message.client.sendMessage(message.jid, '\n👸🏻 ' + Lang2.BOT + Lang2.NOT_AVAILABLE2 , MessageType.text,{quoted: message.data});
}
}));

/*
Amdi.applyCMD({pattern: 'currency(?: ([0-9.]+) ([a-zA-Z]+) ([a-zA-Z]+)|$|(.*))', fromMe: LOL,  deleteCommand: false, desc: Lang.CURRENCY_DESC}, (async (message, match) => {

    if(match[1] === undefined || match[2] == undefined || match[3] == undefined) {
        return await message.client.sendMessage(message.jid,Lang.CURRENCY_ERROR,MessageType.text, {quoted: message.data});
    }
    let opts = {
        amount: parseFloat(match[1]).toFixed(2).replace(/\.0+$/,''),
        from: match[2].toUpperCase(),
        to: match[3].toUpperCase()
    }
    try {
        result = await exchangeRates().latest().symbols([opts.to]).base(opts.from).fetch()
        result = parseFloat(result).toFixed(2).replace(/\.0+$/,'')
        await message.reply(`\`\`\`${opts.amount} ${opts.from} = ${result} ${opts.to}\`\`\``)
    }
    catch(err) {
        if (err instanceof ExchangeRatesError) 
            await message.client.sendMessage(message.jid,Lang.INVALID_CURRENCY,MessageType.text, {quoted: message.data})
        else {
            await message.client.sendMessage(message.jid,Lang.UNKNOWN_ERROR,MessageType.text)
            console.log(err)
        }
    }
}));
*/  

Amdi.applyCMD({pattern: 'tts (.*)', fromMe: LOL,  deleteCommand: false, desc: Lang.TTS_DESC}, (async (message, match) => {
if (Config.CHAT_BOT == 'true') {
    if(match[1] === undefined || match[1] == "")
        return;
    
    let 
        LANG = Config.LANG.toLowerCase(),
        ttsMessage = match[1],
        SPEED = 1.0

    if(langMatch = match[1].match("\\{([a-z]{2})\\}")) {
        LANG = langMatch[1]
        ttsMessage = ttsMessage.replace(langMatch[0], "")
    } 
    if(speedMatch = match[1].match("\\{([0].[0-9]+)\\}")) {
        SPEED = parseFloat(speedMatch[1])
        ttsMessage = ttsMessage.replace(speedMatch[0], "")
    }
    
    var buffer = await googleTTS.synthesize({
        text: ttsMessage,
        voice: LANG
    });
    await message.client.sendMessage(message.jid,buffer, MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: true});
 }
  else if (Config.CHAT_BOT == 'false') {
 await message.client.sendMessage(message.jid, '\n👸🏻 ' + Lang2.BOT + Lang2.NOT_AVAILABLE2 , MessageType.text,{quoted: message.data});
}
}));


Amdi.applyCMD({pattern: 'wiki ?(.*)', fromMe: LOL,  deleteCommand: false, desc: Lang.WIKI_DESC, dontAddCommandList: true}, (async (message, match) => { 
if (Config.CHAT_BOT == 'true') {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text);    
    var reply = await message.client.sendMessage(message.jid,Lang.SEARCHING,MessageType.text,{quoted: message.data});

    var arama = await wiki({ apiUrl: 'https://' + Config.LANG + '.wikipedia.org/w/api.php' })
        .page(match[1]);

    var info = await arama.rawContent();
    await message.client.sendMessage(message.jid, info, MessageType.text, {quoted: message.data});
    return await message.client.deleteMessage(message.jid, {id: reply.key.id, remoteJid: message.jid, fromMe: true})
}
  else if (Config.CHAT_BOT == 'false') {
 await message.client.sendMessage(message.jid, '\n👸🏻 ' + Lang2.BOT + Lang2.NOT_AVAILABLE2 , MessageType.text,{quoted: message.data});
}
}));


Amdi.applyCMD({pattern: 'img ?(.*)', fromMe: LOL,  deleteCommand: false, desc: Lang.IMG_DESC, dontAddCommandList: true}, (async (message, match) => { 
if (Config.CHAT_BOT == 'true') {    
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text,{quoted: message.data});
    gis(match[1], async (error, result) => {
        for (var i = 0; i < (result.length < 5 ? result.length : 5); i++) {
            var get = got(result[i].url, {https: {rejectUnauthorized: false}});
            var stream = get.buffer();
                
            stream.then(async (image) => {
                await message.client.sendMessage(message.jid,image, MessageType.image);
            });
        }

        var reply = await message.client.sendMessage(message.jid,Lang.IMG.format((result.length < 5 ? result.length : 5), match[1]),MessageType.text, {quoted: message.data});
        return await message.client.deleteMessage(message.jid, {id: reply.key.id, remoteJid: message.jid, fromMe: true})
    });
 }
  else if (Config.CHAT_BOT == 'false') {
 await message.client.sendMessage(message.jid, '\n👸🏻 ' + Lang2.BOT + Lang2.NOT_AVAILABLE2 , MessageType.text,{quoted: message.data});
}
}));


Amdi.applyCMD({pattern: 'quote ?(.*)', fromMe: LOL,  deleteCommand: false, desc: Lang.QUOTE_DESC, dontAddCommandList: true}, async (message, match) => {
if (Config.CHAT_BOT == 'true') {       
    if (match[1] === 'xx') return await message.reply(Lang.NEED_LOCATIONA);
    const url = `https://api.quotable.io/random`;
    try {
        const response = await got(url);
        const json = JSON.parse(response.body);
        if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '*📌 ' + Lang.QUOTE +'* ```' + json.content + '```\n\n' +
        '*✒️ ' + Lang.AUTHOR +'* ```' + json.author+ '```\n', MessageType.text, {quoted: message.data});
    } catch {
        return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDA, MessageType.text, {quoted: message.data});
    }
}
  else if (Config.CHAT_BOT == 'false') {
 await message.client.sendMessage(message.jid, '\n👸🏻 ' + Lang2.BOT + Lang2.NOT_AVAILABLE2 , MessageType.text,{quoted: message.data});
}
});


Amdi.applyCMD({pattern: 'wame ?(.*)', fromMe: LOL,  deleteCommand: false, desc: Lang.WAME_DESC, dontAddCommandList: true}, (async (message, match) => {    
    if (message.reply_message !== false) {
        await message.client.sendMessage(message.jid, Lang.WAME.format(message.reply_message.jid.split('@')[0], message.reply_message.jid.replace('@s.whatsapp.net', ' ')), MessageType.text, {
                quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}
        });
    } else if (message.mention !== false) {
        message.mention.map(async user => {
            await message.client.sendMessage(message.jid, Lang.WAME.format(user.split('@')[0], user.replace('@s.whatsapp.net', ' ')), {quoted: message.data}, MessageType.text, {
                contextInfo: {mentionedJid: [user.replace('c.us', 's.whatsapp.net')]}
            }); 
        });
    } else {
        await message.client.sendMessage(message.jid, Lang.NEED_UWONG, MessageType.text, {quoted: message.data});
    }
}));

/*
Amdi.applyCMD({ pattern: 'github ?(.*)', fromMe: LOL,  deleteCommand: false, desc: Glang.GİTHUB_DESC, dontAddCommandList: true }, async (message, match) => {

    const userName = match[1]
 
    if (userName === '') return await message.client.sendMessage(message.jid, Glang.REPLY, MessageType.text, {quoted: message.data})

    var payload = await QueenAmdi.github(userName)

            const githubscrap = await axios.get(payload.avatar,{responseType: 'arraybuffer'})

            const msg = `*${Glang.USERNAME}* ${payload.nama} \n*${Glang.NAME}* ${payload.f_name} \n*${Glang.FOLLOWERS}* ${payload.followers} \n*${Glang.FOLLOWİNG}* ${payload.following} \n*${Glang.BİO}* ${payload.bio} \n*${Glang.REPO}* ${payload.public_repos} \n*${Glang.GİST}* ${payload.public_gists} \n*${Glang.LOCATİON}* ${payload.location} \n*${Glang.MAİL}* ${payload.email} \n*${Glang.BLOG}* ${payload.blog} \n*${Glang.COMPANY}* ${payload.ty} \n*${Glang.HİRE}* ${payload.hireable === "true" ? Glang.HİRE_TRUE : Glang.HİRE_FALSE} \n*${Glang.JOİN}* ${payload.joined_on} \n*${Glang.UPDATE}* ${payload.last_updated} \n*${Glang.URL}* ${payload.url}`

            await message.sendMessage(Buffer.from(githubscrap.data), MessageType.image, { 
              caption: msg,
            })
})
*/


/*
Amdi.applyCMD({ pattern: 'tk ?(.*)', fromMe: LOL,  deleteCommand: false, desc: TKlang.TK_DESC }, async (message, match) => {

    const userName = match[1]
 
    if (userName === '') return await message.client.sendMessage(message.jid, TKlang.REPLY, MessageType.text, {quoted: message.data})

    var payload = await QueenAmdi.tiktok_user(userName)

    const tkscrap = await axios.get(payload.pic,{responseType: 'arraybuffer'})

    const msg = `*${TKlang.USERNAME}* ${payload.unama} \n\n*${TKlang.NAME}* ${payload.nname} \n\n*${TKlang.BIO}*\n${payload.bio_data} \n\n*${TKlang.FOLLOWERS}* ${payload.fol_s} \n\n*${TKlang.FOLLOWING}* ${payload.fol_ing} \n\n*${TKlang.LIKES}* ${payload.l_count} \n\n*${TKlang.VIDEOS}* ${payload.vid_count} \n\n`

    await message.sendMessage(Buffer.from(tkscrap.data), MessageType.image, {caption: msg})
})
*/
