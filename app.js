 var getBtn = document.getElementById('btn_1');
 var postBtn = document.getElementById('btn_2');
 const sentHttpRequest = (method, url, data) =>
 {     const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.responseType = 'json'
        if (data) {
            xhr.setRequestHeader('Content-Type', 'application/json')
       }
       xhr.onload = () => {
             if (xhr.status >= 400) {
               reject(xhr.response)
            } else {
                resolve(xhr.response)
            }
        }
         xhr.onerror = () => {
             reject('something went wrong')
       }
        xhr.send(JSON.stringify(data))
   });
   return promise
 }

 const getData = () => {
     sentHttpRequest('GET', 'https://reqres.in/api/users').then(res => {
        var list = document.getElementById('list');
//         list.innerHTML = '';
//         res?.data?.forEach(function(user) {
//             var userList = document.createElement('li');
//             userList.textContent = user.first_name + ' ' + user.last_name;
//             list.appendChild(userList);
//         });
//     }).catch(error => {
//         console.error('Error fetching data:', error);
//     });
    
// }
// const postData = () => {
//     sentHttpRequest('POST', 'https://reqres.in/api/register', {
//         email: "eve.holt@reqres.in",
//         password: "pistol"
//     }).then(res => {
//         console.log('data got ==>', res);
//     }).catch(err => {
//         console.log(err);
//     })
// }

 getBtn.addEventListener('click', getData);
 postBtn.addEventListener('click', postData);



var a = 10 ;
var b = 20 ;

setTimeout(() => {
   console.log('first console'); 
}, );
console.log(a);
console.log(b);