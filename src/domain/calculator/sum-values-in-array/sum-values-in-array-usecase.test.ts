import ISumValuesInArrayUseCase from './isum-values-in-array-usecase';
import SumValuesInArrayUseCase from './sum-values-in-array-usecase';

let useCase: ISumValuesInArrayUseCase;
describe('SumValuesInArrayUseCase', () => {
  beforeEach(() => {
    useCase = new SumValuesInArrayUseCase();
  });

  it('Must return the sum of the values contained in the array', async () => {
    const result = useCase.execute({
      values: [1, 2, 3, 4]
    });
  
    expect(result.statusCode).toBe(200);
    expect(result.body).toBe(10);
  });

  it('Must return "BadRequest" error when there isnt values in array', async () => {
    const result = useCase.execute({
      values: []
    });
  
    expect(result.statusCode).toBe(400);
    expect(result.body.message).toBe('Information cannot be empty');
  });

  it('Must return "BadRequest" error when there is any alphanumeric in array', async () => {
    const result = useCase.execute({
      values: [1, 2, 3, 'a'] as Array<any>
    });
  
    expect(result.statusCode).toBe(400);
    expect(result.body.message).toBe('All elements of the array must be of type "number"');
  });
});
