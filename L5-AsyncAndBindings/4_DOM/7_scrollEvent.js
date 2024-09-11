window.addEventListener('scroll',()=>{
    const scrollPositionY = window.scrollY;
    const scrollPositionX = window.scrollX;
    // console.log(window.innerHeight)
    // console.log(window.innerWidth)

    // console.log(scrollPositionY)
    if(scrollPositionY>window.innerHeight){
        document.querySelector('body').classList.add('dark-theme');
    }
    else{
        document.querySelector('body').classList.remove('dark-theme');
    }
    // console.log(scrollPositionX)
})