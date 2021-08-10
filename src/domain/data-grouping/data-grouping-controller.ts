import { container } from 'tsyringe';
import HttpResponse from "../../implementation/http-reponse";
import HttpRequest from "../../implementation/http-request";
import DataGroupingInArrayUseCaseDto from "./data-grouping-in-array/data-grouping-in-array-usecase-dto";
import DataGroupingInArrayUseCase from "./data-grouping-in-array/data-grouping-in-array-usecase";

export default class DataGroupingController {
    dataGroupingInArray = (httpRequest: HttpRequest): HttpResponse => {
      const data = httpRequest.body as DataGroupingInArrayUseCaseDto;
      const useCase = container.resolve(DataGroupingInArrayUseCase);
      return useCase.execute(data);
    }
}