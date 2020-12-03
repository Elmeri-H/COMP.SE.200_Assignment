import chai from "chai";
import camelCase from "../src/camelCase.js";
const expect = chai.expect;

describe("camelCase", () => {
    it("returns the example output when called with the example inputs", () => {
        expect(camelCase('Foo Bar')).to.be.a('string');
        expect(camelCase('Foo Bar')).to.equal('fooBar');
        expect(camelCase('--foo-bar--')).to.equal('fooBar');
        expect(camelCase('__FOO_BAR__')).to.equal('fooBar');
    })
    it("returns an empty string when called with an empty string", () => {
        expect(camelCase('')).to.be.a('string');
        expect(camelCase('')).to.equal('');
    })
    it("returns an empty string when called with a string of symbols or numbers", () => {
        expect(camelCase('')).to.be.a('string');
        expect(camelCase('½§!"#¤%&/()=?`^*|><-_~¨@£$€{[]}')).to.equal('');
        expect(camelCase('1234567890')).to.equal('');
    })
    it("returns the same word lowercased when called with a word uppercased in different ways", () => {
        expect(camelCase('Foo')).to.be.a('string');
        expect(camelCase('Foo')).to.equal('foo');
        expect(camelCase('fOo')).to.equal('foo');
        expect(camelCase('foO')).to.equal('foo');
    })
    it("returns only the letters when the input includes numbers and symbols as well", () => {
        expect(camelCase('Foo')).to.be.a('string');
        expect(camelCase('F½§!"#¤%&/()=?`^*|><-_~¨@£$€{[]}oo')).to.equal('foo');
        expect(camelCase('Fo1234567890o')).to.equal('foo');
    })
})