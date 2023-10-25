import { isEven } from './is-even';

describe('isEven', () => {
  it('should work', () => {
    expect(isEven(22)).toBeTruthy();
    expect(isEven(23)).toBeFalsy();
    expect(isEven(22.12)).toBeTruthy();
    expect(isEven(23.67)).toBeFalsy();
  });
});
