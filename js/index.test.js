import strictEquals from "./index";

describe("Given a strictEquals function", () => {
  describe("When it's called and it recives NaN and NaN", () => {
    test("Then it should return false", () => {
      //arrange
      const value1 = NaN;
      const value2 = NaN;
      const expectedOutput = false;

      //act

      const comparsionOutpunt = strictEquals(value1, value2);

      //assert

      expect(comparsionOutpunt).toBe(expectedOutput);
    });
  });
});
