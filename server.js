const myexpress = require('express');
const fs = require('fs');
const myapp = myexpress();

//'definimos donde estará nuestro contenido estatico que puede ser accedido directamente en la url'
myapp.use(myexpress.static(__dirname + '/static'))

//aqui debieramos  cargar la pagina de caida index.html u otros contenidos que deben ser interpretados
myapp.get('/', function (request,response){

    fs.readFile('./index.html', 'utf8', function (errors, contents) {
        response.writeHead(200, { 'Content-Type': 'text/html' });  // envía los datos sobre la respuesta
        response.write(contents);  //  envía el cuerpo de respuesta
        response.end(); // ¡terminado!
    });
})

myapp.listen(8000, function() {
    console.log('Aplicacion iniciada escuchando en http://localhost:8000');
})