
/**
 * 函数“array_unique”接受一个数组作为输入，并返回一个删除了重复元素的新数组。
 * @public
 * @param arr - 参数“arr”是一个“T”类型的数组。
 * @returns 包含输入数组中所有唯一元素的数组。
 */
function array_unique<T>(arr: T[]): T[] {
  return [...new Set(arr)];
}

export { 
  array_unique
}