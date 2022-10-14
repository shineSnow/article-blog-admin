/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        'login-page': 'url(@/assets/page-bg.jpg)',
        'login-page-modi': 'url(@/assets/page-bg-modi.png)',
        'login-page-oean': 'url(@/assets/page-bg-oean.jpg)',
        'login-page-mount': 'url(@/assets/page-bg-mount.jpg)'
      }
    }
  },
  plugins: []
};
