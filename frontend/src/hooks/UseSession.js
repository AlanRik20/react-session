// UseSession.js
import { useState } from 'react';

export function useSession() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [error, setError] = useState(null);

  const login = async (credentials) => {
    setError(null);
    try {
      const response = await fetch("http://localhost:4000/auth/sign-in", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        setToken(data.token);
        setUser({ username: data.username, role: data.role });
        sessionStorage.setItem('token', data.token);
      } else {
        setError(data.message || 'Error al iniciar sesión');
      }
    } catch (error) {
      console.error("Error en el inicio de sesión:", error);
      setError("Error al iniciar sesión");
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
  };

  return { user, token, error, login, logout };
}
