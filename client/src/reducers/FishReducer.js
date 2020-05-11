import { GET_FISHES, ADD_FISH, FISHES_LOADING } from '../actions/types';

const intialState = {
  fishes: [],
  loading: false,
};

export default function (state = intialState, action) {
  switch (action.type) {
    case GET_FISHES:
      return {
        ...state,
        fishes: action.payload,
        loading: true,
      };
    case ADD_FISH:
      return {
        ...state,
        fishes: [action.payload, ...state.fishes],
      };
    case FISHES_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
