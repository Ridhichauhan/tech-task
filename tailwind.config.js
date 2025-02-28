/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        xxs: "250px",
        xs: "375px",
        xs2: "500px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1920px",
        "4xl": "2560px",
        "5xl": "3840px",
      },
      colors: {
        navBar: "#474747",
        textWhite: "#ffffff",
        whiteBg: "#F9F9F7",
        white: "#ffffff",
        neutral: "#C8CDB9",
        black: "#000000",
        red: "#AD343E",
        textColor: "#2C2F24",
        bgGray: "#474747",
        textGreen: "#414536",
        textGray: "#737865",
        textGrayy: "#414536",
        lightGray: "#DBDFD0",
        limeGray: "#ADB29E",
        green:"#05C167",
        purered:"#F63440",
        margenta:"#D70F64",
        cyan:"#00CCBC",
        lightgreen:"#43B02A",
        gray:"#495460"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   theme: {
//     screens: {
//       'xxs':'250px',
//       'xs':'375px',
//       'sm': '640px',
//       'md': '768px',
//       'lg': '1024px',
//       'xl': '1280px',
//       '2xl': '1536px',
//     }
//   }
// }
