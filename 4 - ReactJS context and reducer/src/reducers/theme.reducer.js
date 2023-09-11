export default function themeReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        toggle: action.payload,
      };
    default:
      return state;
  }
}
