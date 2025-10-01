// inverter palavra

const inverter = (str) => {

    if (str.length == 0) return ''
    
    const [x, ...xs] = str

    return inverter(xs)+[x]
}

console.log(inverter('socorram'))