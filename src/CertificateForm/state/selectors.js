import { some } from 'lodash';

export const getFormValue = (state, field) => {
  return state[field];
};

export const isFormValid = state =>
  !some(state, element => (element === 0, element === ''));

export const getPostData = state => state;
