const pessoa = {
    nome:'Luiz',
    sobrenome: 'Santos',
    idade: 30,
    endereco: {
        rua: 'Avenida Brasil',
        numero: 320,



    }
};


//Atribuição via desestruturação
const {nome= '', sobrenome} = pessoa
console.log(nome, sobrenome); 