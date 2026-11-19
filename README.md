# EduSoft · Sitio web corporativo

Sitio web corporativo de EduSoft desarrollado con **React 19**, **Vite** y **React Router**.

## Requisitos

- Node.js 20 o superior

## Cómo correrlo

```bash
npm install      # instala dependencias
npm run dev      # servidor de desarrollo en http://localhost:5173
npm run build    # genera la versión de producción en /dist
npm run preview  # previsualiza la versión de producción
npm run lint     # revisa el código con ESLint
```

## Estructura de carpetas

```
src/
├── main.jsx                 # Punto de entrada
├── app/                     # Configuración de la aplicación
│   ├── App.jsx
│   ├── router.jsx           # Definición de rutas
│   └── paths.js             # Constantes de rutas (usar siempre estas)
├── assets/images/           # Logo, fotos del equipo, logos de clientes
├── styles/
│   ├── variables.css        # Colores, tipografía y medidas de la marca
│   └── global.css           # Reset y utilidades (.container, .section)
├── components/
│   ├── layout/              # Header, Footer, MainLayout
│   ├── ui/                  # Piezas básicas: Button, Badge, Icon, Avatar...
│   └── shared/              # Bloques reutilizables entre páginas
├── pages/                   # Una carpeta por página, con sus secciones
│   ├── Home/  About/  Services/  Cases/  Contact/  NotFound/
├── data/                    # TODOS los textos y contenidos editables
├── hooks/                   # Lógica reutilizable (formulario, scroll)
├── services/                # Comunicación con servicios externos
└── utils/                   # Funciones auxiliares (validaciones)
```

Cada componente tiene su propio archivo `.module.css` (CSS Modules), así los estilos no se pisan entre sí.

## Cómo cargar los datos reales

Todo el contenido está en `src/data/`. Los valores provisorios están marcados con `[placeholder]` o `TODO`.

| Qué cambiar | Dónde |
| --- | --- |
| Email, WhatsApp, horario, redes | `src/data/company.js` |
| Nombres y funciones de las apps | `src/data/services.js` |
| Equipo (nombres, cargos, fotos) | `src/data/about.js` |
| Testimonios y logos de clientes | `src/data/testimonials.js` |
| Preguntas frecuentes | `src/data/faq.js` |
| Foto del equipo (página Nosotros) | `src/pages/About/sections/StorySection.jsx` |
| Capturas reales de las apps | `src/components/shared/DashboardPreview` y `ChatPreview` |

**Para agregar una foto:** guardala en `src/assets/images/team/`, importala en el archivo de datos y asignala al campo `photo` o `logo`:

```js
import fotoMaria from '@/assets/images/team/maria.jpg';
export const team = [{ name: 'María Pérez', role: 'Dirección general', photo: fotoMaria }, ...];
```

## Formulario de contacto

Funciona en modo demostración hasta configurar un servicio de envío. Copiá `.env.example` como `.env` y completá `VITE_CONTACT_ENDPOINT` con la URL que recibe los mensajes (POST JSON). La lógica está en `src/services/contactService.js`.

## Publicación

El sitio usa rutas limpias (`/nosotros`, `/servicios`...). En Vercel ya está resuelto con `vercel.json`, que redirige todas las rutas a `index.html`. En otro hosting hay que configurar una regla equivalente.
