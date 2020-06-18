const user = {
  name: "Mariana",
  transactions: [],
  balance: 0
}

const transactions = [
    { type: 'credit', value: 50 },
    { type: 'credit', value: 120 },
    { type: 'debit', value: 80 },
    { type: 'debit', value: 30 }
]

  function createTransaction (transaction) {
      user.transactions.push(transaction)      
      let totalBalance = transaction.value
      let balance = user.balance

      if(transaction.type ==='credit'){
        totalBalance = user.balance + totalBalance        
      } else {
        totalBalance = balance - totalBalance        
      }

      user.balance = totalBalance
  }

  function makeTransations() {
    for(let transaction of transactions) { 
      createTransaction(transaction)
    }
  }

  function getHigherTransactionByType (typeTransaction) {
    let value = 0
    let higherTransactionByType = 0

    for(let transaction of transactions) {
      
      if(transaction.type==="credit") {
        if(value < transaction.value) {          
          value = transaction.value
          higherTransactionByType = transaction  
        }
      } else {
          if(value < transaction.value) {
            value = transaction.value
            higherTransactionByType =transaction
          }
        }
    }
    //console.log(`{type: '${typeTransaction}', value: ${value}}`)
    console.log(higherTransactionByType)
  }

  function getAverageTransactionValue () {
    let totalTransactionValue = 0
    let averageTransactionValue = 0

    for(let transaction of transactions) {
      totalTransactionValue = transaction.value + totalTransactionValue 
      averageTransactionValue = totalTransactionValue / transactions.length
    }

    return averageTransactionValue;
  }

  /*



  function getTransactionsCount () {

  }*/

  makeTransations()
  console.log(user.balance)

  getAverageTransactionValue()
  console.log(getAverageTransactionValue())

  //getHigherTransactionByType("credit")
  getHigherTransactionByType("debit")