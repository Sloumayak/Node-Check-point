const http = require('http')
const port = 3000
const server = http.createServer((req, res)=>{
    res.end("<h1>Hello Node!!!!</h1>") ;
})

console.log(server)