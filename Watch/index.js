let time = document.querySelector(".result");

function getTime(){
    let currentTime = new Date();
    time.innerHTML = `${currentTime.getHours()} : ${currentTime.getMinutes()} : ${currentTime.getSeconds()}`;
}

setInterval(getTime, 1000);
