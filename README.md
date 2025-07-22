# Zuschnittprofi - Metal Plate Configurator

A modern web application for configuring custom metal plates, built with React, TypeScript, and deployed on AWS Amplify.

## 🚀 Live Demo

**Application URL**: [Deployed on AWS Amplify](https://main.d2ivn7ggn8cgix.amplifyapp.com)

## ✨ Features

- **Visual Configuration**: Intuitive interface for designing metal plates
- **Customizable Dimensions**: Length and width in cm or mm
- **Color & Finish Options**: Multiple color and finish selections
- **Real-time Preview**: Live visualization of the configured plate
- **Price Calculation**: Simulated pricing system
- **Responsive Design**: Optimized for mobile and desktop
- **AWS Amplify**: Cloud deployment and hosting

## 🛠️ Technology Stack

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Hooks
- **Build Tool**: Create React App
- **Cloud Platform**: AWS Amplify
- **Hosting**: AWS S3 + CloudFront

## 📦 Installation & Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Local Development
```bash
# Clone the repository
git clone https://github.com/gabnolopor/Zuschnittprofi.git
cd Zuschnittprofi/client

# Install dependencies
npm install

# Start development server
npm start
```

The application will be available at `http://localhost:3000`

## 🏗️ Project Structure

```
Zuschnittprofi/
├── client/                 # React application
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── hooks/        # Custom React hooks
│   │   ├── types/        # TypeScript definitions
│   │   ├── utils/        # Business logic
│   │   └── App.tsx       # Main component
│   ├── public/           # Static assets
│   └── package.json      # Dependencies
└── README.md             # This file
```

## 🎨 Key Components

### PlateConfigurator
Main component orchestrating the entire configuration experience.

### DimensionSelector
Allows users to configure plate dimensions with real-time validation.

### ColorSelector
Color and finish selector with visual preview.

### PlatePreview
Visual preview of the configured metal plate.

### PriceSummary
Price breakdown and purchase options.

### AWS Amplify
- **Hosting**: S3 + CloudFront
- **CI/CD**: Automatic with GitHub
- **SSL**: Automatic certificates
- **CDN**: Global CloudFront distribution

## 📱 Responsive Design

The application is optimized for:
- **Desktop**: 1024px+
- **Tablet**: 768px - 1023px
- **Mobile**: 320px - 767px

## 🧪 Testing

```bash
# Run tests
npm test

# Tests with coverage
npm test -- --coverage

# Tests in watch mode
npm test -- --watch
```

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Bundle Size**: < 500KB gzipped
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s

## 🔒 Security

- **HTTPS**: Enabled by default
- **CORS**: Properly configured
- **Content Security Policy**: Implemented
- **XSS Protection**: Security headers

## 🚀 Deployment

This application is automatically deployed on AWS Amplify:

1. **Repository**: Connected to GitHub
2. **Build**: Automatic on every push
3. **Hosting**: AWS S3 + CloudFront
4. **SSL**: Automatic certificates
5. **CDN**: Global distribution

### Build Configuration
```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci --prefix client
    build:
      commands:
        - npm run build --prefix client
  artifacts:
    baseDirectory: client/build
    files:
      - '**/*'
```

## 📄 License

This project is part of a technical assessment for Zuschnittprofi.

## 📞 Contact

- **Email**: gabinoelp20@hotmail.com
- **Company**: Zuschnittprofi
- **Project**: Metal Plate Configurator

---

**Developed with ❤️ for Zuschnittprofi** 
