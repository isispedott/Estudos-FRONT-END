/*const nome01 = 'Luiz';
const sobrenome01 = 'Miranda';
const idade01 = 25;

const nome02 = 'Maria';
const sobrenome02 = 'Oliveira';
const idade02 = 55; */

//há uma forma mais fácil para fazer isso

/*function criaPessoa (nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }


}

const pessoa1 = criaPessoa('Luiz', 'Otávio', 25)
const pessoa2 = criaPessoa('Maria', 'Oliveira', 55)
const pessoa3 = criaPessoa('Carlos', 'Silva', 34)



console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome)*/

const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Oliveira',
    idade: 25


fala() {
    console.log(`${this.nome} ${this.sobrenome} está falando Olá`)
}

incrementaIdade() {
    this.idade++ 
}

};

pessoa1.fala()
pessoa1.incrementaIdade();
pessoa1.fala();
