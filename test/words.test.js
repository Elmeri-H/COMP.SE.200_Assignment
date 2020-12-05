import chai from "chai"
import words from "../src/words.js"
const expect = chai.expect


describe("Words", () => {
    it("returns the example output when called with the example input", () => {
        expect(words('fred, barney, & pebbles')).to.eql(['fred', 'barney', 'pebbles']);
    })
    it("returns empty array with empty string", () => {
        expect(words("")).to.eql([]);
    })
    it("throws an error when calling with illegal inputs", () => {
        expect(() => words(undefined)).to.throw;
        expect(() => words(null)).to.throw;
    })
    it("returns searched word", () => {
        expect(words("koira, kissa", "kissa")).to.eql(["kissa"]);
    })
    it("returns empty array when no match", () => {
        expect(words("koira, kissa", "kala")).to.eql([]);
    })
})