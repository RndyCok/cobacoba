import { promises } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'
import os from 'os'
import fs from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, args, command }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
 await conn.sendButton(m.chat, `꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ `,wm + '\n\n' + botdate, sc, [['THNKS FANGZ','Ok']], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: botclick,
                        body: 'Script Click di sini',          previewType: 0,
                        sourceUrl: linksc
                      }}
})
}


handler.help = ['sc','script']
handler.tags = ['info']
handler.command =  /^(sc|script)$/i

handler.register = true
handler.premium = false
handler.limit = true

export default handler