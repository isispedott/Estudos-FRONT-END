//Escreva uma função que recebe dois números e retorne o maior deles.

/*function max(x, y) {
    if (x > y) {
        return x
    } else {
        return y
    }
}

console.log(max(1, 2)); */

//um jeito mais prático de fazer:

const max = (x, y) => x > y ? x : y;
console.log(max(10, 20));
     



