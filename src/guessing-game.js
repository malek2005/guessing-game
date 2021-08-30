class GuessingGame {
    constructor() {
        this.min;
        this.max;
        this.guess_res
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.guess_res = Math.ceil((this.min + this.max) / 2);
        return this.guess_res;
    }

    lower() {
        this.max = this.guess_res;
    }

    greater() {
        this.min = this.guess_res;
    }
}

module.exports = GuessingGame;
