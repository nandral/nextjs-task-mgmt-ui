import axios from "axios";
const API_URL = "https://typeorm-task-mgmt.herokuapp.com";

export const signup = async ({ username, password }) => {
  try {
    const resp = await axios.post(`${API_URL}/auth/signup`, {
      username,
      password,
    });
    return {
      success: true,
    };
  } catch (err) {
    return {
      success: false,
      msg: err.response.data.message,
    };
  }
};

export const login = async ({ username, password }) => {
  try {
    const resp = await axios.post(`${API_URL}/auth/signin`, {
      username,
      password,
    });
    return {
      success: true,
      token: resp.data.accessToken,
    };
  } catch (err) {
    return {
      success: false,
      msg: err.response.data.message,
    };
  }
};
