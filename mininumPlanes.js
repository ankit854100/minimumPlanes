function minimum_planes(arr){
    n = arr.length
    numOfPlanes = 1
    fuel = arr[0];
    curr_index = 0;
    
    if(n == 1)
    	return 0;
     
    if(arr[0] == 0 && n > 1)
    	return -1;
    
    for(let i = 0; i < n; i++){
    	let maxDistance = curr_index + fuel;
      for(j = curr_index + 1; j <= maxDistance; j++){
      	fuel--;
        let distRemaining = n - j - 1;
        if(j >= n - 1)
        	return numOfPlanes;
          
         if(arr[j] > fuel && distRemaining > fuel){
         	fuel = arr[j];
          numOfPlanes++;
          curr_index = j;
          break;
         }
         
         if(fuel <= 0)
         	return -1;
      }
      
      if(j >= n - 1)
      	return numOfPlanes;
        
      if(fuel <= 0)
      	return -1;
    }
}


let arr1=  [2,1,2,3,1];
let arr2 =  [1,6,3,4,5,0,0,0,6];
let arr3 = [4, 5, 1];


console.log(minimum_planes(arr1));
console.log(minimum_planes(arr2));
console.log(minimum_planes(arr3));
