const assert = require("assert");
const calculateDistancePoints = require("./calculateDistancePoints.js");

describe("calculateDistancePoints", () => {
  describe("distance points", () => {
    it("should work with normal hillSize and distans smaller than kPoint", () => {
      assert.equal(calculateDistancePoints(88, "normal", 98), 40);
      assert.equal(calculateDistancePoints(85, "normal", 98), 34);
    });
    it("should work with normal hillSize and distans equal kPoint", () => {
      assert.equal(calculateDistancePoints(98, "normal", 98), 60);
      assert.equal(calculateDistancePoints(102, "normal", 102), 60);
    });
    it("should work with normal hillSize and distans bigger than kPoint", () => {
      assert.equal(calculateDistancePoints(100, "normal", 98), 64);
      assert.equal(calculateDistancePoints(111, "normal", 98), 86);
    });

    it("should work with big hillSize and distans smaller than kPoint", () => {
      assert.equal(calculateDistancePoints(115, "big", 120), 51);
      assert.equal(calculateDistancePoints(119, "big", 120), 58.2);
    });
    it("should work with big hillSize and distans equal kPoint", () => {
      assert.equal(calculateDistancePoints(120, "big", 120), 60);
      assert.equal(calculateDistancePoints(125, "big", 125), 60);
    });
    it("should work with big hillSize and distans bigger than kPoint", () => {
      assert.equal(calculateDistancePoints(135, "big", 120), 87);
      assert.equal(calculateDistancePoints(125, "big", 120), 69);
    });

    it("should work with mammoth hillSize and distans smaller than kPoint", () => {
      assert.equal(calculateDistancePoints(195, "mammoth", 200), 114);
      assert.equal(calculateDistancePoints(175, "mammoth", 200), 90);
      assert.equal(calculateDistancePoints(200, "mammoth", 220), 96);
    });
    it("should work with mammoth hillSize and distans equal kPoint", () => {
      assert.equal(calculateDistancePoints(200, "mammoth", 200), 120);
      assert.equal(calculateDistancePoints(220, "mammoth", 220), 120);
    });
    it("should work with mammoth hillSize and distans bigger than kPoint", () => {
      assert.equal(calculateDistancePoints(220, "mammoth", 200), 144);
      assert.equal(calculateDistancePoints(211, "mammoth", 200), 133.2);
      assert.equal(calculateDistancePoints(221, "mammoth", 220), 121.2);
    });

    it("should return error if hillSize is not 'big', 'normal' or 'mammoth'", () => {
      assert.equal(calculateDistancePoints(100, "normala", 98), "error");
      assert.equal(calculateDistancePoints(100, "bik", 98), "error");
    });
    it("should return NaN if distance or kPoint is not number", () => {
      assert.equal(isNaN(calculateDistancePoints("a", "normal", 98)), true);
      assert.equal(isNaN(calculateDistancePoints(99, "big", "t98")), true);
    });
  });
});
