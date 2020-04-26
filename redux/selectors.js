//for the carousel we want to see 3 customer details, which we can rotate through
function getMiddle3(arr, index){
  index = index % arr.length;
  if(arr[index]){
    if(arr[index-1] && arr[index+1]){
      return [arr[index-1], arr[index], arr[index+1]];
    }
    if(!arr[index-1]){
      return [arr[arr.length-1], arr[index], arr[index+1]];
    }
    if(!arr[index+1]){
      return [arr[index-1], arr[index], arr[0]]
    }
  } else {
    throw new Error("Unknown index "+index+" for array of length "+arr.length);
  }
}
export const select3MiddleCustomers = state => {
  const { details, middleCardIndex } = state.customer;
  return getMiddle3(details, middleCardIndex);
}