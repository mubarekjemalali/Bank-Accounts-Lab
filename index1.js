let accName;
let amount;
let createAccountBtn = document.getElementById("create-account-btn");
let formBtn = document.getElementById("createAccount");
formBtn.onsubmit = newAccountInfo();



class Account {
    static accountInfoList = [];

    constructor() {
        let name = document.getElementById("drop-down");
        let amount = document.getElementById("amount");

        this.name = name;
        this.balance = amount;

    }

    deposite(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        this.balance -= amount;
    }

}

function newAccountInfo() {
    accName = document.getElementById("drop-down").value;
    amount = document.getElementById("amount").value;

}
console.log(accName);
console.log(amount);

function accounts() {

    let textarea = document.getElementById("textarea");
    textarea.innerHTML = "he";

    for (let i = 0; i < Account.accountInfoList.length; i++) {
        textarea.innerHTML =
            "Account name: ", Account.accountInfoList[i]['name'], ",",
            "Balance: ", Account.accountInfoList[i].balance;
        console.log('Success');
    }
}


