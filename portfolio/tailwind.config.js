/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: "#519903",

					secondary: "#E9E92E",

					accent: "#F7F9CA",

					neutral: "#191A3F",

					"base-100": "#FF7518",

					info: "#C8E1E7",

					success: "#DEF29F",

					warning: "#F7E589",

					error: "#F2B6B5",
				},
			},
			"forest",
			"coffee",
		],
	},
};
