import React from 'react';
import MainPage from './MainPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EditProduct from './components/admin/EditProduct'
import Admin from './components/admin/Admin';
import Login from './components/admin/AdminLogin'
import AddProduct from './components/admin/AddProduct';
import PrivateRoute from './components/pages/protectedroute/ProtectRoute';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage />} exact/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/admin/edit/:id" element={<PrivateRoute Component={EditProduct}/>}/>
        <Route path="/admin" element={<PrivateRoute Component={Admin}/>}/>
        <Route path="/addproduct" element={<PrivateRoute Component={AddProduct}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
