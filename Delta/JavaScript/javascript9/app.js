let buttons = document.querySelector('button');

buttons.innerText = "Hassan";


let anchor = document.querySelector('a');

anchor.innerHTML = `<u>${anchor.innerText}</u>`;


//querySelectorAll ky liye loop lgani parti hai q ky innerText or innerHTML single ky liye hoty hain 
//poori list ky liye nahi , agar 1 tag pr change dekhna hai to querySelector use kro 


let img = document.querySelector('img');


img.getAttribute('src');


img.setAttribute('src', '/media/hassan3.jpeg');


img.getAttribute('id');


let heading = document.querySelector('h1');

heading.getAttribute('id');


let links = document.querySelectorAll('a');

for(link of links){

    link.style.color= 'red';
}



heading.classList.add('green');
heading.classList.remove('green');
heading.classList.add('purple');

heading.classList.contains('purple');

console.dir( heading.classList.contains('purple'));

console.dir(heading.classList.toggle('green'));
console.dir(heading.classList.toggle('green'));
console.dir(heading.classList.toggle('purple'));



buttons.classList.toggle('green');
buttons.classList.toggle('purple');

console.dir(buttons.classList);

buttons.classList.remove('btn');
buttons.classList.remove('green');
buttons.classList.remove('purple');






















