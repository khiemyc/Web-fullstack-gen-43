const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/about') {
        res.end('Day la trang about')
    }
    if (req.url === '/contact') {
        res.end("day la con contact")
    }

}
)

server.listen(3000)