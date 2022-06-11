// Wallets obj

const wallets =  [
    {
    prop : 'monobank',
    amount : 20000,
    currency : '₴'
    },
]

// Wallets HTML

const walletsPlace = document.querySelector('.sidebar__details');
const newWallet = document.createElement("li");
      newWallet.className = 'sidebar__prop';


/*--- Transactions ---*/

// Data - Table

const dataTable = document.querySelector('.data__table');




//Data - Transactions obj 

const transactions = [
    {
        reciever : 'UPWORK',
        category : 'Work',
        date : '9 June',
        amount : 200,
    },
    {
        reciever : 'UPWO312321RK',
        category : 'Work',
        date : '9 June',
        amount : 200,
    },
    {
        reciever : 'WORK',
        category : 'Work',
        date : '9 June',
        amount : 2003,
    }
]

// Transaction HTML


// Transaction inject

const transactionInject = () => {
    for (i = 0; i < transactions.length; i++) {
        const transactionRow = document.createElement('tr');
        transactionRow.className = 'data__table-row';
        let transaction  =
        `
        <td class="data__table-data">${transactions[i].reciever}</td>
        <td class="data__table-data">${transactions[i].category}</td>
        <td class="data__table-data">${transactions[i].date}</td>
        <td class="data__table-data">${transactions[i].amount}$</td>
        
        `
        transactionRow.innerHTML = transaction;
        
        dataTable.appendChild(transactionRow)
       
    }
 
}
transactionInject()




// <!-- <tr class="data__table-row data__table-row--income">
// <td class="data__table-data">UPWORK</td>
// <td class="data__table-data">Work</td>
// <td class="data__table-data">9 June</td>
// <td class="data__table-data">200$</td>
// </tr>






// Wallet to document

const walletToDoc = (arr, i) => {  
        let walletInfo = `
        <h3 class="sidebar__prop-name">${arr[i].prop}</h3>
        <p class="sidebar__prop-amount">${arr[i].amount} ${arr[i].currency}</p>
        `
        newWallet.innerHTML = walletInfo
        walletsPlace.appendChild(newWallet);
}

walletToDoc(wallets, 0)

