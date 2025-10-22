// quantidade de maiores que a media

// funcao que recebe tres numeros, calcula a media entre eles e compara quantos sao maiores que a media obtida
const maiores = (n1, n2, n3) => {
    // calculo da media
    const media = (n1+n2+n3)/3
    // verifica se os numeros sao todos iguais (nao ha maior que a media)
    if (n1 == n2 && n2 == n3) return "Nenhum é maior que a média"
    // caso nao...
    else {
        // testa se dois sao maiores que a media de acordo com as tres situacoes possiveis
        if ((n1 > media && n2 > media) || (n1 > media && n3 > media) || (n1 > media && n3 > media)) return "2 maiores que a média"    
        // ultimo caso: apenas um eh maior que a media
        else{

            return "1 é maior que a média"
        }
    }
}
// chamada da funcao
const resultado = maiores(2,1,2)
// saida
console.log(resultado)
