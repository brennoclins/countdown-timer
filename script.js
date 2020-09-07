let totalDiv
let days
let hours
let minutes
let seconds

let lastDays = "00";
let lastHours = "00";
let lastMinutes = "00";
let lastSeconds = "00";
let futureDate = "2020/12/16 05:57:01";

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

function removeDiv(count){
    if(totalDiv.length > String(days).length){
         count = totalDiv.length - count;
         for(let i=0; i<count; i++){
            totalDiv[i].remove();  
            console.log(totalDiv[i])
        }
    }  
}

function addDiv(count){
    if(String(days).length > totalDiv.length){
         for(let i=count; i>0; i--){
            let newDiv = document.createElement("div");
            newDiv.classList.add('days');
            newDiv.innerHTML = "<div>0</div>"; 
            document.getElementById("clock").prepend(newDiv)
        }
    }  
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
        //console.log(formatDate)

        totalDiv = document.getElementsByClassName("days");
        if(String(days) > 2) {
            if(totalDiv.length != String(days).length) {
                if( totalDiv.length > String(days).length) {
                    removeDiv(String(days).length)
                }
                if(String(days).length > 2) {   
                    addDiv(String(days).length - 2)
                }
            }
        }


        if(days < 10){
            days = "0"+String(days);   
        }
        animateTime(String(lastDays), String(days), "days");
        lastDays = days;

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