//const tresHoras = 60 * 60 * 3 * 1000;
//const umDia = 60 * 60 * 24 * 1000;
//const data = new Date(0 + tresHoras - umDia);
//const data = new Date(2019, 3); // ano, mês, dia, hora, Metro, segundo, metro/segundo

/*const data = new Date('2019-04-20 20:15:59.100');
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1); //mês começa do zero
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia Semana', data.getDay()); // 0 - Domingo, 6 - Sábado
console.log(data.toString()); */





//const data = new Date(0); // 01/01/1970 Timestamp unix/ época unix
//console.log(data.toString());

function zeroAEsquerda (num){
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear()); 
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/ ${mes} / ${ano} ${hora}:${min}:${seg}`
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);