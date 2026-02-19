document.getElementById("cashout-btn").addEventListener("click", function(){
    // match agent number
    const AgentNumberInput = document.getElementById("input-agent-number");
    const agentNumber = AgentNumberInput.value;
    console.log (agentNumber)
    if (agentNumber !== 11){
        alert ("Invalid agent Number");
        return;
    }

    // cashout amount 

    const CashOutInput = document.getElementById("input-amount");
    const Amount = CashOutInput.value;
    console.log (Amount)

    // Balance 

    const BalanceElement = document.getElementById("availableBalance");
    const Balance = BalanceElement.innerText;
    console.log (Balance);

    // New balance 

    const newBalance = Number(Balance) - Number(Amount);
    

    if (newBalance < 0) {
        alert("Invalid Amount")
        return;
    }

    const cashoutPinInput = document.getElementById("input-withdraw-pin");
    const Pin = cashoutPinInput.value;
    if (Pin === "1234"){
        alert("Cash Out Successful")
        console.log (newBalance);
        BalanceElement.innerText = newBalance;
    }
    else{

    }

})