const go_button = document.getElementById("go-button");
const warning = document.getElementById("warning");
const canvas = document.getElementById("scratch_canvas")
const ctx = canvas.getContext("2d")

if(go_button && warning) {
    go_button.addEventListener("click", () =>{
        warning.style.visibility = "hidden";
    })
}
canvas.width = window.innerWidth
canvas.height = window.innerHeight

ctx.fillStyle = "black"
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.globalCompositeOperation = "source-over";

const images = [
    "assets/secet (1).jpg",
    "assets/secet (2).jpg",
    "assets/secet (3).jpg",
    "assets/secet (4).jpg",
    "assets/secet (5).jpg",
    "assets/secet (10).jpg",
    "assets/secet (11).jpg",
    "assets/secet (12).jpg",
    "assets/secet (13).jpg",
    "assets/secet (14).jpg",
    "assets/secet (15).jpg"
]; // i wrote this using ai fr

const next = document.getElementById("next")
const secret_image = document.getElementById("secret_image")


next.addEventListener("click", () => {
    secret_image.src = images[Math.floor(Math.random() * images.length)]
    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    revealedbutton.style.display = "none";
})

let Drawing = false;
let brush_size = 35;

const brushslider = document.getElementById("brush_slider")
const brushSizeVal = document.getElementById("brush-size-val");

brushslider.addEventListener("input", (e) => {
    brush_size = e.target.value;
    brushSizeVal.textContent = `${brush_size}px`;
})

function scratch(e) {
    if (!Drawing) return;

    const rect = canvas.getBoundingClientRect();
    const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left
    const y = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top

    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x,y,brush_size, 0,Math.PI * 2);
    ctx.fill();
}
const revealedbutton = document.getElementById("revealed-button");
const habeeb_deen_ommy = new Audio("assets/7abeeb deen ommy.mp3")
function check() {
    const image_data = ctx.getImageData(0,0,canvas.width,canvas.height);
    const pixels = image_data.data;
    const totalpixels = pixels.length / 4
    let clearedpixels = 0;

    for(let i = 3; i < pixels.length; i += 4) {
        if (pixels[i] === 0) {
            clearedpixels++;
        }
    }

    const cleared_precentage = (clearedpixels / totalpixels) * 100;

    if (cleared_precentage >= 70) {
        revealedbutton.style.display = "block";
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
}

canvas.addEventListener("mousedown", () => Drawing = true)
window.addEventListener("mouseup", () => {
    Drawing = false
    check()
})
canvas.addEventListener("mousemove", scratch)

// add mobile controls

canvas.addEventListener("touchstart", (e) => {
    Drawing = true; scratch(e);
});
window.addEventListener("touchend", () => {
    Drawing = false
    check()
});
canvas.addEventListener("touchmove",scratch)

revealedbutton.addEventListener("click", () => {
    habeeb_deen_ommy.play()
})