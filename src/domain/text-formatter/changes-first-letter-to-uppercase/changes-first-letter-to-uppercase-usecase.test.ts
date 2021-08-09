import { container } from 'tsyringe';
import ChangesFirstLetterToUppercaseUseCase from './changes-first-letter-to-uppercase-usecase';

test('Must return the first word with the first letter capitalized', async () => {
  const useCase = container.resolve(ChangesFirstLetterToUppercaseUseCase);
  const result = useCase.execute({
   name: 'richard' ,
   surName: 'willian'
  });

  expect(result.body).toBe('Richard willian');
});
