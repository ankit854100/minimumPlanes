function minimumNumberOfPlanes(arr) {
    const n = arr.length;
    let currAirport = 0;
    let totalPlanes = 0;
    
    while (currAirport < n - 1) {
      let maxFuel = 0;
      let nextAirport = 0;
      for (let i = currAirport + 1; i <= Math.min(currAirport + arr[currAirport], n - 1); i++) {
        if (arr[i] > maxFuel) {
          maxFuel = arr[i];
          nextAirport = i;
        }
      }
      if (nextAirport === 0) {
        return -1;
      }
      currAirport = nextAirport;
      totalPlanes++;
    }
    
    return totalPlanes;
  }
  
  
  
  
  const arr1 = [2, 1, 2, 3, 1];
  console.log(minimumNumberOfPlanes(arr1)); // Output: 2
  
  const arr2 = [1, 6, 3, 4, 5, 0, 0, 0, 6];
  console.log(minimumNumberOfPlanes(arr2)); // Output: 3
  
