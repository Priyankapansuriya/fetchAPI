var urlst = window.location.href;
const url = new URL(urlst);
const id = url.searchParams.get('id');
console.log(id);

function postData() {
  console.log('View Data function');
  console.log(id);
  var url = `https://jsonplaceholder.typicode.com/posts?userId=${id}`;

 fetch(url).then((data) => {
    //console.log(data);
    return data.json();
  }).then((objectData)=>{
    console.log(objectData);

    var tableData=document.getElementById("td");
    objectData.map((e)=>{
      tableData.innerHTML+=`
                <tr>
                <td>${e.id}</td>
                <td>${e.title}</td>
                <td>${e.body}</td>
                </tr>
             `;
        });
});
}
postData();
