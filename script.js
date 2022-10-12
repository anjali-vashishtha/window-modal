'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btncloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++)   //doubt
    (btnsOpenModal[i].addEventListener('click', function () {
        console.log("button clicked");
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    }));



btncloseModal.addEventListener('click', function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
})
    



