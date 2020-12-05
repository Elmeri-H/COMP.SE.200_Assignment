import chai from "chai"
import isTypedArray from "../src/isTypedArray.js"
const expect = chai.expect


describe("isTypedArray", () => {
    it("returns the example output when called with the example input", () => {
        expect(isTypedArray(new Uint8Array)).to.equal(true);
        expect(isTypedArray([])).to.equal(false);
    })
    it("returns true for all types of arrays", () => {
        expect(isTypedArray(new Int8Array)).to.equal(true);
        expect(isTypedArray(new Uint8Array)).to.equal(true);
        expect(isTypedArray(new Uint8ClampedArray)).to.equal(true);
        expect(isTypedArray(new Int16Array)).to.equal(true);
        expect(isTypedArray(new Uint16Array)).to.equal(true);
        expect(isTypedArray(new Int32Array)).to.equal(true);
        expect(isTypedArray(new Uint32Array)).to.equal(true);
        expect(isTypedArray(new Float32Array)).to.equal(true);
        expect(isTypedArray(new Float64Array)).to.equal(true);
    })
    it("returns false for invalid input", () => {
        expect(isTypedArray(null)).to.equal(false);
        expect(isTypedArray(undefined)).to.equal(false);
        expect(isTypedArray("foo")).to.equal(false);
        expect(isTypedArray({ "foo": "bar" })).to.equal(false);
    })
})