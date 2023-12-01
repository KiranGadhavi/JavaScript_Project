const clock =document.getElementById('clock')
//document.querySelector('#clock')
const clockDate =document.getElementById('clockDate')
setInterval(function(){
    let time = new Date()
    let date = new Date()

//console.log(date.toLocaleDateString())
clockDate.innerHTML = date.toLocaleDateString();
clock.innerHTML = time.toLocaleTimeString();

},1000)