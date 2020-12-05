import chai from "chai"
import isSymbol from "../src/isSymbol.js"
const expect = chai.expect


describe("isSymbol", () => {
    it("returns the example output when called with the example input", () => {
        expect(isSymbol(Symbol.iterator)).to.equal(true);
        expect(isSymbol('abc')).to.equal(false);
    })
    it("returns true for all types of symbols", () => {
        expect(isSymbol(Symbol.hasInstance)).to.equal(true);
        expect(isSymbol(Symbol.isConcatSpreadable)).to.equal(true);
        expect(isSymbol(Symbol.match)).to.equal(true);
        expect(isSymbol(Symbol.prototype)).to.equal(true);
        expect(isSymbol(Symbol.replace)).to.equal(true);
        expect(isSymbol(Symbol.search)).to.equal(true);
        expect(isSymbol(Symbol.species)).to.equal(true);
        expect(isSymbol(Symbol.split)).to.equal(true);
        expect(isSymbol(Symbol.toPrimitive)).to.equal(true);
        expect(isSymbol(Symbol.toStringTag)).to.equal(true);
        expect(isSymbol(Symbol.unscopables)).to.equal(true);
    })
    it("returns false for invalid input", () => {
        expect(isSymbol(null)).to.equal(false);
        expect(isSymbol(undefined)).to.equal(false);
        expect(isSymbol(123)).to.equal(false);
        expect(isSymbol([])).to.equal(false);
        expect(isSymbol({ foo: 1 })).to.equal(false);
    })
})