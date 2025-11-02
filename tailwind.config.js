module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        'mikxc-primary': {
          50: '#bbadd2',
          100: '#b0a2c9',
          200: '#9c8cb8',
          300: '#8976a7',
          400: '#756293',
          500: '#5f5077',
          600: '#4a3f5c',
          700: '#372f44',
          800: '#251f2e',
          900: '#130f18',
          950: '#050407',
        },
        'mikxc-secondary': {
          50: '#C7FED2',
          100: '#76FD99',
          200: '#3AE271',
          300: '#30C461',
          400: '#27A651',
          500: '#1F8842',
          600: '#166D33',
          700: '#0E5225',
          800: '#073917',
          900: '#03210B',
          950: '#011505',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
  darkMode: 'class',
};
