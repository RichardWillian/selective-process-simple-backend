import '../../../shared/extensions/array';
import HttpResponse from '../../../shared/http-reponse';
import SumValuesInArrayUseCaseDto from '../dtos/sum-values-in-array-usecase-dto';
import ISumValuesInArrayUseCase from './isum-values-in-array-usecase';
import CustomException from '../../../shared/custom-exception';

export default class SumValuesInArrayUseCase implements ISumValuesInArrayUseCase {
    execute = (data:SumValuesInArrayUseCaseDto): HttpResponse => {
        try {
          const { values } = data;

          this.validate(values);
          
          const sumValues = values.reduce((sumValues, currentValue) => sumValues + currentValue, 0);

          return HttpResponse.ok(sumValues);
        } catch (err: any | CustomException) {
          return CustomException.toResponse(err);
        }
      }

      validate = (values:Array<number>): HttpResponse | any => {
        
        if(!values || values.length == 0)
          throw new CustomException('Array cannot be empty', 400);

        if(!values.allElementsAreNumber())
          throw new CustomException('All elements of the array must be of type "number"', 400);
      }
}