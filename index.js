function myTime(){
    var dateTime = new Date()
    var hrs = dateTime.getHours()
    var min = dateTime.getMinutes()
    var sec = dateTime.getSeconds()
    var session = document.getElementById("time")

if(hrs >= 12){
    session.innerHTML ='PM';
}else{
    session.innerHTML = 'AM';
}

if (hrs >=12){
    hrs = hrs-12;
}


    document.getElementById("hour").innerHTML = hrs;
    document.getElementById("minute").innerHTML = min;
    document.getElementById("second").innerHTML = sec;

    



}
setInterval(myTime, 10)