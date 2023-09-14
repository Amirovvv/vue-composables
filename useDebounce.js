import { ref } from 'vue'

export function useDebounce() {
  const timeout = ref(null)

  function debounce(func, delay = 300) {
    if (timeout.value) {
      clearTimeout(timeout.value)
    }
    timeout.value = setTimeout(func, delay)
  }

  return debounce
}
