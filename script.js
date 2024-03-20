"use strict";
// const som = document.querySelector("#uzs"),
// dollar = document.querySelector("#usd");

// som.addEventListener('input', (e)=>{
//   const request = new XMLHttpRequest();
//   request.open("GET", "jsonnotation/current.json");
//   request.setRequestHeader("Content-Type","application/json; charset=utf-8");
//   request.send();
//   // status 200 -ok, 404-not-found, 500 - server, 400-client error
//   // status Text
//   // response
//   // readyState
//   // 1 - method
//   request.addEventListener('readystatechange',()=>{
//     if(request.readyState === 4 && request.status === 200){
//       const date = JSON.parse(request.response); // current.json faylidagi jsonni obektga(JS ga) o'giryapti
//       dollar.value = (+som.value / date.current.usd).toFixed(2); // so'mni dollarga aylantirish uchun biz kiritgan qiymatni jsondan olib kelgan current obektining usd qiymatiga bo'lyapti;
//     } else{
//       dollar.value = "Something went wrong";
//     }
//   })
//   // 2-metod (Optimizing)Har bitta readystatechange qadamidan qochish maqsadida
//   // request.addEventListener('load',()=>{
//   //   if(request.status == 200){
//   //     console.log(request.response);
//   //     const data = JSON.parse(request.response);
//   //     dollar.value = +som.value / data.current.usd;
//   //   }
//   //   else{
//   //     dollar.value = "Nimadir xato";
//   //   }
//   // })
// })

// // uzs.addEventListener('input',(e)=>{
// //   // ============ new object for socket ===========
// //   const req = new XMLHttpRequest();

// //   // Below code for Basics settings of send to server informtion -----------------
// //   req.open('GET', 'jsonnotation/current.json');
// //   req.setRequestHeader('Content-Type','application/json; charset:utf-8');
// //   req.send();
// //   req.addEventListener('readystatechange', ()=>{
// //     if(req.readyState == 4 && req.status ==200){
// //       const data = JSON.parse(req.response);
// //       usd.value = (+uzs.value/data.current.usd).toFixed(2);
// //     }
// //     else{
// //       console.log("Something went wrong !")
// //     }
// //   })
// // })

// Restudy

var uzs = document.querySelector('#uzs'),
usd = document.querySelector('#usd');

uzs.addEventListener('input',()=>{
    var req = new XMLHttpRequest();
    req.open('GET','jsonnotation/current.json');
    req.send();

    req.addEventListener('readystatechange',()=>{
        if(req.readyState == 4 && req.status == 200){
            var data = JSON.parse(req.response);
            usd.value = (uzs.value/data.current.usd).toFixed(2);
        }else{
            usd.value = 'Something fore every one'
        }
    })
})

// uzs.addEventListener('input',(e)=>{
//   const request = new XMLHttpRequest(); //konstrukto yangi obe'kt qaytaradi
//   request.open('GET','jsonnotation/current.json');  // qaysidir shart bo'yicha nimanidir ochadi
//   request.setRequestHeader('Content-Type','application/json; charset=utf-8'); // sarlavha qo'yiladi qaysi kodirovkada kelishini aytadi
//   request.send(); // tayyor bo'lgan so'rovni yuborish

//   // bu status qaytaradi 200 -ok, 404 - not found, 400-klient error, 500-server-error
//   //response
//   // readyState = holatni aniqlaydi -- umumiy jarayon haqida xabar beradi.4ball oxirgi yaxshi natija
//   request.addEventListener('readystatechange',()=>{
//     if(request.readyState == 4 && request.status == 200){
//       console.log(request.response);
//       const data = JSON.parse(request.response) // jsondan obetkga
//       usd.value = (+uzs.value/data.current.usd).toFixed(2);
//     }else{
//       usd.value = "Something went wrong"
//     }
//   })

//   // /\/\/\ Yuqoridagi eski usul
//   // \/\/\/ Pastdagi yangi usul
//   // request.addEventListener('load',()=>{
//   //   if(request.status == 200){
//   //     const data = JSON.parse(request.response);
//   //     usd.value = (+usd.value/data.current.usd).toFixed(2);
//   //   }else{
//   //     usd.value = 'Something ent wrong';
//   //   }
//   // })
//   console.log(e);
// })
