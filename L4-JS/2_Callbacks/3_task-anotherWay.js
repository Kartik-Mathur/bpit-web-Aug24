function download(cb) {
    console.log("Download Starts")
    setTimeout(() => {
        console.log("Download Completed");
        cb();
    }, 2000);
}

function compress(cb) {
    console.log("Compression Starts")
    setTimeout(() => {
        console.log("Compression Completed")
        cb();
    }, 2000);
}

function upload(cb) {
    console.log("Uploading Starts")
    setTimeout(() => {
        console.log("Uploading Completed");
        cb();
    }, 2000);
}

function allDone() {
    console.log("All tasks completed");
}

download(() => {
    compress(() => {
        upload(allDone)
    });
});
