const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function cursorfollower(){
    window.addEventListener("mousemove",(details)=>{
        document.querySelector('#minicircle').style.transform = `translate(${details.clientX}px,${details.clientY}px)`;
    })
    
    // window.addEventListener('wheel',(details)=>{
    //     console.log(details.offsetX)
    //     document.querySelector('#minicircle').style.transform = `translate(${details.offsetX}px,${details.offsetY}px)`;
    // })

}
cursorfollower();

