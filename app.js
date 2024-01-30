let secretNumber = 0;
let attempts = 0;
let sortedNumberList = [];
let maxNumber = 10;

function asignTextToElement(element, text) {
    let elementHTML = document.querySelector(element);
    elementHTML.innerHTML = text;
}

function verifyIntent() {
    let userNumber = parseInt(document.getElementById('userValue').value);

    if (secretNumber === userNumber) {
        asignTextToElement('p', `¡Acertaste el número en ${attempts} ${attempts === 1 ? 'intento' : 'intentos'}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (userNumber > secretNumber) {
            asignTextToElement('p', 'El número secreto es menor');
        } else {
            asignTextToElement('p', 'El número secreto es mayor');
        }
        attempts++;
        clearInput();
    }
}

function generateSecretNumber() {
    let generatedNumber = Math.floor(Math.random() * maxNumber) + 1;
    if (sortedNumberList.length === maxNumber) {
        asignTextToElement('p', 'No hay más números disponibles');
    } else {
        if (sortedNumberList.includes(generatedNumber)) {
            return generateSecretNumber();
        } else {
            sortedNumberList.push(generatedNumber);
            return generatedNumber;
        }
    }
}

function clearInput() {
    document.querySelector('#userValue').value = '';
}

function initialConditions() {
    asignTextToElement('h1', 'Juego del número secreto');
    asignTextToElement('p', `Indica un número entre 1 y ${maxNumber}`);
    secretNumber = generateSecretNumber();
    attempts = 1;
}

function restartGame() {
    clearInput();
    initialConditions();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

initialConditions();
