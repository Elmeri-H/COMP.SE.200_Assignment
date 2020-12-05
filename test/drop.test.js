import chai from "chai"
import drop from "../src/drop.js"
const expect = chai.expect

describe("Drop", () => {
    it("returns the example outputs when called with the example inputs", () => {
        expect(drop([1,2,3])).to.deep.equal([2,3]);
        expect(drop([1,2,3],2)).to.deep.equal([3]);
        expect(drop([1,2,3],5)).to.deep.equal([]);
        expect(drop([1,2,3],0)).to.deep.equal([1,2,3]);
    })
    it("works with array of strings", () => {
        expect(drop(['Foo', 'Bar', 'Lorum'], 1)).to.deep.equal(['Bar', 'Lorum']);
    })
    it("works with array of objects", () => {
        expect(drop([{'a':1}, {'b':2}, {'c':3}], 1)).to.deep.equal([{'b':2}, {'c':3}]);
    })
    it("works with array of undefined, null and NaN", () => {
        expect(drop([undefined, null, NaN], 2)).to.deep.equal([NaN]);
    })
    it("works when called with an empty array", () => {
        expect(drop([], 0)).to.deep.equal([]);
    })
    it("throws an error when called with faulty parameters", () => {
        expect(() => drop([1,2,3])).to.throw;
        expect(() => drop(1,2,3)).to.throw;
        expect(() => drop([1,2,3], -2)).to.throw;
    })
})