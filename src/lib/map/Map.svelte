
<!-- Leaflet JS -->
<script src="https://unpkg.com/leaflet@1.4.0/dist/leaflet.js" integrity="sha512-QVftwZFqvtRNi0ZyCtsznlKSWOStnDORoefr1enyq5mVL4tmKB3S/EnC3rRJcxCPavG10IcrVGSmPh6Qw5lwrg==" crossorigin=""></script>
<!-- Map Fullscreen JS -->
<script src="Control.FullScreen.js"></script>
<!-- Map Locate JS -->
<script src="./leaflet-locatecontrol-gh-pages/leaflet-locatecontrol-gh-pages/dist/L.Control.Locate.min.js" charset="utf-8"></script>

<!-- Custom Map JS -->
<script>
    // Making a map and tiles
    // Setting a lower initial zoom for beter overview
    const overview_map = L.map('pointMap', {
                    fullscreenControl: true,
                    fullscreenControlOptions: {
                    position: 'topleft'}
                    }).setView([51.289406, 10.008545], 6);
    // Setting Attributions for OSM Compliance
    const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
    // Loading and adding Tiles
    const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const tiles = L.tileLayer(tileUrl, { attribution });
    tiles.addTo(overview_map);
    // Add Control Buttons
    L.control.locate().addTo(overview_map);

    // Load all Ad-Locattions from Backend.js
    marker();

</script>


<!-- Titel -->
<div class="container-md text-center">
    <h4 class="display-7 fw-bold">Übersicht der Angebote in deiner Nähe</h4>
</div>

<!-- Custom Map Location -->
<div class="container-md">
    <div id="pointMap"></div>
</div>
