import { container } from 'tsyringe';
import HttpResponse from "../../implementation/http-reponse";
import HttpRequest from "../../implementation/http-request";
import SumValuesInArrayUseCaseDto from "./sum-values-in-array/sum-values-in-array-usecase-dto";
import SumValuesInArrayUseCase from "./sum-values-in-array/sum-values-in-array-usecase";

export default class CalculatorController {
    SumValuesInArray = (httpRequest: HttpRequest): HttpResponse => {
      const data = httpRequest.body as SumValuesInArrayUseCaseDto;
      const useCase = container.resolve(SumValuesInArrayUseCase);
      return useCase.execute(data);
    }
}