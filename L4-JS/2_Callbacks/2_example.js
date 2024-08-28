function download(cb) {
    console.log("Download starts");
    setTimeout(() => {
        console.log("Download completed");
        cb();
    }, 2000);
}

function compress() {
    console.log("Compression starts");
    setTimeout(() => {
        console.log("Compression completed");
    }, 2000);
}

download(compress);
