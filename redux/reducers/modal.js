//s3 reducer

import { SET_MODAL } from "../actions.js";
const initialState = {
  kind: '',
  props: {}
}

export default function(state = initialState, { type, kind, props = {}}) {
  switch (type) {
    case SET_MODAL: {
      return {
        ...state,
        kind,
        props
      }
    }
    default: {
      return state;
    }
  }
}
