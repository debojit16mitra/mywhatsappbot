const bunny = require('../events');
const Config = require('../config');
const {MessageType} = require('@adiwajshing/baileys');

const Language = require('../language');
const Lang = Language.getString('all_need');

let hel = '⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍\n' + '```⚕️ Büññy®Bot Help Panel ⚕️```\n' + '⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍\n';
hel += '*🤖Command:* ```.gdrive```\n*📙Description:*' + ' ```Google Drive Limit Bypass.```\n\n';
hel += '*🤖Command:* ```.spdf```\n*📙Description:*' + ' ```Converts a Site into PDF.```\n\n';
hel += '*🤖Command:* ```.tts```\n*📙Description:*' + ' ```It translates words into voice messages.```\n\n';
hel += '*🤖Command:* ```.wiki```\n*📙Description:*' + ' ```Search Wikipedia.```\n\n';
hel += '*🤖Command:* ```.img```\n*📙Description:*' + ' ```Downloading google images.```\n\n';
hel += '*🤖Command:* ```.quote```\n*📙Description:*' + ' ```It Sends Random Quote.```\n\n';
hel += '*🤖Command:* ```.wame```\n*📙Description:*' + ' ```Get your Link for your Whatsapp Number```\n\n';
hel += '*🤖Command:* ```.compli```\n*📙Description:*' + ' ```Get a compliment.```\n\n';
hel += '*🤖Command:* ```.mp4audio```\n*📙Description:*' + ' ```Convert mp4 into mp3.```\n\n';
hel += '*🤖Command:* ```.imagesticker```\n*📙Description:*' + ' ```Convert sticker into an image.```\n\n';
hel += '*🤖Command:* ```.device```\n*📙Description:*' + ' ```Get Any Smartphone Details.```\n\n';
hel += '*🤖Command:* ```.qr```\n*📙Description:*' + ' ```It converts text to QR code.```\n\n';
hel += '*🤖Command:* ```.gaymeter```\n*📙Description:*' + ' ```Measures the Percentage of GAY-NESS.```\n\n';
hel += '*🤖Command:* ```.effectimg```\n*📙Description:*' + ' ```A Set of Commands for Converting Text to Effect and Themed Images.```\n\n';
hel += '*🤖Command:* ```.insult ```\n*📙Description:*' + ' ```Gives an evil insult.```\n\n';
hel += '*🤖Command:* ```.findip```\n*📙Description:*' + ' ```Gives details about given IP Address.```\n\n';
hel += '*🤖Command:* ```.lyric```\n*📙Description:*' + ' ```Will give you the Lyrics of the asked song.```\n\n';
hel += '*🤖Command:* ```.ocr```\n*📙Description:*' + ' ```Scan your picture and gives the text.```\n\n';
hel += '*🤖Command:* ```.removebg```\n*📙Description:*' + ' ```Removes the Background of provided Image.```\n\n';
hel += '*🤖Command:* ```.roll```\n*📙Description:*' + ' ```Rolls a dice randomly.```\n\n';
hel += '*🤖Command:* ```.ss ```\n*📙Description:*' + ' ```Take Screenshot of the provided Link or Website```\n\n';
hel += '*🤖Command:* ```.sticker```\n*📙Description:*' + ' ```Make Sticker of the replied Image. Reply to an image.```\n\n';
hel += '*🤖Command:* ```.carbon```\n*📙Description:*' + ' ```Convert text into Random Carbon effect.```\n\n';
hel += '*🤖Command:* ```.sticvid```\n*📙Description:*' + ' ```Converts animated stickers to video. Reply to an image.```\n\n';


if (Config.LANG == 'EN') {
    if (Config.WORKTYPE == 'private') {
        bunny.applyCMD({pattern: 'extra', fromMe: true,  deleteCommand: false, desc: Lang.EXTRA_DESC}, (async (message, match) => {    
            await message.client.sendMessage(message.jid,hel, MessageType.text,{quoted: message.data});
        }));
    }

    else if (Config.WORKTYPE == 'public') {
        bunny.applyCMD({pattern: 'extra', fromMe: false, desc: Lang.EXTRA_DESC}, (async (message, match) => {    
            await message.client.sendMessage(message.jid,hel, MessageType.text,{quoted: message.data});
        }));
    }
}

