import axios from "axios";

const host = "http://10.0.2.2:8005";

export async function login(username, password) {
  console.debug("Attempting login with:", { username, password });
  try {
    const response = await axios.post(`${host}/auth/login`, {
      username,
      password,
    });
    console.debug("Login response:", response);
    return response;
  } catch (error) {
    throw new Error("Login failed: " + error);
  }
}
