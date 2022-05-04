

//this global
let empresa = this;

const aluno = {
    nome: 'Glaucio',
    matricula: 123,
    executar: function(){
        return this;
    },
};

console.log(aluno.executar());

//use strict por regra.
console.log("Quem é o this no contexto global", empresa);


//this dentro da função
function globalObj() {
    // "use strict";
    return this;
}

document.write("<h2>Vai escrever aqui</h2>");

document.write(globalObj());



const novaFuncao = (a, b) => {
    console.log("Chamando de dentro de uma arrow function");
    //interpolação 
    console.log(`Exibindo o valor de ${a}`);
    //concatenação
    console.log("Exibindo o total de caracteres " + b.length);
}

const funcao3 = (a) => console.log( `Exibindo o total de caracteres de ${a.length}`);

funcao3("Paola");

const carros = (primeiro, segundo, ...restante) => {
        console.log(
            `Os carros informados foram: ${primeiro}, ${segundo}. Todos os demais são: ${restante.join(", ")
        }`
    );
};

carros(
    "DelRey", 
    "Brasilia",
    "Variant",
    "D-20",
    "Opala"
);


const frutas = ["Guaraná", "Cupuaçu", "Açaí"];
const todasFrutas = [...frutas, "banana", "abacaxi"];

console.log("Todas as frutas", todasFrutas)



let a = 50;
let b = 100;

const [primeiro, segundo, terceiro, ...resto] = [a, b, 100, 200, 300]
console.log("Exibindo o primeiro: ", primeiro);
console.log("Exibindo o resto: ", resto);

const MeuArray = [20, 30, 40, 50];
console.log(MeuArray, MeuArray.join(" - "));

// const [p, s, t, q] = MeuArray;
// const [p, ...q] = MeuArray.reverse(); 
// console.log("Exibindo o quatro elemento", q);
const [q, ...p] = MeuArray.reverse();
console.log(p);

// globalObj().alert("Oiee!");

// function escreve(nome, sobrenome){
//     console.log(`${nome} ${sobrenome}`);
//     const a = sobrenome;

//     if (a === null) {
//         console.log("a é nulo");
//         console.log("valor de a", a, "\n");
//     }
// }

// escreve("Paola");

// function soma(a, b) {
//     return Number(a) + Number(b);
// };

// const exibe = function (x){
//     console.log(x);
// }

// console.log(exibe("chocolate"))

// //Contexto: navegador. this depende do contexto.

// function quemEoThis() {
//     console.log(this === window);
// }

// function quemEoThisEstrito() {
//     "use strict";
//     console.log("strict");
//     console.log(this === window);
// }

// quemEoThis();
// quemEoThisEstrito();

// function Exibe2() {
//     this.a = 50;
// }

// const novoObjeto = new Exibe2();
// console.log(novoObjeto.a);




// //objeto literal
// const Pessoa = {
//     velocidade: 0,
//     andar: function () {
//         console.log('velocidade atual', this.velocidade);
//     },
//     exibeNome: function () {
//         this.andar();
//         console.log(`Nome: ${this.nome} velocidade: ${this.velocidade}`);
//     }
// }

