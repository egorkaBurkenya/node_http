'use strict';

const http = require('http')
const router = require('./router')

const { sendFile, sendError } = require('./lib')


const app = http.createServer().listen(5050)

router.get('/home', (req, res) => {
    sendFile('views/home.html', res)
})

router.get('/style.css', (req, res) => {
    sendFile('public/css/style.css', res)
})

app.on('request', (req, res) => {
    router.handle(req, res)
})