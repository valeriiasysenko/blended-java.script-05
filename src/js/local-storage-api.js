
export function saveToLS(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function loadFromLS(key, defaultValue) {
  try {
    const data = JSON.parse(localStorage.getItem(key));
    return data ?? defaultValue;
  } catch {
    return defaultValue;
  }
}