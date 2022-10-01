const countDown = ()=>{
    const releaseDate = new Date("Nov 1, 2022 00:00:00").getTime();
    const currentTime = new Date().getTime();

    let remTime = releaseDate - currentTime;

    //console.log(remTime);

    let secs = 1000;
    let min = secs * 60;
    let hours = min * 60;
    let days = hours * 24;

    let remSecs = Math.floor((remTime % min)/secs);
    let remHour = Math.floor((remTime % days)/hours);
    let remDays = Math.floor((remTime / days));
    let remMin = Math.floor((remTime % hours)/min);

    console.log(remDays);
    document.querySelector(".day").innerText = remDays;
    document.querySelector(".hour").innerText = remHour;
    document.querySelector(".min").innerText = remMin;
    document.querySelector(".sec").innerText = remSecs;
}

setInterval(countDown, 500);