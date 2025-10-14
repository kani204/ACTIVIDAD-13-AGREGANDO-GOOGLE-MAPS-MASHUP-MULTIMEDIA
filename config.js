// ========================================
// CONFIGURACIÓN DE API KEYS
// Actividad 13 - Google Maps + Mashup
// ========================================

// IMPORTANTE: Reemplazar con tus propias API Keys
const CONFIG = {
  // Google Maps API Key (REQUERIDO)
  // Obtener en: https://console.cloud.google.com/
  GOOGLE_MAPS_API_KEY: 'YOUR_API_KEY_HERE',
  
  // OpenCage Geocoding API Key (OPCIONAL)
  // Obtener en: https://opencagedata.com/api
  OPENCAGE_API_KEY: 'YOUR_OPENCAGE_KEY_HERE',
  
  // NASA API Key (OPCIONAL - puedes usar 'DEMO_KEY')
  // Obtener en: https://api.nasa.gov/
  NASA_API_KEY: 'DEMO_KEY',
  
  // Configuración de la aplicación
  APP_CONFIG: {
    // Ubicación inicial (Buenos Aires, Argentina)
    DEFAULT_LATITUDE: -34.6037,
    DEFAULT_LONGITUDE: -58.3816,
    
    // Configuración del mapa
    DEFAULT_ZOOM: 13,
    MAP_TYPE: 'ROADMAP', // ROADMAP, SATELLITE, HYBRID, TERRAIN
    
    // Configuración de simulación
    SIMULATION_INTERVAL: 3000, // milisegundos
    
    // Configuración de audio
    DEFAULT_VOLUME: 0.5, // 0.0 a 1.0
    
    // Configuración de APIs
    API_TIMEOUT: 10000, // milisegundos
    ENABLE_NASA_API: true,
    ENABLE_DOG_API: true,
    ENABLE_OPENCAGE_API: false
  }
};

// Función para obtener la configuración
function getConfig() {
  return CONFIG;
}

// Función para validar API Keys
function validateApiKeys() {
  const errors = [];
  
  if (!CONFIG.GOOGLE_MAPS_API_KEY || CONFIG.GOOGLE_MAPS_API_KEY === 'YOUR_API_KEY_HERE') {
    errors.push('Google Maps API Key no configurada');
  }
  
  if (CONFIG.APP_CONFIG.ENABLE_OPENCAGE_API && 
      (!CONFIG.OPENCAGE_API_KEY || CONFIG.OPENCAGE_API_KEY === 'YOUR_OPENCAGE_KEY_HERE')) {
    errors.push('OpenCage API Key no configurada (opcional)');
  }
  
  return {
    isValid: errors.length === 0,
    errors: errors
  };
}

// Exportar configuración
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CONFIG, getConfig, validateApiKeys };
} else {
  window.CONFIG = CONFIG;
  window.getConfig = getConfig;
  window.validateApiKeys = validateApiKeys;
}
