const http = require('http');

http.createServer( (request,response) => {
    response.setHeader('Content-Disposition', 'attachment; filename=nombres.csv');
    response.writeHead(200,{'Content-type': 'application/csv'});
    response.write('id, nombre\n');
    response.write('1, Raul\n');
    response.write('2, Juan\n');
    response.write('3, David\n');
    response.write('4, Sara\n');
    response.write('5, María\n');
    response.end();
} ).listen(8080);

console.log("Estamos escuchando el puerto: ", 8080);