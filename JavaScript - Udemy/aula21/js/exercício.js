let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);




//outra solução, criando variável temporária

/*const varAtemp = varA; //salvei o valor de A em uma variável temporária;

varA = varB;
varB = varC;
varC = varAtemp;


console.log(varA, varB, varC); */