//            01234...
const nome = ['Luiz', 'João', 'Carlos'];



/*
//For Clássico 
for(let i = 0; i  < nome.length; i++) {
    console.log(nome[i])
} */

/*/For in
for (let i in nome) {
    console.log(nome[i]);
} */

//For of
for (let valor of nome) {
    console.log(valor);
}

//O For in retorna o índice que retorna a variável original


// Qual é melhor? Dependerá do que você quer fazer. Para arrays qualquer um vai funcionar. O For in retorna o índice e o for o retorna só o valor.

/* Resumindo
For clássico - Geralmente com iteráveis (array ou strings);
For in - Retorna o índice ou chave (string, array ou objetos);
For o - Retorna o valor em si (iteráves, arrays ou strings);

*/

