/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      'sm':'640px',

      'md': '768px',
      // => @media (min-width: 640px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1200px',
      // => @media (min-width: 1280px) { ... }
      '2xl':'1736px'
    },
    extend: {
      backgroundImage:{
        'hero':"url('/assets/images/rode-caster.jpg')",
        'female':"url('/assets/images/female-looking-down-bg.jpg')",
        'webheader':"url('/assets/images/webheader.jpg')",
        'webheader-mobile':"url('/assets/images/webheader-mobile.jpg')",
        'rode-podmic-webheader-mobile':"url('/assets/images/rode-podmic-webheader-mobile.jpg')",
        'rode-podmic-webheader':"url('/assets/images/rode-podmic-webheader.jpg')",
        'rode-wigo2-mobile':"url('/assets/images/rode-wigo2-mobile.jpg')",
        'WIGOII-WEBHEADER-02':"url('/assets/images/WIGOII-WEBHEADER-02.jpg')",
        'rode-nt-usb-mini':"url('/assets/images/rode-nt-usb-mini.jpg')",
        'rode-nt-usb-mini-webheader-mobile':"url('/assets/images/rode-nt-usb-mini-webheader-mobile.jpg')",
        'NT-USB_Mini_black':"url('/assets/images/NT-USB_Mini_black.jpg')",
        'microphones':"url('/assets/images/microphones.png')",
        'interfaces':"url('/assets/images/interfaces.jpg')",
        'accessories':"url('/assets/images/accessories.png')",
        'software':"url('/assets/images/software.png')",
        
      },
    },
  },
  plugins: [],
}
