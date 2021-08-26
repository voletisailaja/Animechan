async function start(){
    let response=await fetch('https://animechan.vercel.app/api/random')
    
    let result=response.json();
    return result
    .then((response)=>{
console.log(result);
document.getElementById('quote').innerHTML=response.quote;
document.getElementById('character').innerHTML=response.character;

    });
}
start();
async function myFunc(){
    start();
}