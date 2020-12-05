import chai from "chai"
import isObject from "../src/isObject.js"
const expect = chai.expect


describe("isObject", () => {
    it("returns the example output when called with the example input", () => {
        expect(isObject({})).to.equal(true);
        expect(isObject([1,2,3])).to.equal(true);
        expect(isObject(Function)).to.equal(true);
        expect(isObject(null)).to.equal(false);
    })
    it("returns false for invalid input", () => {
        expect(isObject(undefined)).to.equal(false);
        expect(isObject(123)).to.equal(false);
        expect(isObject("123")).to.equal(false);
    })
    it("returns true for valid input", () => {
        expect(isObject(new String())).to.equal(true);
        expect(isObject(() => "foo")).to.equal(true);
    })
})