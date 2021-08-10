import '../../../shared/extensions/array';
import HttpResponse from '../../../implementation/http-reponse';
import DataGroupingInArrayUseCaseDto from './data-grouping-in-array-usecase-dto';
import IDataGroupingInArrayUseCase from './idata-grouping-in-array-usecase';
import CustomException from '../../../shared/custom-exception';

export default class DataGroupingInArrayUseCase implements IDataGroupingInArrayUseCase {
    execute = (data:DataGroupingInArrayUseCaseDto): HttpResponse => {
        try {
          const { values } = data;

          this.validate(values);

          const dataGrouping = values.filter((i, value) => values.indexOf(i) === value);

          return HttpResponse.ok(dataGrouping);
        } catch (err: any | CustomException) {
          return CustomException.toResponse(err);
        }
      }

      validate = (values:Array<string | number>): HttpResponse | any => {
        
        if(!values || values.length == 0)
          throw new CustomException('Array cannot be empty', 400);
      }
}