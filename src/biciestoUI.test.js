import fs from "fs";
describe("ATDD", () => {
    beforeAll(() => {
      document.body.innerHTML = fs.readFileSync("index.html", "utf8");
      require("./presenter.js");
    });
    it("Test anio", () => {
      let anio = document.querySelector("#Anio");
      let montoVentaResultado = document.querySelector("#resultado-anio");
  
      anio.value = 2020;
      anio.click();
      expect(parseInt(montoVentaResultado.innerHTML)).toEqual(2);
    });
  });  