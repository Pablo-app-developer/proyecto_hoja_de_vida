# Portafolio Web & CV Interactivo

![Portafolio Web](https://img.shields.io/badge/Status-Production_Ready-success)
![Vanilla JS](https://img.shields.io/badge/JavaScript-Vanilla-F7DF1E?logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-Modern-1572B6?logo=css3&logoColor=white)

Proyecto de portafolio profesional y Hoja de Vida interactiva. Diseñado con un enfoque en **UI/UX moderno (Glassmorphism, Dark Mode)** y optimizado para presentar perfiles técnicos de manera dinámica, asegurando altos estándares de calidad para ser desplegado en plataformas como **Vercel** o **GitHub Pages**.

## 🚀 Arquitectura y Estructura del Proyecto

El proyecto está estructurado siguiendo las mejores prácticas para aplicaciones web estáticas, separando claramente la lógica, los estilos y los componentes multimedia:

```text
/
├── index.html            # Entry point: Versión web interactiva (Dark Mode + Glassmorphism).
├── cv_imprimible.html    # Layout optimizado para impresión A4/Carta (PDF export).
├── css/
│   ├── styles.css        # Estilos modernos para la web (Variables nativas, animaciones, flex/grid).
│   └── print.css         # Media queries y layout estricto para la versión imprimible.
├── js/
│   └── main.js           # Lógica del DOM: Intersection Observers y Smooth Scrolling.
├── img/
│   └── foto_perfil.jpg   # Assets optimizados de imagen.
└── README.md             # Documentación técnica del proyecto.
```

## ✨ Características Técnicas

*   **Responsive Design Real:** Cero dependencias de frameworks externos. Uso de Vanilla CSS (`Grid`, `Flexbox`, `Media Queries`) para garantizar adaptación celular, tablet y escritorio.
*   **Intersection Observers:** Animaciones de "Fade In" que se activan conforme se hace scrolling, reduciendo carga inicial en el Paint del navegador y mejorando métricas de performance.
*   **Separación de Concerns:** La versión estricta de impresión (`cv_imprimible.html`) no contamina el diseño dinámico (`index.html`).
*   **Variables CSS Nativas:** Paleta técnica centralizada (`--primary`, `--bg-dark`) para una potencial escalabilidad a temas dinámicos.

## ⚙️ Cómo correr el proyecto localmente

No requiere de Node.js, Webpack, o librerías externas pesadas.
Para visualizar el proyecto con las rutas correctas (evitando bloqueos de CORS en los assets), sigue estos pasos:

1.  **Clona este repositorio:**
    ```bash
    git clone https://github.com/Pablo-app-developer/proyecto_hoja_de_vida.git
    cd proyecto_hoja_de_vida
    ```
2.  **Lanza un servidor local HTTP:**
    Si tienes VS Code, utiliza la extensión **Live Server**.
    Si usas Python, puedes lanzar:
    ```bash
    python -m http.server 8000
    ```
    O usando Node:
    ```bash
    npx serve .
    ```
3.  Ingresa a `http://localhost:8000` en tu navegador.

## 🌐 Despliegue (Deploy) a Vercel

Este repositorio está estructuralmente listo (Production-Ready) para [Vercel](https://vercel.com).
*   **Framework Preset:** `Other` (Static HTML/CSS/JS).
*   **Build Command:** *Dejar en blanco (No requiere build step).*
*   **Output Directory:** *Dejar en blanco (Apunta a la raíz).*

**Decisiones de Ingeniería:** Al tener `index.html` en la raíz, Vercel mapeará automáticamente la URL base a tu portafolio visual interactivo, proyectando profesionalismo desde el primer clic.

---
*Desarrollado con criterio técnico.*
