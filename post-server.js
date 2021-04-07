'use strict';
const http = require('http');

const app = http.createServer().listen(5050)
app.on('listening', () => console.log('Слушаю...✨'))
app.on('connection', () => console.log('кто-то присоединился'))

app.on('request', (req, res) => {
    let body = []
    req.on('data', data => body.push(data))
    req.on('end', () => {
        body = Buffer.concat(body).toString()
        console.log(`Body: ${body}`);
    })
    console.log(`URL: ${req.url}`);
    console.log(`Method: ${req.method}`);
    console.log(`Headers: ${req.headers}`);
    res.writeHead(200)
    res.end('Все в порядке 🚬')
})