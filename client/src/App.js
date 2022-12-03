import logo from './logo.svg';
import './App.css';
import { NavLink, Outlet, Route, Routes,useNavigate } from 'react-router-dom';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Home from './components/Home/Home'
import ProtectedComponent from './components/ProtectedComponent/ProtectedComponent';
import SuperAdmin from './components/SuperAdmin/SuperAdmin';
import Admin from './components/Admin/Admin';
import User from './components/User/User';
import ProfiePage from './components/ProfilePage/ProfilePage';
import {useContext} from 'react'
import {authContext} from './authContext'
import RequireAuth from './Utils/RequireAuth';
import CreateUserSuccess from './components/CreateUserSuccess/CreateUserSuccess';
function App() {
  const auth = useContext(authContext);
  const navigate = useNavigate()
  //console.log(auth.user)

  const handleProfileCLick = ()=>{
    navigate('/profile')
  }

  const handleLogoutButton = ()=>{
    auth.logout()
  }
  return (
    <div className="App">
      <div className='nav-container'>
        <div className='nav-bar'>
          <NavLink to='/'><h2 className='profile-name' id='profile-name'>Home</h2></NavLink>
          <div className='navbar-right'>
            <NavLink to='/profile'><h2 className='profile-name' id='profile-name'>{auth.user?auth.user:"Profile"}</h2></NavLink>
            {auth.user && <button onClick={handleLogoutButton} className="profile-logout">Logout</button> }
          </div>
        </div>
      </div>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/protected' element={<ProtectedComponent/>}></Route>
      <Route path='/superadmin' element={<SuperAdmin/>}></Route>
      <Route path='/admin' element={<Admin/>}></Route>
      <Route path='/user' element={<User/>}></Route>
      <Route path='/profile' element={<RequireAuth><ProfiePage/></RequireAuth>}/>
      <Route path='/userCreated' element={<CreateUserSuccess/>}/>
     </Routes>
     <Outlet/>
    </div>
  );
}

export default App;
