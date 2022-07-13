const Insta = require('@androz2091/insta.js');
const client = new Insta.Client();

require('dotenv').config();

//get ID, PW, Admin ID from .env
const {prefix, ID, PW, adminList, adminChatId} = process.env;

//어드민 지정
const admin = adminList.split('/')

//set Welcome Message
const welcomeMsg = "님 환영해요!"

//log message in console when login successed
client.on('connected', () => {
    console.log(`${client.user.username}에 로그인을 성공했습니다.`);
});

//set commands
client.on('messageCreate', (message) => { 
    if(message.content === prefix + 'ping'){
        message.chat.sendMessage('pong!');
    };
});

//Reply to chat requests
client.on('pendingRequest', (chat) => {
    chat.approve;
    chat.sendMessage(chat.name + welcomeMsg);
});

//login to Instagram
client.login(ID, PW);  
