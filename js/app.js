const CurrentTime = () => {
    const el = document.querySelector("h1");
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    // Giving format to time //

    hh = hh < 10 ? `0$(hh)` : hh;
    mm = mm < 10 ? `0$(mm)` : mm;
    ss = ss < 10 ? `0$(ss)` : ss;

    let time = `$(hh):$(mm):$(ss)`;
    el.innerText = time;
}
CurrentTime();
setInterval(CurrentTime, 1000);