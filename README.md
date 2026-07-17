# Sitio público de ArbyPos

Sitio estático en español para GitHub Pages. Presenta ArbyPos v1.3.4, sus 20 países,
idiomas y monedas regionales. El workflow `/.github/workflows/pages.yml`
publica automáticamente el contenido de esta carpeta cada vez que cambia `website/` en
la rama `main`.

Para probarlo localmente:

```powershell
python -m http.server 4173 --directory website
```

El sitio no contiene credenciales ni datos privados. Las imágenes son capturas públicas
del dashboard y login actuales; los botones apuntan al canal oficial de Releases y al soporte de JrTech.
