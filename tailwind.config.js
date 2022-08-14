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
      'mobile-photography':"url('/src/images/mobile/image-photography.jpg')",
      'mobile-menu': "url('/src/images/icon-hamburger.svg')",
      'desktop-header': "url('/src/images/desktop/image-header.jpg')",
      'desktop-transform': "url('/src/images/desktop/image-transform.jpg')",
      'desktop-stand-out': "url('/src/images/desktop/image-stand-out.jpg')",
      'desktop-graphic':"url('/src/images/desktop/image-graphic-design.jpg')",
      'desktop-photography':"url('/src/images/desktop/image-photography.jpg')",
      'line-yellow': 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(250,212,0,1) 50%, rgba(250,212,0,1) 100%)',
      'line-red': 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(254,120,103,1) 50%, rgba(254,120,103,1) 100%)'
    },
    colors: {
      red: 'hsl(7, 99%, 70%)',
      yellow: 'hsl(51, 100%, 49%)',
      'cyan-graphic': 'hsl(167, 40%, 24%)',
      'blue-photography': 'hsl(198, 62%, 26%)',
      'cyan-footer': 'hsl(168, 34%, 70%)',
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
