function download() {
    console.log("Download Starts")
    return new Promise((resolve, reject) => {
        let isDownloadComplete = true;
        setTimeout(() => {
            if (isDownloadComplete) {
                resolve("Download completed");
            }
            else {
                reject("Download couldn't be completed");
            }
        }, 2000);
    })
}

function compress(msg) {
    console.log(msg);
    console.log("Compression Starts")
    return new Promise((resolve, reject) => {
        let isCompressionComplete = true;
        setTimeout(() => {
            if (isCompressionComplete) {
                resolve("Compression completed");
            }
            else {
                reject("Compression couldn't be completed");
            }
        }, 2000);
    })
}

function upload(msg) {
    console.log(msg);
    console.log("Upload Starts")
    return new Promise((resolve, reject) => {
        let isUploadComplete = true;
        setTimeout(() => {
            if (isUploadComplete) {
                resolve("Upload completed");
            }
            else {
                reject("Upload couldn't be completed");
            }
        }, 2000);
    })
}

download()
    .then(compress)
    .then(upload)
    .then(msg => {
        console.log(msg);
        console.log("All Done");
    })
    .catch(err => {
        console.log(err);
    })

/*
download()
    .then((msg) => {
        console.log("Recieved Message:", msg);
        compress()
            .then((msg) => {
                console.log("Recieved Message:", msg);
                upload()
                    .then((msg) => {
                        console.log("Recieved Message:", msg);
                    }).catch(err => {
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