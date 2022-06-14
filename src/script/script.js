/* Main HTML variables */

const dataTable = document.querySelector('.data__table'); // Data - Table
const walletsPlace = document.querySelector('.sidebar__details'); // Sidebar - Wallets place

const form = document.querySelector('.modal-form__new-transaction'), // Form
    inputType = document.querySelector('.modal-form__type'),
    inputDate = document.querySelector('.modal-form__date'),
    inputAmount = document.querySelector('.modal-form__amount');

/* Main obj */

const transactions = [];

const wallets = [{
    prop: 'monobank',
    amount: 10000,
    currency: '₴'
}, ]



/*--- Functions ---*/


//Money Flow

const сountingTransaction = (currentAmount, type, arr) => {

    let currentType = arr.filter(transaction => transaction.type === `${type}`);
    let result = currentType.reduce((total, transaction) => total + transaction.amount, 0);

    if (`${type}` === 'income') {
        wallets[0].amount = currentAmount + result;
    } else {
        wallets[0].amount = currentAmount - result;
    }


    walletToDoc(wallets, 0)
}




// Create transaction 


form.addEventListener('submit', (e) => {
    e.preventDefault()

    const obj = {
        amount: +inputAmount.value,
        type: inputType.value,
        date: inputDate.value,
    }

    transactions.push(obj)
    transactionInject(obj)
    сountingTransaction(wallets[0].amount, `${inputType.value}`, transactions)

    form.reset();
})





// Transaction inject

const transactionInject = (arr) => {
    const transactionRow = document.createElement('tr');
    transactionRow.className = 'data__table-row';

    if (arr.type === 'income') {
        transactionRow.className = 'data__table-row data__table-row--income';

    } else {
        transactionRow.className = 'data__table-row data__table-row--outcome';
    }


    let transaction =
        `
            <td class="data__table-data">${arr.type} </td>
            <td class="data__table-data">${arr.amount}₴</td>
            <td class="data__table-data">${arr.date} </td>
        `;
    
    transactionRow.innerHTML = transaction;
    dataTable.appendChild(transactionRow);


}


// Wallet to document

const newWallet = document.createElement("li");
newWallet.className = 'sidebar__prop';

const walletToDoc = (arr, i) => {

    let walletInfo = `
        <h3 class="sidebar__prop-name">${arr[i].prop}</h3>
        <p class="sidebar__prop-amount">${arr[i].amount} ${arr[i].currency}</p>
        `
    newWallet.innerHTML = walletInfo
    walletsPlace.appendChild(newWallet);
}



walletToDoc(wallets, 0)