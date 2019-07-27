var button = document.querySelector("button"),
btncoords = button.getBoundingClientRect(),
glare = document.querySelector("button .glare"),
posX, 
posY;

function follow(e){
    posX = ((e.clientX - btncoords.left) - 25) / 1 + "px";
    posY = ((e.clientY - btncoords.top) - 50) / 1 + "px";

    glare.style.transform = "translate(" + posX + "," + posY + ")";
    console.log("translate(" + posX + "," + posY + ")");
}

button.addEventListener('mousemove', follow)