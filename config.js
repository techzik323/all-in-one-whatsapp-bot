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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_43_09_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA1MCxcbiAgICAgICAgMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAzMixcbiAgICAgICAgMjQxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDcyLFxuICAgICAgICAyNDksXG4gICAgICAgIDE2NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTg1LFxuICAgICAgICA2NixcbiAgICAgICAgOTMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjM1LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNjksXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjE5LFxuICAgICAgICAyNCxcbiAgICAgICAgMixcbiAgICAgICAgMzksXG4gICAgICAgIDEyMixcbiAgICAgICAgNjksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDkyLFxuICAgICAgICA2MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMixcbiAgICAgICAgMTk0LFxuICAgICAgICAxOTksXG4gICAgICAgIDI4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTY4LFxuICAgICAgICA3OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDU2LFxuICAgICAgICA4NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5LFxuICAgICAgICA3LFxuICAgICAgICA0LFxuICAgICAgICAxODUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTE1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDMsXG4gICAgICAgIDY5LFxuICAgICAgICAxNSxcbiAgICAgICAgODksXG4gICAgICAgIDU5LFxuICAgICAgICAxNyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMjcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjUwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDUyLFxuICAgICAgICAxODYsXG4gICAgICAgIDc3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjM5LFxuICAgICAgICA5NCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDYsXG4gICAgICAgIDYyLFxuICAgICAgICAxODksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDYxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDQ2LFxuICAgICAgICA1OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDksXG4gICAgICAgIDIwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDQwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjUxLFxuICAgICAgICA5NSxcbiAgICAgICAgMjU0LFxuICAgICAgICA3OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyLFxuICAgICAgICAyMzksXG4gICAgICAgIDg1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDExLFxuICAgICAgICAxMTksXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTIwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDU5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIwLFxuICAgICAgICA1NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDUxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODUsXG4gICAgICAgIDcwLFxuICAgICAgICA2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTE5LFxuICAgICAgICA1NixcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDksXG4gICAgICAgIDE4NixcbiAgICAgICAgMzgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDYzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTY3LFxuICAgICAgICA2MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTk4LFxuICAgICAgICA1MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDM1LFxuICAgICAgICAxOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMzksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTksXG4gICAgICAgIDM2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDI4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjAwLFxuICAgICAgICA0MSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNzksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDkzLFxuICAgICAgICAxODMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMzksXG4gICAgICAgIDY5LFxuICAgICAgICA4NCxcbiAgICAgICAgNzksXG4gICAgICAgIDE0MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMzUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwielhhL3E1N0pVRXBXSDd2ODIwVjRzRThpaUpGVEc3WWNVM0FrYk41UzdkMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTY3NTE2MTc3ODhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkIyMEYyQkFBQ0YwRUNGMDdCNTZBMTk5NkM0NkVBMTg5XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyNzQ1NTQwMlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJnSFJfcloyVVEwcXRBRkdnNDJ5LXpnXCIsXG4gIFwicGhvbmVJZFwiOiBcImEyNzA4MzU1LTgzZmQtNDZkYS04ODQwLWJmNmRiODMyNzJlMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5LFxuICAgICAgNTQsXG4gICAgICAxNTgsXG4gICAgICA0OSxcbiAgICAgIDIwNyxcbiAgICAgIDg3LFxuICAgICAgMjAzLFxuICAgICAgOTQsXG4gICAgICAyNDIsXG4gICAgICAxMDYsXG4gICAgICAzLFxuICAgICAgMTQ5LFxuICAgICAgMjMxLFxuICAgICAgOTksXG4gICAgICAxODgsXG4gICAgICA4NCxcbiAgICAgIDIwOCxcbiAgICAgIDMxLFxuICAgICAgMTA2LFxuICAgICAgMjQ2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDkwLFxuICAgICAgMTUyLFxuICAgICAgMTY1LFxuICAgICAgMTcwLFxuICAgICAgMjEyLFxuICAgICAgMjM1LFxuICAgICAgMjEsXG4gICAgICAzOCxcbiAgICAgIDE4MyxcbiAgICAgIDIxNCxcbiAgICAgIDEzNyxcbiAgICAgIDYyLFxuICAgICAgMjA3LFxuICAgICAgNjYsXG4gICAgICAyNCxcbiAgICAgIDEyNixcbiAgICAgIDEzNixcbiAgICAgIDI0NyxcbiAgICAgIDQxLFxuICAgICAgMjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWVZYQzZTMVlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1Njc1MTYxNzc4ODo1OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTU4ODc1NjM4NjE2MzAyOjU4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ051SC9KUUNFSi9CMjdjR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiOUNYNDN3TE8rUTM4R1krNGQvNVR0WUFiT2FxaXdxQitCTUdkS1kvcjUwOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJpWW5ML2plQTlRc2g0ZmFla3Ziek44MGpjYm8vQmp0QnFUK3NlQmpFZWtqODJUaEFGUEpDTFNnUit5V2hnSHBpMFg0bVI2ZmRhSGEwdEtFOEN2UGNCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI3ayt6UmJuODRuVHVYbC8zV2VWaGZUS2pmNnh3d204UGIzVlR5blR6Wnp1dWUrNDI2MWJoRXdYbDhMQWJjdjJwUWtlMVgvVlM2Nk9jMS9laVNkUTloQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTY3NTE2MTc3ODg6NThAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDc5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjc0NTUzOTUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMYitcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxiKy5qc29uIjogIntcImtleURhdGFcIjpcIlZxRTJJdDRxZkJPcTVOR05iWVJmblZxWnRBbnZUN3M2TXVuWU45ek5mMjg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTgwODQ2NTQ2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzI1NzM4MDM3ODc2XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "★彡UwemDev彡★",
  packname: process.env.PACK_NAME || "Sticker by",
  botname : process.env.BOT_NAME  || "UwemDev",
  ownername:process.env.OWNER_NAME|| "★彡UwemDev彡★",


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
