/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F37531",
        secondary: "#090B0B",
        secondaryLower:"#e5e5e5",
        secondaryHover: "#40444B",
        graySecondary:"#F4F6F8",
        insta:"#D84AFC",
        dark:{
          button:"#505050",
          background:"#212831"
        },
        red:{
          tiktok:"#E71C4F"
        }

      },
   
      fontFamily: {
        heading: 'Roboto',
      },
    },
  },
  plugins: [],
};
