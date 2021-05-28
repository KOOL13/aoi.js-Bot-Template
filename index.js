//Make sure to check the README.md for other examples/usage

const Aoijs = require("aoi.js")
const bot = new aoijs.Bot({
  token: 'YOUR BOT TOKEN HERE',
  prefix: [`$getServerVar[prefix]`, '<@$clientID>', '<@!$clientID>'], // The server prefix, and mentioning the bot will both work as a prefix
  mobile: false //Whether or not the bot has a mobile status
})

// Callbacks
bot.onMessage({
  guildOnly: false, // Whether or not commands work in DMs
  respondToBots: false, //Whether or not the bot will respond to other bots
})

// Command Handler
bot.loadCommands('./commands')

//Bot Status (For more info check README)
bot.status({
  status: 'online', // options: online (if want mobile status, check above), idle, dnd, invisible 
  type: 'PLAYING', // options: WATCHING, PLAYING, LISTENING, COMPETING, STREAMING (if you choose streaming, you can also add the url: '' property)
  text: `on $serverCount servers`
})

// Variables
bot.variables({
  prefix: '!'
})
