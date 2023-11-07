
let button = document.getElementById('check');
let resultDiv = document.getElementById('result');
button.addEventListener('click', prime);


function prime() {
let number = document.getElementById('num').value;
let isPrime = true;

// check if number is equal to 1
if (number === 1) {
    resultDiv.innerHTML = "1 is neither prime nor composite number.";
}

// check if number is greater than 1
else if (number > 1) {

    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        resultDiv.innerHTML = `${number} is a prime number`;
    } else {
        resultDiv.innerHTML = `${number} is a not prime number`;
    }
}

// check if number is less than 1
else {
    resultDiv.innerHTML = "The number is not a prime number.";
}

}