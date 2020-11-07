export const mainTest = (): void => {
  describe('main test', () => {
    test('result test', async () => {
      const result = 1 + 1;
      expect(result).toBe(2);
    });
  });
};
