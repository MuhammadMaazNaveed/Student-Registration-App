const { default: client } = require("../api/client");

const catchError = (error) => {
  if (error?.response?.data) {
    return error.response.data;
  }
  return { success: false, error: error.message };
};

export const login = async (values) => {
  try {
    const { data } = await client.post("/admin", {
      ...values,
    });

    return data;
  } catch (error) {
    return catchError(error);
  }
};

export const getUsers = async (data) => {
  try {
    return await client.get(`/allUsers`, data);
  } catch (error) {
    return catchError(error);
  }
};
