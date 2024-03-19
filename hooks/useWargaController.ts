import ApiManager from "./ApiManager";

export const useWarga = async () => {
  try {
    const response = await ApiManager.get(`warga`, { withCredentials: true });
    return response;
  } catch (error) {
    console.log("Error: ", error);
    throw error;
  }
};

export const useWargaDetail = async (id: string) => {
  try {
    const response = await ApiManager.get(`warga/${id}`, {
      withCredentials: true,
    });
    return response;
  } catch (error) {
    console.log("Error: ", error);
    throw error;
  }
};
