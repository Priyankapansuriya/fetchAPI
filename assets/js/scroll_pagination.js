let Tablearray = [];
let TableData = [];
let startIndex = 0;
let endIndex = 10;

function getPhoto() {
  fetch(`https://jsonplaceholder.typicode.com/photos`)
    .then((response) => response.json())
    .then((json) => {
      Tablearray = json;
      // console.log(json);
      onscroll();
    });
}
function image() {
  const data = document.getElementById('td');
  TableData.map((e) => {
    data.innerHTML += `
                   <tr>
                   <td>${e.title}</td>
                   <td><img src="${e.url}"/></td>
                   <td><a href="${e.thumbnailUrl}" class="btn btn-primary">Thumb</a></td>
                   </tr>
                   `;
                });
              }
function onscroll() {
  for (let i = startIndex; i < endIndex; i++) {
    TableData.push(Tablearray[i]);
    console.log(TableData);
  }
  startIndex = 10;
  endIndex += 10;
  image();
}
function bottom() {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    onscroll();
  }
}
document.addEventListener('scroll', bottom);
document.addEventListener('DOMContentLoaded', getPhoto);
