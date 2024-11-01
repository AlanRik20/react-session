// App.jsx
import './App.css';
import SessionProvider from './context/SessionProvider'; // Cambiar la importación si es necesario
import { Login } from './Components/Login';
import { Home } from './Components/Home';
import { userSession } from './hooks/userSession';

function AppContent() {
  const { user } = userSession();

  return (
    <>
      {user ? <Home /> : <Login />}
    </>
  );
}

function App() {
  return (
    <SessionProvider>
      <AppContent />
    </SessionProvider>
  );
}

export default App;
