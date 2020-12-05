import chai from "chai"
import isEmpty from "../src/isEmpty.js"
const expect = chai.expect


describe("isEmpty", () => {
    it("returns the example output when called with the example input", () => {
        expect(isEmpty(null)).to.equal(true);
        expect(isEmpty(true)).to.equal(true);
        expect(isEmpty(1)).to.equal(true);
        expect(isEmpty([1, 2, 3])).to.equal(false);
        expect(isEmpty('abc')).to.equal(false);
        expect(isEmpty({ 'a': 1 })).to.equal(false);
    })
    it("returns false for invalid input", () => {
        expect(isEmpty("123")).to.equal(false);
        expect(isEmpty(" ")).to.equal(false);
        expect(isEmpty({ "foo": 1 })).to.equal(false);
    })
    it("returns true for valid input", () => {
        expect(isEmpty(undefined)).to.equal(true);
        expect(isEmpty('')).to.equal(true);
        expect(isEmpty(NaN)).to.equal(true);
        expect(isEmpty(() => 3)).to.equal(true);
    })
})