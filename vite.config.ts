import { crx } from "@crxjs/vite-plugin";
import { resolve } from "path";
import { defineConfig } from "vite";
import manifest from "./manifest.json";

const srcDir = resolve(__dirname, "src");

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [crx({ manifest })],
    resolve: {
        alias: {
            src: srcDir,
        },
    },
});
