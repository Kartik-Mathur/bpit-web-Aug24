function fetchCatFacts() {
    return new Promise((resolve, reject) => {
        let url = 'https://cat-fact.herokuapp.com/facts';
        fetch(url)
            .then(data => data.json())
            .then(data => {
                resolve(data)
            })
            .catch(err => {
                reject(err)
            })
    })
}

function getLatAndLon(city_name) {
    let API_key = "68eb9a82e650df54c98feebbf88e20d7";
    let geocodingUrl = (city_name) =>
        `http://api.openweathermap.org/geo/1.0/direct?q=${city_name}&appid=${API_key}`;

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
                reject(err);
            })
    })
}

// Promise.all([
//     fetchCatFacts(),
//     getLatAndLon("Delhi")
// ]).then(data => {
//     console.log(data);
// })

// Promise.allSettled([
//     fetchCatFacts(),
//     getLatAndLon("Delhi")
// ]).then(data => {
//     for (let i = 0; i < data.length; i++) {
//         // console.log(data[i].status, data[i].value);
//         console.log(data[i]);
//     }
// })

Promise.race([
    fetchCatFacts(),
    getLatAndLon("Delhi")
]).then(data => {
    console.log(data);
})