// Function called when an image is selected
function handleImage() {
    const fileInput = document.getElementById('image-input');
    const colorCountInput = document.getElementById('color-count');
    const file = fileInput.files[0];
    const colorCount = parseInt(colorCountInput.value);

    if (file && colorCount > 0) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const imageUrl = e.target.result;
            displayImage(imageUrl);
            extractColors(imageUrl, colorCount);
        };

        reader.readAsDataURL(file);
    }
}

// Function to display the uploaded image
function displayImage(imageUrl) {
    const imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = `<img src="${imageUrl}" alt="Uploaded Image">`;
}

// Function to extract dominant colors from the image
function extractColors(imageUrl, colorCount) {
    const colorThief = new ColorThief();
    const image = new Image();

    // Wait for the image to fully load
    image.onload = function () {
        const dominantColors = colorThief.getPalette(image, colorCount);
        const colorPaletteContainer = document.getElementById('color-palette-container');
        const colorPaletteHeading = document.getElementById('color-palette-heading');

        // Clear previous content
        colorPaletteContainer.innerHTML = '';

        // Create color circles for each dominant color
        dominantColors.forEach((color, index) => {
            const colorCircle = document.createElement('div');
            colorCircle.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
            colorCircle.classList.add('color-circle');

            // Create a tooltip displaying the hexadecimal value on hover
            const colorInfo = document.createElement('p');
            colorInfo.classList.add('color-info');
            colorInfo.textContent = rgbToHex(color[0], color[1], color[2]);
            colorInfo.style.cursor = 'pointer';
            colorInfo.addEventListener('click', () => copyToClipboard(colorInfo.textContent));

            colorCircle.appendChild(colorInfo);
            colorPaletteContainer.appendChild(colorCircle);
        });

        // Display the color palette heading
        colorPaletteHeading.style.display = 'block';
    };

    // Set the image source
    image.src = imageUrl;
}

// Function to convert an RGB color to hexadecimal format
function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

// Utility function to convert a color component to hexadecimal format
function componentToHex(c) {
    const hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
}

// Function to copy the hexadecimal value to the clipboard
function copyToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);

    // Display an alert to inform that the value has been copied
    alert('Web color value copied: ' + text);
}

// Function to adjust the number of colors to extract
function adjustColorCount(amount) {
    const colorCountInput = document.getElementById('color-count');
    let currentCount = parseInt(colorCountInput.value);
    currentCount += amount;

    // Ensure the adjusted number is within the specified range
    if (currentCount >= parseInt(colorCountInput.min) && currentCount <= parseInt(colorCountInput.max)) {
        colorCountInput.value = currentCount;
    }
}
