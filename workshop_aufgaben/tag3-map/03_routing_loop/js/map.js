var map = L.map('map').setView([49.013736, 8.404334], 14);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var infobau = [49.013817, 8.419790];

var schlosspark = [49.013149, 8.404364];
var klinikum = [49.015609, 8.374574];
var gameforge = [49.019921, 8.440989];
var his = [49.010194, 8.418930];

var ziele = [schlosspark, klinikum, gameforge, his];
var zielnamen = ["Schlosspark", "Klinikum", "Gameforge", "HIS Lab"];
var index = 0;

function getRoute() {
  // Überschrift
  document.getElementById("routing").textContent="Vom Infobau zum " + zielnamen[index];

  // Route
  return L.Routing.control({
    waypoints: [L.latLng(infobau[0], infobau[1]),
                L.latLng(ziele[index][0], ziele[index][1])],
    fitSelectedRoutes : false
  }).addTo(map);
}

var route = getRoute();

function nextRoute() {
  route.removeFrom(map)
  if (index != ziele.length - 1) {
    index = index + 1;
  } else {
    index = 0;
  }
  route = getRoute();
}