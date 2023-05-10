import axios from "axios";


const catchError = (error) => {
  if (error?.response?.data) {
    return error.response.data;
  }
  return { success: false, error: error.message };
};

export const signup = async (values) => {
  try {
    const { data } = await axios.post("http://192.168.0.103:8000/api/user/create", {
      ...values,
    });
    return data;
  } catch (error) {
    return catchError(error);
  }
};
export const signin = async (values) => {
  try {
    const { data } = await axios.post("http://192.168.0.103:8000/api/user/signin", {
      ...values,
    });

    return data;
  } catch (error) {
    return catchError(error);
  }
};
export const register = async (values) => {
  try {
    const { data } = await axios.post("http://192.168.0.103:8000/api/students/createStudent", {
      ...values,
    });
    return data;
  } catch (error) {
    return catchError(error);
  }
};
export const login = async (values) => {
  try {
    const { data } = await axios.post("http://192.168.0.103:8000/api/admin", {
      ...values,
    });

    return data;
  } catch (error) {
    return catchError(error);
  }
};

export const getStudents = async (data) => {
  try {
    return await axios.get(`http://192.168.0.103:8000/api/students/allStudent`, data);
  } catch (error) {
    console.log(error);
  }
};
