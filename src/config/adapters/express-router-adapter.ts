import HttpRequest from '../../shared/http-request';

export default class ExpressRouterAdapter {
  static adapt(route) {
    return async (req, res) => {
      const response = await route(new HttpRequest(req.body, req.params, req.query));
      res.status(response.statusCode).json(response.body);
    };
  }
}
