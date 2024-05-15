const express = require('express');
const http = require('http');
const websocket = require('./websocket');
const apiRoutes = require('./api');

const app = express();
const server = http.createServer(app);

websocket(server);

app.use('/valor', apiRoutes);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
