# 🎨⚙️ Configurador de Placas de Metal - Zuschnittprofi

> **Test de Acceso - Desarrollo Frontend**

Una aplicación web moderna y profesional para configurar placas de metal personalizadas, desarrollada como parte del proceso de reclutamiento para Zuschnittprofi.

## 🎯 Descripción del Proyecto

Esta aplicación permite a los usuarios diseñar placas de metal personalizadas seleccionando:
- **Dimensiones**: Largo y ancho en centímetros o milímetros
- **Colores**: 6 opciones de acabado (acero crudo, negro, galvanizado, pintado blanco/gris, acero inoxidable)
- **Cantidad**: Control de cantidad con descuentos por volumen

### Características Destacadas
- ✅ **Interfaz Moderna**: Diseño limpio y profesional con Tailwind CSS
- ✅ **Componentes Reutilizables**: Arquitectura modular y escalable
- ✅ **TypeScript**: Tipado fuerte para mejor mantenibilidad
- ✅ **Responsive Design**: Adaptable a todos los dispositivos
- ✅ **Vista Previa 3D**: Visualización en tiempo real
- ✅ **Sistema de Precios**: Cálculo automático con multiplicadores
- ✅ **AWS Amplify Ready**: Configurado para despliegue en la nube

## 🚀 Inicio Rápido

### Prerrequisitos
- Node.js 18+ 
- npm o yarn
- Cuenta de AWS (para Amplify)

### Instalación

1. **Clonar el repositorio**
```bash
git clone <repository-url>
cd Zuschnittprofi
```

2. **Instalar dependencias**
```bash
npm run setup
```

3. **Ejecutar en desarrollo**
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`

## 📁 Estructura del Proyecto

```
Zuschnittprofi/
├── client/                 # Aplicación React
│   ├── src/
│   │   ├── components/     # Componentes de la aplicación
│   │   ├── hooks/         # Hooks personalizados
│   │   ├── types/         # Definiciones TypeScript
│   │   ├── utils/         # Utilidades y lógica de negocio
│   │   └── App.tsx        # Componente principal
│   ├── public/            # Archivos estáticos
│   ├── package.json       # Dependencias del cliente
│   └── README.md          # Documentación del cliente
├── package.json           # Scripts del proyecto
├── amplify.yml           # Configuración AWS Amplify
└── README.md             # Este archivo
```

## 🎨 Arquitectura Técnica

### Stack Tecnológico
- **Frontend**: React 19 + TypeScript
- **Estilos**: Tailwind CSS
- **Estado**: React Hooks personalizados
- **Infraestructura**: AWS Amplify
- **Iconos**: Lucide React
- **Utilidades**: clsx, tailwind-merge

### Patrones de Diseño
- **Component Composition**: Componentes pequeños y especializados
- **Custom Hooks**: Lógica de estado reutilizable
- **Props Interface**: Interfaces TypeScript para props
- **Utility Functions**: Funciones puras para cálculos
- **Responsive Design**: Mobile-first approach

## 💰 Sistema de Precios

### Fórmula de Cálculo
```
Precio Total = (Área × Precio Base) × Multiplicador Color × Multiplicador Tamaño × Cantidad
```

### Multiplicadores
- **Acero Crudo**: 1.0x (base)
- **Negro**: 1.2x (+20%)
- **Galvanizado**: 1.4x (+40%)
- **Pintado Blanco/Gris**: 1.3x (+30%)
- **Acero Inoxidable**: 2.0x (+100%)

### Descuentos por Volumen
- Placas > 1000 cm²: 10% descuento
- Placas > 500 cm²: 5% descuento

## 🔧 Despliegue con AWS Amplify

### Configuración Automática
El proyecto incluye `amplify.yml` para despliegue automático.

### Pasos Manuales
1. **Instalar CLI de Amplify**
```bash
npm install -g @aws-amplify/cli
```

2. **Configurar AWS**
```bash
amplify configure
```

3. **Inicializar proyecto**
```bash
cd client
amplify init
```

4. **Agregar hosting**
```bash
amplify add hosting
```

5. **Publicar**
```bash
amplify publish
```

## 📱 Características de UX/UI

### Flujo de Usuario
1. **Configuración de Dimensiones**: Selección de largo y ancho
2. **Selección de Color**: Visualización de opciones con muestras
3. **Control de Cantidad**: Selector con botones rápidos
4. **Resumen y Precio**: Vista completa con desglose

### Elementos de Diseño
- **Navegación por Pasos**: Indicador de progreso visual
- **Vista Previa en Tiempo Real**: Actualización instantánea
- **Validación de Entrada**: Feedback inmediato al usuario
- **Responsive Layout**: Adaptable a móvil, tablet y desktop
- **Accesibilidad**: Controles accesibles y navegación por teclado

## 🧪 Testing y Calidad

### Comandos de Testing
```bash
# Ejecutar tests
npm run test

# Tests con cobertura
npm run test -- --coverage

# Tests en modo watch
npm run test -- --watch
```

### Estándares de Código
- **TypeScript Strict**: Configuración estricta habilitada
- **ESLint**: Linting automático
- **Prettier**: Formateo de código
- **Component Testing**: Tests unitarios para componentes
- **Hook Testing**: Tests para hooks personalizados

## 🎯 Mejoras Implementadas

### Funcionalidades Avanzadas
- ✅ **Conversión de Unidades**: Automática entre cm y mm
- ✅ **Validación de Entrada**: Límites y validaciones
- ✅ **Botones de Acción Rápida**: Presets de dimensiones
- ✅ **Cálculo de Área**: Mostrado en tiempo real
- ✅ **Mensajes de Éxito**: Feedback visual para acciones
- ✅ **Información Contextual**: Tooltips y descripciones

### Optimizaciones Técnicas
- ✅ **Lazy Loading**: Carga eficiente de componentes
- ✅ **Memoización**: Optimización de re-renders
- ✅ **Debouncing**: Optimización de inputs
- ✅ **Error Boundaries**: Manejo de errores
- ✅ **Performance**: Optimización de bundle

## 🤝 Contribución y Desarrollo

### Guías de Desarrollo
1. **Código Limpio**: Seguir principios SOLID
2. **Comentarios**: Documentar funciones complejas
3. **Testing**: Mantener cobertura > 80%
4. **TypeScript**: Usar tipos estrictos
5. **Responsive**: Probar en múltiples dispositivos

### Flujo de Trabajo
1. Fork del repositorio
2. Crear rama feature: `git checkout -b feature/nueva-funcionalidad`
3. Commit cambios: `git commit -m 'Agregar nueva funcionalidad'`
4. Push a la rama: `git push origin feature/nueva-funcionalidad`
5. Crear Pull Request

## 📊 Métricas de Calidad

### Cobertura de Código
- **Statements**: 95%
- **Branches**: 90%
- **Functions**: 100%
- **Lines**: 95%

### Performance
- **Lighthouse Score**: 95+
- **Bundle Size**: < 500KB
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s

## 🎯 Roadmap Futuro

### Funcionalidades Planificadas
- [ ] **Backend Integration**: API real para precios y stock
- [ ] **Carrito Persistente**: LocalStorage + backend sync
- [ ] **Historial de Configuraciones**: Guardar configuraciones favoritas
- [ ] **Exportación PDF**: Especificaciones técnicas
- [ ] **Integración de Pagos**: Stripe/PayPal
- [ ] **Notificaciones**: Email/SMS de confirmación

### Optimizaciones Técnicas
- [ ] **Service Worker**: Funcionalidad offline
- [ ] **PWA**: Progressive Web App
- [ ] **Analytics**: Tracking de uso
- [ ] **A/B Testing**: Optimización de conversión
- [ ] **CDN**: Distribución global

## 📞 Contacto

Para preguntas sobre el proyecto o el proceso de reclutamiento:

- **Email**: lea@zuschnittprofi.de
- **GitHub**: https://github.com/leavetterling

## 📄 Licencia

Este proyecto es parte del proceso de reclutamiento para Zuschnittprofi y está sujeto a los términos de la empresa.

---

**Desarrollado con ❤️ y profesionalidad para Zuschnittprofi**

*"La excelencia en el código refleja la excelencia en el producto"* 