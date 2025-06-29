# 🚀 Deployment Guide

This guide covers how to deploy Flappy Dragon to various platforms.

## 📦 Build Process

Before deploying, create a production build:

```bash
npm run build
```

This creates a `dist/` folder with optimized static files.

## 🌐 Netlify (Recommended)

### Automatic Deployment
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy automatically on every push

### Manual Deployment
1. Run `npm run build`
2. Drag and drop the `dist` folder to Netlify

## 🔥 Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts
4. Your app will be deployed automatically

## 📄 GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "deploy": "gh-pages -d dist"
   ```
3. Run `npm run build && npm run deploy`

## 🐳 Docker

Create a `Dockerfile`:

```dockerfile
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Build and run:
```bash
docker build -t flappy-dragon .
docker run -p 80:80 flappy-dragon
```

## ⚙️ Environment Variables

No environment variables are required for basic deployment. The game runs entirely client-side.

## 🔧 Build Optimization

For better performance:
- Enable gzip compression on your server
- Set proper cache headers for static assets
- Use a CDN for global distribution

## 📊 Analytics (Optional)

To add analytics, include your tracking code in `index.html` before deployment.

## 🔒 Security Headers

Consider adding these headers to your server configuration:
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`

## 🌍 Custom Domain

Most platforms support custom domains:
1. Add your domain in the platform's dashboard
2. Update your DNS records
3. Enable HTTPS (usually automatic)

## 📈 Performance Monitoring

Monitor your deployed app with:
- Google PageSpeed Insights
- GTmetrix
- WebPageTest

## 🚨 Troubleshooting

Common deployment issues:
- **Build fails**: Check Node.js version compatibility
- **Assets not loading**: Verify base URL configuration
- **Routing issues**: Ensure SPA fallback is configured

For more help, check the platform-specific documentation or open an issue.