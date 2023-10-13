const { addArrays, findMax, findMin, calculateSum, sortArray } = require('./array');

describe('addArrays', () => {
  test('Menggabungkan Array', () => {
    expect(addArrays([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
  });

  test('Menggabungkan Array Kosong dan Array', () => {
    expect(addArrays([], [1, 2, 3])).toEqual([1, 2, 3]);
  });
});

describe('findMax', () => {
  test('Mencari angka paling besar dalam Array', () => {
    expect(findMax([5, 2, 9, 1, 6])).toBe(9);
  });
});

describe('findMin', () => {
  test('Mencari angka paling kecil dalam Array', () => {
    expect(findMin([8, 4, 7, 2, 9])).toBe(2);
  });
});

describe('calculateSum', () => {
  test('Menghitung Array', () => {
    expect(calculateSum([1, 2, 3, 4, 5])).toBe(15);
  });

  test('Menghitung Array Kosong', () => {
    expect(calculateSum([])).toBe(0);
  });
});

describe('sortArray', () => {
  test('Mengurutkan Array', () => {
    expect(sortArray([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5])).toEqual([1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]);
  });

  test('Mengurutkan Array Kosong', () => {
    expect(sortArray([])).toEqual([]);
  });
});
