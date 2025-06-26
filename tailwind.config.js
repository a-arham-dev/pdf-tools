import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
    "./storage/framework/views/*.php",
    "./resources/views/**/*.blade.php",
    "./resources/js/**/*.tsx",
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        blue: {
          DEFAULT: colors.blue[500],
          dark: colors.blue[600],
        },
        green: {
          DEFAULT: colors.emerald[500],
          dark: colors.emerald[600],
        },
        red: {
          DEFAULT: colors.red[600],
          dark: colors.red[700],
        },
        yellow: {
          DEFAULT: colors.amber[600],
          dark: colors.amber[700],
        },
        pink: {
          DEFAULT: colors.rose[600],
          dark: colors.rose[700],
        },
        indigo: {
          DEFAULT: colors.indigo[600],
          dark: colors.indigo[700],
        },
        sky: {
          DEFAULT: colors.sky[600],
          dark: colors.sky[700],
        },
        orange: {
          DEFAULT: colors.orange[600],
          dark: colors.orange[700],
        },
      },
    },
  },

  darkMode: ["class"],

  plugins: [forms],
};
