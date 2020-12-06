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
        expect(every(['Foo', 'Bar'], String)).to.equal(true);
        expect(every([1, 2], Number)).to.equal(true);
        expect(every([{'Foo' : 1}, {'Bar':2}], Object)).to.equal(true);
        expect(every([['Foo'], ['Bar']], Array)).to.equal(true);

        expect(every(['Foo', 'Bar', 1], String)).to.equal(false);
        expect(every(['Foo', 1, 'Bar'], String)).to.equal(false);
        expect(every([1, 2, [3, 4]], Number)).to.equal(false);
        expect(every([{'Foo' : 1}, 'Bar', 2], Object)).to.equal(false);
        expect(every([['Foo'], 'Bar'], Array)).to.equal(false);
    })
    it("works with undefined, null and NaN values", () => {
        expect(every(['Foo', 'Bar', undefined], String)).to.equal(false);
        expect(every(['Foo', 'Bar', null], String)).to.equal(false);
        expect(every([1, 2, NaN], Number)).to.equal(false);
        expect(every([undefined, undefined], undefined)).to.equal(true);
        expect(every([null, null], null)).to.equal(true);
        expect(every([NaN, NaN], NaN)).to.equal(true);
    })
    it("throws an error when called with faulty parameters", () => {
        expect(() => every(1,2,Number)).to.throw();
        expect(() => every('Foo', String)).to.throw();
        expect(() => every(['Foo', 'Bar'])).to.throw();
    })
})