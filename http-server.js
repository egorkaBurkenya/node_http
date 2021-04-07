'use strict';
const http = require('http');


// const app = http.createServer((request, response) => {
//     console.log('кто-то присоединился');
//     response.writeHead(200, { 
//         'Content-Type': 'text/html;charset=utf-8'
//      })
//     response.write('<h1>http server 💖</h1>')
//     response.end()
// });

// app.listen(5050, () => console.log('Слушаю...✨'))

const app = http.createServer().listen(5050)
app.on('listening', () => console.log('Слушаю...✨'))
app.on('connection', () => console.log('кто-то присоединился'))
app.on('request', (req, res) => {
    if (req.url === '/poop') {
        res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
        res.write('<h1>💩</h1>')
        res.end()
    } else if (req.url === '/n') {
        res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
        res.write('<h1>👩🏿👨🏿🧑🏿👧🏿👦🏿🧒🏿👶🏿 - family</h1>')
        res.end()
    } else {
        const url = require('url').parse(req.url)
        console.log(JSON.stringify(url));
        res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
        res.write('<h1>hello 💖</h1>')
        res.end()
    }
})