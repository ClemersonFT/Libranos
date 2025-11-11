import axios from "axios";

const host = "http://localhost:8005";

export async function login(email, password) {
  console.debug("Attempting login with:", { email, password });
  try {
    const response = await axios.post(`${host}/auth/login`, {
      email,
      password,
    });
    return response;
  } catch (error) {
    throw new Error("Login failed: " + error);
  }
}
