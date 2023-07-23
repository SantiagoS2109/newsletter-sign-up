/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-slate-grey": "hsl(234, 29%, 20%)",
        "charcoal-grey": "hsl(235, 18%, 26%)",
        grey: "hsl(231, 7%, 60%)",
        white: "hsl(0, 0%, 100%)",
        tomato: "hsl(4, 100%, 67%)",
        fucsia: "hsl(347, 100%, 66%)",
      },
      fontFamily: {
        sans: "Roboto",
      },
      backgroundImage: {
        desktop: "url('./assets/illustration-sign-up-desktop.svg')",
        mobile: "url('./assets/illustration-sign-up-mobile.svg')",
      },
    },
  },
  plugins: [],
};
