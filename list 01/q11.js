// quantidade de maiores que a media

const maiores = (n1, n2, n3) => {

    const media = (n1+n2+n3)/3

    if (n1 == n2 && n2 == n3) return "Nenhum é maior que a média"
    else {

        if ((n1 > media && n2 > media) || (n1 > media && n3 > media) || (n1 > media && n3 > media)) return "2 maiores que a média"    
        
        else{

            return "1 é maior que a média"
        }
    }
}

const resultado = maiores(2,1,2)

console.log(resultado)