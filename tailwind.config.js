/** @type {import('tailwindcss').Config} */

import { yellow } from "tailwindcss/colors";

export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    colors: {
      primary: yellow,
    },
  },
};
export const plugins = [];