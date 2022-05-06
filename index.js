let createAccountBtn = document.getElementById("create-account-btn");

class Account {
    static accountInfoList = [];

    constructor() {
        let name = document.getElementById("drop-down");
        let amount = document.getElementById("amount");

        this.name = name;
        this.balance = amount;

    }



    accountInfo() {
        let accounts;

        for (let i = 0; i < Account.accountInfoList.length; i++) {
            accounts += "Account name: ", Account.accountInfoList[i]['name'], ",",
                "Balance: ", Account.accountInfoList[i].balance, "\n";
        }
        return accounts;
    }

    deposite(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        this.balance -= amount;
    }

}
//createAccountBtn.onclick = new Account();

function myfuncCreateAcc() {
    var account = new Account;
    Account.accountInfoList.push(account);
    console.log(Account.accountInfoList.length);
}


createAccountBtn.addEventListener("click", myfuncCreateAcc);


// createAccountBtn.onclick = Account.accountInfo;
let textarea = document.getElementById("textarea");
textarea.innerHTML = "Sard";
console.log(textarea);

//textarea.innerHTML = Account.accountInfo;

// function newAccountInfo() {
//     name = document.getElementById("drop-down").value;
//     amount = document.getElementById("amount").value;
//     console.log(amount);

// }
// let textarea = document.getElementById("textarea");
// textarea.innerHTML = Account.accountInfo();

// function accounts() {

//     let textarea = document.getElementById("textarea");
//     textarea.innerHTML = "he";

//     for (let i = 0; i < Account.accountInfoList.length; i++) {
//         textarea.innerHTML =
//             "Account name: ", Account.accountInfoList[i]['name'], ",",
//             "Balance: ", Account.accountInfoList[i].balance;
//         console.log('Success');
//     }
// }


