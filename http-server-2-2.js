'use strict';
const http = require('http');
const fs = require('fs');

const app = http.createServer().listen(5050)
app.on('listening', () => console.log('Слушаю...✨'))
app.on('connection', () => console.log('кто-то присоединился'))

const getPage = url => `views${url}.html`

app.on('request', (req, res) => {
    let page = getPage(req.url)
    fs.readFile(page, (err, data) => {
        if(err) {
            res.writeHead(404, {'Content-Type': 'text/html;charset=utf-8'})
            res.write('<h1>File not Found</h1>')
        } else {
            res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
            res.write(data)
        }
        res.end()
    })
})