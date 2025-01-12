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

function circle(context, x, y, radius) {
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI, false);
    context.fill();
    context.stroke();
}

function triangle(context, x1, y1, x2, y2, x3, y3) {
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.lineTo(x3, y3);
    context.closePath();
    context.fill();
    context.stroke();
}

window.onload = function() {
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    var centreX, centreY;
    var baseSize = 3; 
    var contextX, contextY, control1X, control1Y, control2X, control2Y, endX, endY;

    
    centreX = canvas.width / 2;
    centreY = canvas.height / 2;

    
    context.fillStyle = "#a9a9a9"; 
    context.lineWidth = 1;
    context.strokeStyle = "#a9a9a9"; 
    context.lineJoin = "round";

  
    context.beginPath();
    context.arc(centreX, centreY, 13 * baseSize, -Math.PI / 4, Math.PI + Math.PI / 4, false);
    context.closePath();
    context.fill();
    context.stroke();

    circle(context, centreX - 5.8 * baseSize, centreY + 9.7 * baseSize, 5 * baseSize);
    circle(context, centreX + 5.8 * baseSize, centreY + 9.7 * baseSize, 5 * baseSize);

    triangle(context, centreX - 5.8 * baseSize, centreY + 9.7 * baseSize, centreX + 5.8 * baseSize, centreY + 9.7 * baseSize, centreX, centreY + 20.8 * baseSize);
    context.globalCompositeOperation = "destination-out";
    circle(context, centreX, centreY + 21.3 * baseSize, 8 * baseSize);

    context.globalCompositeOperation = "source-over";
    circle(context, centreX - 6.8 * baseSize, centreY - 5.0 * baseSize, 8 * baseSize);
    circle(context, centreX + 6.8 * baseSize, centreY - 5.0 * baseSize, 8 * baseSize);

    contextX = centreX - 6.8 * baseSize + Math.sin(Math.PI / 4 / 1.5) * 8 * baseSize;
    contextY = centreY - 5.0 * baseSize - Math.cos(Math.PI / 4 / 1.5) * 8 * baseSize - 1;
    control1X = centreX;
    control1Y = centreY - 10 * baseSize;
    endX = centreX + 6.8 * baseSize - Math.sin(Math.PI / 4 / 1.5) * 8 * baseSize;
    endY = centreY - 5.0 * baseSize - Math.cos(Math.PI / 4 / 1.5) * 8 * baseSize - 1;

    context.beginPath();
    context.moveTo(contextX, contextY);
    context.lineTo(centreX, centreY);
    context.lineTo(endX, endY);
    context.closePath();
    context.fill();
    context.stroke();

    context.globalCompositeOperation = "destination-out";
    context.beginPath();
    context.moveTo(contextX, contextY);
    context.quadraticCurveTo(control1X, control1Y, endX, endY);
    context.lineTo(centreX, centreY - 19.4 * baseSize);
    context.closePath();
    context.fill();
    context.stroke();

    context.globalCompositeOperation = "source-over";
    circle(context, centreX - 11.6 * baseSize, centreY + 4.5 * baseSize, 3 * baseSize);
    circle(context, centreX + 11.6 * baseSize, centreY + 4.5 * baseSize, 3 * baseSize);

    contextX = centreX - 5.8 * baseSize - Math.sin(Math.PI / 4) * (5 * baseSize) - 0.5;
    contextY = centreY + 9.7 * baseSize + Math.cos(Math.PI / 4) * (5 * baseSize);
    endX = centreX - 6.8 * baseSize - Math.cos(Math.PI / 4) * (8 * baseSize);
    endY = centreY - 5.0 * baseSize - Math.sin(Math.PI / 4) * (8 * baseSize);
    control1X = contextX - 6.6 * baseSize;
    control1Y = contextY - 6.6 * baseSize;
    control2X = endX - 6.6 * baseSize;
    control2Y = endY + 6.6 * baseSize;

    context.beginPath();
    context.moveTo(contextX, contextY);
    context.bezierCurveTo(control1X, control1Y, control2X, control2Y, endX, endY);
    context.lineTo(centreX, centreY);
    context.closePath();
    context.fill();
    context.stroke();

    contextX = centreX + 5.8 * baseSize + Math.sin(Math.PI / 4) * (5 * baseSize) + 0.5;
    contextY = centreY + 9.7 * baseSize + Math.cos(Math.PI / 4) * (5 * baseSize);
    endX = centreX + 6.8 * baseSize + Math.cos(Math.PI / 4) * (8 * baseSize);
    endY = centreY - 5.0 * baseSize - Math.sin(Math.PI / 4) * (8 * baseSize);
    control1X = contextX + 6.6 * baseSize;
    control1Y = contextY - 6.6 * baseSize;
    control2X = endX + 6.6 * baseSize;
    control2Y = endY + 6.6 * baseSize;

    context.beginPath();
    context.moveTo(contextX, contextY);
    context.bezierCurveTo(control1X, control1Y, control2X, control2Y, endX, endY);
    context.lineTo(centreX, centreY);
    context.closePath();
    context.fill();
    context.stroke();

    context.globalCompositeOperation = "destination-out";
    circle(context, centreX + 17.4 * baseSize, centreY - 2.3 * baseSize, 8 * baseSize);

    contextX = centreX - 1.1 * baseSize;
    contextY = centreY - 12.4 * baseSize;
    endX = centreX + 6.3 * baseSize;
    endY = centreY - 21.1 * baseSize;
    control1X = centreX + 6.6 * baseSize - (4 / 7.5) * baseSize;
    control1Y = centreY - 13.3 * baseSize - (4 / 7.5) * baseSize;

    context.globalCompositeOperation = "source-over";
    context.beginPath();
    context.moveTo(contextX, contextY);
    context.quadraticCurveTo(control1X, control1Y, endX, endY);

    control1X = centreX - 1.5 * baseSize + (4 / 7.5) * baseSize;
    control1Y = centreY - 20.2 * baseSize + (4 / 7.5) * baseSize;

    context.moveTo(contextX, contextY);
    context.quadraticCurveTo(control1X, control1Y, endX, endY);
    context.closePath();
    context.fill();
    context.stroke();
};
