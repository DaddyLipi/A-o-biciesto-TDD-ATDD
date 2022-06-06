import TestBiciesto from "./biciesto.js"
describe("TDD", () => {
    it("Ingresar anio 0", () => {
    expect(TestBiciesto(0)).toBe(0);
    });
    it("Ingresar anio 1", () => {
    expect(TestBiciesto(1)).toBe(1);
    });
}); 