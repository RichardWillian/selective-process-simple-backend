import { container } from 'tsyringe';

import ChangesFirstLetterToUppercaseUseCase from '../../domain/text-formatter/changes-first-letter-to-uppercase/changes-first-letter-to-uppercase-usecase';
import IChangesFirstLetterToUppercaseUseCase from '../../domain/text-formatter/changes-first-letter-to-uppercase/ichanges-first-letter-to-uppercase-usecase';

container.registerSingleton<IChangesFirstLetterToUppercaseUseCase>('ChangesFirstLetterToUppercaseUseCase', ChangesFirstLetterToUppercaseUseCase);
