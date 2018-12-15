const router = require('../../config/server').server;

router.get('/', (req, res) => {
    res.send('<h1>Servidor rodando com Restify</h1>');
});

module.exports = router;