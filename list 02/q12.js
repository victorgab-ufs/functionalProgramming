// repetição de string

const repetir = (str, quantidade) => {

    if (quantidade == 0) return ''

    else {
        
        return str + ' ' + repetir(str, quantidade - 1)
        
    }

}

console.log(repetir('água', 3))