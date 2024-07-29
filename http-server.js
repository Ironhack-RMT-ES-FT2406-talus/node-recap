const http = require("http");

const myServer = http.createServer((request, response) => {

  console.log("alguien le está pidiendo algo a este servidor")
  console.log(request.url)

  if (request.url === "/") {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("Hola mundo desde el servidor! Bienvenido a la página principal")
    response.end()
  } else if (request.url === "/patata") {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("Aqui tienes una patata")
    response.end()
  } else if (request.url === "/patata/1234") {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("Aqui tienes los detalles de la patata 1234")
    response.end()
  }

})

myServer.listen(5005) // poder a andar el servidor hasta que lo detengamos y continuamente va a a escuchar cualquier llamada de cualquier cliente.