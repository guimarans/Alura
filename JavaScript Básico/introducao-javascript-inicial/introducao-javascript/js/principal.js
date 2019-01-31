/*
  Trocando o titulo
*/
var titulo = document.querySelector('.titulo');
titulo.textContent = "Aparecida Nutricionista";

/*
  Informação do paciente
*/
var paciente = document.querySelector('#primeiro-paciente'); //Linha
var peso     = paciente.querySelector('.info-peso').textContent; //Coluna
var altura   = paciente.querySelector('.info-altura').textContent; //Coluna

/*
    Validação
*/

if(peso < 0 || peso > 750) {
    console.log('Peso inválido');
} else if (alura < 0.50 || altura > 3.10) {
    console.log('Altura inválida');
}


var imc = parseFloat(peso) / parseFloat(altura * altura);

/* 
  Alterando o resultado na tabela
*/
paciente.querySelector('.info-imc').textContent = imc;

