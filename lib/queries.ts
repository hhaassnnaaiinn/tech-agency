import { client } from './sanity'

// Fetch all projects
export async function getProjects() {
  const query = `*[_type == "project"] | order(order asc) {
    _id,
    title,
    slug,
    category,
    description,
    image,
    technologies,
    projectUrl,
    githubUrl,
    featured,
    order
  }`
  
  return await client.fetch(query)
}

// Fetch featured projects
export async function getFeaturedProjects() {
  const query = `*[_type == "project" && featured == true] | order(order asc) {
    _id,
    title,
    slug,
    category,
    description,
    image,
    technologies,
    projectUrl,
    githubUrl,
    featured,
    order
  }`
  
  return await client.fetch(query)
}

// Fetch all services
export async function getServices() {
  const query = `*[_type == "service"] | order(order asc) {
    _id,
    title,
    description,
    icon,
    features,
    order
  }`
  
  return await client.fetch(query)
}

// Fetch all team members
export async function getTeamMembers() {
  const query = `*[_type == "teamMember"] | order(order asc) {
    _id,
    name,
    position,
    bio,
    image,
    email,
    linkedin,
    github,
    order
  }`
  
  return await client.fetch(query)
}

// Fetch site settings
export async function getSiteSettings() {
  const query = `*[_type == "siteSettings"][0] {
    title,
    description,
    logo,
    heroTitle,
    heroSubtitle,
    contactEmail,
    contactPhone,
    address,
    socialLinks
  }`
  
  return await client.fetch(query)
}

// Fetch a single project by slug
export async function getProjectBySlug(slug: string) {
  const query = `*[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    category,
    description,
    image,
    technologies,
    projectUrl,
    githubUrl,
    featured,
    order
  }`
  
  return await client.fetch(query, { slug })
}
