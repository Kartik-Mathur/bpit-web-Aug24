let API_key = "68eb9a82e650df54c98feebbf88e20d7";

let geocodingUrl = (city_name) =>
    `http://api.openweathermap.org/geo/1.0/direct?q=${city_name}&appid=${API_key}`;


let weatherUrl = (lat, lon) =>
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`;


function getLatAndLon(city_name) {
    return new Promise((resolve, reject) => {
        fetch(geocodingUrl(city_name))
            .then(response => response.json())
            .then(data => {
                data = data[0];
                resolve({
                    lat: data.lat,
                    lon: data.lon
                })
            })
            .catch(err => {
                reject("Cannot fetch the latitude and longitude right now!");
            })
    })
}

function getWeatherData(data) {
    return new Promise((resolve, reject) => {
        let lat = data.lat;
        let lon = data.lon;

        fetch(weatherUrl(lat, lon))
            .then(response => response.json())
            .then(data => {
                resolve(data)
            })
            .catch(err => {
                reject(err);
            })
    })
}

getLatAndLon("Delhi")
    .then(getWeatherData)
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err)
    })
    .finally(()=>{
        console.log("All Done")
    })