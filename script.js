// ========================================
// GOOGLE MAPS + MASHUP - ACTIVIDAD 13
// Proyecto de Implementación de Sitios web Dinámicos
// EEST N.º 1 - "Eduardo Ader" Vicente López
// ========================================

// Variables globales
let map;
let marker;
let watchId;
let isSimulating = false;
let simulationInterval;
let currentPosition = { 
  lat: CONFIG.APP_CONFIG.DEFAULT_LATITUDE, 
  lng: CONFIG.APP_CONFIG.DEFAULT_LONGITUDE 
};

// Configuración de APIs (desde config.js)
const API_KEYS = {
  GOOGLE_MAPS: CONFIG.GOOGLE_MAPS_API_KEY,
  NASA: CONFIG.NASA_API_KEY,
  OPENCAGE: CONFIG.OPENCAGE_API_KEY,
  DOG_API: 'https://dog.ceo/api/breeds/image/random'
};

// ========================================
// INICIALIZACIÓN DEL MAPA
// ========================================
function initMap() {
  console.log('🗺️ Inicializando Google Maps...');
  
  // Configuración inicial del mapa
  const mapOptions = {
    center: currentPosition,
    zoom: CONFIG.APP_CONFIG.DEFAULT_ZOOM,
    mapTypeId: google.maps.MapTypeId[CONFIG.APP_CONFIG.MAP_TYPE],
    styles: [
      {
        featureType: 'poi',
        elementType: 'labels',
        stylers: [{ visibility: 'off' }]
      }
    ]
  };

  // Crear el mapa
  map = new google.maps.Map(document.getElementById('map'), mapOptions);

  // Crear marcador inicial
  marker = new google.maps.Marker({
    position: currentPosition,
    map: map,
    title: 'Ubicación Actual',
    animation: google.maps.Animation.DROP,
    icon: {
      url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
        <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="18" fill="#4CAF50" stroke="#fff" stroke-width="2"/>
          <circle cx="20" cy="20" r="8" fill="#fff"/>
        </svg>
      `),
      scaledSize: new google.maps.Size(40, 40)
    }
  });

  // Configurar eventos del mapa
  setupMapEvents();
  
  // Configurar controles
  setupControls();
  
  // Actualizar información inicial
  updateLocationInfo(currentPosition);
  updateStatus('Mapa inicializado correctamente');
  
  console.log('✅ Mapa inicializado correctamente');
}

// ========================================
// CONFIGURACIÓN DE EVENTOS DEL MAPA
// ========================================
function setupMapEvents() {
  // Evento de clic en el mapa
  map.addListener('click', (event) => {
    const clickedPosition = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng()
    };
    
    updateMapPosition(clickedPosition);
    playRandomSound();
  });

  // Evento de cambio de zoom
  map.addListener('zoom_changed', () => {
    console.log('🔍 Zoom cambiado:', map.getZoom());
  });
}

// ========================================
// CONFIGURACIÓN DE CONTROLES
// ========================================
function setupControls() {
  // Botón de geolocalización
  document.getElementById('btn-geolocation').addEventListener('click', getCurrentLocation);
  
  // Botón de simulación
  document.getElementById('btn-simulate').addEventListener('click', toggleSimulation);
  
  // Botón de sonido principal
  document.getElementById('btn-sound').addEventListener('click', playRandomSound);
  
  // Botón de detener
  document.getElementById('btn-stop').addEventListener('click', stopAll);
  
  // Botones de audio específicos
  document.getElementById('btn-sound1').addEventListener('click', () => playSound(1));
  document.getElementById('btn-sound2').addEventListener('click', () => playSound(2));
  document.getElementById('btn-sound3').addEventListener('click', () => playSound(3));
  
  // Control de volumen
  const volumeSlider = document.getElementById('volume-slider');
  const volumeDisplay = document.getElementById('volume-display');
  
  volumeSlider.addEventListener('input', (e) => {
    const volume = e.target.value / 100;
    setVolume(volume);
    volumeDisplay.textContent = e.target.value + '%';
  });
}

// ========================================
// GEOLOCALIZACIÓN REAL
// ========================================
function getCurrentLocation() {
  updateStatus('Obteniendo ubicación...');
  
  if (!navigator.geolocation) {
    updateStatus('❌ Geolocalización no soportada por este navegador');
    return;
  }

  const options = {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 60000
  };

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const newPosition = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      
      updateMapPosition(newPosition);
      updateStatus('✅ Ubicación obtenida correctamente');
      playSound(1); // Sonido de éxito
    },
    (error) => {
      let errorMessage = '❌ Error al obtener ubicación: ';
      switch(error.code) {
        case error.PERMISSION_DENIED:
          errorMessage += 'Permiso denegado';
          break;
        case error.POSITION_UNAVAILABLE:
          errorMessage += 'Ubicación no disponible';
          break;
        case error.TIMEOUT:
          errorMessage += 'Tiempo de espera agotado';
          break;
        default:
          errorMessage += 'Error desconocido';
          break;
      }
      updateStatus(errorMessage);
      playSound(3); // Sonido de error
    },
    options
  );
}

// ========================================
// SIMULACIÓN DE MOVIMIENTO
// ========================================
function toggleSimulation() {
  if (isSimulating) {
    stopSimulation();
  } else {
    startSimulation();
  }
}

function startSimulation() {
  isSimulating = true;
  updateStatus('🎲 Simulación iniciada - Movimiento aleatorio cada 3 segundos');
  
  // Cambiar texto del botón
  document.getElementById('btn-simulate').textContent = '⏸️ Pausar Simulación';
  document.getElementById('btn-simulate').classList.remove('btn-secondary');
  document.getElementById('btn-simulate').classList.add('btn-stop');
  
  // Iniciar simulación
  simulationInterval = setInterval(() => {
    const randomPosition = generateRandomPosition();
    updateMapPosition(randomPosition);
    playRandomSound();
  }, CONFIG.APP_CONFIG.SIMULATION_INTERVAL);
}

function stopSimulation() {
  isSimulating = false;
  clearInterval(simulationInterval);
  updateStatus('⏹️ Simulación detenida');
  
  // Restaurar botón
  document.getElementById('btn-simulate').textContent = '🎲 Simular Movimiento';
  document.getElementById('btn-simulate').classList.remove('btn-stop');
  document.getElementById('btn-simulate').classList.add('btn-secondary');
}

function generateRandomPosition() {
  // Generar posición aleatoria cerca de la posición actual
  const latOffset = (Math.random() - 0.5) * 0.1; // ±0.05 grados
  const lngOffset = (Math.random() - 0.5) * 0.1;
  
  return {
    lat: currentPosition.lat + latOffset,
    lng: currentPosition.lng + lngOffset
  };
}

// ========================================
// ACTUALIZACIÓN DEL MAPA
// ========================================
function updateMapPosition(position) {
  currentPosition = position;
  
  // Actualizar marcador
  marker.setPosition(position);
  
  // Centrar mapa
  map.panTo(position);
  
  // Actualizar información
  updateLocationInfo(position);
  
  // Obtener datos de APIs
  fetchLocationData(position);
}

function updateLocationInfo(position) {
  const coordsElement = document.getElementById('location-coords');
  const timeElement = document.getElementById('location-time');
  
  coordsElement.textContent = `Latitud: ${position.lat.toFixed(6)}, Longitud: ${position.lng.toFixed(6)}`;
  timeElement.textContent = `Última actualización: ${new Date().toLocaleTimeString()}`;
  
  // Obtener dirección (geocodificación inversa)
  getAddressFromCoords(position);
}

// ========================================
// GEOCODIFICACIÓN (DIRECCIÓN A PARTIR DE COORDENADAS)
// ========================================
function getAddressFromCoords(position) {
  const geocoder = new google.maps.Geocoder();
  
  geocoder.geocode({ location: position }, (results, status) => {
    if (status === 'OK' && results[0]) {
      const address = results[0].formatted_address;
      document.getElementById('location-address').textContent = `Dirección: ${address}`;
    } else {
      document.getElementById('location-address').textContent = 'Dirección: No disponible';
    }
  });
}

// ========================================
// SISTEMA DE AUDIO
// ========================================
function playSound(soundNumber = null) {
  const sounds = ['audio1', 'audio2', 'audio3'];
  const soundId = soundNumber ? sounds[soundNumber - 1] : sounds[Math.floor(Math.random() * sounds.length)];
  
  const audio = document.getElementById(soundId);
  
  if (audio) {
    audio.currentTime = 0; // Reiniciar desde el inicio
    audio.play().catch(error => {
      console.log('⚠️ Error al reproducir audio:', error);
      updateStatus('⚠️ Error al reproducir audio - Verificar archivos de sonido');
    });
  }
}

function playRandomSound() {
  playSound();
}

function setVolume(volume) {
  const audioElements = ['audio1', 'audio2', 'audio3'];
  audioElements.forEach(id => {
    const audio = document.getElementById(id);
    if (audio) {
      audio.volume = volume;
    }
  });
}

// ========================================
// INTEGRACIÓN CON APIs EXTERNAS
// ========================================
async function fetchLocationData(position) {
  try {
    // Obtener imagen de la NASA (APOD - Astronomy Picture of the Day)
    await fetchNASAData();
    
    // Obtener imagen de perro aleatoria
    await fetchDogImage();
    
  } catch (error) {
    console.log('⚠️ Error al obtener datos de APIs:', error);
  }
}

async function fetchNASAData() {
  try {
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEYS.NASA}`);
    const data = await response.json();
    
    if (data.url) {
      const nasaImage = document.getElementById('nasa-image');
      const nasaExplanation = document.getElementById('nasa-explanation');
      
      nasaImage.src = data.url;
      nasaImage.style.display = 'block';
      nasaExplanation.textContent = data.explanation || 'Imagen astronómica del día';
    }
  } catch (error) {
    console.log('⚠️ Error al obtener datos de la NASA:', error);
  }
}

async function fetchDogImage() {
  try {
    const response = await fetch(API_KEYS.DOG_API);
    const data = await response.json();
    
    if (data.message) {
      const dogImage = document.getElementById('dog-image');
      dogImage.src = data.message;
      dogImage.style.display = 'block';
    }
  } catch (error) {
    console.log('⚠️ Error al obtener imagen de perro:', error);
  }
}

// ========================================
// FUNCIONES DE CONTROL
// ========================================
function stopAll() {
  stopSimulation();
  updateStatus('⏹️ Todas las operaciones detenidas');
}

function updateStatus(message) {
  const statusElement = document.getElementById('status-message');
  statusElement.textContent = message;
  console.log('📢 Estado:', message);
}

// ========================================
// INICIALIZACIÓN AL CARGAR LA PÁGINA
// ========================================
document.addEventListener('DOMContentLoaded', () => {
  console.log('🚀 Aplicación iniciada');
  updateStatus('Aplicación cargada - Listo para usar');
  
  // Configurar volumen inicial
  setVolume(CONFIG.APP_CONFIG.DEFAULT_VOLUME);
  
  // Verificar si Google Maps está disponible
  if (typeof google === 'undefined') {
    updateStatus('❌ Error: Google Maps API no cargada. Verificar API Key.');
  }
});

// ========================================
// MANEJO DE ERRORES GLOBALES
// ========================================
window.addEventListener('error', (event) => {
  console.error('❌ Error global:', event.error);
  updateStatus('❌ Error en la aplicación - Verificar consola');
});

// ========================================
// FUNCIONES DE UTILIDAD
// ========================================
function formatCoordinates(lat, lng) {
  return `${lat.toFixed(6)}, ${lng.toFixed(6)}`;
}

function calculateDistance(pos1, pos2) {
  const R = 6371; // Radio de la Tierra en km
  const dLat = (pos2.lat - pos1.lat) * Math.PI / 180;
  const dLng = (pos2.lng - pos1.lng) * Math.PI / 180;
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(pos1.lat * Math.PI / 180) * Math.cos(pos2.lat * Math.PI / 180) *
    Math.sin(dLng/2) * Math.sin(dLng/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}

// ========================================
// EXPORTAR FUNCIONES PARA USO GLOBAL
// ========================================
window.MapApp = {
  initMap,
  getCurrentLocation,
  toggleSimulation,
  playSound,
  updateMapPosition,
  stopAll
};
