import React from "react";
import { AppRegistry } from "react-native";
import App from "./App";

import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "remote-redux-devtools";

import { Provider } from "react-redux";
import thunk from "redux-thunk";
import SelfieReducer from "./redux/reducers";

let composeEnhancers = composeWithDevTools({
  realtime: true
});

const AppWithProvider = () => {
  const store = createStore(
    SelfieReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent("OutieApp", () => AppWithProvider);
