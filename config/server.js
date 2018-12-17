const restify = require('restify');
const bodyParser = require('body-parser');
// const port = 3000;
const port = process.env.PORT || 3000;

const server = restify.createServer();

server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());

module.exports = {server, port};
