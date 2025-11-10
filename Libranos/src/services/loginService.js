import axios from "axios";

export const registro = async (usuarioRecord) => {
  try {
    const resp = await axios.post("http://localhost:8005/auth/signup", usuarioRecord);
    return resp;
  } catch (error) {
    console.error(error);
  }
};
