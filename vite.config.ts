import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import inject from '@rollup/plugin-inject';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		inject({
			$: 'jquery',
		})
	],
	server: { watch: { usePolling: true } },
	resolve: {
		alias: {
			'@': resolve(__dirname, './src'),
			'~bootstrap': resolve(__dirname, 'node_modules/bootstrap'),
		}
	}
})
