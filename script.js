let root = document.getElementById("root");
let hour = document.createElement("p");
let minute = document.createElement("p");
let seconds = document.createElement("p");
let clock = document.createElement("p");

clock.id = "clock";
root.append(clock);

hour.innerHTML = "Hours";

let time = setInterval(function(){
    let n = new Date;
    let s = n.getSeconds();
    let m = n.getMinutes();
    let h = n.getHours();

    let time = formatTime(h, m, s);

    clock.innerHTML = time;
    
    
}, 1000);

function formatTime(h, m, s) {
    if (h < 10) {
        h = "0" + h;
    }
    if (m < 10) {
        m = "0" + m;
    }
    if (s < 10) {
        s = "0" + s;
    }

    return h + ":" + m + ":" + s;
    
    
}