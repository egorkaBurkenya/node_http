const fs = require('fs')
const http = require('http')

const contentType = type => {
    return {'Content-Type': `text/${type}`}
}

const extension = {
    'js': 'javascript',
    'html': 'html',
    'css': 'css'
}


const sendError = res => {
    res.writeHead('404', contentType('html'))
    res.end('<h1>Page not found🛑</h1>')
}


exports.sendFile = (filePath, res) => {
    console.log(filePath);
    if (!fs.existsSync(filePath)) {
        return sendError(res)
    }
    fs.readFile(filePath, (err, data) => {
        if (err) {
            return sendError(res)
        }
        console.log(extension[filePath.split('.')[1]]);
        res.writeHead(200, contentType(extension[filePath.split('.')[1]]))
        res.end(data)
    })
}

exports.contentType =  contentType
exports.sendError = sendError