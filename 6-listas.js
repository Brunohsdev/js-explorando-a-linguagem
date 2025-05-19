console.log( `Trabalahndo com listas`);
const listasCidades = new Array(
    `Salvador`,
    `São Paulo`, 
    `Rio de janeiro`,
    `Curitiba`
)


//cntl+k+c coloca comentarios, cntl+k+u tira comentarios

listasCidades.push(`João pessoa`);//aidiconando um item na lista

console.log("Destinos possíveis:");
console.log(listasCidades);

listasCidades.splice(1,1);

console.log(listasCidades);

console.log(listasCidades[1]);