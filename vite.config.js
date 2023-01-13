import { defineConfig } from 'vite'
const { resolve } = require('path')

import uni from '@dcloudio/vite-plugin-uni'
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: true,
  },
  plugins: [
    uni(),
  ],
  resolve:{
    alias:{
      "@":resolve("src"),
      "@utils":resolve("src","utils"),
      "@static":resolve("src","static"),
      "@hooks":resolve("src","hooks"),
      "@api":resolve("src","api"),
    }
  }
})
