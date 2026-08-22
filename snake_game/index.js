import Snake from "./src/scripts/Snake";

const canvas = document.querySelector('canvas');
const snake = new Snake(canvas,30);

snake.start();