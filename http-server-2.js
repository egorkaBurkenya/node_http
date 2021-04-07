'use strict';
const http = require('http');

const app = http.createServer().listen(5050)
app.on('listening', () => console.log('Слушаю...✨'))
app.on('connection', () => console.log('кто-то присоединился'))

const router = {
    '/': '<h1> small http server 💜</h1>',
    '/info': '<h1> Info Page 📝</h1>',
    '/contact': '<h1> Contact Page 📨 </h1>',
    '/about': '<h1> About Page 🛀🏻</h1>'
}

app.on('request', (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
    if(router[req.url]){
        res.end(router[req.url])
    } else {
        res.end('<h1>Not found<h1>')
    }
})