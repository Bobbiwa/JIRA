import { useState, useEffect } from "react";

export default function useDebounce <T>(value:T, delay?: number):T {
  const [debounceParams, setDebounceParams] = useState(value)
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceParams(value)
    }, delay)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])
  return debounceParams
}