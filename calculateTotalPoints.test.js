const assert = require("assert");
const calculateTotalPoints = require("./calculateTotalPoints.js");

describe("calculateTotalPoints", () => {
  describe("total points", () => {
    it("should work in normall hillSize", () => {
      assert.equal(
        calculateTotalPoints(
          111,
          "normal",
          98,
          [19.0, 19.5, 19.0, 19.0, 19.0],
          -14.4,
          3.2
        ),
        131.8
      );
    });
    it("should good value in big hillSize", () => {
      assert.equal(
        calculateTotalPoints(
          134,
          "big",
          120,
          [19.0, 20.0, 19.5, 19.0, 18.5],
          -5.4,
          0
        ),
        137.3
      );
    });
    it("should good value in mammoth hillSize", () => {
      assert.equal(
        calculateTotalPoints(
          227.5,
          "mammoth",
          200,
          [18.0, 18.5, 17.5, 18.5, 18.5],
          -8.4,
          8.7
        ),
        208.3
      );
    });
  });
});
