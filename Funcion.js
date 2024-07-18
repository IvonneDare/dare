function nombrecompleto (name, lastname)
{
    return name + ' ' +lastname 
   
}

console.log(nombrecompleto('Ivonne', 'Dare'))

// Name y Lastname son parametros son los valores que,
//recibe una funcion cuando se esta creando

//Ivonne Dare, son argumentos que se envian a la fucnion 


function saludo (name, lastname, username)
{
// Se manda a llamadar la funcion nombre completo dentro de la funcion saludo
const completename = nombrecompleto(name, lastname)

console.log("Mi nombre es " + completename + ", pero prefiero que me digas " + username + ".");
}

console.log (saludo ('Pelusa', 'Rodriguez','Piciosa'))