/** @type {import('tailwindcss').Config} */
export default {
  // Configura o Tailwind para procurar classes em todos os arquivos de componente
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // ESTENDE O TEMA COM AS CORES PERSONALIZADAS
      colors: {
        'agata-baby-blue': '#bfd7ed', 
        'agata-blue-grotto': '#60a3d9', 
        'agata-royal-blue': '#0074b7', // Cor Principal de Ação (CTA)
        'agata-navy': '#003b73', // Cor Principal Escura
      },
      // ESTENDE O TEMA COM AS FONTES PERSONALIZADAS
      fontFamily: {
        // Inter como padrão (fonte sem serifa)
        sans: ['Inter', 'sans-serif'], 
        // Montserrat para títulos e destaque
        heading: ['Montserrat', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}
