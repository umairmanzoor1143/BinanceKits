import Routes from "routes"
import "./App.css"
import AuthProvider from "context/authContext"
import { Toaster } from "components/ui/toaster"

function App() {
  return (
    <AuthProvider>
      <Routes />
      <Toaster />
    </AuthProvider>
  )
}

export default App
