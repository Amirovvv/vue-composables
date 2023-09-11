import { ref, onMounted } from 'vue'

export function useGeolocation() {
  const position = ref(null)
  const error = ref(null)

  async function getCurrentLocation() {
    if ('geolocation' in navigator) {
      try {
        position.value = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject)
        })

        error.value = null
      } catch (e) {
        position.value = null
        error.value = e.message
      }
    } else {
      error.value = 'Geolocation is not supported by the browser.'
    }
  }

  onMounted(getCurrentLocation)

  return {
    position,
    error,
    getCurrentLocation,
  }
}
