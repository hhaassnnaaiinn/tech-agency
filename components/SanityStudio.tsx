'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '../sanity.config.js'

export default function SanityStudio() {
  return (
    <div suppressHydrationWarning>
      <NextStudio config={config} />
    </div>
  )
}
