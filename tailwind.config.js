/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    backgroundImage: {
      'mobile-header': "url('/src/images/mobile/image-header.jpg')",
      'mobile-transform': "url('/src/images/mobile/image-transform.jpg')",
      'mobile-stand-out': "url('/src/images/mobile/image-stand-out.jpg')",
      'mobile-graphic':"url('/src/images/mobile/image-graphic-design.jpg')",
      'mobile-photography':"url('/src/images/mobile/image-photography.jpg')"
    },
    colors: {
      red: 'hsl(7, 99%, 70%)',
      yellow: 'hsl(51, 100%, 49%)',
      'cyan-graphic': 'hsl(167, 40%, 24%)',
      'blue-photography': 'hsl(198, 62%, 26%)',
      'cyan-footer': 'hsl(168, 34%, 41%)',
      darkblue: 'hsl(212, 27%, 19%)',
      grayblue3: 'hsl(213, 9%, 39%)',
      grayblue2: 'hsl(232, 10%, 55%)',
      grayblue1: 'hsl(210, 4%, 67%)',
      white: 'hsl(0, 0%, 100%)'

    },
    extend: {
      fontFamily: {
        'barlow': 'Barlow, Arial, Helviteca, sans-serif',
        'fraunces': 'Fraunces, Arial, Helviteca, sans-serif'
      }
    },
  },
  plugins: [],
}
