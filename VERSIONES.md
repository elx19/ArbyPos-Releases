# Historial de versiones de ArbyPos

Este documento describe el contenido funcional de cada versión pública de ArbyPos.

## v0.2.2 — 16 de julio de 2026

### Interfaz y ayuda

- Política de privacidad y Acuerdo de licencia disponibles únicamente dentro de Ayuda.
- Eliminadas las rutas y accesos duplicados fuera del centro de ayuda.

### Distribución

- Instalador Windows x64 actualizado con las mejoras acumuladas de ventas, inventario,
  caja, compras, impresión, licencias y sincronización LAN/QR móvil.
- Publicado en el canal oficial de Releases con blockmap para actualizaciones.

### Validación

- 57 pruebas automatizadas, compilación Electron y smoke test completo correctos.

## v0.2.1 — 15 de julio de 2026

### Interfaz

- Cada pantalla vuelve al inicio al navegar desde una vista larga, por lo que el encabezado y los controles principales permanecen visibles.
- El dashboard muestra el estado neutral **Sin productos** cuando el inventario está vacío, en lugar de indicar estabilidad total.

### Validación

- Se añadieron pruebas automatizadas de regresión para ambos comportamientos.
- La versión fue comprobada mediante instalación aislada, dos arranques, persistencia SQLite, impresión, sincronización LAN/QR móvil y desinstalación.

## v0.2.0 — 15 de julio de 2026

### Red local

- Descubrimiento automático de instalaciones ArbyPos en todas las interfaces IPv4.
- Búsqueda periódica de equipos y sincronización automática de nodos confiables.
- Código privado compartido, almacenado cifrado y comparado mediante una huella segura.
- Desautorización automática de vínculos creados por un código anterior cuando cambia
  la configuración de seguridad.
- Orden de dependencias corregido para usuarios, cajas, ventas e inventario.

### POS móvil

- QR temporal y de un solo uso.
- Sesión móvil vinculada al usuario, dirección del dispositivo y tiempo de expiración.
- Panel móvil con ventas del día, estado de caja y búsqueda de productos.
- Carrito, cantidades, formas de pago, referencia y cálculo de cambio.
- Registro de ventas reales mediante el mismo servicio y permisos utilizados por el POS
  de escritorio.

### Interfaz y base de datos

- Nueva imagen de fondo en el panel lateral del acceso.
- Configuración visual para detección, conexión automática y código privado.
- Indicadores de equipos autorizados automáticamente y móviles conectados.
- Migración acumulativa de SQLite a la versión 15.

### Validación

- Sincronización bidireccional cifrada comprobada entre dos bases independientes.
- Rechazo de tokens móviles inválidos y QR reutilizados.
- Venta móvil real y actualización de inventario comprobadas.
- Integridad, persistencia, tipos y pruebas automatizadas verificadas.

## v0.1.0 — 15 de julio de 2026

Primera versión pública instalable de ArbyPos para Windows.

### Operación

- Punto de venta, ventas, compras, inventario, clientes, proveedores y caja.
- Dashboard operativo y reportes.
- Productos con imágenes, costos, precios, existencia mínima y códigos de barras.
- Aperturas, movimientos, cierres y diferencias de caja.

### Administración

- Usuarios, roles y permisos por función.
- Configuración del negocio e impresión.
- Licencias Gratis y Premium con activación y validación.
- Auditoría de operaciones sensibles.

### Impresión y distribución

- Tickets 58/80 mm y documentos A4.
- Impresión por Windows y ESC/POS RAW compatible.
- Instalador NSIS, icono de aplicación y accesos directos.
- Actualizaciones desde GitHub Releases.

### Correcciones incluidas

- Compatibilidad del comprobador de actualizaciones con ventanas abiertas antes de una
  actualización del proceso principal.
- Selección automática del transporte de impresión.
- Logo del negocio y foto del usuario cargados desde almacenamiento local.
- Navegación agrupada para administración, soporte e información legal.
