let valores = [8, 1, 7, 4, 2, 9]
valores.sort()
/* console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5]) */

console.log(valores) // forma padrão

/* for(let pos=0; pos < valores.length; pos++) { // forma personalizada
    console.log(`A posição ${[pos]} tem o valor ${valores[pos]}`)
} */

for(let pos in  valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}