const assert = require("assert");
const calculateStylePoints = require("./calculateStylePoints.js");

describe("calculateStylePoints", () => {
  describe("style points", () => {
    it("should work with the same value", () => {
      const actual = calculateStylePoints([18, 18, 18, 18, 18]);

      const expected = 54;

      assert.equal(actual, expected);
    });
    it("should work with different values", () => {
      assert.equal(calculateStylePoints([18, 18.5, 17.5, 18.5, 18.5]), 55);
      assert.equal(calculateStylePoints([19.0, 19.5, 19.0, 19.0, 19.0]), 57);
    });
    it("should return error if not array", () => {
      assert.equal(calculateStylePoints(18, 18.5, 17.5, 18.5, 18.5), "error");
    });
    it("should return error if is no complet array", () => {
      const actual = calculateStylePoints([18, 18.5, 17.5, 18.5]);

      const expected = "error";

      assert.equal(actual, expected);
    });
  });
});
