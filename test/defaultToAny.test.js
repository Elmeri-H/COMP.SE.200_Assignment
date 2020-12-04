import chai from "chai"
import defaultToAny from "../src/defaultToAny.js"
const expect = chai.expect

describe("DefaultToAny", () => {
    it("returns the example outputs when called with the example inputs", () => {
        expect(defaultToAny(1, 10, 20)).to.equal(1);
        expect(defaultToAny(undefined, 10, 20)).to.equal(10);
        expect(defaultToAny(undefined, null, 20)).to.equal(20);
        expect(defaultToAny(undefined, null, NaN)).to.be.NaN;
    })
    it("returns the first default value that is not 'NaN', 'null', or 'undefined' when called with different configurations", () => {
        expect(defaultToAny(10, 20, NaN, null, undefined)).to.equal(10);
        expect(defaultToAny(undefined, NaN, 10, null)).to.equal(10);
        expect(defaultToAny(undefined, 10, NaN, null)).to.equal(10);
        expect(defaultToAny(undefined, null, NaN, 10)).to.equal(10);
    })
    it("works when calling with only the described falsey values", () => {
        expect(defaultToAny(null, null, null)).to.equal(null);
        expect(defaultToAny(undefined, undefined, undefined)).to.equal(undefined);
        expect(defaultToAny(NaN, NaN, NaN)).to.be.NaN;
    })
    it("throws an error when called with only one parameter", () => {
        expect(defaultToAny(1)).to.throw
    })

})