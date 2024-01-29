
//http     


const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('Here is our short history')
    }
    if(req.url === '/contact'){
        res.end('Here is our no. 123456')
    }
    res.end(
            `<h1>Oops!</h1>
            <p>We can't open this page is error</p>
            <a href="/">back home</a>`
    )
    
})

server.listen(5000)