'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\cms\[[...tool]]\page.jsx` route
 */

import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {project} from './sanity/schemas/project.js'
import {service} from './sanity/schemas/service.js'
import {teamMember} from './sanity/schemas/teamMember.js'
import {siteSettings} from './sanity/schemas/siteSettings.js'
import {SANITY_CONFIG, SITE_CONFIG} from './lib/constants'

export default defineConfig({
  name: 'default',
  title: `${SITE_CONFIG.name} Studio`,
  projectId: SANITY_CONFIG.projectId,
  dataset: SANITY_CONFIG.dataset,
  basePath: '/studio',
  plugins: [deskTool(), visionTool()],
  schema: {
    types: [project, service, teamMember, siteSettings],
  },
})
