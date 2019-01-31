/*
  Trocando o titulo
*/
var titulo = document.querySelector('.titulo');
titulo.textContent = "Aparecida Nutricionista";

/*
  Informação do paciente
*/
var pacientes = document.querySelectorAll('.paciente'); //Linha

for(var i = 0; i <= pacientes.length; i++) {
    var paciente = pacientes[i];

    var peso     = paciente.querySelector('.info-peso').textContent; //Coluna
    var altura   = paciente.querySelector('.info-altura').textContent; //Coluna
    var tdImc    = paciente.querySelector('.info-imc'); //Coluna imc

    /*
        Validação
    */
    var pesoValido = true; 
    var alturaValida = true;

    if(peso < 0 || peso >= 750) {
        pesoValido = false;
        /* texto de erro */
        tdImc.textContent = 'Peso inválido';
    } else if (altura <= 0.50 || altura >= 3.10) {
        alturaValida = false;
        /* texto de erro */
        tdImc.textContent = 'Altura inválida';
    }

    if( pesoValido && alturaValida) {
        var imc = parseFloat(peso) / parseFloat(altura * altura);
        /* adiciona o resultado na tabela */
        tdImc.textContent = imc.toFixed(2);
    }

}


