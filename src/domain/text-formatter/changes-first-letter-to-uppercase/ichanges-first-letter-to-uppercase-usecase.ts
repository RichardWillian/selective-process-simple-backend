import HttpResponse from '../../../implementation/http-reponse';
import ChangesFirstLetterToUppercaseDto from './changes-first-letter-to-uppercase-dto';

export default interface IChangesFirstLetterToUppercaseUseCase {
  execute(data: ChangesFirstLetterToUppercaseDto): HttpResponse;
}
