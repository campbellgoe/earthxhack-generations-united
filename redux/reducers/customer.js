import { ROTATE_CUSTOMERS, REVIEW_CUSTOMER } from "../actions.js";
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
      languages: ['English'],
      review: {
        concerns: [],
        optOut: false,
      },
    },
    {
      id: '6c520bb5-55e5-4040-8bc0-1f250d0f028e',
      name: 'Jason',
      age: 70,
      gender: 'Male',
      location: 'Boston, MA',
      languages: ['English'],
      review: {
        concerns: ['Physical Health'],
        optOut: false,
      },
    },
    {
      id: '58276083-0ac8-4d3f-954f-9bdd3b757730',
      name: 'John',
      age: 68,
      gender: 'Male',
      location: 'Jacksonville, FL',
      languages: ['English', 'Espanol'],
      review: {
        concerns: ['Mental Health', 'Physical Health'],
        optOut: false,
      },
    },
    {
      id: '5ac95d13-1dbe-4f6a-8ce5-d5b8b38c645d',
      name: 'Sophia',
      age: 71,
      gender: 'Female',
      location: 'Sacramento, CA',
      languages: ['English'],
      review: {
        concerns: ['Mental Health'],
        optOut: false,
      },
    }
  ],
  //use this with getMiddle3 to get the middle 3 cards from the details array
  middleCardIndex: 0,
  callInProgress: false,
};
//change an item of the array and it returns a new array
function setArrayItemImmutable(arr, index, cb){
  return [...arr.slice(0,index), cb(arr[index]), ...arr.slice(index+1)];
}
export default function(state = initialState, { type, ...action }) {
  const rotateDirection = action.rotateDirection;
  let middleCardIndex = state.middleCardIndex;
  if(rotateDirection === -1 && middleCardIndex === 0){
    middleCardIndex = state.details.length-1;
  } else if(rotateDirection === 1 && middleCardIndex === state.details.length-1){
    middleCardIndex = 0;
  } else {
    middleCardIndex += rotateDirection;
  }
  switch (type) {
    case ROTATE_CUSTOMERS: {
      // this is a carousel which can rotate left or right. +1 is right, -1 is left.
      return {
        ...state,
        middleCardIndex
      }
    }
    case REVIEW_CUSTOMER: {
      const details = state.details;
      const middleCardIndex = state.middleCardIndex;
      const review = action.review;
      return {
        ...state,
        details: setArrayItemImmutable(details, middleCardIndex, selectedDetails => {
          return {
            ...selectedDetails,
            review
          }
        })
      }
    }
    default: {
      return state;
    }
  }
}
