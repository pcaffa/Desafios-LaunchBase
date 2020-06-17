//Cálculo de aposentadoria
//Crie um programa para calcular a aposentadoria de uma pessoa.

//Comece criando constantes para armazenar nome, sexo, idade e contribuicao(em anos), por exemplo:
const nome = "Silvana";
const sexo = "F";
const idade = 48;
const contribuicao = 23;

//O tempo de contribuição mínimo para homens é de 35 anos e, para mulheres, 30 anos;
//Utilizando a regra 85-95, a soma da idade com o tempo de contribuição do homem precisa ser de no mínimo 95 anos, 
//enquanto a mulher precisa ter no mínimo 85 anos na soma;

if ((sexo==="M" && idade>=35) || (sexo==="F" && idade >=30)) {
    if ((sexo==="M" && (idade+contribuicao>=95)) || (sexo==="F" && (idade+contribuicao>=85))) {
        console.log(`${nome}, você pode se aposentar!`)
    } else {
        console.log(`${nome}, você ainda não pode se aposentar!`)
    }
  } else {
    console.log(`${nome}, você ainda não pode se aposentar!`)
  }