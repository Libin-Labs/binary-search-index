import * as api from '@lp-labs/binary-search-index';
import { binarySearch } from '@lp-labs/binary-search-index';
console.log(binarySearch([1, 3, 5, 7], 5));
// @ts-expect-error invalid argument must be rejected by declarations
api.binarySearch('sorted', 5);
