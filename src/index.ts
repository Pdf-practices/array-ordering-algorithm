import OrderByBubbles from "./bubbles/index";
import OrderingByInseercion from "./insertion";
import mergeSort from "./merge";
import selectionSort from "./selection";

function main() {
  const arr = [12, 45, 1, 890];
  /**
   * Sorting with the bubble algorithm
   */
  //    let orderBubble = OrderByBubbles([89, 45, 79, 47, 23, 50, 200, 1, 6]);
  //    console.log(orderBubble);

  /**
   * Sorting with the insertion algorithm
   */
  // let orderInsertion = OrderingByInseercion([45, 5, 2, 0, 23, 4]);
  // console.log(orderInsertion);

  /**
   * Sorting with the merge algorithm
   */
  // let MergeSort = mergeSort(arr);
  // console.log(MergeSort);

  /**
   *
   * Sorting with the selection algorithm
   */
  let SelectionSort = selectionSort(arr);
  console.log(SelectionSort);
}

main();
