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

    clock.innerHTML = h + ":" + m + ":" + s;
    
    
}, 1000);

