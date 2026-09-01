const canvas = document.getElementById("scratch_canvas")
const ctx = canvas.getContext("2d")
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
    "assets/secet (6).jpg",
    "assets/secet (7).jpg",
    "assets/secet (8).jpg",
    "assets/secet (9).jpg",
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
})