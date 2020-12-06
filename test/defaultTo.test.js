import chai from "chai"
import defaultTo from "../src/defaultTo.js"
const expect = chai.expect;

describe("DefaultTo", () => {
    it("returns the example outputs when called with the example inputs", () => {
        expect(defaultTo(1, 10)).to.equal(1);
        expect(defaultTo(undefined, 10)).to.equal(10);
    })
    it("returns default value when called with 'NaN', 'null' or 'undefined'", () => {
        expect(defaultTo(undefined, 10)).to.equal(10);
        expect(defaultTo(NaN, 10)).to.equal(10);
        expect(defaultTo(null, 10)).to.equal(10);
    })
    it("does not return default value when called with string, array or object", () => {
        expect(defaultTo('Foo Bar', 10)).to.equal('Foo Bar');
        expect(defaultTo(['Foo', 'Bar'], 10)).to.deep.equal(['Foo', 'Bar']);
        expect(defaultTo({'a':1}, 10)).to.deep.equal({'a':1});
    })
    it("does not return default value when called with other falsey values", () => {
        expect(defaultTo(0, 10)).to.equal(0);
        expect(defaultTo(false, 10)).to.deep.equal(false);
        expect(defaultTo('', 10)).to.deep.equal('');
    })
    it("throws an error when called with wrong number of parameters", () => {
        expect(() => defaultTo(1)).to.throw();
    })
})