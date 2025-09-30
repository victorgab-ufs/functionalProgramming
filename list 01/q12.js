// raizes da equacao do segundo grau

const raizes = (a, b, c) => {

    const raizMenor = ((b*(-1))-((b**2)-(4*a*c))**0.5)/(2*a)
    const raizMaior = ((b*(-1))+((b**2)-(4*a*c))**0.5)/(2*a)

    if (raizMenor == raizMaior) return `Raíz Única: ${raizMaior}`
    else{
        
        return `Raíz Menor: ${raizMenor}\nRaíz Maior: ${raizMaior}`
    }
    
}

const resultado = raizes(1,1,-6)

console.log(resultado)