import chai from "chai"
import reduce from "../src/reduce.js"
const expect = chai.expect


describe("reduce", () => {
    it("returns the example output when called with the example input", () => {
        expect(reduce([1, 2], (sum, n) => sum + n, 0)).to.eql(3);
        expect(reduce({ 'a': 1, 'b': 2, 'c': 1 }, (result, value, key) => {
                (result[value] || (result[value] = [])).push(key)
                return result
            }, {})['1'].length).to.eql(2);
        expect(reduce({ 'a': 1, 'b': 2, 'c': 1 }, (result, value, key) => {
                (result[value] || (result[value] = [])).push(key)
                return result
            }, {})['2'].length).to.eql(1);
    })
    it("throws when calling with undefined or null collection", () => {
        expect(() => reduce(undefined)).to.throw();
        expect(() => reduce(null)).to.throw();
    })
    it("throws when calling with undefined or null parameters", () => {
        expect(() => reduce([1,2], null, undefined)).to.throw();
        expect(() => reduce([1,2], undefined, null)).to.throw();
        expect(() => reduce([1,2])).to.throw();
    })
    it("accumulator is added to the result", () => {
        expect(reduce([1, 2], (sum, n) => sum + n, 10)).to.eql(13);
    })
    it("different iteratees are ran succesfully", () => {
        expect(reduce([1, 2], (sum, n) => sum + n, 10)).to.eql(13);
        expect(reduce([1, 2], (sum, n) => sum + 2 * n, 0)).to.eql(6);
        expect(reduce([1, 2], (sum, n) => 2 * sum + n, 0)).to.eql(4);
    })
    it("different runs", () => {
        expect(reduce(["foo", "bar"], (sum, n) => sum + n, "")).to.eql("foobar");
        expect(reduce({ "foo": 3, "bar": 4, "baz": 2 }, (sum, value, key) => sum + value, 0)).to.eql(9);
    })
})