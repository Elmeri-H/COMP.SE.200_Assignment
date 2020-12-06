import chai from "chai"
import every from "../src/every.js"
const expect = chai.expect

describe("Every", () => {
    it("returns the example output when called with the example input", () => {
        expect(every([true, 1, null, 'yes'], Boolean)).to.equal(false);
    })
    it("returns true when called with an empty array", () => {
        expect(every([], Boolean)).to.equal(true);
        expect(every([])).to.equal(true);
    })
    it("works correctly with different datatypes", () => {
        expect(every(['Foo', 'Bar'], (value) => typeof value === "string")).to.equal(true);
        expect(every([1, 2], (value) => typeof value === "number")).to.equal(true);
        expect(every([{'Foo' : 1}, {'Bar':2}], (value) => typeof value === "object")).to.equal(true);
        expect(every([['Foo'], ['Bar']], (value) => Array.isArray(value))).to.equal(true);

        expect(every(['Foo', 'Bar', 1], (value) => typeof value === "string")).to.equal(false);
        expect(every(['Foo', 1, 'Bar'], (value) => typeof value === "string")).to.equal(false);
        expect(every([1, 2, [3, 4]], (value) => typeof value === "number")).to.equal(false);
        expect(every([{'Foo' : 1}, 'Bar', 2], (value) => typeof value === "object")).to.equal(false);
        expect(every([['Foo'], 'Bar'], (value) => Array.isArray(value))).to.equal(false);
    })
    it("works with undefined, null and NaN values", () => {
        expect(every(['Foo', 'Bar', undefined], (value) => typeof value === "string")).to.equal(false);
        expect(every(['Foo', 'Bar', null], (value) => typeof value === "string")).to.equal(false);
        expect(every([1, 2, NaN], (value) => typeof value === "number")).to.equal(true);
    })
    it("throws an error when called with faulty parameters", () => {
        expect(() => every([1],undefined)).to.throw();
        expect(() => every([1],null)).to.throw();
        expect(() => every(1, () => true)).to.throw();
        expect(() => every(NaN, () => true)).to.throw();
    })
})