const router = require('../../config/server').server;
const sonda = require('../controllers/sonda.controller');

/**
 * Sonda para a posição inicial (0,0)
 */
router.get('/posicaoInicial', (req, res) => {
    sonda.posicaoInicial();
    res.send("Sonda na posição inicial");
});

/**
 * Recebe os movimentos da sonda e, 
 * retorna com as coordenadas finais.
 * 
 * caso o movimento seja válido ou erro caso o movimento seja inválido
 */
router.post('/movimentacao', (req, res) => {
    let posicaoFinal = sonda.movimentarSonda(req.body);
    res.send(posicaoFinal);
});

/**
 * Coordenadas atuais x e y da sonda
 */
router.get('/posicaoAtual', (req, res) => {
    let posicaoAtual = sonda.getPosicaoAtual();
    res.send(posicaoAtual);
});

module.exports = router;