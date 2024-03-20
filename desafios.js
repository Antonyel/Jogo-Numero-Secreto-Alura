//DESAFIOS

/*
    01-Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa,
    a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos
    como parâmetro.
*/
function calculaImc(peso,altura){
let imc = peso/(altura*altura);
console.log(`Seu IMC é ${imc.toFixed(2)}`);//Usando toFixed para definir apenas duas casas decimais
}
calculaImc(78.5,1.65);

/*
    02-Crie uma função que calcule o valor do fatorial de um número passado como
    parâmetro.
*/

/*
    03-Crie uma função que converte um valor em dólar, passado como parâmetro, e
    retorna o valor equivalente em reais. Para isso, considere a cotação do dólar
    igual a R$4,80.
*/
function converteEmReal(valor){
    let valorReal = valor * 4.97;
    console.log(`Valor em R$ ${valorReal.toFixed(2)} reais`);
}
converteEmReal(10);
/*
    04-Crie uma função que mostre na tela a área e o perímetro de uma sala retangular,
    utilizando altura e largura que serão dadas como parâmetro.
*/
function areaPerimetro(altura,largura){
    //let area = 
  //  let perimetro =
}
/*
    05-Crie uma função que mostre na tela a área e o perímetro de uma sala circular,
    utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
*/

/*
    06-Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
*/
function tabuada(numero){
    console.log(`TABUADA DE ${numero}`);
    for(let i=1; i<=10 ; i++){
        console.log(`${numero} X ${i} = ${numero*i}`);
    }
}
tabuada(2);


/*
TABUADA
let num = 1;
for(let i=1; i<=10 ; i++){
    let calc = i * num;
    console.log(`${num} X ${i} = ${calc}`);
}
*/