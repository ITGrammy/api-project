import './style.css'

// // fetch('https://picsum.photos/v2/list?page=2&limit=100')
// // .then(response => response.json())
// // .then(data => {
// //   //loop here
// //   console.log(data);
// //   data.forEach(item) =>; {
// //       document.querySelector('#app').innerHTML += `
// //     <img src="${item.download_url}" alt="Random image" /;
// //   }
// // })

// document.querySelector('#app').innerHTML = `

//  <h1>Hello Monique!</h1>
//  <br>
//   <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
// `

fetch('https://picsum.photos/v2/list?page=2&limit=100') 
    .then(response => response.json())
    .then(listOfPhotos => {
        for (let i = 0; i < listOfPhotos.length; i++) {
            console.log(i, listOfPhotos[i].id, listOfPhotos[i].download_url);
            document.querySelector('#app').innerHTML += `<img src="${listOfPhotos[i].download_url}" alt="Random image" />`;
            //go into object and get list of photos from url
        }
    })

  


