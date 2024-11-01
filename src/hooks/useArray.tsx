import { useState } from 'react'
export default function useArray<T>(init: T[]): { value: T[], add: Function, clear: Function, removeIndex: Function } {
  const [value, setValue] = useState(init)
  function add(arg:T) {
    setValue([...value, arg])
  }
  function removeIndex(index:number) {
    const newValue = value.filter((item, i) => i !== index)
    setValue(newValue)
  }

  function clear() {
    setValue([])
  }
  return { value, add, clear, removeIndex }
}

// function add<T>(a:T,b:T):T{
//   return a+b
// }

// add<string>("ni","hao")
// add<number>(1,2)