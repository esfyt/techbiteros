// Select the first heading element on the page
const heading = document.querySelector('h1');

// Define a list of colors for cycling
const colors = ['#00ff00', '#00cc00', '#009900', '#006600'];

// Initialize index to 0 for color selection
let i = 0;

// Define a function to update the heading color
function updateHeadingColor() {
  // Set the heading's CSS color style to the color at position i
  heading.style.color = colors[i];

  // Increment i by 1
  i = i + 1;

  // If i equals the number of colors, reset i to 0 to cycle colors
  if (i === colors.length) {
    i = 0;
  }
}

// Call updateHeadingColor every 2 seconds indefinitely
setInterval(updateHeadingColor, 2000);
