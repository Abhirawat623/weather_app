export const locationReducer = (state, { type, payload }) => {
  switch (type) {
    case "LOCATION":
      return {
        ...state,
        location: payload,
      };
      case "DATA":
        return {
          ...state,
          data: payload,
        };
    default:
      return state;
  }
};
