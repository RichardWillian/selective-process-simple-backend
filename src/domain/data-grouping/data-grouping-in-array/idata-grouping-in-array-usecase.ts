import HttpResponse from '../../../implementation/http-reponse';
import DataGroupingInArrayUseCaseDto from './data-grouping-in-array-usecase-dto';

export default interface IDataGroupingInArrayUseCase {
  execute(data: DataGroupingInArrayUseCaseDto): HttpResponse;
}
