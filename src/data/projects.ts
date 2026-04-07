import type { Project } from '../types/project'

export const projects: Project[] = [
  {
    title: 'Visor Geoespacial Interactivo',
    description:
      'Aplicación web para visualización geográfica en 3D con herramientas de medición, dibujo de perímetros y persistencia local del estado del usuario.',
    stack: ['React', 'TypeScript', 'Cesium', 'Vite'],
    contribution:
      'Desarrollo de lógica de interacción sobre mapa, overlays dinámicos y herramientas visuales.',
    demo: '#',
    repo: '#',
    image: '/images/project-geo.jpg',
    featured: true,
  },
  {
    title: 'Dashboard de Monitoreo en Tiempo Real',
    description:
      'Sistema web para visualización de eventos y datos operativos en tiempo real mediante sockets y actualización dinámica de interfaz.',
    stack: ['Node.js', 'TypeScript', 'WebSocket'],
    contribution:
      'Implementación de flujo de datos en tiempo real entre servicios emisores y cliente web.',
    demo: '#',
    repo: '#',
    image: '/images/project-realtime.jpg',
    featured: true,
  },
  {
    title: 'Interfaz Web para Integración Operativa',
    description:
      'Solución web conectada a procesos del sistema y dispositivos externos para automatización y operación técnica centralizada.',
    stack: ['Node.js', 'Linux', 'Docker', 'TypeScript'],
    contribution:
      'Integración entre interfaz web, servicios del sistema y automatización de tareas.',
    demo: '#',
    repo: '#',
    image: '/images/project-ops.jpg',
  },
  {
    title: 'Sistema de Gestión de Productos',
    description:
      'Aplicación fullstack para administración de productos con CRUD, API REST y persistencia en base de datos.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    contribution:
      'Construcción de frontend y backend, endpoints e integración con base de datos.',
    demo: '#',
    repo: '#',
    image: '/images/project-crud.jpg',
  },
]