import { isEven } from '@er.sumitarora/is-even';
import { isOdd } from '@er.sumitarora/is-odd';
import { CheckNumberResponse } from '@er.sumitarora/models';

export function checkNumber(input: number): CheckNumberResponse {
  console.log('change - 3');
  const isEvenNumber = isEven(input);
  const isOddNumber = isOdd(input);
  return {
    even: isEvenNumber,
    odd: isOddNumber
  };
}
