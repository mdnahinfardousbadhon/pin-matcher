
function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if(pinString.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
}



function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}


document.getElementById('key-pad').addEventListener('click', function(event){
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-number');
    if(isNaN(number)) {
        /* console.log(number); */
        if(number == 'C') {
            calcInput.value = '';
        }
    }
    else {
        /* const calcInput = document.getElementById('typed-number'); */
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
    

});

function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumber = document.getElementById('typed-number').value;
    const failError = document.getElementById('notify-fail');
    const successMessage = document.getElementById('notify-success');
    if(pin == typedNumber) {
        successMessage.style.display = 'block';
        failError.style.display = 'none';
    }
    else {
        failError.style.display = 'block';
        successMessage.style.display = 'none';
    }
}