let url = 'https://cat-fact.herokuapp.com/facts';

// fetch is going to get the data from given url
// fetch returns a promise, that's why we can use .then and .catch on
// it
fetch(url)
    .then(data => data.json())
    .then(data => {
        console.log(data);
    })
    .catch(err => console.log(err))
