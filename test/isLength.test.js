import chai from "chai"
import isLength from "../src/isLength.js"
const expect = chai.expect


describe("isLength", () => {
    it("returns the example output when called with the example input", () => {
        expect(isLength(3)).to.equal(true);
        expect(isLength(Number.MIN_VALUE)).to.equal(false);
        expect(isLength(Infinity)).to.equal(false);
        expect(isLength('3')).to.equal(false);
    })
    it("returns false for invalid input", () => {
        expect(isLength(null)).to.equal(false);
        expect(isLength(undefined)).to.equal(false);
        expect(isLength("123")).to.equal(false);
        expect(isLength({ "foo": 1 })).to.equal(false);
        expect(isLength(NaN)).to.equal(false);
    })
})