const mineflayer = require('mineflayer');
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Bot aktif!');
});

app.listen(port, () => {
    console.log(`Web sunucusu ${port} portunda calisiyor.`);
});

function createBot() {
    const bot = mineflayer.createBot({
        host: 'WehoneSMP.aternos.me',
        port: 41127,
        username: 'AternosBot'
    });

    bot.on('spawn', () => {
        console.log('Bot oyuna basariyla girdi!');
    });

    bot.on('error', (err) => {
        console.log('Baglanti hatasi:', err);
    });

    bot.on('end', () => {
        console.log('Bot dustu, 5 saniye sonra yeniden baglaniliyor...');
        setTimeout(createBot, 5000);
    });
}

createBot();
