# HomeServices - React + Tailwind CSS Boilerplate

A complete, production-ready React + Tailwind CSS boilerplate for a Home Services website built with Vite.

## 🚀 Features

- **Vite + React**: Fast development server and optimized production build
- **Tailwind CSS**: Utility-first CSS framework for modern design
- **React Router**: Client-side routing for seamless navigation
- **Responsive Design**: Mobile-first approach, works perfectly on all devices
- **Component-Based Architecture**: Reusable, maintainable code structure
- **Dynamic Services**: Easy to add, edit, or remove services from a single data file
- **SEO-Friendly**: Semantic HTML structure and best practices
- **Professional UI**: Modern, clean design with smooth animations

## 📁 Project Structure

```
home-services/
├── src/
│   ├── assets/                 # Static assets
│   ├── components/             # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── ServiceCard.jsx
│   │   └── Testimonials.jsx
│   ├── pages/                  # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   └── Contact.jsx
│   ├── data/
│   │   └── services.js         # Services data file
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── index.html                  # HTML template
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
└── package.json                # Dependencies
```

## 📄 Pages

### Home
- Hero section with heading and CTA
- Featured services showcase
- Why choose us section
- Testimonials section
- Call-to-action section

### Services
- All services displayed in a responsive grid
- Service cards with images and descriptions
- Detailed service information

### About
- Company story and mission
- Vision statement
- Core values
- Why trust us section

### Contact
- Contact form with validation
- Contact information
- Service selection dropdown
- Message submission

## 🛠 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/khadijajabbar173-dot/home-services.git
   cd home-services
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The app will open at `http://localhost:3000`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📦 Services

Services are stored in `src/data/services.js` and can be easily managed:

```javascript
export const servicesData = [
  {
    id: 1,
    name: 'Plumbing',
    description: 'Expert plumbing services...',
    icon: '🔧',
    image: 'image-url',
    details: 'Detailed description...'
  },
  // Add more services here
]
```

### Adding a New Service

Simply add a new object to the `servicesData` array in `src/data/services.js`:

```javascript
{
  id: 5,
  name: 'Your Service',
  description: 'Service description',
  icon: '🏠',
  image: 'image-url',
  details: 'Detailed description'
}
```

The UI will automatically update without any code changes needed in components!

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize colors:
```javascript
colors: {
  primary: '#2563eb',
  secondary: '#1e40af',
  accent: '#f59e0b',
}
```

### Fonts
Update font configuration in `tailwind.config.js`:
```javascript
fontFamily: {
  sans: ['Your Font', 'sans-serif'],
}
```

### Navigation Links
Edit `src/components/Navbar.jsx` to add/remove navigation items.

## 🚀 Deployment

### Deploy to Vercel
```bash
npm i -g vercel
vercel
```

### Deploy to Netlify
```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🔧 Technologies Used

- **React 18**: UI library
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **React Router DOM**: Routing library
- **Lucide React**: Icon library

## 📝 Best Practices

1. **Component Reusability**: All components are designed to be reused
2. **Data Separation**: Services data is separate from components
3. **Responsive Design**: Mobile-first approach
4. **Performance**: Optimized images and lazy loading ready
5. **SEO**: Semantic HTML structure
6. **Code Quality**: Clean, readable, and maintainable code

## 🔐 Environment Variables

Create a `.env` file for sensitive data:
```env
VITE_API_URL=your-api-url
VITE_CONTACT_EMAIL=your-email
```

## 🐛 Troubleshooting

### Port 3000 already in use
```bash
npm run dev -- --port 3001
```

### Tailwind styles not loading
```bash
rm -rf node_modules
npm install
npm run dev
```

## 📄 License

MIT License - feel free to use this project as a template.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Commit your changes
5. Push to your branch
6. Create a pull request

## 📧 Support

For support, please open an issue on GitHub.

## 🏗️ Future Enhancements

- [ ] Admin dashboard for service management
- [ ] User authentication
- [ ] Payment integration
- [ ] Booking system
- [ ] Email notifications
- [ ] Service ratings and reviews
- [ ] Multi-language support
- [ ] Dark mode

---

**Happy coding! 🚀**
