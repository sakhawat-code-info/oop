

function BankAccount(accountHolderName, firstBalance = 0) {

    this.accountHolderName = accountHolderName;
    this.accountNumber = Date.now();
    this.firstBalance = firstBalance;


    this.diposit = function (dipositAmount) {
        this.firstBalance += dipositAmount;
    }

    this.withdrow = function (withdrowAmount) {
        this.firstBalance -= withdrowAmount;
    }

}


const person = [];
// account form information 
const accountOpenForm = document.querySelector('#accountOpenForm');
const accountHolderName = document.querySelector('#name');
const firstBalance = document.querySelector('#firstBalance');

accountOpenForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const persons = new BankAccount(accountHolderName.value, +firstBalance.value)
    person.push(persons);
})


console.log(person);


//diposit form 
const dipositForm = document.querySelector('#dipositForm');
const accountNumber = document.querySelector('#accountNumber');
const dipositBalance = document.querySelector('#dipositBalance');

dipositForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const persons = person.find((persons) => persons.accountNumber === +accountNumber.value);

    persons.diposit(+dipositBalance.value);

    console.log(persons);

});


const withdrowForm = document.querySelector('#withdrowForm');
const wAccountNumber = document.querySelector('#wAccountNumber');
const withdrowBalance = document.querySelector('#withdrowBalance');


withdrowForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const withPersonAccount = person.find( (persons) => persons.accountNumber === +wAccountNumber.value );
    const withroAccountCurrentBalance = withPersonAccount.firstBalance;

    // console.log(withroAccountCurrentBalance);

    // withPersonAccount.withdrow(+withdrowBalance.value);

    
    if (withroAccountCurrentBalance > 500 && (withroAccountCurrentBalance - withdrowBalance.value > 500)) {
        withPersonAccount.withdrow(+withdrowBalance.value);
    } else {
        console.log(`your current balance is ${withroAccountCurrentBalance} tk. Minimun balace need 500 `);
        
    }

    console.log(person);


})



