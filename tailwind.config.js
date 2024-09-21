module.exports = {
	content: ["./src/**/*.tsx"],

	theme: {
		extend: {
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

			width: {
				mobileApp: "610px",
				tabletApp: "800px",
				desktopApp: "1200px",
			},
		},
	},
};
