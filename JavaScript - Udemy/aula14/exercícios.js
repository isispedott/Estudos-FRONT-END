const nome = 'Pedro'; 
const sobrenome = 'da Silva';
const idade = 40;
const peso = 90;
const altura = 1.85;
let IMC = peso / (altura * altura);    
let anoNascimento = 2022 - idade;   


//template string 

console.log(`${nome}  ${sobrenome} tem ${idade} anos, pesa ${peso}kg, tem ${altura}m de altura e IMC de  ${IMC}.`)
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}.`)