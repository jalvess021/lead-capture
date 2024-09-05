/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./resources/views/**/*.blade.php",
      "./resources/js/**/*.js",
    ],
  theme: {
    extend: {
      colors: {
        primary: '#ff5722', // Exemplo de cor personalizada
      },
    },
  },
  plugins: [],
}

