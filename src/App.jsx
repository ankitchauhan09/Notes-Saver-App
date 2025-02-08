import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Paste from './components/Paste';
import ViewPaste from './components/ViewPaste';

// Layout for Common Structure
const Layout = () => (
  <div className="app-container">
    <Navbar />
    <Outlet /> {/* Renders matched child route */}
  </div>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'pastes', element: <Paste /> },
      { path: 'pastes/:id', element: <ViewPaste /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
