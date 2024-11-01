import { Param } from '@/screnns/project-list/Header'

export function cleanUpEmptyFields(obj: Param): Param {
  const source: Param = { ...obj }
  Object.keys(source).forEach((item) => {
    const k = item as keyof Param
    if (!source[k] && source[k] !== 0) {
      delete source[k]
    }
  })
  return source
}

export function debounce(event: Function, delay: number) {
  // const that = this
  // clearTimeout(timer)
  const timer = setTimeout(() => {
    // event.call(that)
  }, delay)

}