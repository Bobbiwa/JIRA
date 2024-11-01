const apiUrl = process.env.REACT_APP_API_URL;

export default function Login() {
  function handleSubmit(even: React.FormEvent<HTMLFormElement>) {
    even.preventDefault()
    const username = (even.currentTarget.elements[0] as HTMLInputElement).value
    const password = (even.currentTarget.elements[1] as HTMLInputElement).value
    fetch(`${apiUrl}/login`, {
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    }).then(async res => {
      if (res.ok) {
        console.log(res);
      }
    })
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
      <button>Submit</button>
    </div>
  </form>
}