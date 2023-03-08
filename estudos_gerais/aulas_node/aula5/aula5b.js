const http = require('http')
const fs = require('fs')

const port = process.env.PORT

const server = http.createServer((req, res) => {
  fs.appendFile('teste.txt', 'curso de node', err => {
    if (err) throw err
    console.log('arquivo criado!')
  })
})

server.listen(port || 3000, () => {
  console.log('server on')
})
