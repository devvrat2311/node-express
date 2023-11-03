const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('Welcome to our home page');
    }
    else if(req.url === '/about') {
        res.write('Here is our short history');
    }
    else{
    res.end(`
    <h1>OOPS</h1> 
    <p>We can't seem to find the page you are looking for</p>
    <a href='/'>Back home</a>
    `);
    }

    res.end();


})

server.listen(3000, 'localhost', () => {
    console.log("The server is running");
});

