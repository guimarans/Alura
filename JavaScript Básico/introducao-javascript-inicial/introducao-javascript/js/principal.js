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

var imc = parseFloat(peso) / parseFloat(altura * altura);

/* 
  Alterando o resultado na tabela
*/
paciente.querySelector('.info-imc').textContent = imc;

