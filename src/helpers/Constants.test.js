
import { ROCK, PAPER, SCISSORS, WIN, DRAW, LOSS, Translate } from './Constants';

describe('Constants', () => {
    describe('Shape', () => {
        it('translates `Rock` correctly', () => {
            expect( Translate.shape(ROCK) ).toEqual("Rock");
        });
        it('translates `Paper` correctly', () => {
            expect( Translate.shape(PAPER) ).toEqual("Paper");
        });
        it('translates `Scissors` correctly', () => {
            expect( Translate.shape(SCISSORS) ).toEqual("Scissors");
        });
    });

    describe('Outcome', () => {
        it('translates `Win` correctly', () => {
            expect( Translate.outcome(WIN) ).toEqual("Win");
        });
        it('translates `Draw` correctly', () => {
            expect( Translate.outcome(DRAW) ).toEqual("Draw");
        });
        it('translates `Loss` correctly', () => {
            expect( Translate.outcome(LOSS) ).toEqual("Lose");
        });
    });
});