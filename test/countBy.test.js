import chai from "chai";
import countBy from "../src/countBy.js"
const expect = chai.expect;

describe("CountBy", () => {
    it("returns the example output when called with the example input", () => {
        const users = [
            { 'user': 'barney', 'active': true },
            { 'user': 'betty', 'active': true },
            { 'user': 'fred', 'active': false }
        ]
        expect(countBy(users, value => value.active)).to.be.an('object').that.deep.equals({ 'true': 2, 'false': 1 });
    })
    it("can handle situations where one of the objects doesn't have the searched field", () => {
        const users = [
            { 'user': 'barney' },
            { 'user': 'betty', 'active': true },
            { 'user': 'fred', 'active': false }
        ]
        expect(countBy(users, value => value.active)).to.be.an('object').that.deep.equals({ 'true': 1, 'false': 1 });
    })
    it("can handle situations where one of the objects has an additional field", () => {
        const users = [
            { 'user': 'barney', 'active' : true, 'happy' : true },
            { 'user': 'betty', 'active': true },
            { 'user': 'fred', 'active': false }
        ]
        expect(countBy(users, value => value.active)).to.be.an('object').that.deep.equals({ 'true': 2, 'false': 1 });
    })
    it("can handle situations where the counted values are strings", () => {
        const users = [
            { 'user': 'barney', 'active': 'true' },
            { 'user': 'betty', 'active': 'true' },
            { 'user': 'fred', 'active': 'false' },
        ]
        expect(countBy(users, value => value.active)).to.be.an('object').that.deep.equals({ 'true': 2, 'false': 1});
    })
    it("can handle situations where there are more than two possible values", () => {
        const users = [
            { 'user': 'barney', 'active': true },
            { 'user': 'betty', 'active': undefined },
            { 'user': 'fred', 'active': false },
        ]
        expect(countBy(users, value => value.active)).to.be.an('object').that.deep.equals({ 'true': 1, 'false': 1, 'undefined': 1 });
    })
    it("throws an error when called with illegal values", () => {
        const users = [
            'user', 'barney', {'active' : true}
        ]
        expect(() => countBy(users, value => value.active)).to.throw();

        const users2 = [
            { 'user': 'barney', 'active': true },
            { 'user': 'betty', 'active': undefined },
            { 'user': 'fred', 'active': false },
        ]
        expect(() => countBy(users2, value => value.inactive)).to.throw();
        expect(() => countBy(users2)).to.throw();

        const users3 = []
        expect(() => countBy(users3, value => value.active)).to.throw();
    })
})