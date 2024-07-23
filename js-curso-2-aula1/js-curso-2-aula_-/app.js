let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
     let campo = document.querySelector(tag);
     campo.innerHTML = texto;
     responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});      
}

function exibirMensgemInicial() {
     exibirTextoNaTela('h1','Jogo do Número Secreto');
     exibirTextoNaTela('p','Escolha um núemro entre 1 e 10');
}

exibirMensgemInicial();


function.verificarChute() {
     let chute = document.querySelector('input').value;
     
     if (chute == numeroSecreto) {
          exibirTextoNaTela('h1','Acertou!');
          let palavreTentativa = tentativas > 1 ? 'temtativas' : 'tentativa';
          let mensagensTentativas = `Você encontrou o número secreto com ${tentativas} ${palavreTentativa}!`;
          exibirTextoNaTela('p',${palavreTentativa});
          document.getElementById('reiniciar').removeAttribute('disabled');
     }else {
          if (chute > numeroSecreto){
               exibirTextoNaTela('p','O número é menor!');
          }else {
               exibirTextoNaTela('p','O número é maior');
          }
          //tentativas = tentativas + 1;
          tentativas++;
          limpacCampo();

     }
}

function gerarNumeroAleatorio() {
     let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1;
     let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

     if (quantidadeDeElementosNaLista == numeroLimite) {
          listaDeNumerosSorteados = [];
     }

     if (listaDeNumerosSorteados.includes(numeroEscolhido)){
         return gerarNumeroAleatorio();
     } else {
          listaDeNumerosSorteados.push(numeroEscolhido);
          console.log(listaDeNumerosSorteados);
          return numeroEscolhido;
     }
}


     function limpacCampo() {
          chute = document.querySelector('input')
          chute.value = ''; 
     }

function reiniciarJogo() {
     numeroSecreto = numeroSecreto();
     limpacCampo();
     tentativas = 1;
     exibirMensgemInicial();
     document.getElementById('reiniciar').setAttribute('disabled',true);
     
}