// References to DOM elements
const wall = document.getElementById('room');
const wallBackground = document.getElementById('wall-background');
const paintingSize = document.getElementById('painting-size');
const addPaintingButton = document.getElementById('add-painting');
const colorCircles = document.querySelectorAll('.color-circle');

// Update wall background based on selection
wallBackground.addEventListener('change', (e) => {
  const background = e.target.value;
  if (background === 'living-room') {
    wall.style.backgroundImage = "url('living-room.jpg')"; // Update this path to the uploaded image
    wall.style.backgroundColor = ''; // Clear any solid color
  } else if (background === 'plain-wall') {
    wall.style.backgroundImage = ''; // Remove background image
    wall.style.backgroundColor = '#ffffff'; // Set plain white color
  }
});

// Update wall color when a color circle is clicked
colorCircles.forEach((circle) => {
  circle.addEventListener('click', () => {
    const color = circle.getAttribute('data-color');
    wall.style.backgroundColor = color;
    wall.style.backgroundImage = ''; // Remove any background image
  });
});

// Add new painting
addPaintingButton.addEventListener('click', () => {
  const size = paintingSize.value;

  const painting = document.createElement('div');
  painting.className = 'painting';

  // Set painting size and orientation
  if (size === 'circle') {
    painting.classList.add('circle');
    painting.style.width = '100px';
    painting.style.height = '100px';
  } else {
    const [width, height] = size.split('x');
    painting.style.width = `${width}px`;
    painting.style.height = `${height}px`;
  }

  // Add drag-and-drop functionality
  painting.draggable = true;
  painting.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', null);
  });
  painting.addEventListener('dragend', (e) => {
    painting.style.left = `${e.clientX - wall.offsetLeft - painting.offsetWidth / 2}px`;
    painting.style.top = `${e.clientY - wall.offsetTop - painting.offsetHeight / 2}px`;
  });

  // Add to wall
  wall.appendChild(painting);
});
