const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "" SUHAIL_23_57_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDMwLFxuICAgICAgICA0OSxcbiAgICAgICAgMixcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTcwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDc3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDI1LFxuICAgICAgICAzMixcbiAgICAgICAgMTc2LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MixcbiAgICAgICAgMTIyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTgsXG4gICAgICAgIDQwLFxuICAgICAgICAxNyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE3LFxuICAgICAgICA5OSxcbiAgICAgICAgOSxcbiAgICAgICAgNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTkyLFxuICAgICAgICA1NixcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjksXG4gICAgICAgIDgwLFxuICAgICAgICAxMDksXG4gICAgICAgIDc2LFxuICAgICAgICA5NyxcbiAgICAgICAgNDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDUyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDM1LFxuICAgICAgICAxODEsXG4gICAgICAgIDc4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTg3LFxuICAgICAgICA1MixcbiAgICAgICAgOTEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDM1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjU1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDQxLFxuICAgICAgICA1MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTg5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDM3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDQxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3NixcbiAgICAgICAgNTIsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDc5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDUsXG4gICAgICAgIDg0LFxuICAgICAgICAxNSxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjAzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTMzLFxuICAgICAgICA2NixcbiAgICAgICAgMTI5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDI2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDY0LFxuICAgICAgICAzMixcbiAgICAgICAgODMsXG4gICAgICAgIDExLFxuICAgICAgICAzNCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDgsXG4gICAgICAgIDUwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDUxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDgxLFxuICAgICAgICA3LFxuICAgICAgICAxOCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDQ0LFxuICAgICAgICA2NixcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzksXG4gICAgICAgIDMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxODgsXG4gICAgICAgIDgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNjksXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDMsXG4gICAgICAgIDMyLFxuICAgICAgICAyMDksXG4gICAgICAgIDY3LFxuICAgICAgICA1NyxcbiAgICAgICAgMzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEwNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MixcbiAgICAgICAgNDQsXG4gICAgICAgIDcwLFxuICAgICAgICA2LFxuICAgICAgICA5NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTc4LFxuICAgICAgICAxNjksXG4gICAgICAgIDk1LFxuICAgICAgICA2MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODQsXG4gICAgICAgIDk2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDMxLFxuICAgICAgICA0OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDU5LFxuICAgICAgICA2MixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTE2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTUxLFxuICAgICAgICAyMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDk2LFxuICAgICAgICAxMjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDM5LFxuICBcImFkdlNlY3JldEtleVwiOiBcInZHcHJmT0Z2SWgzWkJFWWtTeWNZVC9LdHgrNnNBOUNpZTdvckU3eXhvcFk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3NDE4MzQ2OTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNGMkQ3N0E0MUVEMzREQTUyREEwQTZDRTdBQjFGQ0JEXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTUxOTg1OVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI5OUJYLV9VSFRFNjczcW5BdnA3UF93XCIsXG4gIFwicGhvbmVJZFwiOiBcIjE2OGU5YzAwLWE4YmEtNDc0NS1hOTcyLWU0ZjA1OTRjNTkzNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODQsXG4gICAgICA5LFxuICAgICAgMTk0LFxuICAgICAgMjQ4LFxuICAgICAgMTQxLFxuICAgICAgNjcsXG4gICAgICAyMzQsXG4gICAgICA4MSxcbiAgICAgIDIzNyxcbiAgICAgIDE3NyxcbiAgICAgIDEzNyxcbiAgICAgIDIzNyxcbiAgICAgIDEwNixcbiAgICAgIDIxNCxcbiAgICAgIDE2OCxcbiAgICAgIDI0NCxcbiAgICAgIDg4LFxuICAgICAgMTQ3LFxuICAgICAgMTcxLFxuICAgICAgMTgxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyMixcbiAgICAgIDE3MCxcbiAgICAgIDE3NSxcbiAgICAgIDIwNyxcbiAgICAgIDI0NixcbiAgICAgIDE5OCxcbiAgICAgIDIxMixcbiAgICAgIDg1LFxuICAgICAgMjIsXG4gICAgICAxMjQsXG4gICAgICAyNixcbiAgICAgIDIwMyxcbiAgICAgIDcsXG4gICAgICAyMDEsXG4gICAgICAxODQsXG4gICAgICAzMCxcbiAgICAgIDk3LFxuICAgICAgMTU4LFxuICAgICAgMTI5LFxuICAgICAgODVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiR1lETDUzN0JcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzQxODM0Njk0OjIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiU0FWSVlBIEVESVRTXCIsXG4gICAgXCJsaWRcIjogXCIxNzIzNTcwNTQ0MjczMTA6MjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTnJ2bDVvRkVPdWQ4YlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJMMHBxK0FRTE0wbi9qYkNYbEp6QkN6WXUwa0s3WHhNcVd5cGxzOUhGSGcwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInFOUUwzWmp1Y045b0dzRjFxc2pXek9QMlBuVkpheUNBSXBNNHpPMDhUK2NXbUltdVZvMDlxL01SQXMrcjJ1Si9LWTZjempIVDlCZVFZRHh0UXlhVENnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkFZSG9FWU5PUXJtdExSQ0JkWDJZVlJZenM3Y2RxLzVkeHB3Tk1LNDlTQmtUYlFaS2xoZFFEN05nTlR3VHNJMTJuVTNOakxmR3VTRUJ6QXVjcUFuaWh3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzQxODM0Njk0OjIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNTE5ODUzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUHZYXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQdlguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJuZVZaOTJIZFdTVVJ5L0R3UjNFVFdWMmVROFlOa1lDU0V3WUZaSS8vVlRVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEzOTcwOTQzNjEsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ== // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
