import ApiManager from "./ApiManager";

export const useLogin = async (username: string, password: string) => {
  try {
    const response = await ApiManager.post(
      "login",
      {
        username: username,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    return response;
  } catch (error) {
    console.log("Error: ", error);
    throw error;
  }
};

export const useLogout = async () => {
  try {
    const response = await ApiManager.post("logout", { withCredentials: true });
    return response;
  } catch (error) {
    console.log("Error: ", error);
    throw error;
  }
};
