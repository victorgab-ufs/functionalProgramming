// distancia euclidiana

// funcao currificada que tem como parametros dois pares ordenados e calcula a distancia entre eles
const distancia = (x1, y1) => (x2, y2) => (((x1-x2)**2)+((y1-y2)**2))**0.5
// chamada da funcao
const resultado = distancia(1,1)(1,5)
// saida
console.log(resultado)
