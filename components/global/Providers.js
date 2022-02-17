import React from "react";
import store from "../../state/store";
import { Provider } from "react-redux";

function Providers({ children }) {
  return <Provider store={store}>{children}</Provider>;
}

export default Providers;
