import chai from "chai";
import at from "../src/at.js"
const expect = chai.expect;

describe("At", () => {
    it("returns an array when called with a simple object", () => {
        const object = { 'a': [3, 4] };
        expect(at(object, ['a[0]', 'a[1]'])).to.be.an('array');
    });
    it("returns an array when called with a nested object", () => {
        const object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
        expect(at(object, ['a[0].b.c', 'a[1]'])).to.be.an('array');
    });
    it("returns an empty array when called with an empty object", () => {
        const object = {};
        expect(at(object, [])).to.be.an('array').that.is.empty;
    });
    it("returns an empty array when called with an empty object and a path", () => {
        const object = {};
        expect(at(object, ['a[0]'])).to.be.an('array').that.is.empty;
    });
    it("returns the suggested array when called with example input", () => {
        const object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
        expect(at(object, ['a[0].b.c', 'a[1]'])).to.eql([3, 4])
    });
})
