import selectionSort from "../src/selection";

describe("Algoritmos de Busqueda", () => {
  it("Selectio Sort", () => {
    expect(selectionSort()).toEqual([1, 12, 45, 890]);
  });
});
