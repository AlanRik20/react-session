import React, { useState } from 'react';
import { userSession } from '../hooks/userSession';

export function Login() {
  const { login, error } = userSession();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ username, password });
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">Iniciar Sesión</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-gray-700 font-medium mb-2">
              Nombre
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-gray-400"
              placeholder="Ingresa tu nombre"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-gray-400"
              placeholder="Ingresa tu contraseña"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 mt-4 text-white bg-gray-800 rounded hover:bg-gray-900 transition-colors"
          >
            Entrar
          </button>
        </form>

        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      </div>
    </section>
  );
}
