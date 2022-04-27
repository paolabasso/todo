console.log("Vai inter!");
console.info("Vai inter!");
console.error("Vai Inter!");
console.warn("Vai Inter!");

// ###########################################
 const nome = "Paola Basso";

 let email = "paolasbasso@gmail.com"

 console.log(`Nome: ${nome} Email: ${email}`);

// ###########################################

if (nome == "Paola Basso") {
    console.log("é igual");
}



escreve(`Seja bem-vindo ${nome}`);
escreve("Treinamento HTML5, CSS3 e JS");


function escreve(x) {
    console.log("Frase: " + x);
}