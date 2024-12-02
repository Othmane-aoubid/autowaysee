export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "twbb-dash": "twbb-dash 10s ease-in-out infinite",
      },
      keyframes: {
        "twbb-dash": {
          "0%": {
            "stroke-dasharray": "0 1500",
          },
          "15%": {
            "stroke-dasharray": "1500 1500",
          },
          "85%": {
            opacity: "1",
          },
          "90%": {
            "stroke-dasharray": "1500 1500",
            opacity: "0",
          },
          "100%": {
            "stroke-dasharray": "0 1500",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [],
}