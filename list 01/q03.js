// Checar se é triângulo

const triangulo = (lado1, lado2, lado3) => {

    if (lado1 == 0 || lado2 == 0 || lado3 == 0) return "Não é triângulo"
    
    else{

        if ((lado1 < lado2 + lado3) && (lado2 < lado1 + lado3) && (lado3 < lado2 + lado1)) return "É triângulo"

        else return "Não é triângulo"
    }

}

const resultado = triangulo(1, 5, 5)

console.log(resultado)