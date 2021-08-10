import IDataGroupingInArrayUseCase from './idata-grouping-in-array-usecase';
import DataGroupingInArrayUseCase from './data-grouping-in-array-usecase';

let useCase: IDataGroupingInArrayUseCase;
describe('DataGroupingInArrayUseCase', () => {
  beforeEach(() => {
    useCase = new DataGroupingInArrayUseCase();
  });

  it('Must return array values grouped', async () => {

    const expectedArray = [1, 2, 3, 'marco', 4];
    const result = useCase.execute({
      values: [1, 2, 3, 1, 3, 'marco', 2, 'marco', 4] 
    });
  
    expect(result.statusCode).toBe(200);
    expect(result.body).toStrictEqual(expectedArray);
  });

  it('Must return "BadRequest" error when there isnt values in array', async () => {
    const result = useCase.execute({
      values: []
    });
  
    expect(result.statusCode).toBe(400);
    expect(result.body.message).toBe('Array cannot be empty');
  });
});
