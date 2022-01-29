// import { useState, useEffect } from 'react';
//
// function getSessionStorageOrDefault(key, defaultValue) {
//   if (typeof window !== 'undefined') {
//       const stored = window.sessionStorage.getItem(key);
//       if (!stored) {
//         return defaultValue;
//       }
//       return JSON.parse(stored);
//   } else {
//       return "";
//   }
// }
//
// export function useSessionStorage(key, defaultValue) {
//   const [value, setValue] = useState(
//     getSessionStorageOrDefault(key, defaultValue)
//   );
//
//   useEffect(() => {
//     sessionStorage.setItem(key, JSON.stringify(value));
//   }, [key, value]);
//
//   return [value, setValue];
// }
