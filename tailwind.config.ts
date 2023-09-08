// 3rd Party Imports
import { skeleton } from "@skeletonlabs/tw-plugin";
import typography from "@tailwindcss/typography";
import { join } from "path";
// Type Imports
import type { Config } from "tailwindcss";
// Wildfire Imports
import { wildfireHockey } from "./wildfireHockeyTheme";

const config = {
  darkMode: "class",
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    join(
      require.resolve("@skeletonlabs/skeleton"),
      "../**/*.{html,js,svelte,ts}"
    ),
  ],
  theme: {
    extend: {},
  },
  plugins: [
    typography,
    skeleton({
      themes: {
        custom: [wildfireHockey],
      },
    }),
  ],
} satisfies Config;

export default config;
