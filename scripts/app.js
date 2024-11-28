let apiEndpoint = "https://thesimpsonsquoteapi.glitch.me/quotes";

async function character(url) {
    const response = await fetch(url);
    const info = await response.json();
    makeCharacter(info[0]);
}

const makeCharacter = (json) => {
    const containerCharacter = document.getElementById("container-character");

    containerCharacter.innerHTML = "";

    const nameCharacter = document.createElement("h2");
    nameCharacter.classList.add("name-character");
    nameCharacter.textContent = json.character;

    const imgCharacter = document.createElement("img");
    imgCharacter.classList.add("img-character");
    imgCharacter.alt = json.character;
    imgCharacter.src = json.image;

    const quoteCharacter = document.createElement("p");
    quoteCharacter.classList.add("quote-character");
    quoteCharacter.textContent = json.quote;

    containerCharacter.appendChild(imgCharacter);
    containerCharacter.appendChild(nameCharacter);
    containerCharacter.appendChild(quoteCharacter);
};

const generateCharacter = document.getElementById("generate-character");
generateCharacter.addEventListener("click", () => character(apiEndpoint));
