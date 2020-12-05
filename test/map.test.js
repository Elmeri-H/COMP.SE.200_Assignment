import chai from "chai"
import map from "../src/map.js"
const expect = chai.expect


describe("map", () => {
    it("returns the example output when called with the example input", () => {
        expect(map([4, 8], (value) => value * value)).to.eql([16, 64]);
    })
    it("returns [] with []", () => {
        expect(map([])).to.eql([]);
    })
    it("returns [] when calling with undefined or null array", () => {
        expect(map(undefined)).to.eql([]);
        expect(map(null)).to.eql([]);
    })
    it("throws when calling with undefined or null iteratee", () => {
        expect(() => map([1], undefined)).to.throw();
        expect(() => map([1], null)).to.throw();
    })
    it("returns correct output with valid input", () => {
        expect(map("123", (value) => value)).to.eql(["1", "2", "3"]);
        expect(map([4, 8], (value) => 2)).to.eql([2, 2]);
    })
})