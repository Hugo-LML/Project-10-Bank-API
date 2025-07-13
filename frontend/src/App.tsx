import { Route, Routes } from 'react-router-dom';
import './css/style.css';
import Home from './pages/Home';
import SignIn from './pages/Login';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/sign-in' element={<SignIn />} />
      <Route path='/user' element={<SignIn />} />
    </Routes>
  );
}

export default App;
