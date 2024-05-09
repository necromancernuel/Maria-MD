const fs = require('fs');
const chalk = require('chalk');
require('dotenv').config();

//contact details
global.ownernumber = [ process.env.OWNER_NUMBER || "2348168689993"],
global.ownername = process.env.OWNER_NAME || "Emmy_Nuel",
global.ytname = "YT: AyushBotz.inc"
global.socialm = "GitHub: Ayushpandey023"
global.location = "Nigeria"

global.botname = process.env.BOTNAME || "𝐌𝐀𝐑𝐈𝐀-𝐌𝐃",//name of the bot

//sticker details
global.stickername = process.env.STICKER || "Emmy",
global.packname = 'Sticker By'
global.author = process.env.AUTHOR || "Nuel",
//console view/theme
global.themeemoji = '🧩'
global.wm = "Ayush botz inc."

//theme link
global.link = 'https://whatsapp.com/channel/0029VaImo5ZG3R3qjKOdyr1I'

//custom prefix
global.prefa = process.env.PREFIX || "."

//false=disable and true=enable
global.welcome = process.env.WELCOME || "false", //auto welcome
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = true//auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti212 = true //auto block +212
global.autoread_status = true //auto view status/story



//reply messages
global.mess = {
    done: '🍭 *Here you go* ',
    prem: '🍭 *this feature is reserved for premium users only*',
    admin: '🍭 *this feature is reserved for admins only*',
    botAdmin: '🍭 *this feature can only be used when the bot is a group admin* ',
    owner: '🍭 *this feature is reserved for the owner only*',
    group: '🍭 *this feature is exclusively for groups*',
    private: '🍭 *this feature is exclusively for private chats*',
    wait: '🍭 *in process...* ',    
    error: '🍭 *there seems to be an error!*',
}

module.exports = {
ownernumber: global.ownernumber,
ownername: global.ownername,
sessionId: process.env.id,
AUTO_BLOCK : process.env.PM_BLOCKER,
STATUS_SAVER : "true",
ANTI_BOT:"true",
}


global.thumb = fs.readFileSync('./Gallery/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
