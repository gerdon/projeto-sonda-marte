const server = require('./config/server').server;
const port = require('./config/server').port;
const router = require('./app/routes/routers');

server.listen(port, (router) => {
    console.log(`O servidor está no ativo na porta ${port}`);
});
