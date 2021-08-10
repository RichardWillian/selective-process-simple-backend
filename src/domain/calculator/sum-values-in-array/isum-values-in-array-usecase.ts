import HttpResponse from '../../../implementation/http-reponse';
import SumValuesInArrayUseCaseDto from './sum-values-in-array-usecase-dto';

export default interface ISumValuesInArrayUseCase {
  execute(data: SumValuesInArrayUseCaseDto): HttpResponse;
}
