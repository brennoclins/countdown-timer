let totalDiv
let days
let hours
let minutes
let seconds

let lastDays = "00";
let lastHours = "00";
let lastMinutes = "00";
let lastSeconds = "00";
let futureDate = "2020/09/07 02:08:01";

let countDownDate = new Date(futureDate).getTime();

function animateTime(last, now, className){
    for(let i=0; i<now.length; i++){
        if(last[i] != now[i]){
            animate(i, now[i], className);
        }
    }
}

function animate(index, value, className){
    let element = document.getElementsByClassName(className)[index];
    let second  = element.lastElementChild.cloneNode(true);

    second.innerHTML = value;

    element.appendChild(second);
    element.classList.add('move');
    setTimeout(() => {
        element.classList.remove('move');
    },500);

    setTimeout(() => {
        element.removeChild(element.firstElementChild);
    },500);
}

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
        
        if(hours < 10){
            hours = "0"+String(hours);   
        }
        animateTime(String(lastHours), String(hours), "hours");
        lastHours = hours
        
        if(minutes < 10){
            minutes = "0"+String(minutes);   
        }
        animateTime(String(lastMinutes), String(minutes), "minutes");
        lastMinutes = minutes;

        if(seconds < 10){
            seconds = "0"+String(seconds);   
        }
        animateTime(String(lastSeconds), String(seconds), "seconds");
        lastSeconds = seconds;
    }  
},1000);