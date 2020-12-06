import chai from "chai";
import chunk from "../src/chunk.js"
const expect = chai.expect;

describe("Chunk", () => {
    it("returns the example output when called with the example inputs", () => {
        expect(chunk(['a', 'b', 'c', 'd'], 2)).to.be.an('array').that.deep.includes(['a', 'b'], ['c', 'd']);
        expect(chunk(['a', 'b', 'c', 'd'], 3)).to.be.an('array').that.deep.includes(['a', 'b', 'c'], ['d']);
    })
    it("returns an empty array when called with an empty array", () => {
        expect(chunk([], 0)).to.be.an('array').that.is.empty
        expect(chunk([], 1)).to.be.an('array').that.is.empty
    })
    it("can handle nested arrays", () => {
        expect(chunk([['a', 'b'], 'c', 'd'], 2)).to.be.an('array').that.deep.includes([['a', 'b'], 'c'], ['d']);
        expect(chunk(['a', ['b', 'c'], 'd'], 3)).to.be.an('array').that.deep.includes(['a', ['b', 'c'], 'd']);
    })
    it("throws an error when called with faulty parameters", () => {
        expect(() => chunk('Foo Bar', 3)).to.throw()
        expect(() => chunk(13245, 2)).to.throw()
        expect(() => chunk({'a': 1}, 2)).to.throw()
        expect(() => chunk(['a', 'b', 'c', 'd'])).to.throw()
    })
})