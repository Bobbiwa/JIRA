import { User } from "@/screnns/project-list/Header"

interface List {
  "id": number,
  "name": string,
  "personId": number,
  "organization": string
}


export function List({ list, user }: { list: List[], user: User[] }) {
  return (
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {list.map((item) => (
          <tr key={item.id.toString()}>
            <td>{item.name}</td>
            <td>{user.find((user) => user.id === item.personId)?.name || '未知'}</td>
          </tr>
        ))}

      </tbody>

    </table>
  )
}