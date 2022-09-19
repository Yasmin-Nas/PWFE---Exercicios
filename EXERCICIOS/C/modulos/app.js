'use strict'

function aprov(){
    const nota1 = parseFloat(document.getElementById('valor1').value);
    const nota2 = parseFloat(document.getElementById('valor2').value);
    const nota3 = parseFloat(document.getElementById('valor3').value);
    const nota4 = parseFloat(document.getElementById('valor4').value);

    const resultado = document.getElementById('result')
    let mostrar;

    let result = (nota1 + nota2 + nota3 + nota4)/4;
    if(result >= 5){
        mostrar = 'O aluno(a) foi aprovado(a)';
    }if(result < 5 ){
        mostrar = 'O aluno(a) foi reprovado(a)'
    }
    resultado.textContent = `${mostrar}e obteve a Média = ${result}`

}
document.getElementById('calculadora').addEventListener('click', aprov);