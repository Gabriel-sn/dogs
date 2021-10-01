import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import {UserStorage} from './UserContext';
import User from './components/User/User';
import ProtectedRoute from './components/Helper/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes >
            <Route path="/" element={<Home/>}/>
            <Route path="login/*" element={<Login/>} />
            <ProtectedRoute path="conta/*" element={<User/>} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
