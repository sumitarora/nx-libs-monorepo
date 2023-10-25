import { isEven } from '@sumitarora/is-even';
import { isOdd } from '@sumitarora/is-odd';
import { CheckNumberResponse } from '@sumitarora/models';

export function checkNumber(input: number): CheckNumberResponse {
  const isEvenNumber = isEven(input);
  const isOddNumber = isOdd(input);
  return {
    even: isEvenNumber,
    odd: isOddNumber
  };
}
