console.log( `\nTrabalhando com condicionais`);
const listasCidades = new Array(
    `Salvador`,
    `São Paulo`, 
    `Rio de janeiro`,
    `Curitiba`
)


const idadeComprador = 10;
let estaAcompanhada = true;
let temPAssagemCOmprada = false;
const destino = "Curitiba";
//cntl+k+c coloca comentarios, cntl+k+u tira comentarios

listasCidades.push(`João pessoa`);//adiconando um item na lista

console.log("Destinos possíveis:");
console.log(listasCidades);
const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;
let contador = 0;
let destinoExiste = false;
while (contador < listasCidades.length){
    if(listasCidades[contador] == destino){
        destinoExiste = true;
        break;
    }else{
        destinoExiste == false;
    }
    contador++;
}
console.log("Destino existe: ", destinoExiste);
if(podeComprar && destinoExiste){
    console.log("Boa Viagem");
}
else{
    console.log("Desculpe tivemos um erro!");
}

for(let i = 0; i > listasCidades.length; i++){
    if(listasCidades[i] == destino){
        destinoExiste = true;
        
    }else{
        destinoExiste == false;
    }
}