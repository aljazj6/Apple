document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = '#000';
        } else {
            header.style.background = 'rgba(22, 22, 23, 0.8)';
        }
    });
});

// Izberite canvas element
const canvas = document.getElementById('appleLogo');
const ctx = canvas.getContext('2d');

// Nariši obliko jabolka
ctx.beginPath();
ctx.moveTo(200, 100);
ctx.bezierCurveTo(150, 50, 100, 150, 140, 200);
ctx.bezierCurveTo(160, 230, 220, 220, 250, 190);
ctx.bezierCurveTo(270, 150, 230, 50, 200, 100);
ctx.closePath();

// Barva jabolka (siva)
ctx.fillStyle = '#444';
ctx.fill();

// Nariši pecelj
ctx.beginPath();
ctx.moveTo(200, 50);
ctx.lineTo(215, 30);
ctx.lineTo(205, 50);
ctx.closePath();

// Barva pecelj (siva)
ctx.fillStyle = '#444';
ctx.fill();
