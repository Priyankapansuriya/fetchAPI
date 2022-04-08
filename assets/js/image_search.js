const searchBar = document.getElementById('searchBar');
let titleCharacters = [];
let array = [];
let startIndex = 0;
let endIndex = 50;

document.addEventListener('keyup', (e) => {
  const searchString = e.target.value.toLowerCase();

  const filteredCharacters = array.filter((character) => {
    return character.title.toLowerCase().includes(searchString);
  });
  displayCharacters(filteredCharacters);
});

function loadCharacters() {
  fetch(`https://jsonplaceholder.typicode.com/photos`)
    .then((response) => response.json())
    .then((json) => {
      titleCharacters = json;
      console.log(titleCharacters);
      onscroll();
    });
}

function displayCharacters(characters) {
  const charactersList = document.getElementById('charactersList');
  const htmlString = characters.map((character) => {
    return `
            <li class="character">
                <h2>${character.id} : ${character.title}</h2>
                <a href="${character.thumbnailUrl}">Thumb</a>
                <img src="${character.url}"></img>
            </li>
        `;
  });
  charactersList.innerHTML = htmlString;
}

function onscroll() {
  for (let i = startIndex; i < endIndex; i++) {
    array.push(titleCharacters[i]);
    console.log(array);
  }

  displayCharacters(array);
}

loadCharacters();
