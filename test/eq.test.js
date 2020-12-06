import chai from "chai"
import eq from "../src/eq.js"
const expect = chai.expect

describe("Eq", () => {
    it("returns the example outputs when called with the example inputs", () => {
        const object = { 'a': 1 };
        const other = { 'a': 1 };
        expect(eq(object, object)).to.equal(true);
        expect(eq(object, other)).to.equal(false);
        expect(eq('a', 'a')).to.equal(true);
        expect(eq('a', Object('a'))).to.equal(false);
        expect(eq(NaN, NaN)).to.equal(true);
    })
    it("returns true when comparing false, undefined and null", () => {
        expect(eq(undefined, undefined)).to.equal(true);
        expect(eq(null, null)).to.equal(true);
        expect(eq(false, false)).to.equal(true);
        expect(eq(0, 0)).to.equal(true);
    })
    it("works when comparing arrays", () => {
        expect(eq([1,2,3], [1,2,3])).to.equal(true);
        expect(eq(['Foo', 'Bar'], ['Foo', 'Bar'])).to.equal(true);
        const object = { 'a': 1 };
        const other = { 'a': 1 };
        expect(eq([object, other], [object, other])).to.equal(false);
        expect(eq([object], [object])).to.equal(true);
    })
    it("works when comparing numbers", () => {
        expect(eq(12, 12)).to.equal(true);
        expect(eq(1, 2)).to.equal(false);
        expect(eq(0, 0)).to.equal(true);
    })
    it("works when comparing object attributes", () => {
        const object = { 'a': 1 };
        const other = { 'a': 1 };
        expect(eq(object.a, other.a)).to.equal(true);
        expect(eq(object.a, object.a)).to.equal(true);
    })
    it("throws an error when called with faulty parameters", () => {
        expect(() => eq(1, 2, 3)).to.throw();
        expect(() => eq(1)).to.throw();
    })
})