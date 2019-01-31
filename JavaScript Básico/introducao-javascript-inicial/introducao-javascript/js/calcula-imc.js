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
    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if (!pesoEhValido) {
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido"; // Troca texto
        paciente.classList.add("paciente-invalido"); // Adiciona Classe de erro
    }

    if (!alturaEhValida) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida"; // Troca texto
        paciente.classList.add("paciente-invalido"); // Adiciona Classe de erro
    }

    if (pesoEhValido && alturaEhValida) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function validaPeso(peso) {
    if(peso >=0 && peso < 750) {
        return true
    } else {
        return false
    }
}

function validaAltura(altura) {
    if(altura >=0.50 && altura < 3.10) {
        return true
    } else {
        return false
    }
}

function calculaImc(peso, altura) {
    var imc = 0;

    imc = peso / (altura * altura);
    
    return imc.toFixed(2);
}