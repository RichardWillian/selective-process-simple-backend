import HttpResponse from '../../../implementation/http-reponse';
import ChangesFirstLetterToUppercaseUseCaseDto from './changes-first-letter-to-uppercase-usecase-dto';

export default interface IChangesFirstLetterToUppercaseUseCase {
  execute(data: ChangesFirstLetterToUppercaseUseCaseDto): HttpResponse;
}