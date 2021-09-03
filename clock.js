

function clock(){

    var d = new Date();

    var hour = d.getHours().toString();

    if(hour > 12){
        hour = (d.getHours()-12).toString();

    }
    if(hour.length == 1)
         hour = "0"+hour;

    var minute = d.getMinutes().toString();
    if(minute.length == 1)
    minute = "0"+minute;

    var seconds = d.getSeconds().toString();
    if(seconds.length == 1){
        seconds = "0"+seconds;
    }
    

    document.getElementById('hours').innerHTML = hour;
    document.getElementById('minute').innerHTML = minute;
    document.getElementById('seconds').innerHTML = seconds;
}
setInterval(clock, 1000);