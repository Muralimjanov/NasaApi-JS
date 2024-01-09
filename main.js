// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(json => {
//         console.log("json data >>>", json);
//         for (let i = 0; i < json.length; i++) {
//             let h1 = document.createElement('h1');
//             let h2 = document.createElement('h2');
//             let h3 = document.createElement('h3');
//             document.body.appendChild(h1);
//             document.body.appendChild(h2);
//             document.body.appendChild(h3);
//             h1.innerHTML = json[i].name;
//             h2.innerHTML = json[i].username;
//             h3.innerHTML = json[i].company.name;
//         }
//     })

fetch('https://api.nasa.gov/planetary/apod?api_key=mynqjuFCMME4LrB3xRnqdOrAKg8zy3ayzkJKaA9m')
.then(response => response.json())
.then(json=>{
    console.log("json data >>>", json);
    let h1 = document.getElementById('h1');
    let h2 = document.getElementById('h2');
    let h3 = document.getElementById('h3');
    let img = document.getElementById('img');
    h1.innerHTML = json.copyright
    h2.innerHTML = json.date
    h3.innerHTML = json.explanation
    img.src = json.url
})