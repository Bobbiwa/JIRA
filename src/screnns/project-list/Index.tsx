import { useState, useEffect } from 'react'
import { stringify } from 'qs'
import { Header, Param } from '@/screnns/project-list/Header'
import { List } from '@/screnns/project-list/List'
import { cleanUpEmptyFields } from '@/utils/index'
import useDebounce from '@/hooks/useDebounce'

const apiUrl = process.env.REACT_APP_API_URL;

export function Index() {
  const [param, setParam] = useState<Param>({ name: '', personId: undefined })
  const [user, setUser] = useState([])
  const [list, setList] = useState([])

  useEffect(() => {
    fetch(`${apiUrl}/users`).then(async res => {
      if (res.ok) {
        setUser(await res.json())
      }
    })
  }, [])

  const debounceParams = useDebounce(param, 1000)
  useEffect(() => {
    const searchParams = stringify(cleanUpEmptyFields(debounceParams))
    fetch(`${apiUrl}/projects?${searchParams}`).then(async res => {
      if (res.ok) {
        setList(await res.json())
      }
    })
  }, [debounceParams])
  return (
    <div>
      <Header param={param} user={user} setParam={setParam} />
      <List list={list} user={user} />
    </div>

  )
}