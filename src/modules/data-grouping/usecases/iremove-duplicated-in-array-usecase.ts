import HttpResponse from '../../../shared/http-reponse';
import RemoveDuplicatedInArrayUseCaseDto from '../dtos/data-grouping-in-array-usecase-dto';

export default interface IRemoveDuplicatedInArrayUseCase {
  execute(data: RemoveDuplicatedInArrayUseCaseDto): HttpResponse;
}
