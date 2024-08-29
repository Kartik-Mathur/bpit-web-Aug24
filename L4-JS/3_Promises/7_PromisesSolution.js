function getWeatherData() {
    console.log("Started fetching data");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const weatherData = {
                city: "Delhi",
                temperature: 25,
                condition: "Sunny",
                forecast: [23, 24, 26, 25, 24],
                aqi: 50
            }
            resolve(weatherData);
        }, 2000);
    })
}

function storeInDB(data) {
    console.log("Starting to store data in DB");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Stored data in DB-Completion");
            resolve(data);
        }, 2000);
    })

}

function generateReport(data) {
    console.log("Starting generating report");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const report = `Weather Report for ${data.city}:
            Temperature: ${data.temperature}°C
            Condition: ${data.condition}
            5-Day Forecast: ${data.forecast.join(', ')}°C
            Air Quality Index: ${data.aqi}`;
            resolve(report);
        }, 2000);
    })
}

getWeatherData()
    .then(storeInDB)
    .then(generateReport)
    .then((report)=>{
        console.log(report)
    })
    .catch(err=>{
        console.log(err)
    })

/*
getWeatherData()
    .then((weatherData) => {
        storeInDB(weatherData)
            .then((data) => {
                generateReport(data)
                    .then((report) => {
                        console.log(report);
                    })
                    .catch(err => {
                        console.log(err);
                    })
            })
            .catch(err => {
                console.log(err);
            })
    })
    .catch(err => {
        console.log(err);
    })
*/