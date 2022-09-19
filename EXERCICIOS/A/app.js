'use strict'

function diferenca(){
    const A = parseInt(document.getElementById('valor1').value);
    const B = parseInt(document.getElementById('valor2').value);
    const resultado = document.getElementById('result');

    let mostrar;

    if(A > B){
        mostrar = A - B;
    }if(B > A){
        mostrar = B - A;
    }if (A == B || B == A){
        mostrar = 'O resultado será 0, os dois números possuem o mesmo valor'
    }

    resultado.textContent = `A diferença entre os números é equivalente a: ${mostrar}`
}

document.getElementById('calculadora').addEventListener('click', diferenca);