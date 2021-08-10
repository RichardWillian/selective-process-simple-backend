import { container } from 'tsyringe';
import HttpResponse from "../../../../../shared/http-reponse";
import HttpRequest from "../../../../../shared/http-request";
import DataGroupingInArrayUseCaseDto from "../../../dtos/data-grouping-in-array-usecase-dto";
import DataGroupingInArrayUseCase from "../../../usecases/data-grouping-in-array-usecase";

export default class DataGroupingController {
    dataGroupingInArray = (httpRequest: HttpRequest): HttpResponse => {
      const data = httpRequest.body as DataGroupingInArrayUseCaseDto;
      const useCase = container.resolve(DataGroupingInArrayUseCase);
      return useCase.execute(data);
    }
}