import chai from "chai"
import toNumber from "../src/toNumber.js"
const expect = chai.expect


describe("toNumber", () => {
    it("returns the example output when called with the example input", () => {
        expect(toNumber(3.2)).to.equal(3.2);
        expect(toNumber(Number.MIN_VALUE)).to.equal(5e-324);
        expect(toNumber(Infinity)).to.equal(Infinity);
        expect(toNumber('3.2')).to.equal(3.2);
        expect(toNumber(-5)).to.equal(-5);
    })
    it("returns 0 when called with null", () => {
        expect(toNumber(null)).to.equal(0);
    })
    it("returns NaN when called with undefined", () => {
        expect(toNumber(undefined)).to.eql(NaN);
    })
    it("returns 0 when called with '0'", () => {
        expect(toNumber('0')).to.equal(0);
    })
    it("returns NaN when called with non-number inputs", () => {
        expect(toNumber('foo')).to.eql(NaN);
        expect(toNumber('bar')).to.eql(NaN);
        expect(toNumber(Symbol.iterator)).to.eql(NaN);
        expect(toNumber(() => "foo")).to.eql(NaN);
    })
    it("returns integer when called with string with number", () => {
        expect(toNumber('-5')).to.equal(-5);
        expect(toNumber('5')).to.equal(5);
    })
    it("returns NaN string when calling with object", () => {
        expect(toNumber({ a: "b" })).to.eql(NaN);
        expect(toNumber({ a: 3 })).to.eql(NaN);
        expect(toNumber({ a: { c: "b" } })).to.eql(NaN);
    })
    it("returns 0 when called with array of null", () => {
        expect(toNumber([null])).to.equal(0);
    })
})