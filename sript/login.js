console.log ("Login functionality Coming")

document.getElementById("Login").addEventListener("click", function(){

    // Get number 
    const Number = document.getElementById("input-number")
    const Contact = Number.value;
    console.log (Contact);

    // Get Pin 
    const pin = document.getElementById("input-pin");
    const Pin = pin.value;
    console.log (Pin);

    // Condition 
    if (Contact == "01234567890" && Pin == "1234"){
        alert ("Login Successful")

        window.location.assign("./Home.html")
        // window.location.assign()
    }
    else {
        alert ("Login Failed");
        return;
    }
})