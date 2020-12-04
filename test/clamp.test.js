import chai from "chai";
import clamp from "../src/clamp.js"
const expect = chai.expect;

describe("Clamp", () => {
    it("returns the example outputs when called with the example inputs", () => {
        expect(clamp(-10, -5, 5)).to.be.a('number').that.equals(-5);
        expect(clamp(10, -5, 5)).to.be.a('number').that.equals(5);
    })
    it("returns the correct outputs when called with the lower and upper bounds flipped", () => {
        expect(clamp(-10, 5, -5)).to.be.a('number').that.equals(-5);
        expect(clamp(10, 5, -5)).to.be.a('number').that.equals(5);
    })
    it("returns the correct outputs when all of the inputs are the same number", () => {
        expect(clamp(5, 5, 5)).to.be.a('number').that.equals(5);
        expect(clamp(-5, -5, -5)).to.be.a('number').that.equals(-5);
    })
    it("returns the same number as inputted when it lives inside the bounds", () => {
        expect(clamp(5, -25, 25)).to.be.a('number').that.equals(5);
    })
    it("handles being called with only zeroes", () => {
        expect(clamp(0, 0, 0)).to.be.a('number').that.equals(0);
    })
    it("throws and error when called with illegal inputs", () => {
        expect(() => clamp("Foo Bar")).to.throw();
        expect(() => clamp(1,1,1,1)).to.throw();
        expect(() => clamp({'a': 1}, 2, 3)).to.throw();
        expect(() => clamp(123)).to.throw();
        expect(() => clamp([1, 2], 2, 3)).to.throw();
    })
})