let API_key = "68eb9a82e650df54c98feebbf88e20d7";
let city_name = 'Delhi';

let geocodingUrl =
    `http://api.openweathermap.org/geo/1.0/direct?q=${city_name}&appid=68eb9a82e650df54c98feebbf88e20d7`;


fetch(geocodingUrl)
    .then(data => data.json())
    .then(data => {
        
        data = data[0];
        
        let lat = data.lat;
        let lon = data.lon;
        
        let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`;
        fetch(weatherUrl)
        .then(data => data.json())
        .then(data => {
            console.log(data);
        })
        .catch(err=>{
            console.log(err);
        })
    })
    .catch(err => {
        console.log(err);
    })

    


