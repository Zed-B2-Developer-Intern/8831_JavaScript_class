var c1=document.querySelector(".c1");
let follow=document.querySelector(".follow");

let count=1;

setInterval( ()=> {
  if(count<1000)
  count++;
  c1.innerText=count;
},10)

setTimeout( ()=>{
  follow.innerText="Followers in Instagram!"
},3000)
