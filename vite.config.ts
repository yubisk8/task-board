import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// GitHub Pages（https://yubisk8.github.io/task-board/）で公開するため、
// リポジトリ名をベースパスに設定する。
export default defineConfig({
  base: '/task-board/',
  plugins: [react()],
})
