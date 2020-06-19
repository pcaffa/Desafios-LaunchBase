//Usuários e tecnologias
//Crie um programa que armazena um array de usuários (objetos), cada usuário tem um nome e suas tecnologias (novo array)

const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
  ];

//Percorra a lista de usuários com uma estrutura de repetição imprimindo em tela as informações dos usuários

//sem espaços na vigula entre as tecnologias
/*for(let i=0;i<usuarios.length;i++) {
    console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias}`);
}*/

//com espaço após a virgula entre as tecnologias
for(let usuario of usuarios) {
    console.log(`${usuario.nome} trabalha com ${usuario.tecnologias.join(", ")}`)

}