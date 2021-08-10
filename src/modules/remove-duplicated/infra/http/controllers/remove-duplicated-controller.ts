import { container } from 'tsyringe';
import HttpResponse from "../../../../../shared/http-reponse";
import HttpRequest from "../../../../../shared/http-request";
import RemoveDuplicatedInArrayUseCaseDto from "../../../dtos/remove-duplicated-in-array-usecase-dto";
import RemoveDuplicatedInArrayUseCase from "../../../usecases/remove-duplicated-in-array-usecase";

export default class RemoveDuplicatedController {
    removeDuplicatedInArray = (httpRequest: HttpRequest): HttpResponse => {
      const data = httpRequest.body as RemoveDuplicatedInArrayUseCaseDto;
      const useCase = container.resolve(RemoveDuplicatedInArrayUseCase);
      return useCase.execute(data);
    }
}