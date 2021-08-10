import HttpResponse from '@shared/http-reponse';
import ChangesFirstLetterToUppercaseUseCase from './changes-first-letter-to-uppercase-usecase';
import IChangesFirstLetterToUppercaseUseCase from './ichanges-first-letter-to-uppercase-usecase';

let useCase: IChangesFirstLetterToUppercaseUseCase;

describe('ChangesFirstLetterToUppercaseUseCase', () => {
  beforeEach(() => {
    useCase = new ChangesFirstLetterToUppercaseUseCase();
  });

  it('Should return the first parameter with the first letter capitalized', async () => {
    const result = useCase.execute({
     name: 'richard' ,
     surName: 'willian'
    });
  
    expect(result.statusCode).toBe(200);
    expect(result.body).toBe('Richard willian');
  });

  it('Should return the error "BadRequest" when the parameter "name" is empty', async () => {
    const result = useCase.execute({
     name: '' ,
     surName: 'willian'
    });
    
    expect(result.statusCode).toBe(400);
    expect(result.body.message).toBe('Information cannot be empty');
  });

  it('Should return the error "BadRequest" when the parameter "surName" is empty', async () => {
    const result = useCase.execute({
     name: 'richard' ,
     surName: ''
    });
    
    expect(result.statusCode).toBe(400);
    expect(result.body.message).toBe('Information cannot be empty');
  });
});
