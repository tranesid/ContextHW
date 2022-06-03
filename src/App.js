
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import PageContainer from './pages/PageContainer';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Account from './pages/Account';
import Users from './pages/Users';


function App() {
  return (
    <div className="App">
     <Routes>
       <Route path='/' element={<PageContainer />}>
         <Route path='/login' element={<Login />} />
         <Route index element={<Home />} />
         <Route path='/about' element={<About />} />
       </Route>
       <Route element={<ProtectedRoute />}>
         <Route path='/account' element={<Account />} />
         <Route path='/users' element={<Users />} />
       </Route>  
     </Routes>
    </div>
  );
}

export default App;
