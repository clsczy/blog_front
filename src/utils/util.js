/*
 *
 * HTML编译输出过滤器
 *
 * Description
 *
 */

// 文字溢出过滤器
export const textOverflow = (text, length) => {
  const _length = length || text.length;
  const cansub = _length && text && text.length > _length;
  return cansub ? text.substr(0, _length) + "..." : text;
};

// 首字母大写
export const firstUpperCase = str => {
  return str
    ? str.toLowerCase().replace(/( |^)[a-z]/g, L => L.toUpperCase())
    : str;
};
/**
 *
 * async await 语法错误捕捉
 * @export
 * @param {*} promise
 * @returns
 */
export function to(promise) {
  return promise
    .then(data => {
      return [null, data];
    })
    .catch(err => [err]);
}
/**
 * 一定时间只允许执行一次函数
 * @param {Function} func 需要节流的函数
 * @param {Number} wait 延时时间
 * @param {Object} options {leading, trailing} leading：false 表示禁用第一次执行 trailing: false 表示禁用停止触发的回调
 */
export function throttle(func, wait = 300, options) {
  var timeout, context, args;
  var previous = 0;
  if (!options) options = {};

  var later = function() {
    previous = options.leading === false ? 0 : new Date().getTime();
    timeout = null;
    func.apply(context, args);
    if (!timeout) context = args = null;
  };

  var throttled = function() {
    var now = new Date().getTime();
    if (!previous && options.leading === false) previous = now;
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
  };

  throttled.cancel = function() {
    clearTimeout(timeout);
    previous = 0;
    timeout = null;
  };

  return throttled;
}
/**
 *
 * @param {Function} func 需要防抖函数
 * @param {Number} wait 需要等待时间
 * @param {Boolean} immediate 是否立即执行
 */
export function debounce(func, wait = 300, immediate) {
  var timeout, result;

  var debounced = function() {
    var context = this;
    var args = arguments;

    if (timeout) clearTimeout(timeout);
    if (immediate) {
      // 如果已经执行过，不再执行
      var callNow = !timeout;
      timeout = setTimeout(function() {
        timeout = null;
      }, wait);
      if (callNow) result = func.apply(context, args);
    } else {
      timeout = setTimeout(function() {
        func.apply(context, args);
      }, wait);
    }

    return result;
  };

  debounced.cancel = function() {
    clearTimeout(timeout);
    timeout = null;
  };

  return debounced;
}
