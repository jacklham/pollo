# Modern Portfolio Website

A responsive, modern portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- ✨ Modern and clean design
- 🌙 Dark mode support
- 📱 Fully responsive
- ⚡ Fast performance with Next.js
- 🎨 Beautiful animations and transitions
- 🔧 Easy to customize
- 📧 Contact form
- 💼 Project showcase
- 📄 Resume download

## Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Deployment:** Vercel (recommended)

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd pollo
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Customization

### Personal Information

Edit the following files to add your personal information:

- `src/components/Hero.tsx` - Name, title, bio, and social links
- `src/components/About.tsx` - About section content
- `src/components/Skills.tsx` - Skills and technologies
- `src/components/Experience.tsx` - Work experience
- `src/components/Projects.tsx` - Project showcases
- `src/components/Contact.tsx` - Contact information

### Images

Replace the placeholder images in the `public` folder:

- `profile.jpg` - Your profile picture
- `project1.jpg` to `project6.jpg` - Project screenshots
- `resume.pdf` - Your resume file

### Colors and Styling

The portfolio uses Tailwind CSS. You can customize colors by editing the Tailwind configuration or modifying the CSS classes in components.

### Social Media Links

Update social media links in:
- `src/components/Hero.tsx`
- `src/components/Footer.tsx`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

### Other Platforms

The portfolio can be deployed to any platform that supports Next.js:
- Netlify
- GitHub Pages (with static export)
- AWS Amplify
- Railway

## Project Structure

```
pollo/
├── public/              # Static assets
├── src/
│   ├── app/            # Next.js app directory
│   │   ├── globals.css # Global styles
│   │   ├── layout.tsx  # Root layout
│   │   └── page.tsx    # Home page
│   └── components/     # React components
│       ├── Header.tsx
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Skills.tsx
│       ├── Experience.tsx
│       ├── Projects.tsx
│       ├── Contact.tsx
│       └── Footer.tsx
├── package.json
└── README.md
```

## Contact Form

The contact form currently logs data to the console. To make it functional:

1. Set up a backend API route
2. Use a service like Formspree, EmailJS, or Netlify Forms
3. Add proper form validation and error handling

## SEO Optimization

To improve SEO:

1. Add proper meta tags in `layout.tsx`
2. Include structured data markup
3. Optimize images with proper alt text
4. Add sitemap.xml and robots.txt

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Feel free to fork this project and submit pull requests for improvements.

---

Built with ❤️ using Next.js and Tailwind CSS
