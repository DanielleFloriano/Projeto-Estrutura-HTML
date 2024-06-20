let numero1 = document.querySelector('#entrada1');
let numero2 = document.querySelector('#entrada2');
let resultado = document.querySelector ('#resultado');

function somar (){
    let final = Number(numero1.value) + Number(numero2.value);
    resultado.innerHTML = final;
    resultado.value = Number(numero1.value) + Number(numero2.value);
}

function subtrair(){
    let final = Number(numero1.value) - Number(numero2.value);
    resultado.innerHTML = final;
    resultado.value = Number(numero1.value) - Number(numero2.value);
}

function dividir(){
    let final = Number(numero1.value) / Number(numero2.value);
    resultado.innerHTML = final;
    resultado.value = Number(numero1.value) / Number(numero2.value);
}

function multiplicar(){
    let final = Number(numero1.value) * Number(numero2.value);
    resultado.innerHML = final;
    resultado.value = Number(numero1.value) * Number(numero2.value);
}


function imc(){
    let altura = document.querySelector('#altura');
    let peso = document.querySelector('#peso');
    let imc = Number(peso.value) / (Number(altura.value) * Number(altura.value));
    
    document.querySelector('#imc').value = imc;

    let consideracaoes = document.querySelector('#consideracoes')
    if(imc < 18.5){
        consideracoes.textContent = 'Abaixo do Peso';
    }else if(imc >= 18.5 && imc <= 24.9){
        consideracoes.textContent = 'Peso Normal';
    }else if(imc >= 25.0 && imc <= 29.9){
        consideracoes.textContent = 'Sobrepeso';
    }else if(imc >= 30.0 && imc <= 34.9){
        consideracaoes.textContent = 'Obesidade grau 1';
    }else if(imc >= 35.0 <= 39.9){
        consideracoes.textContent = 'Obesidade grau 2';
    }else {
        consideracoes.textContent = 'Obesidade grau 3';
    }
   

    
}