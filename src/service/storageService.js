export function setSession({ key, value }) {
  if (value !== 'null') {
    sessionStorage.setItem(key, JSON.stringify(value));
  }
}

export function getSession(key) {
  const value = sessionStorage.getItem(key);

  if (value) {
    return JSON.parse(value);
  }

  return value;
}

export function removeSession(key) {
  if (key) {
    sessionStorage.removeItem(key);
  }
}

export function removeAllSession() {
  sessionStorage.clear();
}

export function setLocal({ key, value }) {
  if (value !== 'null') {
    localStorage.setItem(key, JSON.stringify(value));
  }
}

export function getLocal(key) {
  const value = localStorage.getItem(key);

  if (value) {
    return JSON.parse(value);
  }

  return value;
}

export function removeLocal(key) {
  if (key) {
    localStorage.removeItem(key);
  }
}

export function removeAllLocal() {
  localStorage.clear();
}
