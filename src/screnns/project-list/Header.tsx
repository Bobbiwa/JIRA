
export interface User {
  id: number,
  name: string
}

export interface Param {
  name?: string,
  personId?: number
}


export function Header({ param, user, setParam }: {
  param: Param, user: User[], setParam: Function
}) {

  function handleChange(e: any) {
    setParam({ ...param, name: e.target.value })
  }
  function handelSelectChange(e: any) {
    setParam({ ...param, personId: e.target.value })
  }
  return (
    <form>
      <div>
        <input type="text" value={param.name} placeholder="项目名" onChange={handleChange} />
        <select onChange={handelSelectChange}>
          <option value="">负责人</option>
          {user.map((item) => <option key={item.id.toString()} value={item.id}>{item.name}</option>)}
        </select>
      </div >
    </form>
  )
}