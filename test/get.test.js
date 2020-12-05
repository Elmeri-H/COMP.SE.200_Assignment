import chai from "chai"
import get from "../src/get.js"
const expect = chai.expect

describe("Get", () => {
    it("returns the example outputs when called with the example inputs", () => {
        const object = { 'a': [{ 'b': { 'c': 3 } }] }
        expect(get(object, 'a[0].b.c')).to.equal(3);
        expect(get(object, ['a', '0', 'b', 'c'])).to.equal(3);
        expect(get(object, 'a.b.c', 'default')).to.equal('default');
    })
    it("works when called with an empty object", () => {
        expect(get({}, 'a', null)).to.equal(null);
        expect(get({}, ['a'], null)).to.equal(null);
    })
    it("works when the path leads to an empty array", () => {
        const object = { 'a': [] }
        expect(get(object, 'a')).to.deep.equal([]);
    })
    it("returns correct value when the value is null, undefined, NaN or it hasn't been defined (undefined)", () => {
        const object = { 'a': [undefined] }
        expect(get(object, 'a[0]')).to.deep.equal(undefined);
        const object2 = { 'a': [null] }
        expect(get(object2, 'a[0]')).to.deep.equal(null);
        const object3 = { 'a': [NaN] }
        expect(get(object3, 'a[0]')).to.deep.equal(NaN);
        const object4 = { 'a': [] }
        expect(get(object4, 'a[0]')).to.equal(undefined);
    })
    it("throws an error when called with faulty parameters", () => {
        expect(() => get('Foo', 'F')).to.throw;
        expect(() => get({ 'a': [{ 'b': { 'c': 3 } }] })).to.throw;
        expect(() => get({ 'a': [{ 'b': { 'c': 3 } }] }, 2)).to.throw;
        expect(() => get([{ 'b': { 'c': 3 } }], 'b', undefined )).to.throw;
    })
})