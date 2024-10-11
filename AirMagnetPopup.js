ocument.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('AirMagnet-PopupContainer');
    const closeBtn = document.getElementById('AirMagnet-ClosePopup');
    const iframe = document.getElementById('AirMagnet-Iframe');

    // Function to show the popup
    window.AirMagnetShowPopup = function() {
        popup.style.display = 'block';
    }

    // Close popup when close button is clicked
    closeBtn.onclick = function() {
        popup.style.display = 'none';
    }

    // Close popup when clicking outside of the popup content
    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    }

    // Update iframe height dynamically after the content is fully loaded
    window.addEventListener('message', function(event) {

        const height = event.data; // Get the height from the message
        iframe.style.height = height + 'px'; // Set the iframe height
    });

});
