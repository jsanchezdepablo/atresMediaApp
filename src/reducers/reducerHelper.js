export const createReducer = (initialState, handlers) => {
  return (state, action) => {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state ? state : initialState;
    }
  };
};
