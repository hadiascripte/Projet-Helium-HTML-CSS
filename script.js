// const circle1 = document.querySelector(".circle1")
// const circle2 = document.querySelector(".circle2")
// const circle3 = document.querySelector(".circle3")

// window.addEventListener("mousemove", (e)=>{
// circle1.style.left=e.pageX+"px";
// circle1.style.top=e.pageY+"px";

// circle2.style.left=e.pageX+"px";
// circle2.style.top=e.pageY+"px";

// circle3.style.left=e.pageX+"px";
// circle3.style.top=e.pageY+"px";

// })

// Pour optimiser le code nous pouvons utiliser le forEach.
// Pour cela nous devons donner aux éléments(cercles) une varaible

const mouses = document.querySelectorAll(".circle");
console.log(mouses);

window.addEventListener("mousemove", (e) => {
    mouses.forEach((mouse) => {
        mouse.style.top = e.pageY + "px";
        mouse.style.left = e.pageX + "px";
    });
});
