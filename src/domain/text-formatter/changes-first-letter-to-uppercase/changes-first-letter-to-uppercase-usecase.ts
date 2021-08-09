import HttpResponse from '../../../implementation/http-reponse';
import '../../shared/extensions/string';
import ChangesFirstLetterToUppercaseDto from './changes-first-letter-to-uppercase-dto';
import IChangesFirstLetterToUppercaseUseCase from './ichanges-first-letter-to-uppercase-usecase';

export default class ChangesFirstLetterToUppercaseUseCase implements IChangesFirstLetterToUppercaseUseCase {
    execute = (data:ChangesFirstLetterToUppercaseDto): HttpResponse => {
        try {
          let { name, surName } = data;
          this.validate(name);
          this.validate(surName);
          
          return HttpResponse.ok(name.toCapitalize().concat(' ', surName));
        } catch (err) {
          return HttpResponse.serverError(err);
        }
      }

      validate = (value:string) => {
        
        if(!value)
          return HttpResponse.badRequest('Information cannot be empty');
      }
}