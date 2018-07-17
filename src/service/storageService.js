export function set(key, value) {
  if (value !== 'null') {
    sessionStorage.setItem(key, JSON.stringify(value));
  }
}

export function get(key) {
  const sessionValue = sessionStorage.getItem(key);

  if (sessionValue) {
    return JSON.parse(sessionValue);
  }

  return sessionValue;
}

export function remove(key) {
  sessionStorage.removeItem(key);
}

// // @TODO: Using local storage until I've got updating working.
// export function set(key, value){
//     if (value !== "null") {
//         localStorage.setItem(key, JSON.stringify(value));
//     }
// };

// export function get(key){
//     const sessionValue = localStorage.getItem(key);

//     if (sessionValue) {
//         return JSON.parse(sessionValue);
//     }

//     return sessionValue;
// };
