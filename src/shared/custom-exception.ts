import HttpResponse from "../implementation/http-reponse";

export default class CustomException {
    public readonly stack!: string;
    public readonly message: string;
    public readonly statusCode: number;
    
    constructor(message: string, statusCode: number) {
        this.message = message;
        this.statusCode = statusCode;
    }

    static toResponse = (err: any | CustomException): HttpResponse => {

        if(err instanceof Error)
            return HttpResponse.serverError(err);

        switch((err as CustomException).statusCode) {
            case 400:
                return HttpResponse.badRequest(err.message);
            default:
                return HttpResponse.serverError(err);
        }
    }
}