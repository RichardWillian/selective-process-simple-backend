import { container } from 'tsyringe';

import ChangesFirstLetterToUppercaseUseCase from '../../domain/text-formatter/changes-first-letter-to-uppercase/changes-first-letter-to-uppercase-usecase';
import IChangesFirstLetterToUppercaseUseCase from '../../domain/text-formatter/changes-first-letter-to-uppercase/ichanges-first-letter-to-uppercase-usecase';

import SumValuesInArrayUseCase from '../../domain/calculator/sum-values-in-array/sum-values-in-array-usecase';
import ISumValuesInArrayUseCase from '../../domain/calculator/sum-values-in-array/isum-values-in-array-usecase';

container.registerSingleton<IChangesFirstLetterToUppercaseUseCase>('ChangesFirstLetterToUppercaseUseCase', ChangesFirstLetterToUppercaseUseCase);

container.registerSingleton<ISumValuesInArrayUseCase>('SumValuesInArrayUseCase', SumValuesInArrayUseCase);
