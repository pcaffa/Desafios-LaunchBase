//Construção e impressão de objetos
//Crie um programa que armazena dados da empresa Rocketseat dentro de um objeto chamado empresa.

const empresa = {
    nome: "Rocketseat",
    cor: "Roxo",
    foco: "Programação",
    endereco: {
        rua: "Rua Guilherme Gembala",
        numero: 260
    }
};


//Imprima em tela utilizando console.log o nome da empresa e seu endereço no seguinte formato:
//A empresa Rocketseat está localizada em Rua Guilherme Gembala, 260
//Obs. Para imprimir em tela utilize o formato de template strings, por exemplo
//console.log(`O nome do usuário é ${usuario.nome}`);

console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereco.rua}, ${empresa.endereco.numero}`);