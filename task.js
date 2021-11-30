function compareArrays(arr1, arr2) {

  return arr1.length == arr2.length && arr1.every((v,i)=>v === arr2[i]);
}

function advancedFilter(arr) {

  let resultArr = arr.filter((i) => i > 0).filter((i) => i % 3 == 0).map((i) => i * 10);

  return resultArr; 
}
