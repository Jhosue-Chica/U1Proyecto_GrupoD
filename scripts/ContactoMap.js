document.addEventListener("DOMContentLoaded", function () {
  var mapa = L.map('mapa').setView([-0.4126174068318145, -79.30903172334396], 16); 

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(mapa);

  L.marker([-0.4126174068318145, -79.30903172334396]).addTo(mapa)
    .bindPopup('¡Hola! Aquí estamos.')
    .openPopup();
});
