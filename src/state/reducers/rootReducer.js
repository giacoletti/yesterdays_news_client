const rootReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LANGUAGE':
      return {
        ...state,
        locale: action.payload
      }
    default:
      return state;
  }
};

export default rootReducer;
