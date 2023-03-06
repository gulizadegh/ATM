
let firstName = String(prompt("Enter your name"));

let surName = String(prompt("Enter your surname"));

let atmOperations = Number(prompt("Select the operation you want to perform 1-to show the money in your account 2-adding money to the account 3-withdraw money from your account"))

let balance = 1050;

selectNumber(firstName, balance)

function selectNumber(firstName, balance) {

    if (atmOperations === 1) {

        alert(balance)

    }
    else if (atmOperations === 2) {
        let inPutBalance = Number(prompt("Write the amount"))
        balance += inPutBalance
        alert(balance)
        return
    }

    else if (atmOperations === 3) {
        let withDrawBalance = Number(prompt("Write the amount you want to withdraw"))
        if (withDrawBalance > balance) {
            alert("There was not enough money in the balance")
            return
        }
        else {
            balance -= withDrawBalance
            alert(balance)
            return
        }


    }
    else {
        firstname = prompt("Please type in a correct number");
    }

}




