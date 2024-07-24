/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/index.html"], // Nói cho nó biết nó có hiệu lực ở file nào

  theme: {
    // Không có sẵn thì viết vào đây
    extend: {
      width: {
        1100: "1100px",
      },
      backgroundColor: {
        primary: "#F5F5F5",
        secondary1: "#1266dd",
        secondary2: "#f73859",
        "overlay-30": "rgba(0, 0, 0, 0.3)",
        "overlay-70": "rgba(0, 0, 0, 0.7)",
      },
      maxWidth: {
        600: "600px",
        1100: "1100px",
      },
      flex: {
        3: "3 3 0%",
      },
    },
  },
  plugins: [],
};
