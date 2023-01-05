import { defineConfig } from 'vite'
import { resolve } from "path";


import uni from '@dcloudio/vite-plugin-uni'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
  ],
  resolve:{
    alias:{
      "@":resolve("src"),
      "@utils":resolve("src","utils"),
      "@static":resolve("src","static"),
      "@hooks":resolve("src","hooks"),
    }
  }
})
