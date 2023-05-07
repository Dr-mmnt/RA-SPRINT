// console.log('Recuest data...');

// setTimeout(()=>{
//     console.log('Preparing data...');

//     const data = {
//         name: 'Ivan'
//     };

//     setTimeout(()=>{
//         console.log(data);
//     },2000);
// },2000);

      

      async function getUsers() {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (response.ok) {
          let data = await response.json();
          console.log(data);
          return data
        } else {
          alert('error', response.status);
        }
       }
       
       getUsers()
       
