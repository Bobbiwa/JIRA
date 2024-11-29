//这个文件一般不用自己写（如果公司有oauth sdk）
interface User {
  token: string,
  id: number,
  name: string,
  title: string,
  organization: string
}

const localStorageKey = '__auth_provider_token__'
const apiUrl = process.env.REACT_APP_API_URL

export const getToken = () => window.localStorage.getItem(localStorageKey)

export const saveUserResponse = (user: User):User => {
  window.localStorage.setItem(localStorageKey, user.token || '')
  return user
}
//登录 localestorage缓存token
export const login = (data: { username: string, password: string }) => {
  return fetch(`${apiUrl}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(async res => {
    if (res.ok) {
      return saveUserResponse(await res.json())
    } else {
      Promise.reject(data)
    }
  })
}

//注册 localestorage缓存token
export const register = (data: { username: string, password: string })=> {
  return fetch(`${apiUrl}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(async res => {
    if (res.ok) {
      return saveUserResponse(await res.json())
    } else {
      Promise.reject(data)
    }
  })
}

export const logout = async() => window.localStorage.removeItem(localStorageKey)