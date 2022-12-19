const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let i = 0;
while (i < numeros.length) {
    let numero = numeros[i];


    if(numero === 2){
        console.log('Pulei o número 2')
        i++;
        continue;
    }

    console.log(numero);

   if (numero === 7) {
    console.log('7 encontrado. Saindo...')
    break;
   }

    i++;
}

//Neste caso ele vai "pular" o 2 e chegar até o 7, cortando os números depois de 7.