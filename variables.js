let caja = 'woody'
console.log(caja)

let perro = 'Pelusa'
console.log (perro)

let oso = 'peludo'
console.log(oso)

let gato = 'misifus'
console.log(gato)

// primitivos - inmutable 

let numero = 23 
numero = numero + 10 
console.log(numero)

let esverdadero = true 
esverdadero =  false 
console.log (esverdadero)

// complejos mutables 

//objeto con atributos 
let usuario = {nombre:'ivonne',edad: 35}
usuario.edad = 36 
console.log (usuario)
// se muta el valor al que le cambiamos 

// array -- tienes indices 
let frutas = ['manzana','pera']
frutas [0] = 'sandia'
console.log (frutas)

// funcion 
function cambiarnombre (objeto)
{
    objeto.nombre = ' Nuevo nombre'
}

let persona = {nombre :'Antonio'}
cambiarnombre (persona)
console.log (persona)
