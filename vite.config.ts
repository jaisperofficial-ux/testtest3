import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repo = process.env.GITHUB_REPOSITORY?.split('/')[1]
const isGhPages = process.env.GITHUB_PAGES === 'true'
const base = isGhPages && repo ? `/${repo}/` : '/'

export default defineConfig({ plugins: [react()], base })