const router = require('../../config/server').server;

router.get('/', (req, res) => {
    res.send("Servidor rodando com Restify");
});

module.exports = router;