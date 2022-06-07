import TestBiciesto from "./biciesto.js"
describe("TDD", () => {
    it("Ingresar anio 0", () => {
        let ans=TestBiciesto(0);
    expect(ans).toBe(0);
    });
    it("Ingresar anio 1", () => {
    expect(TestBiciesto(1)).toBe(1);
    });
    it("Ingresar anio 4", () => {
        expect(TestBiciesto(4)).toBe(0);
    });
    it("Ingresar anio 3", () => {
        expect(TestBiciesto(3)).toBe(1);
    });
}); 
