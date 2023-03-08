const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Pagina principal!')
})

app.get('/canal', (req, res) => {
  res.json({ canal: 'Canal do lusca' })
})

app.listen(port || 3000, () => {
  console.log('Servidor rodando!')
})
