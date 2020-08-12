const defaultLatLng = [-23.18991582859915, -45.88611602783204]

/**
 * Create a map
 */
const initMap = () => {
  const map = L.map('map').setView(defaultLatLng, 9)
  let marker = undefined

  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'}).addTo(map)

  map.on('click', function({ latlng: { lat, lng } }) {
    document.getElementById('latitude').value = lat
    document.getElementById('longitude').value = lng

    if (marker != undefined) map.removeLayer(marker)

    marker = L.marker([lat, lng]).addTo(map)
  })
}

export {
  initMap
}
