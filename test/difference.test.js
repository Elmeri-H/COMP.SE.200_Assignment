import chai from "chai"
import difference from "../src/difference.js"
const expect = chai.expect

describe("Difference", () => {
    it("returns the example output when called with the example input", () => {
        expect(difference([2,1], [2,3])).to.be.an('array').that.deep.equals([1]);
    })
    it("works with arrays of strings", () => {
        expect(difference(['Foo', 'Bar'], ['Foo', 'Lorum'])).to.be.an('array').that.deep.equals(['Bar']);
    })
    it("works with arrays of arrays", () => {  
        expect(difference([['Foo', 'Bar'], ['Lorum']], [['Foo'], ['Lorum']])).to.be.an('array').that.deep.equals([['Foo', 'Bar']]);
    })
    it("works with arrays of objects", () => {  
        expect(difference([{'a':1}, {'b':2}], [{'b':2}, {'c':3}])).to.be.an('array').that.deep.equals([{'a':1}]);
    })
    it("works with arrays of null, undefined and NaN", () => {
        expect(difference([null, undefined, NaN], [null, NaN])).to.be.an('array').that.deep.equals([undefined]);
    })
    it("throws an error when called with faulty parameters", () => {
        expect(() => difference(1, 1)).to.throw();
        expect(() => difference([1], 1)).to.throw();
        expect(() => difference(1, [1])).to.throw();
        expect(() => difference([1, 2], [1, 3], [2, 3])).to.throw();
        expect(() => difference([1, 2])).to.throw();
    })
})