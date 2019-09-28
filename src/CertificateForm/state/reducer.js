export const defaultForm = {
  name: '',
  phonePrefix: '',
  phoneNumber: '',
  email: '',
  postCode: '',
  city: '',
  address: ''
};

export const reducer = (state, action) => {
  switch(action.type) {
    case 'update':
      return {
        ...state,
        [action.payload.field]: action.payload.value
      };
    default:
      return state;
  }
};
