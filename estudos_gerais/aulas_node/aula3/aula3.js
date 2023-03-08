const http = require('http')
const port = 3000
const host = '127.0.0.1' //pode ser alterado

const servidor = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' }) //text/plain = retarnar texto simples || text/html = retorar html
  if (req.url == '/') {
    res.write('<h1>Seja bem vindo</h1>')
  } else if (req.url == '/canal') {
    res.write('<h1>Pagina de canais</h1>')
  } else if (req.url == '/cursos') {
    res.write('<h1>Pagina de cursos</h1>')
  } else if (req.url == '/cursos/node') {
    res.write('<h1>Pagina do curso de node!</h1>')
  }
  res.end()
})

servidor.listen(port, host, () => {
  console.log('Servidor rodando!')
})
