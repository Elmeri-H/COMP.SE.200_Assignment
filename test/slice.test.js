import chai from "chai"
import slice from "../src/slice.js"
const expect = chai.expect


describe("slice", () => {
    it("returns the example output when called with the example input", () => {
        expect(slice([1, 2, 3, 4],2)).to.eql([3, 4]);
    })
    it("returns [] with []", () => {
        expect(slice([])).to.eql([]);
    })
    it("returns [] when calling with undefined or null inputs", () => {
        expect(slice(undefined)).to.eql([]);
        expect(slice(null)).to.eql([]);
    })
    it("returns correct output with valid input", () => {
        expect(slice("123")).to.eql(["1", "2", "3"]);
        expect(slice([1, 2, 3, 4, 5, 6, 7], 1, 3)).to.eql([2, 3]);
        expect(slice([1, 2, 3, 4, 5, 6, 7], 1, -1)).to.eql([2, 3, 4, 5, 6]);
    })
})