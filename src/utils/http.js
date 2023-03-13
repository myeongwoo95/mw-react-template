import axios from "axios";

export default class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async axios(url, options) {
    let res = await axios({
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      url: `${this.baseURL}${url}`,
    });
    let responseOK = res && res.status === 200;
    if (responseOK) {
      let data = await res.data;
      return data;
    }
  }

  async axios2(url, options) {
    let res = await axios({
      ...options,
      headers: {
        "Content-Type": "multipart/form-data",
        ...options.headers,
      },
      url: `${this.baseURL}${url}`,
    });
    let responseOK = res && res.status === 200;
    if (responseOK) {
      let data = await res.data;
      return data;
    }
  }
}
