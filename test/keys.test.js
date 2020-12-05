import chai from "chai"
import keys from "../src/keys.js"
const expect = chai.expect


describe("keys", () => {
    it("returns the example output when called with the example input", () => {
        expect(keys({ a: 1, b: 2})).to.eql(['a', 'b']);
        expect(keys('hi')).to.eql(['0', '1']);
    })
    it("returns [] with []", () => {
        expect(keys([])).to.eql([]);
    })
    it("returns [] when calling with undefined or null array", () => {
        expect(keys(null)).to.eql([]);
        expect(keys(undefined)).to.eql([]);
    })
    it("returns correct output with valid input", () => {
        expect(keys([2,3])).to.eql(['0', '1']);
    })
    it("correct input when called with object with length attribute", () => {
        expect(keys({ length: 2, b: 2})).to.eql(['length', 'b']);
    })
    it("correct input when called with object with non-number length attribute", () => {
        expect(keys({ length: "five", b: 2})).to.eql(['length', 'b']);
    })
})