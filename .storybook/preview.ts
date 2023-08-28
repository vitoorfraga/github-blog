import { themes } from '@storybook/theming'
import type { Preview } from "@storybook/react";
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { GlobalStyles } from './../src/styles/global'
import { defaultTheme } from './../src/styles/themes/default'
import { ThemeProvider } from 'styled-components';
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      theme: themes.dark
    }
  },
};

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      default: defaultTheme
    },
    defaultTheme: 'default',
    Provider: ThemeProvider,
    GlobalStyles
  })
]

export default preview;
