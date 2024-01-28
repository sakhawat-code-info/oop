

function BankAccount (accountHolderName, firstBalance = 0) {

        this.accountHolderName = accountHolderName;
        this.accountNumber = Date.now();
        this.firstBalance = firstBalance;


        this.diposit = function (dipositAmount) {
            this.firstBalance += dipositAmount;
        }

        this.withdrow = 
}


const persons = [];
// account form information 
const accountOpenForm = document.querySelector('#accountOpenForm');
const accountHolderName = document.querySelector('#name');
const firstBalance = document.querySelector('#firstBalance');

accountOpenForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const person = new BankAccount(accountHolderName.value, +firstBalance.value)
    persons.push(person);
})


console.log(persons);