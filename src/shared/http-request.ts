/* eslint-disable linebreak-style */
export default class HttpRequest {
    params: any;

    body: any;

    query: any;

    constructor(body, params, query) {
      this.body = body;
      this.params = params;
      this.query = query;
    }
}
