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

export const getTasks = async ({ token }) => {
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  try {
    const resp = await axios.get(`${API_URL}/tasks`, { headers });
    return {
      success: true,
      tasks: resp.data,
    };
  } catch (err) {
    console.log(err);
    return {
      success: false,
      // msg: err.response.data.message,
    };
  }
};

export const updateStatus = async ({ id, status, token }) => {
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  try {
    const resp = await axios.patch(
      `${API_URL}/tasks/${id}/status`,
      {
        status,
      },
      { headers }
    );
    console.log(resp.data);
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

export const createTask = async ({ title, desc, token }) => {
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  try {
    const resp = await axios.post(
      `${API_URL}/tasks`,
      {
        title,
        desc,
      },
      { headers }
    );
    console.log(resp.data);
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

export const deleteTask = async ({ id, token }) => {
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  try {
    const resp = await axios.delete(`${API_URL}/tasks/${id}`, {
      headers,
    });
    console.log(resp.data);
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
