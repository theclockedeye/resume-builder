# ✨ Modern Resume Builder

A fully functional, modern resume builder web application built with React and Vite. Create professional resumes with multiple templates, customize colors, and export to PDF - all for free!

![Resume Builder](https://img.shields.io/badge/React-18.2.0-blue)
![Vite](https://img.shields.io/badge/Vite-7.2.2-purple)
![License](https://img.shields.io/badge/License-MIT-green)

## 🚀 Features

### ✅ Core Features
- **5 Professional Templates**: Modern, Classic, Professional, Creative, and Minimal designs
- **Real-time Preview**: See changes instantly as you type
- **Custom Color Themes**: Choose from preset colors or create your own
- **PDF Export**: High-quality PDF generation with proper formatting
- **Auto-save**: Your data is automatically saved to browser localStorage
- **Import/Export JSON**: Save and load your resume data
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile

### 📝 Resume Sections
- Personal Information (Name, Title, Contact Details, Links)
- Professional Summary
- Skills (with tag-based input)
- Work Experience
- Education
- Projects
- Certifications
- Languages
- Awards & Achievements

### 🎨 Customization
- 5 unique template designs
- Custom accent color picker
- Drag and drop to reorder items
- Rich text editing for descriptions
- Conditional section rendering

## 🛠️ Tech Stack

- **Frontend**: React 18.2
- **Build Tool**: Vite 7.2
- **PDF Generation**: jsPDF + html2canvas
- **Styling**: Pure CSS with CSS Variables
- **State Management**: React Hooks
- **Storage**: Browser localStorage

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd resume-builder
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 🏗️ Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder, ready to deploy.

## 📤 Deployment

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Deploy to GitHub Pages
1. Update `vite.config.js` with your base path
2. Run `npm run build`
3. Deploy the `dist` folder to GitHub Pages

## 💰 Google AdSense Integration

This project is ready for Google AdSense monetization. See [ADSENSE_SETUP.md](./ADSENSE_SETUP.md) for detailed instructions.

### Quick Setup:
1. Apply for Google AdSense
2. Get your publisher ID
3. Update `index.html` with your AdSense code
4. Use the `AdUnit` component to place ads

Example:
```jsx
import AdUnit from './components/AdUnit'

<AdUnit slot="1234567890" />
```

## 📁 Project Structure

```
resume-builder/
├── src/
│   ├── components/
│   │   ├── AdUnit.jsx          # Google AdSense component
│   │   ├── ColorPicker.jsx     # Color customization
│   │   ├── Editor.jsx          # Form editor
│   │   ├── Preview.jsx         # Resume preview
│   │   └── TemplateSelector.jsx # Template chooser
│   ├── utils/
│   │   ├── exportPdf.js        # PDF export logic
│   │   └── templates.js        # Template configurations
│   ├── App.jsx                 # Main app component
│   ├── main.jsx               # Entry point
│   └── styles.css             # Global styles
├── index.html                 # HTML template
├── package.json              # Dependencies
├── vite.config.js           # Vite configuration
├── ADSENSE_SETUP.md         # AdSense guide
└── README.md                # This file
```

## 🎯 Usage Guide

### Creating a Resume

1. **Enter Personal Information**
   - Fill in your name, title, and contact details
   - Add professional links (LinkedIn, GitHub, Website)

2. **Write Professional Summary**
   - Brief overview of your experience and skills
   - Keep it concise (2-3 sentences)

3. **Add Skills**
   - Click "Add Skill" to add each skill
   - Skills appear as tags in the preview

4. **Add Experience**
   - Include job title, company, dates, and description
   - Use the move buttons to reorder entries

5. **Add Education**
   - School name, degree, dates, and additional details
   - Include GPA or honors if relevant

6. **Add Optional Sections**
   - Projects: Showcase your work
   - Certifications: Professional credentials
   - Languages: Language proficiency
   - Awards: Recognition and achievements

7. **Customize Appearance**
   - Choose from 5 templates
   - Select or customize accent color
   - Preview updates in real-time

8. **Export**
   - Click "Download PDF" for high-quality PDF
   - Click "Export JSON" to save your data
   - Use "Import JSON" to load saved data

## 🎨 Available Templates

1. **Modern** - Clean design with blue accent
2. **Classic** - Traditional black and white
3. **Professional** - Purple gradient header
4. **Creative** - Pink gradient, center-aligned
5. **Minimal** - Simple with border accent

## 🔧 Customization

### Adding New Templates

Edit `src/utils/templates.js`:

```javascript
export const templates = {
  yourTemplate: {
    name: 'Your Template',
    containerStyle: { background: '#fff', color: '#111' },
    headerStyle: { background: '#yourcolor', color: '#fff', padding: '24px' },
    accentColor: '#yourcolor',
    fontFamily: "'Your Font', sans-serif",
    headerAlign: 'left' // or 'center'
  }
}
```

### Modifying Styles

Edit `src/styles.css` to customize:
- Colors (CSS variables in `:root`)
- Spacing and layout
- Typography
- Animations

### Adding New Sections

1. Update default data in `src/App.jsx`
2. Add editor fields in `src/components/Editor.jsx`
3. Add preview rendering in `src/components/Preview.jsx`

## 🐛 Troubleshooting

### PDF Export Issues
- Ensure preview is fully loaded before exporting
- Check browser console for errors
- Try a different browser

### Data Not Saving
- Check if localStorage is enabled
- Clear browser cache and try again
- Export JSON as backup

### Styling Issues
- Clear browser cache
- Check for CSS conflicts
- Verify all fonts are loaded

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite for the blazing fast build tool
- jsPDF and html2canvas for PDF generation
- Google Fonts for beautiful typography

## 📧 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Check existing issues for solutions
- Read the documentation carefully

## 🌟 Show Your Support

If you find this project helpful, please give it a ⭐️ on GitHub!

---

**Built with ❤️ using React and Vite**

Happy Resume Building! 🎉
