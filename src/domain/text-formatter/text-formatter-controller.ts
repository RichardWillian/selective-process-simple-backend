import { container } from 'tsyringe';
import HttpResponse from "../../implementation/http-reponse";
import HttpRequest from "../../implementation/http-request";
import ChangesFirstLetterToUppercaseDto from "./changes-first-letter-to-uppercase/changes-first-letter-to-uppercase-dto";
import ChangesFirstLetterToUppercaseUseCase from "./changes-first-letter-to-uppercase/changes-first-letter-to-uppercase-usecase";

export default class TextFormatterController {
    changesFirstLetterToUppercase = (httpRequest: HttpRequest): HttpResponse => {
      const data = httpRequest.params as ChangesFirstLetterToUppercaseDto;
      const useCase = container.resolve(ChangesFirstLetterToUppercaseUseCase);
      return useCase.execute(data);
    }
}