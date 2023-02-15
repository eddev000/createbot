const {Telegraf} = require('telegraf')
const express = require('express')

const app = express()

const bot = new Telegraf('6021555812:AAGfPzafRVPVG__X8optHiMVMnSCWvbaxYk')


bot.command('/test', (ctx) => {
    ctx.reply('ok')
})


bot.on('video', ctx => {
    console.log(ctx.message)
    let fileLink = ctx.message.video.file_id
    ctx.reply(fileLink)

    ctx.telegram.getFileLink(fileLink)
    .then(res => {
        ctx.sendMessage(res.href)

    })
    .catch(err => {
        console.log(err)
    })  
})

app.get('/', (req, res) => {
    res.send('ok')
})

app.listen(5000, () => {
    console.log('ok')
    bot.launch()
})