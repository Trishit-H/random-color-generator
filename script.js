// select body
const body = document.querySelector('body');

// select button that changes the bg color of body
const button = document.querySelector('button');

// select the rgb <p>
const rgb = document.querySelector('.rgb');

// select the hex <p>
const hex = document.querySelector('.hex');

// function that generates a random color in rgb value and hex value
function generateRandomColor() {
    // first generate a random value between 0 to 255 for rgb
    // then convert the random value to hexadecimal value for hex

    // red for rgb and hex
    const red = Math.floor(Math.random() * 256);
    const redHex = red.toString(16).padStart(2, '0');

    // green for rgb and hex
    const green = Math.floor(Math.random() * 256);
    const greenHex = green.toString(16).padStart(2, '0');

    // blue for rgb and hex
    const blue = Math.floor(Math.random() * 256);
    const blueHex = blue.toString(16).padStart(2, '0');

    const rgbColor = `rgb(${red}, ${green}, ${blue})`;
    const hexColor = `#${redHex}${greenHex}${blueHex}`;

    // return both color codes as objects
    return { rgbColor, hexColor };
}

// function to copy the color code to clipboard
async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        alert('Color code copied!');
    } catch (err) {
        alert('Some error occurred while trying to copy the color code!');
        console.error('Could not copy text:', err.message);
    }
}

// add click event listener on button and change the background color of body
button.addEventListener('click', () => {
    // call the generateRandomColor function and extract the values using object destructuring
    const { rgbColor, hexColor } = generateRandomColor();

    // change the background color of the body using any of these values
    body.style.backgroundColor = rgbColor;

    // change the textContent of the two paragraphs displaying color codes in rgb and hex
    rgb.textContent = rgbColor;
    hex.textContent = hexColor;
});

// add event listeners to copy the color code
rgb.addEventListener('click', (event) => {
    const text = event.target.textContent;
    copyToClipboard(text);
});

hex.addEventListener('click', (event) => {
    const text = event.target.textContent;
    copyToClipboard(text);
});
