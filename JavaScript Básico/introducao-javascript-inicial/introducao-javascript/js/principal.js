/* 
    Troca titulo
*/
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

/*
    Calcula pacientes
*/
var pacientes = document.querySelectorAll(".paciente"); //tr

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var peso = paciente.querySelector(".info-peso").textContent; //td com texto

    var altura = paciente.querySelector(".info-altura").textContent; //td com texto

    var tdImc = paciente.querySelector(".info-imc"); //td 

    /* 
        Validação
    */
    var pesoEhValido = true;
    var alturaEhValida = true;

    if (peso <= 0 || peso >= 750) {
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido"; // Troca texto
        paciente.classList.add("paciente-invalido"); // Adiciona Classe de erro
    }

    if (altura <= 0.50 || altura >= 3.10) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida"; // Troca texto
        paciente.classList.add("paciente-invalido"); // Adiciona Classe de erro
    }

    if (pesoEhValido && alturaEhValida) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}

/* 
    Adiciona Paciente
*/

var botaoAdd = document.querySelector('#adicionar-paciente');
// Função anonima
botaoAdd.addEventListener('click', function(event) {
    /* 
        Não deixa recarregar a página.
        Retira o evento padrão do código
    */
    event.preventDefault();

})