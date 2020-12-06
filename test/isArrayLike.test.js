import chai from "chai"
import isArrayLike from "../src/isArrayLike.js"
const expect = chai.expect

describe("IsArrayLike", () => {
    it("returns the example outputs when called with the example inputs", () => {
        expect(isArrayLike([1, 2, 3])).to.equal(true);
        expect(isArrayLike('abc')).to.equal(true);
        expect(isArrayLike(Function)).to.equal(false);
    })
    it("works when called with different types of array-like objects", () => {
        expect(isArrayLike([undefined])).to.equal(true);
        expect(isArrayLike([null])).to.equal(true);
        expect(isArrayLike('')).to.equal(true);
        expect(isArrayLike([])).to.equal(true);
        expect(isArrayLike('abc' + 'def')).to.equal(true);
    })
    it("returns false when called with different non array-like objects", () => {
        expect(isArrayLike(undefined)).to.equal(false);
        expect(isArrayLike(null)).to.equal(false);
        expect(isArrayLike(NaN)).to.equal(false);
        expect(isArrayLike(123)).to.equal(false);
        expect(isArrayLike({'a':1, 'b':2})).to.equal(false);
    })
})