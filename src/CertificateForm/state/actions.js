export const updateForm = (dispatch, field, value) => {
  dispatch({
    type: 'update',
    payload: {
      field,
      value
    }
  });
}
