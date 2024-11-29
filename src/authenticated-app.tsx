import { ProjectListScreen } from '@/screnns/project-list/Index'
import { useAuth } from './context/auth-context'
export function AuthticatedApp() {
  const { logout } = useAuth()
  return <div>
    <button onClick={logout}>logout</button>
    <ProjectListScreen />
  </div>
}