import chai from "chai";
import castArray from "../src/castArray.js"
const expect = chai.expect;

describe("CastArray", () => {
    it("casts strings to arrays", () => {
        expect(castArray('Foo Bar')).to.be.an('array').that.includes('Foo Bar');
    })
    it("casts numbers to arrays", () => {
        expect(castArray(1)).to.be.an('array').that.includes(1);
    })
    it("casts objects to arrays", () => {
        expect(castArray({'a' : 1})).to.be.an('array').that.deep.includes({ 'a': 1 });
    })
    it("casts null and undefined to arrays", () => {
        expect(castArray(null)).to.be.an('array').that.includes(null);
        expect(castArray(undefined)).to.be.an('array').that.includes(undefined);
    })
    it("returns empty array when called with no parameters", () => {
        expect(castArray()).to.be.an('array');
    })
    it("doesn't modify the input if it already is an array", () => {
        expect(castArray([1, 2, 3])).to.be.an('array').that.includes(1, 2, 3);
    })
})