import chai from "chai"
import isObjectLike from "../src/isObjectLike.js"
const expect = chai.expect


describe("isObjectLike", () => {
    it("returns the example output when called with the example input", () => {
        expect(isObjectLike({})).to.equal(true);
        expect(isObjectLike([1,2,3])).to.equal(true);
        expect(isObjectLike(Function)).to.equal(false);
        expect(isObjectLike(null)).to.equal(false);
    })
    it("returns false for invalid input", () => {
        expect(isObjectLike(undefined)).to.equal(false);
        expect(isObjectLike(123)).to.equal(false);
        expect(isObjectLike("123")).to.equal(false);
    })
    it("returns true for valid input", () => {
        expect(isObjectLike(new String())).to.equal(true);
    })
})