import api from "./api";
import TokenService from "./token.service";

class AuthService {
  login({ username, password }) {
    return api
      .post("/auth/signin", {
        username,
        password
      })
      .then((response) => {
        if (response.data.accessToken) {
          TokenService.setUser(response.data);
        }

        return response.data;
      });
  }

  logout() {
    TokenService.removeUser();
  }

  register({ username, email, password, confPassword, roleId }) {
    return api.post("/auth/signup", {
      username,
      email,
      password,
      confPassword,
      roleId
    });
  }
}

export default new AuthService();