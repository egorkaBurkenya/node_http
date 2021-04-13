const { sendError, contentType } = require('./lib')

const router = {
    'GET': {
        '/': (req, res) => {
            res.writeHead(200, contentType('html'))
            res.end('<h1>base page 💜</h1>')
        }
    },
    'POST': {}
}


exports.handle = (req, res) => {
    if (router[req.method][req.url]) {
        router[req.method][req.url](req, res)
    } else {
        sendError(res)
    }
}

exports.get = (url, action) => {
    router['GET'][url] = action
}
exports.post = (url, action) => {
    router['POST'][url] = action
}