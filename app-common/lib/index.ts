import { ref } from 'vue'

export function useToggle() {
  const bolVal = ref(false)
  const toggle = () => {
    bolVal.value = !bolVal.value
  }
  return {
    bolVal,
    toggle,
  }
}
