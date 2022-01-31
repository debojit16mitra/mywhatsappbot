/* Copyright (C) 2021 BunnyBot.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
*/

//Basic requirements
const bunny = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const got = require("got");
const fs = require('fs');

// Config Checker
const Config = require('../config');

//Language
const Language = require('../language');
const LANG = Language.getString('information');

if (Config.WORKTYPE == 'private') {
  bunny.applyCMD({pattern: 'covid ?(.*)', fromMe: true, desc: LANG.COVID_DESC,  deleteCommand: false}, async (message, match) => {
    if (match[1] === '') return await message.reply(LANG.NEED_CON);
      const url = `https://coronavirus-19-api.herokuapp.com/countries/${match[1]}`;
            const response = await got(url);
            const jsun = JSON.parse(response.body);
            await message.client.sendMessage(message.jid, fs.readFileSync("/root/mywhatsappbot/media/gif/earth.mp4"), MessageType.video, {mimetype: Mimetype.gif, quoted: message.data, caption: LANG.COUNTRY + jsun.country + '\n\n' + LANG.CASES + jsun.cases + '\n' + LANG.TCASES + jsun.todayCases + '\n' + LANG.DEATHS + jsun.deaths + '\n' + LANG.TDEATHS + jsun.todayDeaths + '\n' + LANG.RECO + jsun.recovered + '\n' + LANG.CRIT + jsun.critical + '\n' + LANG.TEST + jsun.totalTests });
  });
}

else if (Config.WORKTYPE == 'public') {
  bunny.applyCMD({pattern: 'covid ?(.*)', fromMe: false, desc: LANG.COVID_DESC}, async (message, match) => {
    if (match[1] === '') return await message.reply(LANG.NEED_CON);
      const url = `https://coronavirus-19-api.herokuapp.com/countries/${match[1]}`;
            const response = await got(url);
            const jsun = JSON.parse(response.body);
            await message.client.sendMessage(message.jid, fs.readFileSync("/root/mywhatsappbot/media/gif/earth.mp4"), MessageType.video, {mimetype: Mimetype.gif, quoted: message.data, caption: LANG.COUNTRY + jsun.country + '\n\n' + LANG.CASES + jsun.cases + '\n' + LANG.TCASES + jsun.todayCases + '\n' + LANG.DEATHS + jsun.deaths + '\n' + LANG.TDEATHS + jsun.todayDeaths + '\n' + LANG.RECO + jsun.recovered + '\n' + LANG.CRIT + jsun.critical + '\n' + LANG.TEST + jsun.totalTests });
  });
}
