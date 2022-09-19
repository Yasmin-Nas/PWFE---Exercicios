'use strics'

function valorInteiro (){
    var number = parseInt(document.getElementById('numero1').value);
    const resultado = document.getElementById('result');

    let calcular;

    if(number < 0){
        mostrar = number * -1;
    }else{
        mostrar = number;
    }
    resultado.textContent = `${number} este número será possitivo se for: ${mostrar}`
}

document.getElementById('calcular').addEventListener('click', valorInteiro);