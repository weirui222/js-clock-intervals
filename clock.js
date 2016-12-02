setInterval(drawTime, 1000);

function drawTime(){
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    //hour
    hour=hour%12;
    hourDeg=(hour*180/6)+
    (minute*180/(6*60))+
    (second*180/(360*60));
	document.getElementById("hour").style.transform = "rotate(" + hourDeg + "deg)";
    //minute
    miniteDeg=(minute*180/30)+(second*180/(30*60));
	document.getElementById("minute").style.transform = "rotate(" + miniteDeg + "deg)";
    // second
    secondDeg=(second*180/30);
    document.getElementById("second").style.transform = "rotate(" + secondDeg + "deg)";
}

drawTime();