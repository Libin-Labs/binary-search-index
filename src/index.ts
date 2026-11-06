export function lowerBound(values: readonly number[], target: number): number {
  if (!Array.isArray(values) || !Number.isFinite(target) || values.some((v) => !Number.isFinite(v)))
    throw new TypeError('Expected finite numeric array and target');
  let lo = 0,
    hi = values.length;
  while (lo < hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    if (values[mid]! < target) lo = mid + 1;
    else hi = mid;
  }
  return lo;
}
export function binarySearch(values: readonly number[], target: number): number {
  const index = lowerBound(values, target);
  return index < values.length && values[index] === target ? index : ~index;
}
