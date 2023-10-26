// document.body.innerHTML = "sus";


//Access the DOm node with 
let heading = document.getElementById('heading');
//Modify the DOM element
heading.textContent = 'Hello, DOM';

let content = document.getElementById('content');
content.innerHTML = 'This paragraph is updated dynamically';
// content.innerHTML = <h2>DOM is awesome!</h2>

let btn = document.getElementById('btn');
btn.addEventListener('click', function () {
    alert('Button is clicked');
})

