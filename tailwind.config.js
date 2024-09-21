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
        default: "'Inter', sans-serif",
        body: ["Inter", "system-ui", "sans-serif"],
      },

      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
        secondary: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
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
