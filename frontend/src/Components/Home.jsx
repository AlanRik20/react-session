import React from 'react';
import { userSession } from '../hooks/userSession';

export function Home() {
  const { user, logout } = userSession();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm text-center">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">¡Bienvenido!</h1>
        <p className="text-sm text-gray-600 mb-8">Hola, {user?.username}.</p>
        <button
          onClick={logout}
          className="w-full py-2 text-sm font-medium text-gray-800 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  );
}
