/* Copyright (C) 2021 BunnyBot.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
*/

const bunny = require('../events');
const {MessageType, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const {execFile} = require('child_process');
const cwebp = require('cwebp-bin');
const Config = require('../config');
const Axios = require('axios');
const FormData = require('form-data')
const cheerio = require('cheerio')
let LOL = Config.WORKTYPE == 'public' ? false : true


const Language = require('../language');
const Lang = Language.getString('sticker');

// Video to sticker converter function
function webp2mp4File(path) {
    return new Promise(async (resolve, reject) => {
        const bodyForm = new FormData()
        bodyForm.append('new-image-url', '')
        bodyForm.append('new-image', fs.createReadStream(path))
        await Axios({
            method: 'post',
            url: 'https://s6.ezgif.com/webp-to-mp4',
            data: bodyForm,
            headers: {
                'Content-Type': `multipart/form-data boundary=${bodyForm._boundary}`
            }
        }).then(async ({ data }) => {
            const bodyFormThen = new FormData()
            const $ = cheerio.load(data)
            const file = $('input[name="file"]').attr('value')
            const token = $('input[name="token"]').attr('value')
            const convert = $('input[name="file"]').attr('value')
            const gotdata = {
                file: file,
                token: token,
                convert: convert
            }
            bodyFormThen.append('file', gotdata.file)
            bodyFormThen.append('token', gotdata.token)
            bodyFormThen.append('convert', gotdata.convert)
            await Axios({
                method: 'post',
                url: 'https://ezgif.com/webp-to-mp4/' + gotdata.file,
                data: bodyFormThen,
                headers: {
                    'Content-Type': `multipart/form-data boundary=${bodyFormThen._boundary}`
                }
            }).then(({ data }) => {
                const $ = cheerio.load(data)
                const result = 'https:' + $('div#output > p.outfile > video > source').attr('src')
                resolve({
                    status: true,
                    message: "Made by WhatsAsena",
                    result: result
                })
            }).catch(reject)
        }).catch(reject)
    })
}
// End


bunny.applyCMD({pattern: 'sticker$', fromMe: LOL, desc: Lang.STICKER_DESC,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {    

    if (message.reply_message === false) return await message.client.sendMessage(message.jid,Lang.NEED_REPLY, MessageType.text, {quoted: message.data});
        var downloading = await message.client.sendMessage(message.jid,Lang.DOWNLOADING,MessageType.text, {quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        if (message.reply_message.video === false && message.reply_message.image) {
            ffmpeg(location)
                .outputOptions(["-y", "-vcodec libwebp"])
                .videoFilters('scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1')
                .save('st.webp')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('st.webp'), MessageType.sticker, {quoted: message.data});
            });
    return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})

    }

    ffmpeg(location)
            .outputOptions(["-y", "-vcodec libwebp", "-lossless 1", "-qscale 1", "-preset default", "-loop 0", "-an", "-vsync 0", "-s 600x600"])
            .videoFilters('scale=600:600:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=600:600:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1')
            .save('sticker.webp')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker, {quoted: message.data});
            });
    return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
}));


bunny.applyCMD({pattern: 'sticvid$', fromMe: LOL, desc: Lang.ANI_STICK,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
    
    const msgid = message.jid
        if (message.reply_message === false) return await message.client.sendMessage(msgid, Lang.ANI_REPLY, MessageType.text, {quoted: message.data})
        await message.client.sendMessage(msgid, Lang.ANIMATE, MessageType.text, {quoted: message.data})
    const savedFilename = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
    });
    await webp2mp4File(savedFilename).then(async (rest) => {
        await Axios({ method: "GET", url: rest.result, responseType: "stream"}).then(({ data }) => {
            const saving = data.pipe(fs.createWriteStream('/root/mywhatsappbot/vstic.mp4')) //OI OI MEKA WENAS KRAN ROOT
            saving.on("finish", async () => {
                await message.client.sendMessage(msgid, fs.readFileSync('/root/mywhatsappbot/vstic.mp4'), MessageType.video, { mimetype: Mimetype.mp4, caption: Config.CAP, quoted: message.data })
                if (fs.existsSync(savedFilename)) fs.unlinkSync(savedFilename)
                if (fs.existsSync('/root/mywhatsappbot/vstic.mp4')) fs.unlinkSync('/root/mywhatsappbot/vstic.mp4')
            })
        })
    })
}));
