import { ROTATE_CUSTOMERS } from "../actions.js";
const initialState = {
  details: [
    {
      //id is for connecting them with the back-end for associating them with
      //a customer record, and to get their phone number so the call can be made
      id: '4be24e20-9773-4a9f-a9b0-05c662a1e1b4',
      //volunteer needs name and languages for the call
      //age, gender, location makes the call easier for the volunteer
      name: 'Mary',
      age: 65,
      gender: 'Female',
      location: 'Seattle, WA',
      languages: ['English', '中文（普通话）']
    },
    {
      id: '6c520bb5-55e5-4040-8bc0-1f250d0f028e',
      name: 'Jason',
      age: 70,
      gender: 'Male',
      location: 'Boston, MA',
      languages: ['English']
    },
    {
      id: '58276083-0ac8-4d3f-954f-9bdd3b757730',
      name: 'John',
      age: 68,
      gender: 'Male',
      location: 'Jacksonville, FL',
      languages: ['English', 'Espanol']
    },
    {
      id: '5ac95d13-1dbe-4f6a-8ce5-d5b8b38c645d',
      name: 'Sophia',
      age: 71,
      gender: 'Female',
      location: 'Sacramento, CA',
      languages: ['English']
    }
  ],
  //use this with getMiddle3 to get the middle 3 cards from the details array
  middleCardIndex: 0,
};

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
export default function(state = initialState, { type, rotateDirection }) {
  switch (type) {
    case ROTATE_CUSTOMERS: {
      // this is a carousel which can rotate left or right. +1 is right, -1 is left.
      // TODO: this reducer
      // if(rotateDirection === 1){
      //   state.details
      // }
      return {
        ...state,
        
      }
    }
    default: {
      return state;
    }
  }
}
