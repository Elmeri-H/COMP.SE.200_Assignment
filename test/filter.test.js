import chai from "chai"
import filter from "../src/filter.js"
const expect = chai.expect

describe("Filter", () => {
    it("returns the example output when called with the example input", () => {
        const users = [
               { 'user': 'barney', 'active': true },
               { 'user': 'fred',   'active': false }
             ]
        expect(filter(users, ({ active }) => active)).to.deep.equal([{ 'user': 'barney', 'active': true }]);
    })
    it("returns an empty array when called with one", () => {
        expect(filter([], ({active}) => active)).to.equal([]);
    })
    it("works with different types of arrays", () => {
        const words = ['Foo', 'Bar', 'Lorem', 'Ipsum'];
        expect(filter(words, () => String)).to.deep.equal(['Foo', 'Bar', 'Lorem', 'Ipsum']);

        const numbers = [1, 2, 3, 4];
        expect(filter(numbers, () => Number)).to.deep.equal([1, 2, 3, 4]);

        const users = [
            { 'user': 'barney', 'active': true, 'happy': true, 'age': 26 },
            { 'user': 'fred',   'active': false, 'happy': null, 'age': 42 },
            { 'user': 'frank',   'active': false, 'happy': true, 'age': 34 }
          ]
          expect(filter(users, ({ active }) => active)).to.deep.equal([{ 'user': 'barney', 'active': true, 'happy': true, 'age': 26 }]);
          expect(filter(users, ({ happy }) => happy)).to.deep.equal([{ 'user': 'barney', 'active': true, 'happy': true, 'age': 26 },
                                                                     { 'user': 'frank',   'active': false, 'happy': true, 'age': 34 }]);
    })
    it("works with null, undefined and NaN values", () => {
        const words = ['Foo', 'Bar', undefined, 'Lorem', 'Ipsum'];
        expect(filter(words, (value) => typeof value === "string")).to.deep.equal(['Foo', 'Bar', 'Lorem', 'Ipsum']);

        const numbers = [1, 2, NaN, 3, null, 4];
        expect(filter(numbers, (value) => typeof value === "number")).to.deep.equal([1, 2, NaN, 3, 4]);
    })
    it("throws an error when called with faulty parameters", () => {
        expect(() => filter([1, 2, 3])).to.throw();
        expect(() => filter([1, 2, 3], null)).to.throw();
        expect(() => filter(1, () => Number)).to.throw();
    })
})
