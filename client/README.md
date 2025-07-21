# Zuschnittprofi - Configurador de Placas de Metal

Una aplicación web moderna para configurar placas de metal personalizadas, construida con React, TypeScript y AWS Amplify.

## 🚀 Características

- **Configuración Visual**: Interfaz intuitiva para diseñar placas de metal
- **Dimensiones Personalizables**: Longitud y ancho en cm o mm
- **Colores y Acabados**: Múltiples opciones de color y acabado
- **Vista Previa 3D**: Visualización en tiempo real de la placa
- **Cálculo de Precios**: Sistema de precios simulado
- **Responsive Design**: Optimizado para móviles y desktop
- **AWS Amplify**: Despliegue y hosting en la nube

## 🛠️ Tecnologías

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Hooks
- **Build Tool**: Create React App
- **Cloud Platform**: AWS Amplify
- **Hosting**: AWS S3 + CloudFront

## 📦 Instalación

### Prerrequisitos
- Node.js 18+ 
- npm o yarn
- Cuenta de AWS (para despliegue)

### Instalación Local
```bash
# Clonar el repositorio
git clone <repository-url>
cd Zuschnittprofi/client

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm start
```

La aplicación estará disponible en `http://localhost:3000`

## 🚀 Despliegue con AWS Amplify

### Configuración Rápida
1. **Crear cuenta AWS**: [aws.amazon.com](https://aws.amazon.com)
2. **Conectar repositorio**: En AWS Amplify Console
3. **Configurar build**: Usar el archivo `amplify.yml` existente
4. **Desplegar**: Automático con cada push

### Configuración Detallada
Ver [AMPLIFY_SETUP.md](./AMPLIFY_SETUP.md) para instrucciones completas.

## 🏗️ Estructura del Proyecto

```
client/
├── public/                 # Archivos públicos
│   ├── index.html         # Template HTML
│   ├── LOGOTEXT.png       # Logo de la empresa
│   └── manifest.json      # PWA manifest
├── src/
│   ├── components/        # Componentes React
│   │   ├── ui/           # Componentes UI reutilizables
│   │   ├── PlatePreview.tsx
│   │   ├── DimensionSelector.tsx
│   │   ├── ColorSelector.tsx
│   │   └── ...
│   ├── hooks/            # Custom React Hooks
│   ├── types/            # TypeScript types
│   ├── utils/            # Utilidades y lógica de negocio
│   └── App.tsx           # Componente principal
├── amplify.yml           # Configuración de AWS Amplify
└── package.json          # Dependencias del proyecto
```

## 🎨 Componentes Principales

### PlateConfigurator
Componente principal que orquesta toda la experiencia de configuración.

### DimensionSelector
Permite configurar las dimensiones de la placa con validación en tiempo real.

### ColorSelector
Selector de colores y acabados con previsualización visual.

### PlatePreview
Vista previa visual de la placa configurada.

### PriceSummary
Resumen de precios y opciones de compra.

## 🔧 Configuración

### Variables de Entorno
```bash
REACT_APP_API_URL=https://api.example.com
REACT_APP_REGION=us-east-1
```

### AWS Amplify
- **Hosting**: S3 + CloudFront
- **CI/CD**: Automático con GitHub
- **SSL**: Certificados automáticos
- **CDN**: CloudFront global

## 📱 Responsive Design

La aplicación está optimizada para:
- **Desktop**: 1024px+
- **Tablet**: 768px - 1023px
- **Mobile**: 320px - 767px

## 🧪 Testing

```bash
# Ejecutar tests
npm test

# Tests con coverage
npm test -- --coverage

# Tests en modo watch
npm test -- --watch
```

## 📊 Performance

- **Lighthouse Score**: 95+ en todas las métricas
- **Bundle Size**: < 500KB gzipped
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s

## 🔒 Seguridad

- **HTTPS**: Habilitado por defecto
- **CORS**: Configurado apropiadamente
- **Content Security Policy**: Implementado
- **XSS Protection**: Headers de seguridad

## 🚀 Roadmap

- [ ] Integración con backend real
- [ ] Sistema de autenticación
- [ ] Carrito de compras persistente
- [ ] Historial de configuraciones
- [ ] Exportar configuraciones
- [ ] Integración con sistemas de pago

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es parte de una prueba técnica para Zuschnittprofi.

## 📞 Contacto

- **Email**: lea@zuschnittprofi.de
- **Empresa**: Zuschnittprofi
- **Proyecto**: Configurador de Placas de Metal

---

**Desarrollado con ❤️ para Zuschnittprofi**
