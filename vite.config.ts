import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { name } from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/' + name,
})
