import fs from "fs";
describe("ATDD", () => {
    beforeAll(() => {
      document.body.innerHTML = fs.readFileSync("index.html", "utf8");
      require("./presenter.js");
    });
    it("Test anio", () => {
      let boton = document.querySelector("#boton-resultado");
      let anio = document.querySelector("#Anio");
      let montoVentaResultado = document.querySelector("#resultado-anio");
  
      anio.value = 2020;
      boton.click();
      expect(parseInt(montoVentaResultado.innerHTML)).toEqual(2020);
    });
    it("Test biciesto", () => {
        let boton = document.querySelector("#boton-resultado");
        let anio = document.querySelector("#Anio");
        let montoVentaResultado = document.querySelector("#resultado-div");
    
        anio.value = 2020;
        boton.click();
        expect(parseInt(montoVentaResultado.innerHTML)).toEqual(0);
      });
  });  