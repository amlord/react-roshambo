export const ROCK = 1;
export const PAPER = 2;
export const SCISSORS = 3;

export const WIN = 'win';
export const DRAW = 'draw';
export const LOSS = 'loss';

function _translateShape(shape) {
    switch(shape) {
        case ROCK:
            return 'Rock';
        case PAPER:
            return 'Paper';
        case SCISSORS:
            return 'Scissors';
    }
}

function _translateOutcome(outcome) {
    switch(outcome) {
        case WIN:
            return 'Win';
        case LOSS:
            return 'Lose';
        case DRAW:
            return 'Draw';
    }
}

export const Translate = {
    choice: function(shape) {
        return _translateShape(shape);
    },
    outcome: function(outcome) {
        return _translateOutcome(outcome);
    }
};