const {createServer} = require ('http');

let server = createServer((request, response) => {

    response.writeHead(200, {"content-Type": "text/html"});
    response.write(`
    <h1>Hello World!</h1>
    <p>Primeira pagina com Node.js</p>
    `);

response.end();

});

server.listen(8000);

console.log ("Ouvindo a porta 8000");
  

// cria diretamente uma pagina com servidor de forma 
// que o codigo simplifique 