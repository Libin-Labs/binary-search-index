import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('finds present item', () => {
  assert.equal(api.binarySearch([1, 3, 5, 7], 5), 2);
});
test('returns first duplicate index', () => {
  assert.equal(api.binarySearch([1, 3, 3, 3, 8], 3), 1);
});
test('encodes insertion point before first', () => {
  assert.equal(api.binarySearch([2, 4], 1), ~0);
});
test('encodes insertion point between values', () => {
  assert.equal(api.binarySearch([2, 4], 3), ~1);
});
test('encodes insertion point after last', () => {
  assert.equal(api.binarySearch([2, 4], 8), ~2);
});
test('supports empty array', () => {
  assert.equal(api.binarySearch([], 3), ~0);
});
