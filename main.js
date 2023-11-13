const elementsLi = document.querySelectorAll("li");
const inputElement = document.getElementById('input');
const myWebpage = document.getElementById('letterboxd');

// Função que adiciona a classe 'tech' ao elemento `li` quando este for clicado.

function addClassTech (event) {
    document.querySelector(".tech").classList.remove("tech");
    event.target.classList.add("tech");
}

for(index = 0; index < elementsLi.length; index += 1) {
    elementsLi[index].addEventListener('click', addClassTech);
}

// Função que ao digitar na caixa de texto, altere o texto do elemento com a classe 'tech'.
function movieName(event) {
    document.querySelector(".tech").innerText = event.target.value;
}

inputElement.addEventListener('input', movieName);

// Função que ao clicar duas vezes em 'Meu top 3', redirecione para meu letterboxd.
letterboxd.addEventListener('dblclick', () => {
    window.location.replace("https://letterboxd.com/mellalmeida/")
});

// Função que ao passar o mouse sobre 'Meu top 3', altere a cor do mesmo.
function top3Color(event, color) {
    event.target.style.color = color;
}

myWebpage.addEventListener('mouseover', () => top3Color(event, "#2fc18c"));
myWebpage.addEventListener('mouseout', () => top3Color(event, "white"));