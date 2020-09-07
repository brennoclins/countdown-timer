let totalDiv
let days
let hours
let minutes
let seconds

let lastDays = "00";
let lastHours = "00";
let lastMinutes = "00";
let lastSeconds = "00";
let futureDate = "2020/09/07 00:48:01";

let countDownDate = new Date(futureDate).getTime();



let x = setInterval( () => {

    let now = new Date().getTime();
    let distance = countDownDate - now;   

    if(distance < 0){
        if(distance < 0){
            clearInterval(x);
            console.log("EXPIRED!")
        }
    }else{
        days = Math.floor(distance / (1000 * 60 * 60 * 24));
        hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        seconds = Math.floor((distance % (1000 * 60)) / 1000);
               
        let formatDate = `${days},${hours}:${minutes}:${seconds}`;
        console.log(formatDate)    
    }  
},1000);