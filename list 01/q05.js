// distancia euclidiana

const distancia = (x1, y1) => (x2, y2) => (((x1-x2)**2)+((y1-y2)**2))**0.5

const resultado = distancia(1,1)(1,5)

console.log(resultado)