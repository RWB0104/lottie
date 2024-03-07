import type { StorybookConfig } from "@storybook/react-vite";
import path from 'path';

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ['../static'],
  viteFinal: async (config) => {
    if (config.resolve?.alias) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@lottie': path.resolve(__dirname, '../src')
      }
    }

    else if (config.resolve) {
      config.resolve.alias = {
        '@lottie': path.resolve(__dirname, '../src')
      }
    }

    else {
      config.resolve = {
        alias: {
          '@lottie': path.resolve(__dirname, '../src')
        }
      }
    }

    return config;
  }
};
export default config;
