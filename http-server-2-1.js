'use strict';
const http = require('http');
const fs = require('fs');

const app = http.createServer().listen(5050)
app.on('listening', () => console.log('Слушаю...✨'))
app.on('connection', () => console.log('кто-то присоединился'))

const router = {
    '/': 'views/index.html',
    '/info': 'views/info.html',
    '/about': 'views/about.html',
    '/contact': 'views/contact.html'
}

app.on('request', (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
    if(router[req.url]){
        fs.readFile(router[req.url], (err, data) => {
            res.end(data)
        })
    } else {
        res.end('<h1>Not found<h1>')
    }
})