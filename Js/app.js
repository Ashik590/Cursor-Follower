const pupils = document.querySelectorAll(".pupil");
const food = document.querySelector(".food");
const mouth = document.querySelector(".mouth");

document.body.addEventListener("mousemove", function(e){
    let x_val = e.clientX;
    let y_val = e.clientY;
    food.style.left=`${x_val}px`;
    food.style.top=`${y_val}px`;
    let x_pup = (((x_val / innerWidth) - 0.5) * 2) * 15 
    let y_pup = (((y_val / innerHeight) - 0.5) * 2) * 15 
    pupils.forEach((pup)=>{
        pup.style.transform = `translate(${x_pup}px, ${y_pup}px)`
    })
    mouth.style.width = `${Math.round(60 - (Math.abs((((x_val / innerWidth) - 0.5) * 2) * 35)))}%`;
    mouth.style.height = `${Math.round(30 - (2 * Math.abs((((x_val / innerWidth) - 0.5) * 2) * 10)))}px`

    console.log((Math.abs((((x_val / innerWidth) - 0.5) * 2) * 10)))
})