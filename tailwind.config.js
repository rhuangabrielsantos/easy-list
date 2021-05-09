module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {},
    fontFamily: {
      'lobster': ['Lobster', 'ui-sans-serif', 'system-ui'],
      'roboto': ['Roboto', 'ui-sans-serif', 'system-ui']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwind-dracula')(),
  ],
}