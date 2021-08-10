import { container } from 'tsyringe';
import HttpResponse from "../../../../shared/http-reponse";
import HttpRequest from "../../../../shared/http-request";
import ChangesFirstLetterToUppercaseDto from "../../dtos/changes-first-letter-to-uppercase-usecase-dto";
import ChangesFirstLetterToUppercaseUseCase from "../../usecases/changes-first-letter-to-uppercase-usecase";

export default class TextFormatterController {
    changesFirstLetterToUppercase = (httpRequest: HttpRequest): HttpResponse => {
      const data = httpRequest.params as ChangesFirstLetterToUppercaseDto;
      const useCase = container.resolve(ChangesFirstLetterToUppercaseUseCase);
      return useCase.execute(data);
    }
}