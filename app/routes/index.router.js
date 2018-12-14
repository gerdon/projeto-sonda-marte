const router = require('../../config/server').server;

router.get('/', (req, res) => {
    res.send('<h1>Servidor rodando com Restify</h1>');
});

router.get('/home', (req, res) => {
    console.log('Servidor Ativo');
    res.send('Home');
});

module.exports = router;