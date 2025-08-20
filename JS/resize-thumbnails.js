document.addEventListener('DOMContentLoaded', () => {
    const thumbnailContainer = document.getElementById('thumbnail-container');
    const plusButton = document.getElementById('plus-button');
    const minusButton = document.getElementById('minus-button');
    const DEFAULTTHUMBNAILSIZE = 400;
    // Retrieve the saved minWidth from localStorage or set default value
    let minWidth = parseInt(localStorage.getItem('thumbnailMinWidth')) || DEFAULTTHUMBNAILSIZE;
    

    // Apply the initial size from localStorage
    updateThumbnailSize();

    plusButton.addEventListener('click', () => {
        if (minWidth < 500) {
            minWidth += 50;
            updateThumbnailSize();
            localStorage.setItem('thumbnailMinWidth', minWidth);
        }
    });

    minusButton.addEventListener('click', () => {
        if (minWidth > 100) {
            minWidth -= 50;
            updateThumbnailSize();
            localStorage.setItem('thumbnailMinWidth', minWidth);
        }
    });

    // Add event listener for the 'r', '+', and '-' keys
    document.addEventListener('keydown', (event) => {
        if (event.key === 'r') {
            minWidth = 250;
            updateThumbnailSize();
            localStorage.setItem('thumbnailMinWidth', minWidth);
        } else if (event.key === '+' || event.key === '=') { // 'Equal' key for shift+'+' key on some keyboards
            if (minWidth < 500) {
                minWidth += 50;
                updateThumbnailSize();
                localStorage.setItem('thumbnailMinWidth', minWidth);
            }
        } else if (event.key === '-') {
            if (minWidth > 100) {
                minWidth -= 50;
                updateThumbnailSize();
                localStorage.setItem('thumbnailMinWidth', minWidth);
            }
        }
    });

    function updateThumbnailSize() {
        console.log(thumbnailContainer.style);
        thumbnailContainer.style.gridTemplateColumns = `repeat(auto-fill, minmax(${minWidth}px, 1fr))`;
        console.log(thumbnailContainer.style);
    }
});
