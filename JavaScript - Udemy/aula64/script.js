/*try {
    //é executada quando não há erros
} catch (e) {
    //
} finally {
    //sempre será executado
}




*/

function retornaHora(data){
    if (!(data instanceof Date)) {
        console.log('Não é')
    }
}

retornaHora('asada')