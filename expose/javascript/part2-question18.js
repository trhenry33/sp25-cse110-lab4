function timeprint (){
    let d = newDate();
    let time = d.toLocaleTimeString();
    console.log(time);
}


setInterval(timeprint, 1000);