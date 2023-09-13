export function useLocalStorage() {
  function setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  }

  function getItem(key) {
    const value = localStorage.getItem(key)
    return value ? JSON.parse(value) : null
  }

  function removeItem(key) {
    localStorage.removeItem(key)
  }

  return {
    setItem,
    getItem,
    removeItem,
  }
}
