tailwind.config = {
  daisyui: {
    themes: [], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "light", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },

  theme: {
    extend: {
      container: {
        padding: "20px",
        center: true,
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "960px",
        xl: "1200px",
        "2xl": "1320px",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 100 },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.2s ease-in-out forwards",
      },
      colors: {
        primary: "#c99c41",
        primaryHover: "#f3a70e",
        formColor: "#1e1e1e",
        formColorHover: "#343434",
        desc: "#212529",
        footerTitle: "#c99c41",
        footerLink: "#c99c41",
      },
    },
  },
};
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      document.getElementById("nav-fixed").classList.add("fixed");
      document.getElementById("nav-fixed").classList.add("bg-white");
    } else {
      document.getElementById("nav-fixed").classList.remove("fixed");
      document.getElementById("nav-fixed").classList.remove("bg-white");
    }
  });
});
