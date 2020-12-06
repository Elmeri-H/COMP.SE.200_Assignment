import chai from "chai"
import memoize from "../src/memoize.js"
const expect = chai.expect


describe("memoize", () => {
    //it("returns the example output when called with the example input", () => {
    //    const object = { 'a': 1, 'b': 2 }
    //    const other = { 'c': 3, 'd': 4 }
    //    const values = memoize(values);
    //    expect(values(object)).to.eql([1,2]);
    //    object.a = 2;
    //    expect(values(object)).to.eql([1,2]);
    //    expect(values(other)).to.eql([3,4]);
    //})
    it("throws when calling with undefined or null input", () => {
        expect(() => memoize(undefined)).to.throw();
        expect(() => memoize(null)).to.throw();
    })
})