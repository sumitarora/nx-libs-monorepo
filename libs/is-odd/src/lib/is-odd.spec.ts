import { isOdd } from './is-odd';

describe('isOdd', () => {
  it('should work', () => {
    expect(isOdd(22)).toBeFalsy();
    expect(isOdd(23)).toBeTruthy();
    expect(isOdd(22.12)).toBeFalsy();
    expect(isOdd(23.67)).toBeTruthy();
  });
});
