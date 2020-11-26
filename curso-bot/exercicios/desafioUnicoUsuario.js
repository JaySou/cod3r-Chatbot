const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

bot.start(ctx => {
    const from = ctx.update.message.from

    if(from.id === 781080402){
        ctx.reply('Ao seu dispor meu Mestre!')
    }
    else[
        ctx.reply('Sinto muito mas eu só falo com meu mestre!')
    ]
} )

bot.startPolling()
