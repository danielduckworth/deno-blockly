// // Plugins
// import 'npm:vue@^3.3.4'
// import { defineConfig } from 'vite'
// // import vue from '@vitejs/plugin-vue'
// import vuetify from "vite-plugin-vuetify"

// // Utilities
// import { fileURLToPath, URL } from "node:url"
// import { splitVendorChunkPlugin } from 'vite'

// // Vite
// import { viteStaticCopy } from "vite-plugin-static-copy"

import { defineConfig } from 'vite'
import { splitVendorChunkPlugin } from 'vite'
import { fileURLToPath, URL } from "node:url"

import vue from 'npm:@vitejs/plugin-vue@4.2.3'
import vuetify from "npm:vite-plugin-vuetify@1.0.2"
import { viteStaticCopy } from "npm:vite-plugin-static-copy@0.17.0"

import 'npm:vue@^3.3.4'
import 'npm:vuetify@3.3.9'


// https://vitejs.dev/config/
export default defineConfig({
  build: {
    chunkSizeWarningLimit: 550,
    rollupOptions: {
      external: ["vuetify/settings", "webfontloader", "@mdi/js"],
      // external:
      //   ["npm:vuetify/iconsets/mdi-svg", "npm:vuetify/settings", "npm:vue3-perfect-scrollbar", "npm:webfontloader", "npm:vuetify"],
      output: {
        manualChunks: {
          "blockly/blockly": ["blockly/blockly"],
          "vuetify/vuetify": ["vuetify"],
          },
        },
      },
    },
  plugins: [
    vue({
    template: {
      compilerOptions: {
        isCustomElement: (tag) =>
          [
            "field",
            "block",
            "category",
            "xml",
            "mutation",
            "value",
            "sep",
            "shadow",
          ].includes(tag),
        whitespace: 'preserve',
      },
    },
  }),
  // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
  vuetify({
    autoImport: true,
    // styles: { configFile: 'src/settings.scss' },
  }),
  // Blockly vite plugin
  viteStaticCopy({
    targets: [
      {
        src: fileURLToPath(
          new URL("./node_modules/blockly/media/*", import.meta.url)
        ),
        dest: "media",
      },
    ],
  }),
  splitVendorChunkPlugin(),
],
define: { "process.env": {} },
  // resolve: {
  //   alias: {
  //     "@": fileURLToPath(new URL("./src", import.meta.url)),
  //   },
  //   extensions: [".js", ".json", ".jsx", ".mjs", ".ts", ".tsx", ".vue"],
  // },
})
