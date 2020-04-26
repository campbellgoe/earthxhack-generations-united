//s3 reducer

import { SET_LANGUAGES } from "../actions.js";
const initialState = {
  checkboxes: [
    {
      text: 'English',
    },
    {
      text: 'Espanol'
    },
    {
      text: '中文（普通话）'
    },
    {
      text: 'Le français'
    },
    {
      text: 'Tiếng Việt'
    },
    {
      text: '한국어'
    },
    {
      text: 'عربى'
    },
    {
      text: 'Deutsche'
    },
    {
      text: 'русский'
    },
    {
      text: 'Pilipino'
    }
  ].map(props => ({ checked: false, ...props })),
  //whether at least 1 language is selected
  isSelected: false
};

export default function(state = initialState, { type, languagesCheckboxes }) {
  switch (type) {
    case SET_LANGUAGES: {
      //
      return {
        ...state,
        checkboxes: languagesCheckboxes,
        isSelected: !!languagesCheckboxes.find(({ checked }) => checked === true)
      }
    }
    default: {
      return state;
    }
  }
}
