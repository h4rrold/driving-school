import Axios from "axios";

class Http {
  static instance = null;
  axiosInstance = null;

  static defaultOptions = {
    baseUrl: "",
  };

  static getInstance() {
    if (!Http.instance) {
      Http.instance = new Http();
    }
    return Http.instance;
  }

  constructor() {
    const source = Axios.CancelToken.source();
    const config = Http.defaultOptions;
    this.axiosInstance = Axios.create({ ...config, cancelToken: source.token });
  }

  request(config) {
    this.axiosInstance.request({
      method: config.method,
      baseURL: config.baseURL,
      params: config.params,
      data: config.data,
      url: config.url,
      headers: config.headers,
      responseType: config.responseType,
    });
  }

  get = (url, config) => this.request({ method: "GET", url, ...config });

  post = (url, data, config) =>
    this.request({ method: "POST", url, data, ...config });

  put = (url, data, config) =>
    this.request({ method: "PUT", url, data, ...config });

  delete = (url, config) => this.request({ method: "DELETE", url, ...config });
}

export const httpService = Http.getInstance();
