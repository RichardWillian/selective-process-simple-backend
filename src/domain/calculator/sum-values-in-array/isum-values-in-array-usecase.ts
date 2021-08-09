import HttpResponse from '../../../implementation/http-reponse';
import ChangesFirstLetterToUppercaseUseCaseDto from './sum-values-in-array-usecase-dto';

export default interface IChangesFirstLetterToUppercaseUseCase {
  execute(data: ChangesFirstLetterToUppercaseUseCaseDto): HttpResponse;
}
