import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import GlobalStyle from './styles/global';
import GeneralPage from './pages/General';
import Login from './pages/Login';
import Register from './pages/Register';
import { ToastContainer } from "react-toastify";
import { useState } from 'react';

interface ProtectedRouteProps {
  children: any;
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState()

  const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    if (!isAuthenticated) {
      return <Navigate to="/login" replace />;
    }

    return children;
  };

  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path='/' element={<ProtectedRoute><GeneralPage  setIsAuthenticated={setIsAuthenticated} /></ProtectedRoute>} />
          <Route path='/login' element={<Login setIsAuthenticated={setIsAuthenticated}/>} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </>
  )
}

export default App
