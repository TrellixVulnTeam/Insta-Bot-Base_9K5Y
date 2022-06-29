const Insta = require('@androz2091/insta.js');
const client = new Insta.Client();

require('dotenv').config();

//get ID, PW, Admin ID from .env
const {prefix, ID, PW, adminList, adminChatId} = process.env;

//어드민 지정
const admin = adminList.split('/')

//set Welcome Message
const welcomeMsg = "님 환영해요!"

//uptime
function uptime(seconds){
    function pad(s){
        return (s < 10 ? '0' : '') + s;
    }
    let hours = Math.floor(seconds / (60*60));
    let minutes = Math.floor(seconds % (60*60) / 60);
    let second = Math.floor(seconds % 60);
  
    return String('Uptime is.. \n' + pad(hours) + '시간 ' + pad(minutes) + '분 ' + pad(second) + '초');
}

//log message in console when login successed
client.on('connected', () => {
    console.log(`${client.user.username}에 로그인을 성공했습니다.`);
});

//set commands
client.on('messageCreate', (message) => { 
    if(message.content === prefix + 'ping'){
        message.chat.sendMessage('pong!');
    };

    if (message.content === prefix + 'uptime'){
        message.chat.sendMessage(uptime(Math.floor(process.uptime())))
    };
});

//Reply to chat requests
client.on('pendingRequest', (chat) => {
    chat.approve;
    chat.sendMessage(chat.name + welcomeMsg);
});

//login to Instagram
client.login(ID, PW);  
