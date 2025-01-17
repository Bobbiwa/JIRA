import { useAuth } from "./context/auth-context";
import { AuthticatedApp } from '@/authenticated-app'
import { UnauthenticatedApp } from '@/unauthenticated-app/index'
function App() {
  const { user } = useAuth()
  return (
    <div className="App">
      {user ? <AuthticatedApp /> : <UnauthenticatedApp />}
    </div>
  );
}

export default App;
