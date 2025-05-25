// src/App.tsx
import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RatingPage from './pages/RatingPage';
import PlayerHistoryPage from './pages/PlayerHistoryPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RatingPage />,
  },
  {
    path: '/player/:id',
    element: <PlayerHistoryPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
