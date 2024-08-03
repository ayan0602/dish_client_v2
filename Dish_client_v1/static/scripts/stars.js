// script.js
function main(){
    console.log('hi')
    const canvas = document.getElementById('starsCanvas');
    const ctx = canvas.getContext('2d');
    
    // Resize canvas to fit the window
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = [];
    const numStars = 100;
    
    // Star constructor
    function Star(x, y, length, speed) {
        this.x = x;
        this.y = y;
        this.length = length;
        this.speed = speed;
        this.alpha = 1;
    }

    // Create stars
    function createStars() {
        for (let i = 0; i < numStars; i++) {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            const length = Math.random() * 5;
            const speed = Math.random() * 7;
            stars.push(new Star(x, y, length, speed));
        }
    }


    // Draw stars
    function drawStars() {

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        stars.forEach(star => {
            ctx.strokeStyle = `rgba(255, 255, 255, ${star.alpha})`;
            ctx.beginPath();
            ctx.moveTo(star.x, star.y);
            ctx.lineTo(star.x + star.length, star.y - star.length);
            ctx.stroke();

            // Update star position
            star.x += star.speed;
            star.y -= star.speed;
            star.alpha -= 0.01;

            // Reset star if it goes off screen
            if (star.x > canvas.width || star.y < 0 || star.alpha <= 0) {
                star.x = Math.random() * canvas.width;
                star.y = Math.random() * canvas.height;
                star.length = Math.random() * 10;
                star.speed = Math.random() * 3;
                star.alpha = 1;
            }
        });

        requestAnimationFrame(drawStars);
    }

    // prevents user from scrolling the canvas
    /*canvas.addEventListener('wheel', (e) => {
        e.preventDefault();
        window.scrollBy(e.deltaX, e.deltaY);
    });*/


    createStars();
    drawStars();


    window.addEventListener('load', function() {
        var box = document.getElementById('container-middle-pie');
        box.classList.add('animate');
    });
}




if (document.readyState !== "loading") {
    main(); // Or setTimeout(onReady, 0); if you want it consistently async
} else {
   document.addEventListener("DOMContentLoaded", main);
}