'use strict';

const http = require('http');
const fs = require('fs');

const app = http.createServer().listen(5050)

app.on('listening', () => console.log('start the littel http server ✨... '))
app.on('connection', () => console.log('\nsome one knock-knock 👀'))

const getPage = url => `public/views${url}.html`


app.on('request', (req, res) => {

    let pageData = getPage(req.url);
    let page;

    fs.readFile(pageData, "utf8", (err, data) => {
        if(err) {
            res.writeHead(404, {'Content-Type': 'text/html;charset=utf-8'})
            res.write('<h1>File not Found</h1>')
        } else {
            fs.readFile('public/layout/main.html', "utf8", (err, layout) => {
                layout = layout.split('###')
                page = layout[0] + data + layout[1]   
                res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
                res.write(page)
                res.end()
            })

        }
    })
})