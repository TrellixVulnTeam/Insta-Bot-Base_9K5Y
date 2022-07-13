const Insta = require('@androz2091/insta.js');
const client = new Insta.Client();

require('dotenv').config();

//get ID, PW, Admin ID from .env
const {prefix, ID, PW, adminList, adminChatId} = process.env;

//set administrator
const admin = adminList.split('/')

//set Welcome Message
const welcomeMsg = ", Welcome!"

//log message in console when login successed
client.on('connected', () => {
    console.log(`Bot Is Ready!`);
});

//set commands
client.on('messageCreate', (message) => { 
    if(message.content === prefix + 'ping'){
        message.chat.sendMessage('pong!');
    };
});

//reply to chat requests
client.on('pendingRequest', (chat) => {
    chat.approve;
    chat.sendMessage(chat.name + welcomeMsg);
});

//login to Instagram
client.login(ID, PW);  
