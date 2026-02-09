# K-Tech Solutions Website

Professional multi-page corporate website for K-Tech Solutions - a data analytics company helping businesses turn data into actionable insights.

## 🌐 Live Website

**Domain:** ktechsolutions.in

## 📋 Table of Contents

- [About](#about)
- [Pages](#pages)
- [Technologies Used](#technologies-used)
- [Local Development](#local-development)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Features](#features)
- [Contact](#contact)

## 📖 About

K-Tech Solutions is a software-based analytics company that helps businesses convert raw data into actionable insights. This website showcases our services, process, case studies, and contact information.

## 📄 Pages

1. **Home** (`index.html`) - Hero section, company introduction, visualizations
2. **Services** (`services.html`) - Detailed breakdown of all analytics services offered
3. **How It Works** (`how-it-works.html`) - 5-step process workflow and security information
4. **Case Studies** (`case-studies.html`) - Real-world success stories with quantifiable results
5. **About Us** (`about.html`) - Company mission, vision, philosophy, and values
6. **Contact** (`contact.html`) - Contact information with email, phone, and WhatsApp

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Custom styling and animations
- **JavaScript** - Interactive functionality
- **Tailwind CSS** - Utility-first CSS framework (via CDN)
- **Chart.js** - Data visualizations (via CDN)
- **Google Fonts** - Inter font family

## 💻 Local Development

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (recommended but not required)

### Running Locally

#### Option 1: Direct File Opening

Simply open `index.html` in your web browser.

#### Option 2: Using Python HTTP Server (Recommended)

```bash
# Navigate to project directory
cd KtechSolutions

# Python 3
python -m http.server 8000

# Then open http://localhost:8000 in your browser
```

#### Option 3: Using Node.js HTTP Server

```bash
# Install http-server globally
npm install -g http-server

# Run server
http-server

# Then open http://localhost:8080 in your browser
```

#### Option 4: Using Live Server (VS Code)

1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

## 🚀 Deployment

### GitHub Pages Deployment

1. **Create GitHub Repository**

   ```bash
   git init
   git add .
   git commit -m "Initial commit: K-Tech Solutions website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to "Pages" section
   - Under "Source", select "main" branch
   - Select "/ (root)" folder
   - Click "Save"
   - Your site will be published at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

3. **Custom Domain Setup** (Optional)
   - In repository Settings > Pages
   - Enter custom domain: `ktechsolutions.in`
   - Create a `CNAME` file in repository root with domain name
   - Update DNS settings with your domain provider:
     - Add A records pointing to GitHub Pages IPs:
       - 185.199.108.153
       - 185.199.109.153
       - 185.199.110.153
       - 185.199.111.153
     - Or add CNAME record pointing to: `YOUR_USERNAME.github.io`

### Alternative Deployment Options

#### Netlify

1. Drag and drop the project folder to [Netlify](https://netlify.com)
2. Or connect GitHub repository for automatic deployments

#### Vercel

1. Install Vercel CLI: `npm install -g vercel`
2. Run: `vercel` in project directory
3. Follow prompts

#### Traditional Web Hosting

1. Upload all files via FTP to your hosting provider
2. Ensure `index.html` is in the root directory
3. Configure domain settings with your hosting provider

## 📁 Project Structure

```
KtechSolutions/
│
├── index.html              # Home page
├── services.html           # Services page
├── how-it-works.html       # Process workflow page
├── case-studies.html       # Success stories page
├── about.html              # About us page
├── contact.html            # Contact information page
│
├── assets/
│   ├── css/
│   │   └── styles.css      # Custom CSS & animations
│   │
│   ├── js/
│   │   ├── main.js         # Main JavaScript functionality
│   │   └── charts.js       # Chart.js configurations
│   │
│   └── images/             # Image assets (to be added)
│
├── data-samples/
│   └── sample-dashboard.json  # Sample data for visualizations
│
├── downloads/
│   └── free-data-audit.md     # Free data audit information
│
├── CNAME                   # Custom domain configuration
└── README.md               # This file
```

## ✨ Features

### Design

- **Responsive Design** - Mobile, tablet, and desktop optimized
- **Modern UI** - Clean, professional, and trust-focused
- **Smooth Animations** - Fade-ins, scroll animations, hover effects
- **Glassmorphism** - Modern design aesthetic

### Functionality

- **Mobile Navigation** - Hamburger menu with smooth transitions
- **Interactive Charts** - Data visualizations using Chart.js
- **WhatsApp Integration** - Quick contact via WhatsApp
- **Scroll Animations** - Elements animate on scroll using Intersection Observer
- **Smooth Scrolling** - Enhanced UX with smooth page scrolling

### SEO

- **Meta Tags** - Proper title, description, and keywords for each page
- **Semantic HTML** - Proper heading hierarchy and HTML5 elements
- **Performance Optimized** - Fast loading with CDN resources

## 📞 Contact

- **Email:** <karankr9237@gmail.com>
- **Phone:** +91 92634 27937
- **WhatsApp:** +91 92634 27937
- **Website:** ktechsolutions.in

---

## 📝 License

© 2026 K-Tech Solutions. All rights reserved.

## 🙏 Acknowledgments

- Tailwind CSS for the utility-first CSS framework
- Chart.js for data visualization capabilities
- Google Fonts for the Inter font family
