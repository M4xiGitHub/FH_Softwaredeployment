const { describe, it } = require("mocha");
const endpoint = require("../index");
const chai = require("chai")
const expect = chai.expect;

describe("GET /endpoint", () => {
    it("should return Hello from the API! message", async () => {
        const result = await endpoint();
        expect(result.body).to.equal("Hello from the API!");
    });
});