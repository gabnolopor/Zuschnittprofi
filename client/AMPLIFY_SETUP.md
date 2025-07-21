# Configuración de AWS Amplify para Zuschnittprofi

## 📋 Requisitos Previos

1. **Cuenta de AWS**: Necesitas una cuenta de AWS activa
2. **AWS CLI**: Instalar AWS CLI en tu máquina local
3. **Permisos**: Acceso a AWS Amplify, S3, CloudFront, y otros servicios

## 🚀 Pasos para Configurar AWS Amplify

### 1. Crear una Cuenta de AWS
- Ve a [aws.amazon.com](https://aws.amazon.com)
- Crea una cuenta nueva o usa una existente
- Configura un método de pago (los costos durante el proceso de reclutamiento serán reembolsados)

### 2. Instalar AWS CLI
```bash
# macOS
brew install awscli

# Verificar instalación
aws --version
```

### 3. Configurar AWS CLI
```bash
aws configure
# Ingresa tu Access Key ID
# Ingresa tu Secret Access Key
# Región por defecto: us-east-1
# Formato de salida: json
```

### 4. Crear un Proyecto en AWS Amplify

#### Opción A: Usando la Consola Web
1. Ve a [AWS Amplify Console](https://console.aws.amazon.com/amplify)
2. Haz clic en "New app" → "Host web app"
3. Conecta tu repositorio de GitHub
4. Selecciona el repositorio `Zuschnittprofi`
5. Configura el build:
   - Framework: React
   - Build settings: Usar el archivo `amplify.yml` existente

#### Opción B: Usando Amplify CLI
```bash
# Instalar Amplify CLI globalmente
npm install -g @aws-amplify/cli

# Inicializar Amplify en el proyecto
amplify init

# Seguir las instrucciones interactivas
```

### 5. Configurar el Despliegue Automático

El archivo `amplify.yml` ya está configurado para:
- Instalar dependencias con `npm ci`
- Construir la aplicación con `npm run build`
- Desplegar desde la carpeta `build`
- Cachear `node_modules` para builds más rápidos

### 6. Variables de Entorno (Opcional)

Si necesitas configurar variables de entorno:
1. Ve a la consola de Amplify
2. App settings → Environment variables
3. Agrega variables como:
   - `REACT_APP_API_URL`
   - `REACT_APP_REGION`

## 🔧 Configuración de Dominio Personalizado (Opcional)

1. En la consola de Amplify, ve a "Domain management"
2. Agrega tu dominio personalizado
3. Configura los registros DNS según las instrucciones

## 📊 Monitoreo y Analytics

### CloudWatch Logs
- Los logs de build están disponibles en CloudWatch
- Ve a la consola de Amplify → Builds → Ver logs

### Analytics (Opcional)
```bash
# Agregar analytics
amplify add analytics
amplify push
```

## 🛠️ Comandos Útiles

```bash
# Verificar estado de Amplify
amplify status

# Sincronizar cambios
amplify push

# Ver logs de build
amplify console

# Abrir la aplicación desplegada
amplify console --app
```

## 🔐 Seguridad

### IAM Roles
- Amplify crea automáticamente los roles IAM necesarios
- Los permisos incluyen: S3, CloudFront, Lambda, etc.

### HTTPS
- HTTPS está habilitado por defecto
- Certificados SSL gestionados automáticamente

## 💰 Costos Estimados

Para una aplicación de prueba como esta:
- **Hosting**: ~$1-3/mes
- **Build minutes**: ~$0.01/minuto
- **Transferencia de datos**: ~$0.09/GB

**Total estimado**: $5-10/mes para uso normal

## 🚨 Solución de Problemas

### Error de Build
1. Verifica los logs en CloudWatch
2. Asegúrate de que `npm run build` funcione localmente
3. Verifica las dependencias en `package.json`

### Error de Despliegue
1. Verifica la configuración en `amplify.yml`
2. Asegúrate de que la carpeta `build` se genere correctamente
3. Verifica los permisos de IAM

### Error de CORS
1. Configura los headers CORS en `amplify.yml`
2. Verifica las políticas de S3 si usas almacenamiento

## 📞 Soporte

- **Documentación oficial**: [docs.amplify.aws](https://docs.amplify.aws)
- **Foro de la comunidad**: [GitHub Discussions](https://github.com/aws-amplify/amplify-js/discussions)
- **AWS Support**: Disponible con planes de soporte pagados

## 🎯 Próximos Pasos

1. **Desplegar la aplicación** siguiendo los pasos anteriores
2. **Configurar un dominio personalizado** (opcional)
3. **Agregar analytics y monitoreo** (opcional)
4. **Configurar CI/CD** para despliegues automáticos
5. **Optimizar performance** con CloudFront

---

**Nota**: Esta configuración es suficiente para cumplir con los requisitos de la prueba técnica. La aplicación se desplegará automáticamente cada vez que hagas push al repositorio. 