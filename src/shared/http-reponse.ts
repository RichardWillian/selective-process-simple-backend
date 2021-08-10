import CustomException from "./custom-exception";

export default class HttpResponse {

  statusCode!: number;
  body!: any;

  static ok(body: any) {
    return {
      statusCode: 200,
      body,
    };
  }

  static notFound() {
    return {
      statusCode: 404,
      body: undefined,
    };
  }

  static badRequest(message: string) {
    return {
      statusCode: 400,
      body: {
        message: message,
      },
    };
  }

  static serverError(err: Error|CustomException) {
    return {
      statusCode: 500,
      body: {
        error: err.message,
        stacktrace: err.stack
      },
    };
  }
}
