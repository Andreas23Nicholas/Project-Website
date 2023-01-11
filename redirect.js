let counter = document.querySelector('p');
let count = 5;

setInterval(()=>{

    counter.innerText = count;
    count--

},1000)