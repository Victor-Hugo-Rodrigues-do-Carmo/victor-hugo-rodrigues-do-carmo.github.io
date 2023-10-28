"use strict";

const links = document.querySelectorAll('.modalx');
const modal = document.getElementById('myModal');
const closeButton = document.querySelector('.close');
const birthdateInput = document.getElementById('birthdate');
const submitButton = document.getElementById('submitButton');

function openModal() {
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

submitButton.disabled = true;

birthdateInput.addEventListener("input", function() {
    if (birthdateInput.value.trim() !== "") {
    submitButton.disabled = false;
    } else {
    submitButton.disabled = true;
    }
});

function submitDate() {
    const birthdate = new Date(birthdateInput.value);
    const today = new Date();
    const age = today.getFullYear() - birthdate.getFullYear();

    if (age <= 18) {
        const navElement = document.getElementById('A7');
        if (navElement) {
            const newDiv = document.createElement('div');
            newDiv.classList.add('custom-div');
            newDiv.textContent ='NOT ALLOWED';
            navElement.parentNode.replaceChild(newDiv, navElement);
            navElement.remove();
        }
        closeModal();
    } else {
        closeModal();
        window.location.href = links[0].getAttribute('href');
    }
}

links.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        openModal();
    });
});

closeButton.addEventListener('click', () => {
    closeModal();
});

submitButton.addEventListener('click', () => {
    submitDate();
});