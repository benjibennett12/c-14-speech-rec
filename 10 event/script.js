const numberElement = document.getElementById('number');
const incrementBtn = document.getElementById('increaseBtn');
const decrementBtn = document.getElementById('decreaseBtn');


let number = 0;

function updateNumber() {
    numberElement.textContent = number;
}

increaseBtn.addEventListener('click', function () {
    number++;
    updateNumber()
})

decreaseBtn.addEventListener('click', function () {
    number--;
    updateNumber()
})