import chai from "chai"
import memoize from "../src/memoize.js"
const expect = chai.expect


describe("memoize", () => {
    //it("returns the example output when called with the example input", () => {
    //    expect(memoize(values({ 'a': 1, 'b': 2 }))).to.eql([1,2]);
    //})
    it("throws when calling with undefined or null input", () => {
        expect(() => memoize(undefined)).to.throw();
        expect(() => memoize(null)).to.throw();
    })
})