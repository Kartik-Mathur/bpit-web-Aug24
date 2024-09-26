const url = 'https://cat-fact.herokuapp.com/facts';

// axios.get(url)
//     .then((data)=>{
//         data=data.data;
//         console.log(data);
//     })
//     .catch(err=>{
//         console.log(err)
//     })

async function getData() {
    try {
        let data = await axios.get(url);
        data = data.data;
        console.log("Data", data);
    } catch (error) {
        console.log(error)
    }
}
getData();