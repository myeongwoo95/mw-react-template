export default class ProjectService {
  constructor(http) {
    this.http = http;
  }

  async getHello() {
    return this.http.axios(`/api/hello`, {
      method: "GET",
      headers: this.getHeaders(),
    });
  }

  getHeaders() {
    const token = this.tokenStorage.getToken();
    return {
      Authorization: `Bearer ${token}`,
    };
  }
}
