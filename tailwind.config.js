/** @type {import('tailwindcss').Config} */

const path = require(`path`);

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          darkblue: "hsl(209, 23%, 22%)",
          vdarkbluebg: "hsl(207, 26%, 17%)",
          vdarkblue: "hsl(200, 15%, 8%)",
          darkgray: "hsl(0, 0%, 52%)",
          vlightgray: "hsl(0, 0%, 98%)",
          white: "hsl(0, 0%, 100%)",
        }
      },

      fontFamily: {
        body: ["Poppins"],
      },


      backgroundImage: {
        'body-image': `url(${path.resolve(__dirname, 'src/assets/assets/images/background-pattern-desktop.svg')})`
      }
    },
  },
  plugins: [
    function({ addUtilities}) {
      const newUtilities = {
        'hide-scrollbar': {
            'ms-overflow-style': 'none',
            'scrollbar-width': 'none',                        
        },
        '.hide-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
      };
      addUtilities(newUtilities)
    }
  ],
}