const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
	content: [
		"./src/**/*.tsx",
		"node_modules/daisyui/dist/**/*.js",
		"node_modules/react-daisyui/dist/**/*.js",
	],

	theme: {
		extend: {
			borderRadius: {
				"0.5xl": "10px",
			},

			fontFamily: {
				default: "'DM Sans', sans-serif",
			},

			colors: {
				primary: {
					500: "#4A3AFF",
				},
				secondary: {
					300: "#ECEBFF",
					500: "#D9DBE9",
				},
				neutral: {
					100: "#FFFFFF",
					200: "#F7F7F7",
					300: "#EFF2F6",
					400: "#D9DFE9",
					500: "#A0ABBD",
					600: "#5C6779",
					700: "#4F5A6E",
					800: "#030B1A",
				},
			},
		},
	},
	plugins: [require("daisyui")],

	daisyui: {
		themes: [
			{
				light: {
					primary: "#007db9",
					secondary: "#244c5a",
					accent: "#009f4e",
					neutral: "#ECF2FF",
					"base-100": "#fff",
					info: "#E4E5E8",
					success: "#36d399",
					warning: "#fbbd23",
					error: "#EE4E61",
					ghost: "#fff",
					"primary-content": "#fff",
					"secondary-content": "#fff",
					"accent-content": "#fff",
					"neutral-content": "#3B71FD",
					"info-content": "#111A3B",
					"error-content": "#fff",
				},
			},
		],
	},
});
