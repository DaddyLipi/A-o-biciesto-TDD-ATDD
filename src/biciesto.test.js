import TestBiciesto from "./biciesto.js"
describe("TDD", () => {
    it("Ingresar anio 0", () => {
    expect(TestBiciesto(0)).toBe(0);
    });
}); 