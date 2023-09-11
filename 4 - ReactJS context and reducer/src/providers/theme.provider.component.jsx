import { useReducer } from "react";

import themeReducer from "../reducers/theme.reducer";
import { ThemeContext, ThemeContextDispatch } from "./theme.context";

export default function ThemeProvider({ children }) {
  // Using useReducer
  const [state, dispatch] = useReducer(themeReducer, { toggle: false });

  //   Using State and SetState
  //   const [state, setState] = useState({ toggle: false });
  //   const dispatch = ({ type, payload }) => {
  //     if (type === "TOGGLE_THEME") {
  //       setState({ toggle: payload });
  //       return;
  //     }
  //   };

  return (
    <ThemeContext.Provider value={state}>
      <ThemeContextDispatch.Provider value={dispatch}>
        {children}
      </ThemeContextDispatch.Provider>
    </ThemeContext.Provider>
  );
}
