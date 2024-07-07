
// tipos de datos primitivos, paso por valor 
let x = 1 
let y = 'hola' 
let z = null 

let a = x 
let b = y 
let c = z 

console.log(a,b,c,x,y,z)

a = 12 
b =  'platzi'
c = undefined 

//datos complejos, creacion de objetos  
let fruta = ['manzana']
// agregar un valor a un arreglo 
fruta.push('Pera')
console.log(fruta)

//paso por referencia, se asigna directamente un 
//valor a memoeria 

let panes = ['🥐']
let copiadepanes = panes 
panes.push ('🥖')
console.log(panes ,copiadepanes)

//paso por referencia con objetos, complejo 

let frutas = {
    naranja: '🍊'
}
let vegetales = fruta 

vegetales.naranja = '🥦' 
console.log(frutas)

//Se crea una nueva direccion en memoria 
let ropa =
{
    blusa: '👚'
}

ropa.pantalo = '👖'
console.log (ropa)

