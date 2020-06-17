//Busca por tecnologia
//Baseado no desafio anterior, utilize a mesma lista de usuários construída.

//Crie uma função que recebe os dados de um objeto de usuário 
//e retorna SE o usuário trabalha com CSS ou não. 
//Essa função deve retornar um boolean true/false.

const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
  ];


function checaSeUsuarioUsaCSS(usuario) {
    let usaCSS = false;
    
    for(let i=0;i<usuario.tecnologias.length;i++){
        if(usuario.tecnologias[i] === "CSS"){            
            usaCSS = true;
        }        
    }

    if(usaCSS){            
        return true;
    } else {
        return false;
    }    
}


for(let i=0;i<usuarios.length;i++) {
    const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i]);

    if(usuarioTrabalhaComCSS) {
        console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`);
    }
}
