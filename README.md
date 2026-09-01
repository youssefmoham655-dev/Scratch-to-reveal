# Scratch to reveal
A website where you should scratch this black screen to see the secret image behind this black screen.

## Tech used
- HTML
- CSS
- Javascript

## How to run

using demo link, it's web playable

it just a black canvas where u go through by mouse to make are ur covering transparent.

## DEMO Link
[Scratch to reveal](https://scratch-to-reveal-sigma.vercel.app/)

## AI Declaration
the ai was only used to explain to me how to turn the idea in my mind to this function
```function scratch(e) {
    if (!Drawing) return;

    const rect = canvas.getBoundingClientRect();
    const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left
    const y = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top

    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x,y,brush_size, 0,Math.PI * 2);
    ctx.fill();
}
```
but i typed it with hands it only explained it to me but not for coding

## Screenshots:

<img src="assets\image.png" alt="Screenshot" width="800" />

<hr>

### Made by [Youssef Mohammed](https://github.com/youssefmoham655-dev)