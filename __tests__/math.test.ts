import { add } from '../src/math';

describe('Math Tests', () => {
  test('should add x and y', () => {
    const x = 5;
    const y = 5;
    const result = add(x, y);

    expect(result).toBe(10);
  });
});
