function nombrecompleto (name, lastname)
{
    return name + ' ' +lastname 
   
}

//console.log(nombrecompleto('IVonne', 'Dare'))

//console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

function saludo (name, lastname, username)
{

const completename = nombrecompleto(name, lastname)

console.log("Mi nombre es " + completename + ", pero prefiero que me digas " + username + ".");
}

console.log (saludo ('Pelusa', 'Rodriguez','Piciosa'))