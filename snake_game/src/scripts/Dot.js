/**
 * Dot class
 */
class Dot {
    constructor(snake, x, y) {
        this.snake = snake;
        this.ctx = snake.ctx;
        this.x = x;
        this.y = y;
        this.isTarget = false;
    }

    /**
     * Move dot
     * @param x
     * @param y
     * @param direction
     * @returns {*[]}
     */
    move(x, y, direction) {
        switch (direction) {
            case 1:
                y = y - this.snake.dotSize;
                break;
            case 2:
                x = x + this.snake.dotSize;
                break;
            case 3:
                y = y + this.snake.dotSize;
                break;
            case 4:
                x = x - this.snake.dotSize;
                break;
        }
        this.x = x;
        this.y = y;
        return [this.x, this.y];
    }

    /**
     * Render
     */
    render() {
        this.ctx.fillStyle = this.isTarget ? 'white' : 'black';
        this.ctx.fillRect(this.x, this.y, this.snake.dotSize, this.snake.dotSize);
    }
}


export default Dot