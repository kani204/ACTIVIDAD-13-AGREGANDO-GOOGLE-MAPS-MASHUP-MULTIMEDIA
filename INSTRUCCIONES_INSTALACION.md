# 🚀 INSTRUCCIONES DE INSTALACIÓN RÁPIDA

## ⚡ Configuración en 5 Minutos

### 1. 🔑 Obtener API Key de Google Maps
1. Ir a [Google Cloud Console](https://console.cloud.google.com/)
2. Crear proyecto nuevo o seleccionar existente
3. Habilitar "Maps JavaScript API"
4. Crear credenciales → API Key
5. Copiar la API Key

### 2. ⚙️ Configurar la Aplicación
1. Abrir archivo `config.js`
2. Reemplazar `YOUR_API_KEY_HERE` con tu API Key
3. Guardar el archivo

### 3. 🎵 Agregar Archivos de Audio
1. Descargar 3 archivos MP3 (2-5 segundos cada uno)
2. Renombrar como:
   - `sonido_mashup_1.mp3`
   - `sonido_mashup_2.mp3` 
   - `sonido_mashup_3.mp3`
3. Colocar en carpeta `assets/`

### 4. 🌐 Ejecutar la Aplicación

#### Opción A: Servidor Local (Recomendado)
```bash
# Con Python
python -m http.server 8000

# Con Node.js
npx http-server

# Con Live Server (VSCode)
# Instalar extensión "Live Server" y hacer clic derecho en index.html
```

#### Opción B: Abrir Directamente
- Hacer doble clic en `index.html`
- **Nota:** Algunas funciones pueden no funcionar sin servidor local

### 5. ✅ Verificar Funcionamiento
- [ ] Mapa se carga correctamente
- [ ] Botón "Obtener Mi Ubicación" funciona
- [ ] Botón "Simular Movimiento" funciona
- [ ] Sonidos se reproducen
- [ ] Control de volumen funciona

## 🐛 Solución de Problemas Comunes

### Error: "Google Maps API no cargada"
- **Solución:** Verificar API Key en `config.js`

### Error: "Error al reproducir audio"
- **Solución:** Agregar archivos de audio en `assets/`

### Mapa en blanco
- **Solución:** Verificar que la API Key tenga permisos para Maps JavaScript API

### Geolocalización no funciona
- **Solución:** Permitir ubicación en el navegador y usar HTTPS

## 📱 Pruebas Recomendadas

1. **Desktop:** Chrome, Firefox, Safari, Edge
2. **Mobile:** Chrome Mobile, Safari Mobile
3. **Funciones:** Todas las funcionalidades en cada navegador
4. **Responsive:** Diferentes tamaños de pantalla

## 🔗 Enlaces Útiles

- [Google Cloud Console](https://console.cloud.google.com/)
- [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript)
- [Freesound.org](https://freesound.org/) - Archivos de audio gratuitos
- [Live Server VSCode](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

---

**¡Listo! Tu aplicación Google Maps + Mashup está funcionando.** 🎉
