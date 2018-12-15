const router = require('../../config/server').server;
const sonda = require('../controllers/sonda.controller');

/**
 * Sonda para a posição inicial (0,0)
 */
router.get('/posicaoInicial', (req, res) => {
    res.send("Posição inicial da Sonda");
    sonda.posicaoInicial();
});

/**
 * Recebe os movimentos da sonda e, 
 * retorna com as coordenadas finais.
 * 
 * caso o movimento seja válido ou erro caso o movimento seja inválido
 */
router.post('/movimentacao', (req, res) => {

    sonda.movimentarSonda(req.body);
    res.send("Movimentação realizada");
});

/**
 * Coordenadas atuais x e y da sonda
 */
router.get('/posicaoAtual', (req, res) => {
    res.send("Posição atual da Sonda: " + sonda.getPosicaoAtual());
});

module.exports = router;