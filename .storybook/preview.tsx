import type { Preview, Story, StoryContext } from "@storybook/react";
import { forceReRender } from "@storybook/react";
import React from "react";
import "../src/index.css";
import { ThemeProvider } from "../src/lib/contexts/theme-provider";
import { useTheme } from "../src/lib/hooks/useTheme";
import { useEffect } from "react";

const MyThemes = { light: "light", dark: "dark", system: "system" } as const;
type Theme = (typeof MyThemes)[keyof typeof MyThemes];

// Function to obtain the intended theme
const getTheme = (themeName: Theme) => {
  return MyThemes[themeName];
};

const withThemeProvider = (Story: Story, context: StoryContext) => {
  const { theme, setTheme } = useTheme();
  const storybook_theme = getTheme(context.globals.theme);
  useEffect(() => {
    const root = window.document.documentElement;

    setTheme(storybook_theme);
    root.classList.remove("light", "dark");

    if (storybook_theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(storybook_theme);
    console.log(storybook_theme);
  }, [context.globals.theme]);
  return (
    <ThemeProvider defaultTheme={theme} key={JSON.stringify(storybook_theme)}>
      <Story />
    </ThemeProvider>
  );
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  globalTypes: {
    theme: {
      description: "Global theme for components",
      defaultValue: "light",
      toolbar: {
        // The label to show for this toolbar item
        title: "Theme",
        icon: "circlehollow",
        // Array of plain string values or MenuItem shape
        items: ["light", "dark"],
        // Change title based on selected value
        dynamicTitle: true,
      },
    },
  },
  decorators: [withThemeProvider],
};

export default preview;
