import HttpResponse from '../../../shared/http-reponse';
import DataGroupingInArrayUseCaseDto from '../dtos/data-grouping-in-array-usecase-dto';

export default interface IDataGroupingInArrayUseCase {
  execute(data: DataGroupingInArrayUseCaseDto): HttpResponse;
}
