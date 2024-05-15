const WebSocket = require('ws');
const db = require('./db'); // Importa o módulo de conexão com o banco de dados

function setupWebSocket(server) {
  const wss = new WebSocket.Server({ server });

  wss.on('connection', (ws) => {
    console.log('Nova conexão WebSocket estabelecida');

    ws.on('message', (message) => {
      console.log('Mensagem recebida:', message);
      try {
        const parsedMessage = JSON.parse(message);
        if (parsedMessage.type === 'valor') {
          const valor = parsedMessage.value;
          // Insere o valor no banco de dados
          const query = 'INSERT INTO valores (valor) VALUES (?)';
          db.query(query, [valor], (err, result) => {
            if (err) {
              console.error('Erro ao inserir valor no banco de dados:', err);
              return;
            }
            console.log('Valor inserido no banco de dados com sucesso');
          });
        }
      } catch (error) {
        console.error('Erro ao processar mensagem:', error);
      }
    });

    ws.on('close', () => {
      console.log('Conexão WebSocket fechada');
    });
  });
}

module.exports = setupWebSocket;
