function calculateTip() {
    const billAmount = parseFloat(document.getElementById('billAmount').value);
    const tipPercentage = parseFloat(document.getElementById('tipPercentage').value);
    
    if (isNaN(billAmount) || billAmount <= 0) {
        alert('Please enter a valid bill amount');
        return;
    }
    
    const tipAmount = billAmount * tipPercentage;
    const totalAmount = billAmount + tipAmount;
    
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        TIP : ₹ ${tipAmount.toFixed(2)} <br>
        TOTAL : ₹ ${totalAmount.toFixed(2)}
    `;
}

function clearFields() {
    document.getElementById('billAmount').value = '';
    document.getElementById('tipPercentage').value = '0.15';
    document.getElementById('result').innerHTML = '';
}