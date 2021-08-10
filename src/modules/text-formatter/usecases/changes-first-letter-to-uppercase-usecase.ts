import '../../../shared/extensions/string';
import HttpResponse from '../../../shared/http-reponse';
import CustomException from '../../../shared/custom-exception';
import ChangesFirstLetterToUppercaseUseCaseDto from '../dtos/changes-first-letter-to-uppercase-usecase-dto';
import IChangesFirstLetterToUppercaseUseCase from './ichanges-first-letter-to-uppercase-usecase';

export default class ChangesFirstLetterToUppercaseUseCase implements IChangesFirstLetterToUppercaseUseCase {
    execute = (data:ChangesFirstLetterToUppercaseUseCaseDto): HttpResponse => {
        try {
          const { name, surName } = data;
          this.validate(name);
          this.validate(surName);
          
          return HttpResponse.ok(name.toCapitalize().concat(' ', surName));
        } catch (err: any|CustomException) {
          return CustomException.toResponse(err);
        }
      }

      validate = (value:string) => {
        
        if(!value)
          throw new CustomException('Information cannot be empty', 400);
      }
}