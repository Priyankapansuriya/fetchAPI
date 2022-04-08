fetch("https://jsonplaceholder.typicode.com/users").then((data) => {
      //console.log(data);
      return data.json();
    }).then((objectData)=>{
      console.log(objectData);

      var tableData = document.getElementById("td");
      objectData.map((e)=> {
        tableData.innerHTML +=`
                  <tr>
                  <td>${e.id}</td>
                  <td>${e.name}</td>
                  <td>${e.username}</td>
                  <td>${e.email}</td>
                  <td>${e.address.street}
                      ${e.address.suite},
                      ${e.address.city},
                      ${e.address.zipcode}</td>
                  <td>${e.phone}</td>
                  <td>${e.website}</td>
                  <td><a href=fetch_api_post.html?id=${e.id} class='btn btn-primary'style="margin:5px padding:5px";>Postdata
                  <a href=fetch_api_image.html?id=${e.id} class='btn btn-success'style="margin:10px";>Image</td>
                  </tr>
               `;
          });
});
