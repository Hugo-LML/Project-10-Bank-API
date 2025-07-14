import { Route, Routes } from 'react-router-dom';
import './css/style.css';
import RequireAuth from './guards/RequireAuth';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route
        path='/profile'
        element={
          <RequireAuth>
            <Profile />
          </RequireAuth>
        }
      />
    </Routes>
  );
}

export default App;
