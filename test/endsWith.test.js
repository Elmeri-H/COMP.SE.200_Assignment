import chai from "chai"
import endsWith from "../src/endsWith.js"
const expect = chai.expect

describe("endsWith", () => {
    it("returns the example outputs when called with the example inputs", () => {
        expect(endsWith('abc', 'c')).to.equal(true);
        expect(endsWith('abc', 'b')).to.equal(false);
        expect(endsWith('abc', 'b', 2)).to.equal(true);
    })
    it("works when called with an empty string", () => {
        expect(endsWith('','')).to.equal(true);
        expect(endsWith('','a')).to.equal(false);
    })
    it("works with longer strings", () => {
        expect(endsWith('abcde', 'cde')).to.equal(true);
        expect(endsWith('abcdef', 'cd', 4)).to.equal(true);
        expect(endsWith('abcdef', 'def', 4)).to.equal(false);
        expect(endsWith('abcdef', 'Foo')).to.equal(false);
    })
    it("throws an error when called with faulty parameters", () => {
        expect(() => endsWith(undefined, 'd')).to.throw;
        expect(() => endsWith(123, 3)).to.throw;
        expect(() => endsWith(123, '3')).to.throw;
        expect(() => endsWith(null, 'l')).to.throw;
        expect(() => endsWith(NaN, NaN)).to.throw;
        expect(() => endsWith('abc', 'c', -2)).to.throw;
    })
})