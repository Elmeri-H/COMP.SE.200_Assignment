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
        expect(filter(words, ({active}) => active)).to.equal([]);

        const numbers = [1, 2, 3, 4];
        expect(filter(numbers, () => Number)).to.deep.equal([1, 2, 3, 4]);
        expect(filter(numbers, ({active}) => active)).to.equal([]);

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
        expect(filter([null, null, undefined, NaN], () => null)).to.deep.equal([null, null]);
        expect(filter([null, null, undefined, NaN], () => undefined)).to.deep.equal([undefined]);
        expect(filter([null, null, undefined, NaN], () => NaN)).to.deep.equal([NaN]);

        const words = ['Foo', 'Bar', undefined, 'Lorem', 'Ipsum'];
        expect(filter(words, () => String)).to.deep.equal(['Foo', 'Bar', 'Lorem', 'Ipsum']);

        const numbers = [1, 2, NaN, 3, 4];
        expect(filter(numbers, () => Number)).to.deep.equal([1, 2, 3, 4]);
    })
    it("throws an error when called with faulty parameters", () => {
        expect(() => filter([1, 2, 3])).to.throw();
        expect(() => filter([1, 2, 3], null)).to.throw();
        expect(() => filter(1, () => Number)).to.throw();
        expect(() => filter('Foo', () => String)).to.throw();
    })
})
