import Routes from 'routes';
import './App.css';
import AuthProvider from 'contexts/authContext';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <AuthProvider>
      <Routes />
      <Toaster position='top-right' />
    </AuthProvider>
  );
}

export default App;
