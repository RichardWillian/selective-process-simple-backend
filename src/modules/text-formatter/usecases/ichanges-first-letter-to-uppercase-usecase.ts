import HttpResponse from '../../../shared/http-reponse';
import ChangesFirstLetterToUppercaseUseCaseDto from '../dtos/changes-first-letter-to-uppercase-usecase-dto';

export default interface IChangesFirstLetterToUppercaseUseCase {
  execute(data: ChangesFirstLetterToUppercaseUseCaseDto): HttpResponse;
}
