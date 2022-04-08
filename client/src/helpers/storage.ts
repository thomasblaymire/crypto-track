function setLocalStorage(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch (e) {
    throw new Error('Unable to set localStorage value');
  }
}

function getLocalStorage(key: string): string {
  try {
    return window.localStorage.getItem(key);
  } catch (error) {
    return `Error reading value`;
  }
}

export { setLocalStorage, getLocalStorage };
