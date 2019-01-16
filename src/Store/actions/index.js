//having all action creators exported from one file
//like this once we split them makes it easier to import
//them cleanly into components

export {
    add,
    subtract,
    increment,
    decrement
} from './counter';

export {
    remove,
    storeResult,
} from './result';