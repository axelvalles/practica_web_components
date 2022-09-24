import { defineConfig } from 'vite'
import rawPlugin from 'vite-raw-plugin'

export default defineConfig({
  plugins: [
    rawPlugin({
        fileRegex: /\.html$/
    })
  ],
  define: {
    __isBrowser__: true
  },
  
});
