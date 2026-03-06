// .storybook/main.ts
import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  // Vite가 PostCSS 설정을 제대로 읽도록 명시합니다.
  async viteFinal(config) {
    return {
      ...config,
      css: {
        postcss: './postcss.config.js',
      },
      define: {
        "process.env": {},
      },
    };
  },
};
export default config;