/**
 * 获取查询参数
 * @param {object} obj - 查询参数对象
 * @returns {string} - 查询参数字符串
 */
export function getQueryParams(obj) {
  return Object.keys(obj)
    .map((key) => `${key}=${obj[key]}`)
    .join("&");
}
