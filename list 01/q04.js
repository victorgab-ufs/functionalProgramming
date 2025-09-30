// classificar triângulo

const triangulo = (lado1, lado2, lado3) => {

    if (lado1 == lado2 && lado2 == lado3) return "o triangulo e equilatero"
    else {

        if (lado1 != lado2 && lado2 != lado3 && lado1 != lado3) return "o triangulo e escaleno"

        else return "o triangulo e isosceles"
    }

}

const resultado = triangulo(2,3,1)

console.log(resultado)