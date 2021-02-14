// A list of all the coding challenges I solved with my solutions

// Elevator Distance 7 kyu
function elevatorDistance(array) {
    let totalFloors = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i+1] > array[i]) {
        totalFloors += array[i+1] - array[i];
      } else if (array[i+1] < array[i]) {
        totalFloors += array[i] - array[i+1];
      } 
    }
    return totalFloors;
}