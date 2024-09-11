let API_key = "68eb9a82e650df54c98feebbf88e20d7";

let geocodingUrl = (city_name) =>
    `http://api.openweathermap.org/geo/1.0/direct?q=${city_name}&appid=${API_key}`;

let weatherUrl = (lat, lon) =>
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`;

function getLatAndLon(city_name) {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await fetch(geocodingUrl(city_name));
            data = await data.json();

            data = data[0];
            resolve({
                lat: data.lat,
                lon: data.lon
            })
        } catch (error) {
            reject("Cannot fetch the latitude and longitude right now!");
        }
    })
}

function getWeatherData(data) {
    return new Promise(async (resolve, reject) => {
        let lat = data.lat;
        let lon = data.lon;

        try {
            let data = await fetch(weatherUrl(lat, lon));
            data = await data.json();
            resolve(data);
        } catch (error) {
            reject(err);
        }
    })
}

async function generateData(city_name) {
    try {
        let data = await getLatAndLon(city_name);
        let weatherData = await getWeatherData(data);
        console.log(weatherData);
    } catch (error) {
        console.log(error);
    }
}

generateData("Delhi");