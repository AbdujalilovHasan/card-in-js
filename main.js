const products = {
    img: "https://flags-hasan.vercel.app/img/1280px-Flag_of_Germany.svg.png",
    title: "Germany",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, esse."
};

let body = document.querySelector('body');
const cardContainer = document.createElement('div');
cardContainer.classList.add('card-container');

let imgElement = document.createElement('img');
imgElement.src = products.img;

let titleElement = document.createElement('h2');
titleElement.textContent = products.title;

let titleText = document.createElement('p');
titleText.textContent = products.text;

cardContainer.appendChild(imgElement);
cardContainer.appendChild(titleElement);
cardContainer.appendChild(titleText);

body.appendChild(cardContainer);

let btn = document.createElement('button')
cardContainer.appendChild(btn)
btn.textContent = 'Button';

btn.addEventListener('mouseover', () => {
    btn.style.border = '1px solid #000';
    btn.style.transform = 'scale(1.1)';
});

btn.addEventListener('mouseout', () => {
    btn.style.border = '';
    btn.style.transform = '';
});

btn.addEventListener('mousedown', () => {
    btn.style.backgroundColor = 'red';
});



// styles

cardContainer.style.justifyContent = 'center'
cardContainer.style.background = "#888";
cardContainer.style.padding = '15px';
cardContainer.style.width = '270px';
cardContainer.style.height = '340px';

btn.style.background = '#234';
btn.style.color = '#fff';
btn.style.border = 'none';
btn.style.padding = '8px 22px';
btn.style.marginLeft = '80px';
btn.style.marginTop = '25px';