import { GET_FISHES, ADD_FISH, FISHES_LOADING } from './types';

export const getFishes = () => async (dispatch) => {
  try {
    const res = await fetch('http://localhost:5000/fishes');
    const data = await res.json();
    dispatch({ type: GET_FISHES, payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const addFish = (fish) => async (dispatch) => {
  try {
    const res = await fetch('http://localhost:5000/fishes', {
      method: 'POST',
      body: JSON.stringify(fish),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    dispatch({ type: ADD_FISH, payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const setFishesLoading = () => {
  return {
    type: FISHES_LOADING,
  };
};
