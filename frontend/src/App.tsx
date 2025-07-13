import { Route, Routes } from 'react-router-dom';
import './css/style.css';
import Home from './pages/Home';
import SignIn from './pages/Login';
import Profile from './pages/Profile';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/sign-in' element={<SignIn />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
  );
}

export default App;
