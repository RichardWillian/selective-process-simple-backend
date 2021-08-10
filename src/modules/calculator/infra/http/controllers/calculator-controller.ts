import { container } from 'tsyringe';
import HttpResponse from "../../../../../shared/http-reponse";
import HttpRequest from "../../../../../shared/http-request";
import SumValuesInArrayUseCaseDto from "../../../dtos/sum-values-in-array-usecase-dto";
import SumValuesInArrayUseCase from "../../../usecases/sum-values-in-array-usecase";

export default class CalculatorController {
    sumValuesInArray = (httpRequest: HttpRequest): HttpResponse => {
      const data = httpRequest.body as SumValuesInArrayUseCaseDto;
      const useCase = container.resolve(SumValuesInArrayUseCase);
      return useCase.execute(data);
    }
}