import type { ConfigEnv, UserConfig } from "vite";
import { loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import UnoCSS from "unocss/vite";
import { resolve } from "path";

const root = process.cwd();

const pathResolve = (dir: string) => resolve(root, ".", dir);

// https://vite.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {
  console.log("process", process.argv);
  let env = {} as any;
  const isBuild = command === "build";
  if (isBuild) {
    env = loadEnv(mode, root);
  } else {
    env = loadEnv(
      process.argv[2] === "--mode" ? process.argv[3] : "development",
      root,
    );
  }
  return {
    base: env.VITE_BASE_PATH,
    plugins: [
      vue(),
      UnoCSS(),
      AutoImport({
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/,
          /\.vue\?vue/, // .vue
          /\.vue\.[tj]sx?\?vue/, // .vue (vue-loader with experimentalInlineMatchResource enabled)
          /\.md$/, // .md
        ],
        imports: ["vue", "vue-router"],
        dts: "src/types/auto-import.d.ts",
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        dts: "src/types/auto-components.d.ts",
        // globs: ["src/components/**/**.{vue, md}"],
        globs: ["src/components/**/**.vue", "src/views/**/*.vue"],
        resolvers: [ElementPlusResolver()],
      }),
    ],
    resolve: {
      alias: {
        "@": pathResolve("src"),
      },
    },
  };
};
