import {defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from "path";
import {createProxy, wrapperEnv} from "/@/utils";

// https://vitejs.dev/config/
function pathResolve(dir: string) {
    return resolve(process.cwd(), '.', dir);
}

export default defineConfig(({mode}) => {
    const root = process.cwd();

    const env = loadEnv(mode, process.cwd(), '')

    const viteEnv = wrapperEnv(env);

    const {VITE_PORT, VITE_PROXY, VITE_PUBLIC_PATH} = viteEnv;

    // const isBuild = command === 'build';

    return {
        base: VITE_PUBLIC_PATH,
        root,
        server: {
            port: Number(VITE_PORT),
            host: '0.0.0.0',
            open: false,
            proxy: createProxy(VITE_PROXY)
        },
        resolve: {
            alias: [
                {
                    find: /\/@\//,
                    replacement: pathResolve('src') + '/',
                },
                {
                    find: /\/#\//,
                    replacement: pathResolve('types') + '/',
                },
            ]
        },
        plugins: [vue()]
    }
})
