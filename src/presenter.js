import TestBiciesto from "./biciesto";

const Anio = document.querySelector("#Anio");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let resultadoAnio=document.querySelector("#resultado-anio");
  resultadoAnio.innerHTML=Anio.value;
  const first = Number.parseInt(Anio.value);

  div.innerHTML = TestBiciesto(first);
});
