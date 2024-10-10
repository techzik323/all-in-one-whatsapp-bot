const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="uwemdev@hotmail.com"
global.location="Nigeria,Akwaibom,Uyo."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Nigeria/Akwaibom/uyo";
global.github=process.env.GITHUB|| "https://github.com/uwemdev/all-in-one-whatsapp-bot";
global.gurl  =process.env.GURL  || "https://api.whatsapp.com/send?phone=2348110572387&text=Hi%20Uwem%2C";
global.website=process.env.GURL || "https://uwemdev.com" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://uwemdev.com/storage/home/about-file-1724092734.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Uwemdev" 


global.devs = "2348110572387" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "256751617788";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/w6ss4st/photo-2024-04-19-10-02-19.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,234xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,234xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_51_10_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgODQsXG4gICAgICAgIDQ0LFxuICAgICAgICA3OCxcbiAgICAgICAgODIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjExLFxuICAgICAgICA0NyxcbiAgICAgICAgODUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTUxLFxuICAgICAgICA3MCxcbiAgICAgICAgMTE2LFxuICAgICAgICA3MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk2LFxuICAgICAgICA1NixcbiAgICAgICAgNjUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjQwLFxuICAgICAgICA2MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzEsXG4gICAgICAgIDM3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODEsXG4gICAgICAgIDEyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDY3LFxuICAgICAgICA2MixcbiAgICAgICAgMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjAyLFxuICAgICAgICA1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTczLFxuICAgICAgICA4NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDExLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDk1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDUzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTU4LFxuICAgICAgICA0OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzksXG4gICAgICAgIDgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwNixcbiAgICAgICAgNzEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTUzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDgwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDM0LFxuICAgICAgICAyMTksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjM3LFxuICAgICAgICA0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0LFxuICAgICAgICAxMTksXG4gICAgICAgIDc1LFxuICAgICAgICA2OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyMixcbiAgICAgICAgNDUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTkzLFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDM1LFxuICAgICAgICA1NixcbiAgICAgICAgNTAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjE2LFxuICAgICAgICA4MixcbiAgICAgICAgMjU0LFxuICAgICAgICA4MCxcbiAgICAgICAgMjUzLFxuICAgICAgICA2OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDU5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQzLFxuICAgICAgICA1MyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxODYsXG4gICAgICAgIDE0LFxuICAgICAgICA4MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDk5LFxuICAgICAgICA0N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEwMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEwMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDMsXG4gICAgICAgIDMsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDg0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTc4LFxuICAgICAgICA2MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDMyLFxuICAgICAgICAyMTksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTAwLFxuICAgICAgICAzOCxcbiAgICAgICAgODgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjIzLFxuICAgICAgICAxODcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjAsXG4gICAgICAgIDExLFxuICAgICAgICAxMzksXG4gICAgICAgIDkwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDc2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDI5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEwLFxuICAgICAgICAyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxNixcbiAgICAgICAgOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDk1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE0MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQwLFxuICBcImFkdlNlY3JldEtleVwiOiBcInlXU0IzUUN3ZzdmbVlqZ3NWcnNDZHpObklPSHNzZ0l1RDBmZm15R0FJNVU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkxPUHhfNXBzVHJpb0dDQ29yLVRrcVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiODk4MzQwMTgtZTM3ZC00M2YxLWI3NmYtNTE2NTFmMjIwNWJhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDcwLFxuICAgICAgMjE1LFxuICAgICAgNzIsXG4gICAgICAxMzMsXG4gICAgICAyMDksXG4gICAgICAxMjUsXG4gICAgICAyNDQsXG4gICAgICA5MyxcbiAgICAgIDE0NixcbiAgICAgIDc3LFxuICAgICAgMzMsXG4gICAgICAyMDYsXG4gICAgICAyNTMsXG4gICAgICA5OCxcbiAgICAgIDUsXG4gICAgICAxMjgsXG4gICAgICA5MyxcbiAgICAgIDIzMyxcbiAgICAgIDU5LFxuICAgICAgNjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM1LFxuICAgICAgNjYsXG4gICAgICAyMixcbiAgICAgIDIyMCxcbiAgICAgIDE0NCxcbiAgICAgIDcwLFxuICAgICAgMjUxLFxuICAgICAgMTgyLFxuICAgICAgMTUyLFxuICAgICAgMjM5LFxuICAgICAgNTksXG4gICAgICA2NyxcbiAgICAgIDIyOSxcbiAgICAgIDIxOSxcbiAgICAgIDksXG4gICAgICA5MyxcbiAgICAgIDMsXG4gICAgICA1NSxcbiAgICAgIDE4MSxcbiAgICAgIDQ1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjRDMUZEUlJXXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTY3NTE2MTc3ODg6NjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE1ODg3NTYzODYxNjMwMjo2N0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPR0gvSlFDRU1tM243Z0dHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjlDWDQzd0xPK1EzOEdZKzRkLzVUdFlBYk9hcWl3cUIrQk1HZEtZL3I1MDg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiT1BDYkRwSHAzaERlUmxJb29kTkFTSUcxS2JVQlJQRExxQitobjcrbU45OTQ5L3hCV1pPMGdVUmJpN1FYQ2FvTkpOU2RibU5aQTdWbWF1ZGpLOUwvQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMVdVSU94b1FQOGRnTU90WnZKMFgwS3Y0dGNHVHIvMnhxWFRmendFWUtRSmlQVXM5SmU4UktFanN6dUdHN2l6WjA2T1pldURCM1kwOFBKa2luR1Z5aEE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU2NzUxNjE3Nzg4OjY3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA3OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI4NTY4MjY5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTGIrXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMYisuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJWcUUySXQ0cWZCT3E1TkdOYllSZm5WcVp0QW52VDdzNk11bllOOXpOZjI4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjU4MDg0NjU0NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyNTczODAzNzg3NlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "★彡UwemDev彡★",
  packname: process.env.PACK_NAME || "Sticker by",
  botname : process.env.BOT_NAME  || "ZIK BOT",
  ownername:process.env.OWNER_NAME|| "★ZIK TECH UG★",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
