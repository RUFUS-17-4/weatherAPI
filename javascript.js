function displayresult(){
    var city=document.getElementById("city").value;
    var apikey='ab6ba70113e80e49325244f1eab286da';
    fetch ('https://api.openweathermap.org/data/2.5/weather?q='
    +city + '&appid='+apikey+'&units=metric')
    .then(Response => Response.json())
    .then(data =>{
        var t=data['main']['temp']
        document.getElementById("output").innerHTML=t+="&#176;"+"C";
    })
}