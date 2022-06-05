module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#112B3C",
        "secondary":"#F66b0E",
        "green":"#00FF00"
      }
    },
     screens:{
      sm:{max:"640px"},
      // => @media (min-width: 640px) { ... }

      md:{max:"768px"},
      // => @media (min-width: 768px) { ... }

      lg: {max:'1024px'},
      // => @media (min-width: 1024px) { ... }

      xl:{ max:'1280px'},
      // => @media (min-width: 1280px) { ... }

      xxl:{max:'1536px'}
      // => @media (min-width: 1536px) { ... }
     }
  },
  plugins: [],}