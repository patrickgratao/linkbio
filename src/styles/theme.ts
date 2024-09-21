import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
	fontFamily: "'Noto Sans', sans-serif",
	borderRadius: {
		full: "100%",
		lg: "10px",
		md: "6px",
		sm: "4px",
	},

	colors: {
		white: "#fff",
		black: "#000",
	},

	fontSize: {
		lg: "18px",
		md: "16px",
		sm: "14px",
		xs: "12px",
	},

	lineHeight: {
		lg: "24px",
		md: "22px",
		sm: "20px",
		xs: "18px",
	},

	padding: {
		xl: "60px",
		lg: "40px",
		md: "20px",
		sm: "16px",
		xs: "12px",
	},

	spacing: {
		xxl: "100px",
		xl: "32px",
		lg: "25px",
		md: "16px",
		sm: "4px",
		xs: "2px",
	},

	breakpoints: {
		mobile: "320px",
		tablet: "768px",
		desktop: "1024px",
	},
};
