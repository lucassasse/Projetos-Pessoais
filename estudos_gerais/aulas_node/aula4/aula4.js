const http = require('http')
const port = process.env.PORT

const servidor = http.createServer((req, res) => {
  res.statusCode = 200
  res.writeHead(200, { 'content-Type': 'text-plain' })
  res.end('Final')
})

servidor.listen(port || 3000, () => {
  console.log('Servidor rodando!')
})
