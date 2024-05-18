const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", flowbite.content()],
  theme: {
    extend: {},
    colors: {
			"primary": {
				50: "#DBEDFF",
				100: "#B8DAFF",
				200: "#70B5FF",
				300: "#248EFF",
				400: "#006ADB",
				500: "#004693",
				600: "#003975",
				700: "#002A57",
				800: "#001E3D",
				900: "#000F1F",
				950: "#00070F"
			  },
			"secondary": {
				50: "#F3F9FF",
				100: "#E5F3FF",
				200: "#C7E9FF",
				300: "#9FDBFF",
				400: "#6FC6FF",
				500: "#3FAFFF",
				600: "#2E9AFF",
				700: "#1E86FF",
				800: "#0E6DFF",
				900: "#004DFF",
				950: "#003BD9"
			  },
		}
  },
  plugins: [flowbite.plugin()],
};
