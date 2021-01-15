import selectionSort from "../src/selection";
import shellSort from "../src/shell";

describe("Algoritmos de Busqueda", () => {
  const arr = [12, 45, 1, 890];

  it("Selection Sort", () => {
    expect(selectionSort(arr)).toEqual([1, 12, 45, 890]);
  });

  it("Shell Sort", () => {
    expect(shellSort(arr)).toEqual([1, 12, 45, 890]);
  });
});
