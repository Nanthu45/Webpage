// Javascript pannellum
var img = document.querySelector('img');
img.addEventListener('click', function () {
            document.getElementById('img').style.display = 'none';
            document.getElementById('para').style.display = 'none';
            document.getElementById('content').style.display = 'none';
            panoramaLoad();
});

// Toggle between map and panorama on button click
const toggleButton = document.getElementById('toggleButton');
toggleButton.addEventListener('click', function () {
            const panoramaContainer = document.getElementById('panorama');
            panoramaContainer.style.display = 'none'; // Hide the panorama
            panoramaContainer.innerHTML = ''; // Clear the panorama container content

            const imgContainer = document.getElementById('img');
            imgContainer.style.display = 'block'; // Show the map
            const paraContainer = document.getElementById('para');
            paraContainer.style.display = 'block';

            // Remove the hide-background class to show the background
            document.getElementById('content').style.display = 'flex';
});

function panoramaLoad() {
            var panoramaContainer = document.getElementById('panorama');
            panoramaContainer.style.display = 'block'; // Show the panorama container

            var panorama = pannellum.viewer('panorama', {
                type: "equirectangular",
                panorama:"Images/Panaromic_image.jpg",
                autoLoad: true,
                default_fov: 90,
                showControls: true,
                autoRotate: -5,
                hotSpots: Array.from({ length: 6 }, (_, i) => ({
                    pitch: 0,
                    yaw: i * 60,
                    cssClass: "custom-hotspot",
                    createTooltipFunc: hotspot,
                    createTooltipArgs: `${i * 60} degrees`
                }))
            });

            function hotspot(hotSpotDiv, args) {
                hotSpotDiv.classList.add('custom-tooltip');
                var span = document.createElement('span');
                span.innerHTML = args;
                hotSpotDiv.appendChild(span);
                span.style.width = span.scrollWidth - 20 + 'px';
                span.style.marginLeft = -(span.scrollWidth - hotSpotDiv.offsetWidth) / 2 + 'px';
                span.style.marginTop = -span.scrollHeight - 12 + 'px';
            }
        }