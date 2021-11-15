
const Asena = require('../events');
const { MessageType } = require('@adiwajshing/baileys');
const got = require('got');
const Config = require('../config');
const axios = require('axios');
const { errorMessage, infoMessage } = require('../helpers');

const Language = require('../language');
const Lang = Language.getString('deviceinfo');



if (Config.WORKTYPE == 'private') {
	
Asena.addCommand({pattern: 'device ?(.*)', fromMe: true, desc: Lang.DEVICE , deleteCommand: false}, async (message, match) => {
	const url = `https://docs-jojo.herokuapp.com/api/gsm_arena?q=${match[1]}`;
	try {
		const response = await got(url);
    
		const json = JSON.parse(response.body);
		
		let msgs = '```';
	msgs +=	'⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍\n' + ' ```⚕️ Büññy®Bot Device Panel ⚕️```\n' + '⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n';
	msgs += '📱Name         : ' + json.title + '\n\n';
	msgs += '📅Released On  : ' + json.released + '\n\n';
	msgs += '📲Based On     : ' + json.os_version + '\n\n';
	msgs += '💽Rom          : ' + json.storage + '\n\n';
	msgs += '💾Ram          : ' + json.ram + 'GB'+'\n\n';
	msgs += '🔋Battery       : ' + json.battery + '\n\n';
	msgs += '💻Display Size : ' + json.display_size + '\n\n';
	msgs += '🖥Resolution    : ' + json.display_resolution + '\n\n';
	msgs += '📸Main Camera  : ' + json.camera_pixel + '\n\n';
	msgs += '🎥Video Reso   : ' + json.video_pixel + '\n\n';
	msgs += '🏋️Wgt & Thknes : ' + json.weight + '```';
    
		if (response.statusCode === 200) return await message.client.sendMessage(message.jid, msgs, MessageType.text);
	} catch {
		return await message.client.sendMessage(message.jid, Lang.NO_DEVICE, MessageType.text);
	}
});
}

else if (Config.WORKTYPE == 'public') {
	
Asena.addCommand({pattern: 'device ?(.*)', fromMe: false, desc: Lang.DEVICE , deleteCommand: false}, async (message, match) => {
	const url = `https://docs-jojo.herokuapp.com/api/gsm_arena?q=${match[1]}`;
	try {
		const response = await got(url);
    
		const json = JSON.parse(response.body);
		
		let msgs = '```';
	msgs +=	'⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍\n' + ' ```⚕️ Büññy®Bot Device Panel ⚕️```\n' + '⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n';
	msgs += '📱Name         : ' + json.title + '\n\n';
	msgs += '📅Released On  : ' + json.released + '\n\n';
	msgs += '📲Based On     : ' + json.os_version + '\n\n';
	msgs += '💽Rom          : ' + json.storage + '\n\n';
	msgs += '💾Ram          : ' + json.ram + 'GB'+'\n\n';
	msgs += '🔋Battery       : ' + json.battery + '\n\n';
	msgs += '💻Display Size : ' + json.display_size + '\n\n';
	msgs += '🖥Resolution    : ' + json.display_resolution + '\n\n';
	msgs += '📸Main Camera  : ' + json.camera_pixel + '\n\n';
	msgs += '🎥Video Reso   : ' + json.video_pixel + '\n\n';
	msgs += '🏋️Wgt & Thknes : ' + json.weight + '```';
    
    
		if (response.statusCode === 200) return await message.client.sendMessage(message.jid, msgs, MessageType.text);
	} catch {
		return await message.client.sendMessage(message.jid, Lang.NO_DEVICE, MessageType.text);
	}
});
	 Asena.addCommand({pattern: 'dehelp ?(.*)', fromMe: false, desc: Lang.DEVICEHELP }, (async (message, match) => {  
       
        await message.sendMessage('*CMND* \n .device\n *DESC* \n know details of a mobilephone\n *example:* .device rog 5\n\n *CMND* \n .rdmore\n *DESC* \n add readmore after give text\n *example:* .rdmore pinky\n\n *CMND* \n.brdmore\n *DESC* \n add readmore before given text\n *example:* .brdmore pinky\n\n *CMND* \n.bgm one \n .bgm two \n *DESC* \n will change the type of reply bgm \n *example:* .bgm one (.bgm one \n is the default bgm mode - to change that use .bgm two ) ', MessageType.text,{ quoted: message.data });
        
    }));
}

/*
//-----------------------------------MLBB Hero Search-----------------------------------------------------
Amdi.applyCMD({ pattern: 'heroml ?(.*)', fromMe: false , desc: Lang.SHOW_DESC,  deleteCommand: false}, async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid, '```Give me a Hero Name😒```', MessageType.text, { quoted: message.data });

  await axios
      .get(`https://docs-jojo.herokuapp.com/api/heroml?hero=${match[1]}`)
      .then(async (response) => {
        const {
          name,
	  quotes,
         role,
	speciality,
	laning_recommendation,
	release_date,
        } = response.data[0].result.hero
	const {
          movement_speed,
    physical_attack,
    magic_power,
    attack_speed,
    physical_defense,
    magic_defense,
    basic_atk_crit_rate,
    hp,
    mana,
    ability_crit_rate,
    hp_regen,
    mana_regen,
        } = response.data[0].result.hero.attributes
	 const {
          img,
        } = response.data[0].result.hero
	
	const profileBuffer = await axios.get(img, {responseType: 'arraybuffer'})
        const msg = `*${"🎥Name"}*: ${name}\n\n*${"✍Quotes"}*: ${quotes}\n\n*${"🌀Role"}*: ${role}\n\n*${"Speciality"}*: ${speciality}\n\n*${"Recommended Laning"}*: ${laning_recommendation}\n\n*${"📅Release Date"}*: ${release_date}\n\n*${"⭐Hero Attributes"}*\n*${"Movement Speed"}*: ${movement_speed}\n\n*${"Physical Attack"}*: ${physical_attack}\n\n*${"Magic Power"}*: ${magic_power}\n\n*${"Attack Speed"}*: ${attack_speed}\n\n*${"Physical Defense"}*: ${physical_defense}\n\n*${"Magic Defense"}*: ${magic_defense}\n\n*${"Basic Atk Crit Rate"}*: ${basic_atk_crit_rate}\n\n*${"HP"}*: ${hp}\n\n*${"Mana"}*: ${mana}\n\n*${"Ability Crit Rate"}*: ${ability_crit_rate}\n\n*${"Hp_Regen"}*: ${hp_regen}\n\n*${"Mana Regen"}*: ${mana_regen}`
       await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
          caption: msg,
        })
      })
      .catch(
        async (err) => await message.client.sendMessage(message.jid, '*Not found!!😕*', MessageType.text, { quoted: message.data }),
      )
  },
)
*/
