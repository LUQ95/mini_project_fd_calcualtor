function calculateMaturityAmount() {
    //Get inputs values from the form elements

    const principle = parseFloat(document.getElementById('principle').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value);
    const tenure = parseFloat(document.getElementById('tenure').value);

    //perform the calcualtion

    const maturityAmount = principle + (principle * interestRate * tenure)/100;

    //Display the result

    document.getElementById('result').innerText = `Maturity Amount: ${maturityAmount.toFixed(2)}`

}

//Attach the event listener to the calculate Button
document.getElementById('calculatorBtn').addEventListener('click', calculateMaturityAmount);