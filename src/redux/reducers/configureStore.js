import { createStore } from "redux";

import reducers from "./index";
//index in içinden reducers ı alıcaz

export default function configureStore() {
  return createStore(reducers);
}
