#!/bin/bash

# Script de configuración inicial para el Configurador de Placas de Metal
# Zuschnittprofi - Test de Acceso

echo "🎨⚙️ Configurador de Placas de Metal - Zuschnittprofi"
echo "=================================================="
echo ""

# Verificar Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js no está instalado. Por favor instala Node.js 18+"
    exit 1
fi

NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js versión $NODE_VERSION detectada. Se requiere Node.js 18+"
    exit 1
fi

echo "✅ Node.js $(node -v) detectado"

# Verificar npm
if ! command -v npm &> /dev/null; then
    echo "❌ npm no está instalado"
    exit 1
fi

echo "✅ npm $(npm -v) detectado"

# Instalar dependencias
echo ""
echo "📦 Instalando dependencias..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencias instaladas correctamente"
else
    echo "❌ Error al instalar dependencias"
    exit 1
fi

# Verificar que la aplicación se construye correctamente
echo ""
echo "🔨 Verificando build..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build exitoso"
else
    echo "❌ Error en el build"
    exit 1
fi

echo ""
echo "🎉 ¡Configuración completada exitosamente!"
echo ""
echo "Para iniciar la aplicación en modo desarrollo:"
echo "  npm start"
echo ""
echo "Para construir para producción:"
echo "  npm run build"
echo ""
echo "Para ejecutar tests:"
echo "  npm test"
echo ""
echo "¡Happy coding! 🚀" 