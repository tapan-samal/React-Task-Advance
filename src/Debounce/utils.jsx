//Simple version
export const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
  
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

//Advance version: More flexible and versatile
//Leading option execute the function immediately in initial stage
//Trailing option controls the function should be executed after certain delay

// export const debounce = (func, delay, options = {}) => {
//   let timeoutId;
//   const { leading = false, trailing = true } = options;

//   return (...args) => {
//     if (timeoutId) {
//       clearTimeout(timeoutId);
//     }

//     if (leading && !timeoutId) {
//       func(...args);
//     }

//     timeoutId = setTimeout(() => {
//       if (trailing) {
//         func(...args);
//       }
//       timeoutId = null; // Clear the timeout ID to avoid unnecessary calls
//     }, delay);
//   };
// };
