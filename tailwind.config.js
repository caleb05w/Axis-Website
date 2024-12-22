/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "my-blue": "#0933FF",
        "my-light-blue": "#366CFF",
        "my-gray": "#939393",
        "my-light-gray": "#1A1A1A",
      },
    },
  },
  plugins: [],
};
