const area = [
    ['0,4', '1,4', '2,4', '3,4', '4,4'],
    ['0,3', '1,3', '2,3', '3,3', '4,3'],
    ['0,2', '1,2', '2,2', '3,2', '4,2'],
    ['0,1', '1,1', '2,1', '3,1', '4,1'],
    ['0,0', '1,0', '2,0', '3,0', '4,0']
];
let posicaoSonda;

/**
 * A sonda inicia no quadrante (x = 0, y = 0), 
 * o que se traduz como a casa mais inferior da esquerda; 
 * também inicia com a face para a direita.
 */
function posicaoInicial() {
    area.reverse();
    for(let i = 0; i < 5; i++) {
        for(let y = 0; y < 5; y++) { //Inverter a coluna para corresponder ao exemplo
            console.log(area[i][y]);
        }
    }
    posicaoSonda = area[0][0];
    console.log("Posição inicial da sonda: " + posicaoSonda);

    for(let i = 0; i < area.length; i++) {
        // let index = area[i].findIndex(e => e == '0,0');
        let index = area[i].findIndex(elemento => elemento == posicaoSonda);
        if(index != -1) {
            console.log(area[i][index]);
            if(typeof area[i][index - 1] === "undefined"){
                console.log("Erro");
            }
            // posicaoSonda = area[i][index - 1];
            // console.log(posicaoSonda);
        }
    }
}

/**
 * A sonda aceita três comandos:
 * 
 *  GE - girar 90 graus à esquerda
 *  GD - girar 90 graus à direta
 *  M - movimentar. Para cada comando M a sonda se move uma posição na direção à qual sua face está apontada.
 * 
 * Consideramos que um movimento para cima é o mesmo que dizer (x + 1, y), 
 * e um movimento para a direita é o mesmo que (x, y + 1).
 * 
 * @param {*} movimentacao 
 */
function movimentarSonda(movimentacao) {
    let movimentos = null;
    for(let i = 0; i < movimentacao.length; i++) {
        switch (movimentacao[i]) {
            case 'GE':
                for(let i = 0; i < area.length; i++) {
                    let index = area[i].findIndex(e => e == '0,0');
                    if(index != -1) {
                        if(area[i][index - 1] == "undefined"){
                            console.log("Erro");
                        }
                    }
                }
                break;
            case 'GD':
                console.log(posicaoSonda);
                break;
            case 'M':
                console.log(posicaoSonda);
                break;
        
            default:
                break;
        }
    }
}

function getPosicaoAtual() {;
    return posicaoSonda;
}

function getIndiceMatriz() {
    for(let i = 0; i < area.length; i++) {
        let index = area[i].findIndex(elemento => elemento == posicaoSonda);
        if(index != -1) {
            if(area[i][index - 1] == "undefined"){
                console.log("Erro");
            }
        }
    }
}

module.exports = {posicaoInicial, movimentarSonda, getPosicaoAtual};