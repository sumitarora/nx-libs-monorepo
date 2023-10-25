import { checkNumber } from './check-number';

describe('checkNumber', () => {
  it('should work', () => {
    expect(checkNumber(12)).toEqual({
      even: true,
      odd: false
    });

    expect(checkNumber(13)).toEqual({
      even: false,
      odd: true
    });
  });
});
