function download(cb){
    console.log("Download Starts")
    setTimeout(()=>{
        console.log("Download Completed");
        cb(upload);
    },2000);
}

function compress(cb){
    console.log("Compression Starts")
    setTimeout(()=>{
        console.log("Compression Completed")
        cb();
    },2000);
}

function upload(){
    console.log("Uploading Starts")
    setTimeout(()=>{
        console.log("Uploading Completed");
    },2000);
}

download(compress);
