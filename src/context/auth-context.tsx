import React, { ReactNode, useState } from "react";
import { User } from '@/screnns/project-list/Header'
import * as auth from '@/auth-provider'

interface Authform {
  username: string,
  password: string
}
interface AuthContextType {
  user: User | null | undefined;
  login: (form: Authform) => Promise<void>;
  register: (form: Authform) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = React.createContext<AuthContextType | undefined>(undefined)
AuthContext.displayName = 'AuthContext'

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null | undefined>(null)
  const login = (form: Authform) => auth.login(form).then(user => setUser(user))
  const register = (form: Authform) => auth.register(form).then(user => setUser(user))
  const logout = () => auth.logout().then(() => setUser(null))
  
  return (<AuthContext.Provider children={children} value={{ user, login, register, logout }} />)
}

export const useAuth = () => {
  const context = React.useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth必须在authProvider中使用")
  }
  return context
}