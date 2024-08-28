function getWeatherData(cb) {
    console.log("Started fetching data");
    setTimeout(() => {
        const weatherData = {
            city: "Delhi",
            temperature: 25,
            condition: "Sunny",
            forecast: [23, 24, 26, 25, 24],
            aqi: 50
        }
        cb(weatherData);
    }, 2000);
}

function storeInDB(data, cb) {
    // takes 2 seconds to store in db and then goes to generate report
    console.log("Starting to store data in DB");
    setTimeout(() => {
        console.log("Stored data in DB-Completion");
        cb(data);
    }, 2000);
}

function generateReport(data, cb) {
    console.log("Starting generating report");
    setTimeout(() => {
        const report = `Weather Report for ${data.city}:
        Temperature: ${data.temperature}°C
        Condition: ${data.condition}
        5-Day Forecast: ${data.forecast.join(', ')}°C
        Air Quality Index: ${data.aqi}`;
        cb(report);
    }, 2000);

    // After 2 second
}

getWeatherData((weatherData) => {
    console.log("Data fetching done");
    storeInDB(weatherData, (data) => {
        console.log("Data stored in DB");
        generateReport(data, (report) => {
            console.log("Report generated");
            console.log(report);
        });
    });
});