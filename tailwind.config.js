/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				"primary": "#f9f506",
				"background-light": "#f8f8f5",
				"background-dark": "#1a190b",
				"surface-dark": "#23220f",
			},
			fontFamily: {
				"display": ["var(--font-spline-sans)", "sans-serif"],
				"sans": ["var(--font-spline-sans)", "sans-serif"],
			},
			borderRadius: { "DEFAULT": "1rem", "lg": "2rem", "xl": "3rem", "full": "9999px" },
		},
	},
	plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
};