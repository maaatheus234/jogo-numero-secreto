let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

// conectado back com o front de maneira longa
//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do Numero Secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolhe um numero entre 1 a 10';

// funçao para exibir os textos de maneira rapida limpado codigo
// mostra informacao
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Famele',{rate: 1.2 });
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}
exibirMensagemInicial();



// funçao que confirma que butao foi apertado
function vereificarChute(){
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
    exibirTextoNaTela('h1','Acertou');
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativa =`voce descobrio numero secreto com ${tentativas} ${palavraTentativa}`;
    exibirTextoNaTela('p',mensagemTentativa);
    document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute>numeroSecreto){
            exibirTextoNaTela('p','numero secreto e menor');
        }else{
            exibirTextoNaTela('p','o numero secreto e maior');
        }
        tentativas++;
        limparCampo()
    }
}

// funcao do numero aleatorio
// retorna informaçao
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random()*numeroLimite +1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados =[];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas=1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled');
}