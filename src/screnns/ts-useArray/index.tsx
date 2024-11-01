import useArray from "@/hooks/useArray"

interface Person {
  name: string,
  age: number
}

export default function Test() {
  const persons: Person[] = [
    { name: 'jack', age: 25 },
    { name: 'ma', age: 22 }
  ]
  const { value, add, clear, removeIndex } = useArray<Person>(persons)
  

  return (
    <div>
      <button onClick={() => add({ name: 'john', age: 22 })}>add john</button>
      <button onClick={() => removeIndex(0)}>remove 0</button>
      <button onClick={() => clear()}>remove 0</button>
      {value.map((person, index) => (
        <div>
          <span>{index}</span>
          <span>{person.name}</span>
          <span>{person.age}</span>
        </div>
      ))}

    </div>
  )
}
