import { useState } from "react";
import { createContainer } from "unstated-next";

function useContext(initialState = undefined) {
  let [token, setToken] = useState(initialState);
  let saveToken = (t) => setToken(t);
  let removeToken = (t) => setToken(undefined);
  return { token, saveToken, removeToken };
}

export default createContainer(useContext);
