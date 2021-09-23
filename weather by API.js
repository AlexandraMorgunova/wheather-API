fetch("http://api.openweathermap.org/data/2.5/weather?id=703448&appid=35349be8d793ae60833e58b289b7cf5c")
.then(resp=>{
    return resp.json()})
.then(data=>{
    console.log(data);
    document.querySelector('.kiev').innerHTML=data.name;
    document.querySelector('.temp').innerHTML=Math.floor(data.main.temp-273)+'&deg'
})
.catch(function(){

})


