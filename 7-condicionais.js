console.log( `Trabalhando com condicionais`);
const listasCidades = new Array(
    `Salvador`,
    `São Paulo`, 
    `Rio de janeiro`,
    `Curitiba`
)


const idadeComprador = 10;
let estaAcompanhada = 's';
const temPAssagemCOmprada = 's'
//cntl+k+c coloca comentarios, cntl+k+u tira comentarios

listasCidades.push(`João pessoa`);//aidiconando um item na lista

console.log("Destinos possíveis:");
console.log(listasCidades);




// if (idadeComprador >= 18){
//     console.log("Comprador maior de idade");
//     listasCidades.splice(1,1);//removendo um item
// }
// else{
//     console.log("a pessoa é menor de idade")
//     if(estaAcompanhada == 's'){
//         console.log("comprador está acompanhado, venda autorizada!")
//         listasCidades.splice(1,1);//removendo um item
//     }
//     else{
//     console.log("não é maior de idade, não vender");
// }
// }
// console.log(listasCidades);

if (idadeComprador <= 18 || estaAcompanhada == 's'){
    console.log("Passagem comprada!!!")
    listasCidades.splice(1,1);//removendo um item
}
else{
    console.log("a pessoa é menor de idade");
    if(estaAcompanhada == 's'){
    }
    else{
    console.log("não é maior de idade, não vender");
}
}
console.log("Embarque \n\n");
if(idadeComprador >=18 && temPAssagemComprada){
    console.log("Boa viagem!!!");
}
else{
    console.log("Você não pode embarcar!")
}


//fazer uma html e css para isso e colocar isso no seu repositório do gtihub