//exercicio 1
let usuario = "cliente";
let senha = "banco123";
let saldo = 0;

if (usuario === "cliente" && senha === "banco123"){
   if(saldo > 0){console.log('Acesso liberado!')}
   else{console.log ('Saldo indisponivel')}


}else{console.log('usuario ou senha incorretos')};

//Exercício 2 — Sistema de triagem hospitalar

let temperatura = 38.5;
let oxigenacao = 95;
if(temperatura >= 39 || oxigenacao < 90){
    console.log('EmergÊncia')}
else if (temperatura > 37 && 38.9){
    console.log ('Observação')
}else{console.log ('Estável')}

// Exercício 3 — Sistema de notas completo

let nota1 = 7;
let nota2 = 8;
let nota3 = 9;
let frequencia = 0;
let media = ((nota1 + nota2 + nota3) / 3);

if (frequencia < 75 || media < 5) {console.log ('Reprovado')}
else if (media >= 9){
    console.log('excelente');
}else if (media > 7 && media < 8.9)
    {console.log ('aprovado')} 
 else if(media > 5 && media < 6.9)
    {console.log ('recuperação')};


//  Exercício 4 — Sistema de desconto progressivo
// let valorCompra = 1200;
// if (valorCompra > 100){
//     const desconto = 10
//     const valorFinal = (valorFinal = valorFinal * (1- desconto / 100));
//     console.log(valorFinal), console.log(`%  ${desconto}`);

// }else if (valorCompra > 500){
//     const desconto = 20;
//     const valorFinal = (valorFinal = valorCompra *  (1 - desconto / 100));

// }else if (valorCompra > 1000){
//     const desconto = 30;
//     const valorFinal = valorCompra * (1 - desconto / 100);
// }

//Exercício 5 — Verificador de ano bissexto
let ano = 2030;
if (ano / 100 === 0){
    console.log ('ano Bissexto')
}else if (ano % 100 === 0){
    console.log('ano Não bissexto')
}else if (ano % 4 === 0 ){
    console.log ('Ano bissexto')
}else{console.log ('ano Não bissexto')};

//Exercício 6 — Sistema de classificação etária
let idade = -122222;
if (idade >= 0 && idade <= 12) {console.log('criança')}
else if (idade >= 13 && idade <= 17) {console.log ('adolecente')}
else if (idade >= 18 && idade <= 59){ console.log('adulto')}
else if(idade > 60){console.log('Idoso')}
else{console.log('idade invalida')};

//Exercício 7 — Sistema de financiamento
let salario = 1.00;
let nomeLimpo = true;
let idade2 = 40;
if (salario > 3000 && nomeLimpo === true && idade2 >=18 && idade <= 65)
    {console.log('Financiamneto Aprovado!')

    }else{console.log ('financiamento Negado!')}

//    Exercício 8 — Sistema de acesso a evento 
