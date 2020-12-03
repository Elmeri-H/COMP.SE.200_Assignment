import chai from "chai";
import capitalize from "../src/capitalize.js"
const expect = chai.expect;

describe("Capitalize", () => {
    it("returns the string with the first character capitalized when calling with a string consisting of only one word", () => {
        expect(capitalize('FRED')).to.be.a('string');
        expect(capitalize('FRED')).to.equal('Fred');
        expect(capitalize('fred')).to.equal('Fred');
        expect(capitalize('fRED')).to.equal('Fred');
    })
    it("returns an empty string when called with an empty string", () => {
        expect(capitalize('')).to.be.a('string');
        expect(capitalize('')).to.equal('');
    })
    it("capitalizes the letters correctly when numbers or symbols are introduced in the string", () => {
        expect(capitalize('F13r?£E$D')).to.equal('F13r?£e$d');
        expect(capitalize('12F13r?£E$D')).to.equal('12f13r?£e$d');
        expect(capitalize('1213?£$')).to.equal('1213?£$');
    })
    it("returns the string with only the first character capitalized when called with a string consisting of multiple words", () => {
        expect(capitalize('FRED THURSDAY')).to.be.a('string');
        expect(capitalize('FRED THURSDAY')).to.equal('Fred thursday');
        expect(capitalize('fred thursday')).to.equal('Fred thursday');
        expect(capitalize('fRED THURSDAY')).to.equal('Fred thursday');
    })
})