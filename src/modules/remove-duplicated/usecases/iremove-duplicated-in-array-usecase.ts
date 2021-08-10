import HttpResponse from '../../../shared/http-reponse';
import RemoveDuplicatedInArrayUseCaseDto from '../dtos/remove-duplicated-in-array-usecase-dto';

export default interface IRemoveDuplicatedInArrayUseCase {
  execute(data: RemoveDuplicatedInArrayUseCaseDto): HttpResponse;
}
