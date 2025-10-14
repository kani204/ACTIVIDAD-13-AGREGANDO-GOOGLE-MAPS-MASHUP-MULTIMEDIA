# 🌍 Google Maps + Mashup - Actividad 13

**Materia:** Proyecto de Implementación de Sitios web Dinámicos  
**Institución:** EEST N.º 1 - "Eduardo Ader" Vicente López  
**Curso:** 7° año 2° martes de 12:55 a 17:35hs
**Cuatrimestre:** 2° CUATRIMESTRE 2025

## 📋 Descripción del Proyecto

Este proyecto implementa una aplicación web interactiva que combina Google Maps con funcionalidades multimedia (mashup). La aplicación permite:

- 🗺️ Visualización de mapas interactivos con Google Maps
- 📍 Geolocalización en tiempo real
- 🎲 Simulación de movimiento aleatorio
- 🎵 Sistema de audio con múltiples sonidos
- 🌍 Integración con APIs externas (NASA, Dog API)
- 📱 Diseño responsivo y moderno

## 🚀 Características Principales

### Funcionalidades del Mapa
- **Geolocalización Real**: Obtiene la ubicación actual del usuario
- **Simulación de Movimiento**: Genera posiciones aleatorias cada 3 segundos
- **Marcadores Dinámicos**: Marcador personalizado que se actualiza en tiempo real
- **Geocodificación**: Convierte coordenadas en direcciones legibles

### Sistema Multimedia
- **Múltiples Sonidos**: 3 archivos de audio diferentes
- **Control de Volumen**: Slider para ajustar el volumen
- **Reproducción Automática**: Sonidos se reproducen al cambiar ubicación
- **Efectos de Audio**: Sonidos específicos para diferentes acciones

### APIs Integradas
- **Google Maps API**: Mapas interactivos y geocodificación
- **NASA API**: Imágenes astronómicas del día
- **Dog API**: Imágenes aleatorias de perros
- **OpenCage API**: Geocodificación avanzada (opcional)

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos con gradientes y animaciones
- **JavaScript ES6+**: Lógica de la aplicación
- **Google Maps JavaScript API**: Mapas interactivos
- **APIs REST**: Integración con servicios externos

## 📁 Estructura del Proyecto

```
Actividad 13/
├── index.html              # Página principal
├── styles.css              # Estilos CSS
├── script.js               # Lógica JavaScript principal
├── config.js               # Configuración de API Keys
├── assets/                 # Carpeta de recursos
│   ├── README_AUDIO.md     # Instrucciones para archivos de audio
│   ├── sonido_mashup_1.mp3 # Archivo de audio 1 (agregar)
│   ├── sonido_mashup_2.mp3 # Archivo de audio 2 (agregar)
│   └── sonido_mashup_3.mp3 # Archivo de audio 3 (agregar)
├── README.md               # Este archivo
└── INFORME_PROFESOR.md     # Informe para el profesor
```

## 🔧 Instalación y Configuración

### 1. Obtener API Key de Google Maps
1. Ir a [Google Cloud Console](https://console.cloud.google.com/)
2. Crear un nuevo proyecto o seleccionar uno existente
3. Habilitar la API de Google Maps JavaScript
4. Crear credenciales (API Key)
5. Configurar restricciones de dominio (opcional)

### 2. Configurar API Keys
1. Abrir el archivo `config.js`
2. Reemplazar `YOUR_API_KEY_HERE` con tu API Key de Google Maps
3. (Opcional) Configurar otras API Keys

### 3. Agregar Archivos de Audio
1. Descargar o crear archivos de audio en formato MP3
2. Colocar los archivos en la carpeta `assets/`:
   - `sonido_mashup_1.mp3`
   - `sonido_mashup_2.mp3`
   - `sonido_mashup_3.mp3`

### 4. Ejecutar la Aplicación
1. Abrir `index.html` en un navegador web
2. O usar un servidor local (recomendado):
   ```bash
   # Con Python
   python -m http.server 8000
   
   # Con Node.js (http-server)
   npx http-server
   
   # Con Live Server (VSCode)
   # Instalar extensión "Live Server" y hacer clic derecho en index.html
   ```

## 🎮 Cómo Usar la Aplicación

### Controles Principales
- **📍 Obtener Mi Ubicación**: Obtiene la ubicación real del usuario
- **🎲 Simular Movimiento**: Inicia simulación de movimiento aleatorio
- **🎵 Reproducir Mashup**: Reproduce un sonido aleatorio
- **⏹️ Detener**: Detiene todas las operaciones

### Controles de Audio
- **🎶 Sonido 1, 🎵 Sonido 2, 🔊 Sonido 3**: Reproducen sonidos específicos
- **Control de Volumen**: Slider para ajustar el volumen (0-100%)

### Interacción con el Mapa
- **Clic en el Mapa**: Actualiza la ubicación y reproduce sonido
- **Zoom**: Usar la rueda del mouse o controles del mapa
- **Arrastrar**: Mover el mapa para explorar diferentes áreas

## 🌐 APIs Externas Utilizadas

### Google Maps JavaScript API
- **Función**: Mapas interactivos y geocodificación
- **Documentación**: [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript)
- **Costo**: Gratis hasta 28,000 cargas de mapa por mes

### NASA API
- **Función**: Imágenes astronómicas del día
- **Documentación**: [NASA API](https://api.nasa.gov/)
- **Costo**: Gratis (con límite de 1000 requests por hora)

### Dog API
- **Función**: Imágenes aleatorias de perros
- **Documentación**: [Dog API](https://dog.ceo/dog-api/)
- **Costo**: Gratis

### OpenCage Geocoding API (Opcional)
- **Función**: Geocodificación avanzada
- **Documentación**: [OpenCage API](https://opencagedata.com/api)
- **Costo**: 2,500 requests gratis por día

## 🎨 Características de Diseño

### Interfaz Moderna
- **Gradientes**: Fondo con gradiente atractivo
- **Glassmorphism**: Efectos de vidrio esmerilado
- **Animaciones**: Transiciones suaves y efectos hover
- **Responsive**: Adaptable a diferentes tamaños de pantalla

### Paleta de Colores
- **Primario**: Verde (#4CAF50)
- **Secundario**: Azul (#2196F3)
- **Acento**: Naranja (#FF9800)
- **Error**: Rojo (#f44336)
- **Fondo**: Gradiente púrpura-azul

## 🔍 Funcionalidades Técnicas

### Geolocalización
- **Precisión**: Alta precisión habilitada
- **Timeout**: 10 segundos máximo
- **Cache**: 60 segundos de cache
- **Manejo de Errores**: Mensajes específicos para cada tipo de error

### Simulación de Movimiento
- **Intervalo**: 3 segundos entre actualizaciones
- **Rango**: Movimiento dentro de ±0.05 grados de la posición actual
- **Control**: Iniciar/pausar con un botón

### Sistema de Audio
- **Formatos**: MP3, WAV, M4A, OGG
- **Control**: Volumen ajustable de 0-100%
- **Reproducción**: Automática al cambiar ubicación
- **Manejo de Errores**: Fallback silencioso si no hay archivos

## 🐛 Solución de Problemas

### Error: "Google Maps API no cargada"
- **Causa**: API Key incorrecta o no configurada
- **Solución**: Verificar API Key en `config.js`

### Error: "Geolocalización no soportada"
- **Causa**: Navegador no soporta geolocalización
- **Solución**: Usar navegador moderno (Chrome, Firefox, Safari)

### Error: "Error al reproducir audio"
- **Causa**: Archivos de audio no encontrados
- **Solución**: Agregar archivos de audio en la carpeta `assets/`

### Mapa no se muestra
- **Causa**: API Key inválida o restricciones de dominio
- **Solución**: Verificar API Key y configurar restricciones correctamente

## 📚 Recursos Adicionales

### Documentación
- [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript)
- [HTML5 Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)
- [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)

### Herramientas Recomendadas
- **VSCode Extensions**:
  - Live Server
  - Prettier
  - ESLint
  - Path Intellisense
- **Navegadores**: Chrome, Firefox, Safari, Edge
- **Servidores Locales**: Live Server, http-server, Python http.server

## 👨‍💻 Autor

**Estudiante:** Fernandez Devicenzi Franco
**Materia:** Proyecto de Implementación de Sitios web Dinámicos  
**Institución:** EEST N.º 1 - "Eduardo Ader" Vicente López  
**Año:** 2025

## 📄 Licencia

Este proyecto es parte de una actividad académica y está destinado únicamente para fines educativos.

---

**Nota:** Este proyecto demuestra la integración de múltiples tecnologías web modernas y APIs externas, proporcionando una base sólida para proyectos más complejos en el futuro.

