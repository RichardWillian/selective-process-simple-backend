import { container } from 'tsyringe';

import ChangesFirstLetterToUppercaseUseCase from '../modules/text-formatter/usecases/changes-first-letter-to-uppercase-usecase';
import IChangesFirstLetterToUppercaseUseCase from '../modules/text-formatter/usecases/ichanges-first-letter-to-uppercase-usecase';

import SumValuesInArrayUseCase from '../modules/calculator/usecases/sum-values-in-array-usecase';
import ISumValuesInArrayUseCase from '../modules/calculator/usecases/isum-values-in-array-usecase';

import RemoveDuplicatedInArrayUseCase from '../modules/data-grouping/usecases/remove-duplicated-in-array-usecase';
import IRemoveDuplicatedInArrayUseCase from '../modules/data-grouping/usecases/iremove-duplicated-in-array-usecase';

container.registerSingleton<IChangesFirstLetterToUppercaseUseCase>('ChangesFirstLetterToUppercaseUseCase', ChangesFirstLetterToUppercaseUseCase);

container.registerSingleton<ISumValuesInArrayUseCase>('SumValuesInArrayUseCase', SumValuesInArrayUseCase);

container.registerSingleton<IRemoveDuplicatedInArrayUseCase>('RemoveDuplicatedInArrayUseCase', RemoveDuplicatedInArrayUseCase);
