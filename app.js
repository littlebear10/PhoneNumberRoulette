let phoneElement = document.querySelector('.phone > p');
let emailElement = document.querySelector('.email > p');
let fullNameElement = document.querySelector('.full-name > p');
let birthdayElement = document.querySelector('.birthday > p');

let button = document.querySelector('.button > button');

function insertForValid(original, index, insert) {
    return original.substring(0, index) + insert + original.substring(index);
}

function validPhone(phone) {
    let first = insertForValid(phone, 2, ' (');
    let second = insertForValid(first, 7, ') ');
    let third = insertForValid(second, 12, '-');
    let fourth = insertForValid(third, 15, '-');

    return fourth;
}

function writePhone(phone) {
    phoneElement.setAttribute('class', 'found');
    phoneElement.innerHTML = `<a href="tel:${phone}">${validPhone('+' + phone)}</a>`;
}

function writeEmail(email) {
    emailElement.setAttribute('class', 'found');
    emailElement.innerHTML = email;
}

function writeFullName(fullName) {
    fullNameElement.setAttribute('class', 'found');
    fullNameElement.innerHTML = fullName;
}

function writeBirthday(birthday) {
    birthdayElement.setAttribute('class', 'found');
    birthdayElement.innerHTML = birthday;
}

function getRandomPhone() {
    fetch('numbers.json').then(response => response.json()).then((data) => {
        let allPhones = data.map(Object.values);
        let randomPhone = allPhones[Math.floor(Math.random() * allPhones.length)];
        
        if (randomPhone[0]) {
            writePhone(randomPhone[0]);
        } else {
            phoneElement.setAttribute('class', 'not-found');
            phoneElement.innerHTML = 'не найдено';
        }

        if (randomPhone[1]) {
            writeEmail(randomPhone[1]);
        } else {
            emailElement.setAttribute('class', 'not-found');
            emailElement.innerHTML = 'не найдено';
        }

        if (randomPhone[2]) {
            writeFullName(randomPhone[2]);
        } else {
            fullNameElement.setAttribute('class', 'not-found');
            fullNameElement.innerHTML = 'не найдено';
        }

        if (randomPhone[3]) {
            writeBirthday(randomPhone[3]);
        } else {
            birthdayElement.setAttribute('class', 'not-found');
            birthdayElement.innerHTML = 'не найдено';
        }
    }); 
}

button.onclick = () => {
    getRandomPhone();
}