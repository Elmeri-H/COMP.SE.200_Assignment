import chai from "chai"
import isArrayLikeObject from "../src/isArrayLikeObject.js"
const expect = chai.expect

describe("isArrayLikeObject", () => {
    it("returns the example outputs when called with the example inputs", () => {
        expect(isArrayLikeObject([1, 2, 3])).to.equal(true);
        expect(isArrayLikeObject('abc')).to.equal(false);
        expect(isArrayLikeObject(Function)).to.equal(false);
    })
    it("works when called with different types of array-like objects", () => {
        expect(isArrayLikeObject([undefined])).to.equal(true);
        expect(isArrayLikeObject([null])).to.equal(true);
        expect(isArrayLikeObject([])).to.equal(true);
    })
    it("returns false when called with different non array-like objects", () => {
        expect(isArrayLikeObject(undefined)).to.equal(false);
        expect(isArrayLikeObject(null)).to.equal(false);
        expect(isArrayLikeObject(123)).to.equal(false);
        expect(isArrayLikeObject({'a':1, 'b':2})).to.equal(false);
    })
    it("returns true when called with an object with a integer length attribute", () => {
        expect(isArrayLikeObject({length:1, 'foo': 2})).to.equal(true);
    })
    it("returns false when called with an object with a string length attribute", () => {
        expect(isArrayLikeObject({length:"1", 'foo': 2})).to.equal(false);
    })
    it("throws an error when called with faulty parameters", () => {
        expect(() => isArrayLikeObject()).to.throw;
        expect(() => isArrayLikeObject([1,2,3], 2)).to.throw;
        expect(() => isArrayLikeObject('abc', 'def')).to.throw;
    })
})