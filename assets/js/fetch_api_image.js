var urlst = window.location.href;
const url = new URL(urlst);
const id = url.searchParams.get('id');
console.log(id);

function imageData() {
  console.log('image');
  console.log(id);

  var url=`https://jsonplaceholder.typicode.com/photos?albumId=${id}`;

  fetch(url).then((data) => {
    //console.log(data);
    return data.json();
  }).then((objectData)=>{
    console.log(objectData);

    var tableData = document.getElementById("td");
    objectData.forEach(function (e) {
    tableData.innerHTML +=`
                <tr>
                <td>${e.id}</td>
                <td>${e.title}</td>
                <td><img src="${e.url}"/></td>
                <td><img src="${e.thumbnailUrl}"/></td>
                </tr>
             `;
        });
  });
}
imageData();
