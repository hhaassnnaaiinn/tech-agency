// Site Configuration
export const SITE_CONFIG = {
  name: 'TechAgency',
  title: 'TechAgency - Innovative Digital Solutions',
  description: 'Leading technology solutions for modern businesses',
  email: {
    contact: 'hello@techagency.com',
    support: 'support@techagency.com',
  },
  social: {
    twitter: 'https://twitter.com/techagency',
    linkedin: 'https://linkedin.com/company/techagency',
    github: 'https://github.com/techagency',
  },
} as const

// Sanity Configuration
export const SANITY_CONFIG = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'bfpz7d8j',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
} as const
