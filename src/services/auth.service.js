import axios from 'axios';

const API_URL = 'https://dev.bahamacoders.com/mstock/';

class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'wp-json/jwt-auth/v1/token', {
        username: user.username,
        password: user.password
      })
      .then(response => {
        if (response.data.token) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(user) {
    return axios.post(API_URL + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password
    });
  }
}

export default new AuthService();