// raizes da equacao do segundo grau 

// funcao que recebe os coeficientes de uma equacao do segundo grau
const raizes = (a, b, c) => {
    
    // calculo da raiz menor, considerando o resultado negativo da raiz do discriminante na formula de bhaskara
    const raizMenor = ((b*(-1))-((b**2)-(4*a*c))**0.5)/(2*a)
    // calculo da raiz maior, considerando o resultado positivo da raiz do discriminante na formula de bhaskara
    const raizMaior = ((b*(-1))+((b**2)-(4*a*c))**0.5)/(2*a)

    // checa se as raizes sao iguais e retorna um unico valor
    if (raizMenor == raizMaior) return `Raíz Única: ${raizMaior}`
    else{
        // retorna valores separados em caso de raizes diferentes
        return `Raíz Menor: ${raizMenor}\nRaíz Maior: ${raizMaior}`
    }
    
}
// chamada da funcao
const resultado = raizes(1,1,-6)
// saida
console.log(resultado)
