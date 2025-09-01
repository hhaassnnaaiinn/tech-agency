# TechAgency - Modern Tech Agency Website

A modern, responsive tech agency website built with Next.js, TypeScript, Tailwind CSS, and Sanity CMS.

## Features

- 🚀 **Modern Tech Stack**: Built with Next.js 15, TypeScript, and Tailwind CSS
- 📱 **Fully Responsive**: Optimized for all devices and screen sizes
- 🎨 **Beautiful UI**: Modern design with smooth animations and transitions
- 📝 **CMS Integration**: Sanity CMS for content management
- ⚡ **Fast Performance**: Optimized for speed and SEO
- 🔧 **Easy Customization**: Well-structured code for easy modifications

## Pages

- **Home**: Hero section, services overview, and company highlights
- **About**: Company mission, values, and team information
- **Projects**: Portfolio showcase with case studies
- **Contact**: Contact form and company information

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Sanity
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ (recommended: Node.js 20+)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd tech-agency
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=your-api-token
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Sanity CMS Setup

### 1. Create a Sanity Project

1. Go to [sanity.io](https://sanity.io) and create an account
2. Create a new project
3. Note down your project ID and dataset name

### 2. Install Sanity CLI

```bash
npm install -g @sanity/cli
```

### 3. Initialize Sanity Studio

```bash
sanity init
```

### 4. Configure Environment Variables

Update your `.env.local` file with your Sanity credentials:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-api-token
```

### 5. Create Content Types

In your Sanity Studio, create the following content types:

- **Project**: For portfolio items
- **Service**: For service offerings
- **Team Member**: For team information
- **Testimonial**: For client testimonials

## Project Structure

```
tech-agency/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── projects/          # Projects page
│   ├── contact/           # Contact page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── Navigation.tsx     # Navigation component
│   └── Footer.tsx         # Footer component
├── lib/                   # Utility functions
│   └── sanity.ts          # Sanity client configuration
├── public/                # Static assets
└── package.json           # Dependencies and scripts
```

## Customization

### Colors and Branding

Update the color scheme in `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        }
      }
    }
  }
}
```

### Content Management

1. **Update Company Information**: Modify the content in each page component
2. **Add New Pages**: Create new directories in the `app` folder
3. **Customize Components**: Edit components in the `components` directory

### Styling

- **Global Styles**: Edit `app/globals.css`
- **Component Styles**: Use Tailwind CSS classes in component files
- **Custom CSS**: Add custom styles in `globals.css`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms

The project can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Performance Optimization

- **Image Optimization**: Use Next.js Image component
- **Code Splitting**: Automatic with Next.js
- **SEO**: Meta tags and structured data included
- **Accessibility**: ARIA labels and semantic HTML

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

---

Built with ❤️ by Hasnain
