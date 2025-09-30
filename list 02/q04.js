// fatorial

const fatorial = (num) => {

    if (num == 0) return 0

    else {
        
        if (num == 1) return 1

        else {

        return num*fatorial(num-1)
        }
    }

}

const resultado = fatorial(5)

console.log(resultado)