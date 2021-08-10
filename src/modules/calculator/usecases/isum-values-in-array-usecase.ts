import HttpResponse from '../../../shared/http-reponse';
import SumValuesInArrayUseCaseDto from '../dtos/sum-values-in-array-usecase-dto';

export default interface ISumValuesInArrayUseCase {
  execute(data: SumValuesInArrayUseCaseDto): HttpResponse;
}
