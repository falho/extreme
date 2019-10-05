import { some } from 'lodash';

export const getFormValue = (state, field) => {
  return state[field];
};

export const isFormValid = state =>
  !some(
    state,
    (element, index) =>
      element === 0 ||
      element === '' ||
      !isValueValid(state, index)
  );

export const getPostData = state => state;

export const isValueValid = (state, id) => {
  const value = getFormValue(state, id);

  switch (id) {
    case 'phoneNumber': {
      return value.length >= 10 || value.length === 0;
    }
    default : {
      return true;
    }
  }
}
