import chai from "chai"
import upperFirst from "../src/upperFirst.js"
const expect = chai.expect


describe("UpperFirst", () => {
    it("returns the example output when called with the example input", () => {
        expect(upperFirst('fred')).to.equal('Fred');
        expect(upperFirst('FRED')).to.equal('FRED');
    })
    it("returns empty string with empty string", () => {
        expect(upperFirst("")).to.eql("");
    })
    it("returns empty string when calling with undefined or null inputs", () => {
        expect(upperFirst(undefined)).to.eql("");
        expect(upperFirst(null)).to.eql("");
    })
    it("throws with input of only numbers", () => {
        expect(() => upperFirst(123)).to.throw();
    })
    it("returns same string with string of only numbers", () => {
        expect(upperFirst("123")).to.eql("123");
    })
})