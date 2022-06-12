export default class FetchWrapper {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  get(endpoint) {
    return fetch(this.baseUrl + endpoint).then((res) => res.json());
  }

  post(endpoint, body) {
    return this._send("post", endpoint, body);
  }

  _send(method, endpoint, body) {
    return fetch(this.baseUrl + endpoint, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((res) => res.json());
  }
}
