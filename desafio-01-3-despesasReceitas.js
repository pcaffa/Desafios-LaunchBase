//Soma de despesas e receitas
//Crie um programa que calcula a soma de receitas e despesas de usuários e no fim retorna o saldo (receitas - despesas).
//utilize o array do documento.

const usuarios = [
    {
      nome: "Salvio",
      receitas: [115.3, 48.7, 98.3, 14.5], //276.8
      despesas: [85.3, 13.5, 19.9] //118.7
    },
    {
      nome: "Marcio",
      receitas: [24.6, 214.3, 45.3],
      despesas: [185.3, 12.1, 120.0]
    },
    {
      nome: "Lucia",
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [450.2, 29.9]
    }
  ];

  //Percorra o array de usuários e para cada usuário chame uma função 
  //chamada calculaSaldo que recebe como parâmetro as receitas e despesas do usuário:
  //No fim exiba todos usuários em telas, seu respectivo saldo e SE o saldo é POSITIVO ou NEGATIVO:
  //Fulano possui saldo POSITIVO de 43.3
  //Sicrano possui saldo NEGATIVO de -90.3
  for(let i=0; i < usuarios.length;i++) {
    let saldo = calculaSaldo(usuarios[i].receitas ,  usuarios[i].despesas);
    if(saldo<0){
      console.log(`${usuarios[i].nome} possui saldo NEGATIVO`)
    } else {
      console.log(`${usuarios[i].nome} possui saldo POSITIVO`)
    }
  }

//A função calculaSaldo deve utilizar a função somaNumeros para calcular a soma de receitas e despesas 
//e no fim retornar o saldo do usuário, ou seja receitas - despesas.
  function calculaSaldo(receitas, despesas) {
    let totalReceita = somaNumeros(receitas);
    let totalDespesa = somaNumeros(despesas);

    return (totalReceita - totalDespesa)
  }

  //Crie uma segunda função que recebe como parâmetro um array de números 
  //e retorna a soma deles e use-a para calcular a soma de receitas e despesas dentro da função calculaSaldo:
  function somaNumeros(numeros) {
    let amountNumbers = numeros.length;
    let soma = 0;
      for(i=0; i< amountNumbers;i++){
        soma = soma + numeros[i];
      }
    return soma;
  }