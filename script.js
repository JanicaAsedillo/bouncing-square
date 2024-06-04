const square = document.getElementById('square');
const container = document.getElementById('container');

let positionX = 0;
let positionY = 0;
let velocityX = 4;
let velocityY = 4;
let size = 50; // Initial size
let speedIncrement = 2; // Speed increment when clicked

let animationFrameId;

function update() {
    positionX += velocityX;
    positionY += velocityY;

    // Check for collisions with the container boundaries
    if (positionX + square.clientWidth > container.clientWidth || positionX < 0) {
        velocityX = -velocityX;
    }
    if (positionY + square.clientHeight > container.clientHeight || positionY < 0) {
        velocityY = -velocityY;
    }

    // Apply the new position
    square.style.left = positionX + 'px';
    square.style.top = positionY + 'px';

    // Continue the animation
    animationFrameId = requestAnimationFrame(update);
}

function startBouncing() {
    // Ensure no previous animation is running
    cancelAnimationFrame(animationFrameId);

    // Reset the initial position and velocity
    positionX = Math.random() * (container.clientWidth - size);
    positionY = Math.random() * (container.clientHeight - size);
    velocityX = Math.sign(velocityX) * (Math.abs(velocityX) + speedIncrement);
    velocityY = Math.sign(velocityY) * (Math.abs(velocityY) + speedIncrement);

    // Change the size of the square
    size += 10;
    square.style.width = size + 'px';
    square.style.height = size + 'px';

    // Start the animation
    update();
}

// Add event listener to start the bouncing on click
square.addEventListener('click', startBouncing);

// Initialize the position
square.style.left = positionX + 'px';
square.style.top = positionY + 'px';
