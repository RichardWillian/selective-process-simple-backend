import '../../../shared/extensions/array';
import HttpResponse from '../../../shared/http-reponse';
import RemoveDuplicatedInArrayUseCaseDto from '../dtos/data-grouping-in-array-usecase-dto';
import IRemoveDuplicatedInArrayUseCase from './iremove-duplicated-in-array-usecase';
import CustomException from '../../../shared/custom-exception';

export default class RemoveDuplicatedInArrayUseCase implements IRemoveDuplicatedInArrayUseCase {
    execute = (data:RemoveDuplicatedInArrayUseCaseDto): HttpResponse => {
        try {
          const { values } = data;

          this.validate(values);

          const RemoveDuplicated = values.filter((i, value) => values.indexOf(i) === value);

          return HttpResponse.ok(RemoveDuplicated);
        } catch (err: any | CustomException) {
          return CustomException.toResponse(err);
        }
      }

      validate = (values:Array<string | number>): HttpResponse | any => {
        
        if(!values || values.length == 0)
          throw new CustomException('Array cannot be empty', 400);
      }
}