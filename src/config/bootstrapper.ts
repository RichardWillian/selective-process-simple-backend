import { container } from 'tsyringe';

import ChangesFirstLetterToUppercaseUseCase from '../modules/text-formatter/usecases/changes-first-letter-to-uppercase-usecase';
import IChangesFirstLetterToUppercaseUseCase from '../modules/text-formatter/usecases/ichanges-first-letter-to-uppercase-usecase';

import SumValuesInArrayUseCase from '../modules/calculator/usecases/sum-values-in-array-usecase';
import ISumValuesInArrayUseCase from '../modules/calculator/usecases/isum-values-in-array-usecase';

import DataGroupingInArrayUseCase from '../modules/data-grouping/usecases/data-grouping-in-array-usecase';
import IDataGroupingInArrayUseCase from '../modules/data-grouping/usecases/idata-grouping-in-array-usecase';

container.registerSingleton<IChangesFirstLetterToUppercaseUseCase>('ChangesFirstLetterToUppercaseUseCase', ChangesFirstLetterToUppercaseUseCase);

container.registerSingleton<ISumValuesInArrayUseCase>('SumValuesInArrayUseCase', SumValuesInArrayUseCase);

container.registerSingleton<IDataGroupingInArrayUseCase>('DataGroupingInArrayUseCase', DataGroupingInArrayUseCase);
