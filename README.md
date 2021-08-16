# aoi.js Bot Template

This repository contains everything on how to get started with a new aoi.js bot.
> You should have aoi.js installed. To do this, type `npm install aoi.js` into the terminal. (If you are using Glitch or Replit, it should automatically get installed.)

> Important Note: You should change the package.json file depending on what the latest version of aoi.js and dbdjs.db are.

# How to Use

## Bot Token
Place your bot's token in the following spot:
```
const bot = new Aoijs.Bot({
	token: 'YOUR BOT TOKEN HERE',
	prefix: '!'
})
```
> If your code is going to be public (for example replit), you should use .env to hide your token.

## Bot Prefix

```
const bot = new Aoijs.Bot({
	token: '',
	prefix: [`$getServerVar[prefix]`,  '<@$clientID>',  '<@!$clientID>'],
})
```
This allows for mentioning the bot to work as a prefix too. You can remove it if you want. To change the default prefix, go to index.js and find:
```
bot.variables({
	prefix: 'YOUR PREFIX HERE'
})
```

## Bot Status
For A Single Status:
```
bot.status({
	status: 'online', // options: online, idle, dnd, invisible
	type: 'PLAYING', // options: WATCHING, PLAYING, LISTENING, COMPETING, STREAMING (if you choose streaming, you can also add the url: '' property)
	text: `on $serverCount servers` //Whatever text you want, you can use $serverCount and $allMembersCount too.
})
```
For Multiple Statuses:
`time` is how long you want each status to be for until it switches
```
bot.status({
	status: 'online',
	type: 'PLAYING',
	text: `on $serverCount servers`,
	time: 10
})

bot.status({
	status: 'online',
	type: 'WATCHING',
	text: `Im alive!`,
	time: 10
})
```
## Variables
Variables are very simple, just go to index.js and in `bot.variables` add them in the format `name: value`. Example:
```
bot.variables({
	prefix: '!',
	money: 0,
	name: 'KOOL',
	// etc...
})
```


## Creating Commands

Inside of the `commands` folder, create a new file with any name (make sure you add .js at the end). Files can be located inside sub-folders as well if you want to stay organized. I will be making a ping command as an example.
```
module.exports = {
	name: 'ping', //Name = command name
	aliases: ['pong', 'botping'], // Other names of the command
	code: `Pong! - $botPingms` //The actual code of the command
}
```


## Pre-Made Commands

I have already created a ping command and set-prefix command as a basis. Feel free to edit them or delete them if you wish.
