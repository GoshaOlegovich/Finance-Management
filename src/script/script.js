// Wallets obj

const wallets = [{
    prop: 'monobank',
    amount: 10,
    currency: '₴'
}, ]

// Wallets HTML

const walletsPlace = document.querySelector('.sidebar__details');
const newWallet = document.createElement("li");
newWallet.className = 'sidebar__prop';


/*--- Transactions ---*/

// Data - Table

const dataTable = document.querySelector('.data__table');




//Data - Transactions obj 

// const transactions = [
//     // {
//     //     amount : 1,
//     //     type: 'income',
//     // },
//     // {

//     //     amount : 1,
//     //     type: 'consumption',
//     // },
//     // {
//     //     amount : 2,
//     //     type: 'income',
//     // },
//     // {
//     //     amount : 1,
//     //     type: 'consumption',
//     // },


// ]

// Create transaction 

class Transaction {
    constructor() {
        this.amount = amount
        this.type = type
    }
}


// Create transaction (Form)

const form = document.querySelector('.modal-form__new-transaction'),
    inputType = document.querySelector('.modal-form__type'),
    inputAmount = document.querySelector('.modal-form__amount');

const transactions = []

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const result = newTransaction(inputType.value, inputAmount.value);
    transactionInject(result)
    console.log(result);
    form.reset();


})

const newTransaction = (v1, v2) =>{
    const obj = {
        amount: v1,
        type: +v2
    }
    return obj;
}





console.log(transactions);
// Transaction inject

const transactionInject = (arr) => {
        const transactionRow = document.createElement('tr');
        transactionRow.className = 'data__table-row';
        let transaction =
            `
            
            <td class="data__table-data">${arr.amount}</td>
            <td class="data__table-data">${arr.type} $</td>
            
            `
        transactionRow.innerHTML = transaction;

        dataTable.appendChild(transactionRow);
}





//Money Flow

const сountingTransaction = (type) => {
    let currentType = transactions.filter(transaction => transaction.type === `${type}`);
    let result = currentType.reduce((total, transaction) => total + transaction.amount, 0);

    return result;

}

const financeFlowsUp = сountingTransaction("income");
const financeFlowsDown = сountingTransaction("consumption");

wallets[0].amount = wallets[0].amount + financeFlowsUp - financeFlowsDown
//


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