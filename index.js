function year() {
    const d = new Date();
    let year = d.getFullYear();
    console.log(year)
    document.getElementById("year_sec").innerHTML = "© Dr Pramod Yadav " + year + " All rights reserve"
}
function time() {
    const now = new Date();
    let hours = now.getHours()
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = (hours < 10) ? '0' + hours : hours;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;

    let dclock = document.getElementById("clock");
    dclock.innerHTML = hours + ':' + minutes + ":" + seconds + ' IST (UTC +5:30 GMT)';
}
const updateTime = () => {
    setInterval(time, 1000);
}

const mode = () => {
    let icon = document.getElementById("icon")
    document.body.classList.toggle("gradient_bg")
    let dmode = document.querySelectorAll("#p").length
    for (i = 0; i < dmode; i++) {
        document.querySelectorAll("#p")[i].classList.toggle("para-txt")
    }
    if (document.body.classList.contains("gradient_bg")) { icon.src = "brightness-high.svg" }
    else {
        icon.src = "moon-stars.svg"
    }
}


year();
updateTime();