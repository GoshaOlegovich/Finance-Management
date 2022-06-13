// Wallets obj

const wallets = [{
    prop: 'monobank',
    amount: 10000,
    currency: '₴'
}, ]

// Wallets HTML

const walletsPlace = document.querySelector('.sidebar__details');
const newWallet = document.createElement("li");
newWallet.className = 'sidebar__prop';


/*--- Transactions ---*/

// Data - Table

const dataTable = document.querySelector('.data__table');





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





// Create transaction (Form)

const form = document.querySelector('.modal-form__new-transaction'),
    inputType = document.querySelector('.modal-form__type'),
    inputAmount = document.querySelector('.modal-form__amount');






form.addEventListener('submit', (e) => {
    e.preventDefault()
    const transactions = [];
    let inpType = inputType.value;
    let inpAmount = +inputAmount.value;
    let obj = newTransaction(inpAmount, inpType);
   
    transactions.push(obj)
    
    transactionInject(obj)
    сountingTransaction(wallets[0].amount, `${inpType}`, transactions)
    
    form.reset();
})



const newTransaction = (v1, v2) => {
    const obj = {
        amount: v1,
        type: v2
    }
    return obj;
}






// Transaction inject

const transactionInject = (arr) => {
    const transactionRow = document.createElement('tr');
    transactionRow.className = 'data__table-row';
    let transaction =
        `
            <td class="data__table-data">${arr.type} </td>
            ${inOrOut(arr)}
            `
    transactionRow.innerHTML = transaction;

    dataTable.appendChild(transactionRow);


}



const inOrOut = (arr) => {
    if (arr.type === 'income') {
        
        return `<td class="data__table-data"> ${arr.amount} ₴</td>`;
       
    } if (arr.type === 'outcome')  {
      
        return `<td class="data__table-data"> - ${arr.amount} ₴</td>`;
    }
}




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