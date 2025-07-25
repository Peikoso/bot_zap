const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal')
const axios = require('axios');
const puppeteer = require('puppeteer');

const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    executablePath: process.env.PUPPETEER_EXECUTABLE_PATH || '/usr/bin/chromium',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  }
});

client.once('ready', () => {
    console.log('Client is ready!');
});


client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});


client.on('message_create', message => {
	//console.log(message.body);
});


client.on('message_create', async(message) => {
	if (message.body.startsWith('!pikkos ')) {
        const prompt_message = message.body.slice(7).trim();

        const response = await axios.post('http://python_api:8000/chat_bot', null,{
            params: {
                mensagem: prompt_message
            },
            headers:{
                'accept': 'application/json'
            }
        });

        message.reply(response.data)
	}
});


client.initialize();
