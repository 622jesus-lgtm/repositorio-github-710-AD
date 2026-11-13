[README.md](https://github.com/user-attachments/files/34774924/README.md)
# Gestor de tareas escolares

Proyecto de la materia **Aplicaciones Web Orientadas a Servicios**,
grupo 710-AD DSM, UTGZ (septiembre–diciembre 2026).
Profesor: Guillermo Martinez Maza.

## ¿Qué es?

Una página web sencilla para anotar las tareas de la escuela:
qué hay que entregar, de qué materia es, para cuándo y si ya está hecha.

No necesita instalar nada: se abre el archivo `index.html` en el
navegador y funciona. Las tareas se guardan en el propio navegador.

## ¿Cómo se usa?

1. Abrir `index.html` con doble clic, o arrastrarlo a Chrome.
2. Escribir el título de la tarea, elegir la materia y la fecha límite.
3. Pulsar **Agregar tarea**.
4. Marcar una tarea como terminada con el botón **Terminar**,
   o borrarla con **Eliminar**.

## Estructura de carpetas

```
gestor-tareas-escolares/
├── README.md          # Este archivo: qué es el proyecto y cómo se usa
├── index.html         # La página principal
├── css/
│   └── style.css      # Los colores y el diseño de la página
├── js/
│   └── app.js         # La lógica: agregar, terminar y eliminar tareas
└── docs/
    └── (capturas)     # Capturas del proyecto funcionando
```

## Tecnologías

- HTML (la estructura de la página)
- CSS (el diseño)
- JavaScript (que las tareas se puedan agregar y borrar)

## Próximo paso

Este repositorio es la base de la tarea 2: la API en Laravel
con los endpoints `GET /api/tareas`, `POST /api/tareas`,
`GET /api/tareas/{id}`, `PUT /api/tareas/{id}` y
`DELETE /api/tareas/{id}`.
