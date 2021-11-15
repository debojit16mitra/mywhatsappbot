const Amdi = require('../events');
const Bunny = require('../events');
const QueenAmdi = require('queenamdi-public-2');
const { MessageType } = require('@adiwajshing/baileys');
const got = require('got');
const Config = require('../config');
const axios = require('axios');
const { errorMessage, infoMessage } = require('../helpers');

const Language = require('../language');
const Lang = Language.getString('scrapers');



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
