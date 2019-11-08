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
      const actual = calculateStylePoints([18, 18.5, 17.5, 18.5, 18.5]);

      const expected = 55;

      assert.equal(actual, expected);
    });
    it("not array", () => {
      const actual = calculateStylePoints(18, 18.5, 17.5, 18.5, 18.5);

      const expected = "error";

      assert.equal(actual, expected);
    });
    it("is no complet array", () => {
      const actual = calculateStylePoints([18, 18.5, 17.5, 18.5]);

      const expected = "error";

      assert.equal(actual, expected);
    });

    // it("should return 0 seconds if no value is passed", () => {
    //   const actual = formatDate();

    //   const expected = "0s";

    //   assert.equal(actual, expected);
    // });
  });
});
