import { useAuth } from "@/context/auth-context"

export default function Register() {
  const { register, user } = useAuth()
  function handleSubmit(even: React.FormEvent<HTMLFormElement>) {
    even.preventDefault()
    const username = (even.currentTarget.elements[0] as HTMLInputElement).value
    const password = (even.currentTarget.elements[1] as HTMLInputElement).value
    register({ username, password })
  }
  return <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="user">username</label>
      <input type="text" />
    </div>
    <div>
      <label htmlFor="user">username</label>
      <input type="password" />
    </div>
    <div>
      <button>Register</button>
    </div>
  </form>
}