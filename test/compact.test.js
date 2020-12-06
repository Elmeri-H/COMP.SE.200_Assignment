import chai from "chai";
import compact from "../src/compact.js"
const expect = chai.expect;

describe("Compact", () => {
    it("returns the example output when called with the example input", () => {
        expect(compact([0, 1, false, 2, '', 3])).to.deep.equal([1, 2, 3]);
    })
    it("removes all the falsy values that were described", () => {
        expect(compact(['Foo', false, null, 0, 1, 2, 3, '', "", undefined, NaN, 'Bar'])).to.be.an('array')
        .that.does.not.include(false).and.not.include(null).and.not.include(0).and.not.include('').and.not.include("")
        .and.not.include(undefined).and.not.include(NaN);
    })
    it("recognizes stringified zeroes and whitespaces as not falsy", () => {
        expect(compact(['   ', 0])).to.be.an('array').that.is.not.empty;
    })
    it("throws an error when called with illegal inputs", () => {
        expect(() => compact({'a' : 1})).to.throw();
        expect(() => compact('Foo Bar')).to.throw();
        expect(() => compact(123)).to.throw();
    })
})