document.addEventListener('DOMContentLoaded', function() {
    const iframe = document.getElementById('AirMagnet-Iframe-Embed');

    // Update iframe height dynamically after the content is fully loaded
    window.addEventListener('message', function(event) {

        const message = event.data;
        if (message.type=='AirMagnet-Height')
        iframe.style.height = message.value + 'px'; // Set the iframe height
    });

});
