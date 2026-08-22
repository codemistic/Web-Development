import Dot from "./Dot";

/**
 * Snake game class
 */
class Snake {
    constructor(canvas, dimension) {
        this.dimension = dimension;
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.dotSize = Math.floor(this.canvas.width / dimension);
        this.speed = 70;
        this.lock = false;
    }

    /**
     * Start game
     */
    start() {
        this.direction = Math.floor(Math.random() * 4) + 1; // 1,2,3,4
        this.dots = [];
        this.interval = null;
        this.ctx.clearRect(0, 0, this.ctx.width, this.ctx.height);
        const basePosition = this.dimension / 2 * this.dotSize - this.dotSize;
        const baseDot = new Dot(this, basePosition, basePosition);
        baseDot.render();
        this.dots.push(baseDot);

        this.generateTargetDot();

        document.addEventListener('keydown', this.keyHandler.bind(this));
        this.interval = setInterval(this.animate.bind(this), this.speed);
    }

    /**
     * Generate target dot
     */
    generateTargetDot() {
        //not in dots
        const x = Math.abs(Math.floor(Math.random() * this.dimension) * this.dotSize - this.dotSize);
        const y = Math.abs(Math.floor(Math.random() * this.dimension) * this.dotSize - this.dotSize);
        const targetDot = new Dot(this, x, y);
        targetDot.isTarget = true;
        if (this.dots.filter(dot => dot.x === x && dot.y === y).length === 0) {
            this.targetDot = targetDot;
        } else {
            this.generateTargetDot();
        }
    }

    /**
     * Animate
     */
    animate() {

        const firstPosition = [this.dots[0].x, this.dots[0].y];
        const lastDot = this.dots[this.dots.length - 1];
        const lastDotClone = new Dot(this, lastDot.x, lastDot.y);
        const newPosition = lastDot.move(firstPosition[0], firstPosition[1], this.direction);

        //konec hry
        if (newPosition[0] < 0 || newPosition[1] < 0 || newPosition[1] >= this.canvas.height || newPosition[0] >= this.canvas.width) {
            this.endGame();
            return;
        }

        this.dots.splice(-1, 1);
        this.dots.unshift(lastDot);

        if (newPosition[0] === this.targetDot.x && newPosition[1] === this.targetDot.y) {
            this.generateTargetDot();
            this.dots.push(lastDotClone);
        }

        //bourani do sebe
        this.dots.forEach(dot => {
            let collision = 0;
            this.dots.forEach(dot1 => {
                if (dot.x === dot1.x && dot.y === dot1.y) {
                    collision++;
                }
            });
            if (collision > 1) {
                this.endGame();
            }
        });

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.targetDot.render();
        this.dots.forEach(dot => {
            dot.render();
        });
        this.lock = false;
    }

    /**
     * Change direction
     * @param e
     */
    keyHandler(e) {
        if (!this.lock) {
            switch (e.keyCode) {
                case 38:
                    if (this.direction !== 3) {
                        this.direction = 1;
                    }
                    break;
                case 39:
                    if (this.direction !== 4) {
                        this.direction = 2;
                    }
                    break;
                case 40:
                    if (this.direction !== 1) {
                        this.direction = 3;
                    }
                    break;
                case 37:
                    if (this.direction !== 2) {
                        this.direction = 4;
                    }
                    break;
            }
            this.lock = true;
        }
    }

    /**
     * END game
     */
    endGame() {
        clearInterval(this.interval);
        if (confirm('Konec hry! Vaše skóre je ' + (this.dots.length - 1) + '\nChcete hrát znovu?')) {
            this.start();
        }
    }
}

export default Snake