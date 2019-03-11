// import { Loading } from "element-ui";
// // import _ from "lodash";

// let needLoadingRequestCount = 0;
// let loading;
// /**
//  *
//  * @param fn {Function}   实际要执行的函数
//  * @param delay {Number}  延迟时间，也就是阈值，单位是毫秒（ms）
//  *
//  * @return {Function}     返回一个的函数
//  */
// function debounce(fn, delay) {
//   // 定时器，用来 setTimeout
//   let timer;

//   // 返回一个函数，这个函数会在一个时间区间结束后的 delay 毫秒时执行 fn 函数
//   return function() {
//     // 保存函数调用时的上下文和参数，传递给 fn
//     const context = this;
//     const args = arguments;

//     // 每次这个返回的函数被调用，就清除定时器，以保证不执行 fn
//     clearTimeout(timer);

//     // 当返回的函数被最后一次调用后（也就是用户停止了某个连续的操作），
//     // 再过 delay 毫秒就执行 fn
//     timer = setTimeout(function() {
//       fn.apply(context, args);
//     }, delay);
//   };
// }
// function startLoading() {
//   console.log("startLoading =============");
//   loading = Loading.service({
//     // lock: true,
//     text: "加载中……"
//     // background: "rgba(0, 0, 0, 0.7)"
//   });
// }

// function endLoading() {
//   console.log("endLoading==========");
//   loading.close();
// }

// const tryCloseLoading = () => {
//   if (needLoadingRequestCount === 0) {
//     endLoading();
//   }
// };

// export function showFullScreenLoading() {
//   if (needLoadingRequestCount === 0) {
//     startLoading();
//   }
//   needLoadingRequestCount++;
// }

// export function tryHideFullScreenLoading() {
//   if (needLoadingRequestCount <= 0) return;
//   needLoadingRequestCount--;
//   if (needLoadingRequestCount === 0) {
//     debounce(tryCloseLoading, 300)();
//     // _.debounce(tryCloseLoading, 300)();
//   }
// }
