/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			{
				lemonade: {
					...require("daisyui/src/colors/themes")[
						"[data-theme=lemonade]"
					],
					primary: "#FF5F1F",
				},
			},
			"lemonade",
			"forest",
			"coffee",
		],
	},
};
