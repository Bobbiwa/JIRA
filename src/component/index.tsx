import { useEffect, useState } from 'react'

export function Index1() {
  const [num, setNum] = useState(1)
  useEffect(() => {
    console.log('来了');
    
    return () => {
      console.log('www', num);
    }
  }, [num])
  return (
    <div>
      <button onClick={() => { setNum(num + 1) }}>加1</button>
      <div>`我今年${num}岁`</div>
    </div>

  )
}