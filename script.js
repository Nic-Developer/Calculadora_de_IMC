/* 
- 1ª crie variaveis com o mesmo nome
- Para ecrever dentro dos inputs troque nome por altura,peso .... 
nome.value = 'erick felipe';
- com essas variaveis eu pego os campos da calculadora */

const calcular = document.getElementById("calcular");

function imc() {
  const nome = document.getElementById("nome").value;
  const altura = document.getElementById("altura").value;
  const peso = document.getElementById("peso").value;
  const resultado = document.getElementById("resultado");

  //se o nome for diferente de vazio
  if (nome !== "" && altura !== "" && peso !== "") {
    const valorIMC = (peso / (altura * altura)).toFixed(1); //numero de casas após a virgula

    //variavel let porque vai ser alterada
    let classificacao = "";

    if (valorIMC < 18.5) {
      classificacao = "abaixo do peso.";
    } else if (valorIMC < 25) {
      classificacao = "com peso ideal. Parabéns!";
    } else if (valorIMC < 30) {
      classificacao = "levemente acima do peso.";
    } else if (valorIMC < 35) {
      classificacao = "com obesidade grau I.";
    } else if (valorIMC < 40) {
      classificacao = "com obesidade grau II.";
    } else {
      classificacao = "com obesidade grau III. Você deve se cuidar!";
    }
    // para pegar o nome da pessoa e mandar a mensgem pra ela = `${nome}`;
    resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;
  }
  // senão
  else {
    resultado.textContent = "Preencha todos os campos!";
  }
}

//quando clicar vai executar a função chamada imc
calcular.addEventListener("click", imc);
